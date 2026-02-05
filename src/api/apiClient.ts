import axios, {
  AxiosError,
  type AxiosResponse,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from 'axios'
import { API_BASE_URL, AUTH_ENDPOINTS } from './uri'
import { store } from '../redux/store'
import {
  setTokens,
  clearAuth,
  selectAccessToken,
  selectRefreshToken,
  selectIsTokenExpired,
} from '../redux/slice/authSlice'
import type { ApiError } from '../types/auth.types'
import { getParentLoginUrl } from '../config/urls'

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

// Flag to prevent multiple refresh requests
let isRefreshing = false
let failedQueue: Array<{
  resolve: (token: string) => void
  reject: (error: Error) => void
}> = []

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else if (token) {
      prom.resolve(token)
    }
  })
  failedQueue = []
}

/**
 * Refresh the access token using the refresh token
 */
const refreshAccessToken = async (): Promise<string> => {
  const state = store.getState()
  const refreshToken = selectRefreshToken(state)

  if (!refreshToken) {
    throw new Error('No refresh token available')
  }

  try {
    const response = await axios.post<{
      accessToken: string
      refreshToken: string
      expiresIn: number
    }>(`${API_BASE_URL}${AUTH_ENDPOINTS.REFRESH}`, { refreshToken })

    const {
      accessToken,
      refreshToken: newRefreshToken,
      expiresIn,
    } = response.data

    // Update tokens in Redux store
    store.dispatch(
      setTokens({
        accessToken,
        refreshToken: newRefreshToken,
        expiresIn,
      })
    )

    return accessToken
  } catch (error) {
    store.dispatch(clearAuth())
    throw error
  }
}

// Request interceptor - check token expiry and attach token to headers
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const state = store.getState()
    const accessToken = selectAccessToken(state)
    const refreshToken = selectRefreshToken(state)
    const isTokenExpired = selectIsTokenExpired(state)

    // Skip token logic for auth endpoints (login, register, refresh)
    const isAuthEndpoint =
      config.url?.includes('/auth/') &&
      !config.url?.includes('/auth/me') &&
      !config.url?.includes('/auth/logout')

    if (isAuthEndpoint) {
      return config
    }

    // If we have a token and it's expired/expiring, refresh it
    if (accessToken && refreshToken && isTokenExpired) {
      if (!isRefreshing) {
        isRefreshing = true

        try {
          const newToken = await refreshAccessToken()
          isRefreshing = false
          processQueue(null, newToken)
          config.headers.Authorization = `Bearer ${newToken}`
        } catch (error) {
          isRefreshing = false
          processQueue(error as Error, null)
          return Promise.reject(error)
        }
      } else {
        // Wait for the refresh to complete
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              config.headers.Authorization = `Bearer ${token}`
              resolve(config)
            },
            reject: (err: Error) => {
              reject(err)
            },
          })
        })
      }
    } else if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - handle 401 errors with retry
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean
    }

    // If error is 401 and we haven't retried yet
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      const state = store.getState()
      const refreshToken = selectRefreshToken(state)

      // Skip retry for auth endpoints
      const isAuthEndpoint =
        originalRequest.url?.includes('/auth/') &&
        !originalRequest.url?.includes('/auth/me') &&
        !originalRequest.url?.includes('/auth/logout')

      if (isAuthEndpoint || !refreshToken) {
        return Promise.reject(error)
      }

      originalRequest._retry = true

      if (!isRefreshing) {
        isRefreshing = true

        try {
          const newToken = await refreshAccessToken()
          isRefreshing = false
          processQueue(null, newToken)
          originalRequest.headers.Authorization = `Bearer ${newToken}`
          return apiClient(originalRequest)
        } catch (refreshError) {
          isRefreshing = false
          processQueue(refreshError as Error, null)
          store.dispatch(clearAuth())

          // Redirect to parent app when refresh fails (no login page in sub-app)
          // Include current URL so user can return after re-authenticating
          window.location.href = getParentLoginUrl(window.location.href)
          return Promise.reject(refreshError)
        }
      } else {
        // Wait for refresh to complete, then retry
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers.Authorization = `Bearer ${token}`
              resolve(apiClient(originalRequest))
            },
            reject: (err: Error) => {
              reject(err)
            },
          })
        })
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient

/**
 * Generic API call wrapper with error handling
 */
export const apiCall = async <T = unknown>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient[method](
      url,
      method === 'get' ? config : data,
      method !== 'get' ? config : undefined
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiError = error.response?.data as ApiError | undefined
      throw {
        message: apiError?.message || error.message || 'An error occurred',
        error: apiError?.error,
        errors: apiError?.errors,
        status: error.response?.status,
      } as ApiError
    }
    throw error
  }
}
