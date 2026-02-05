import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User, AuthTokens, AccountProfile } from '../../types/auth.types'

const STORAGE_KEY = 'tymeflick-auth'

/**
 * Auth state interface
 */
interface AuthState {
  user: User | null
  profile: AccountProfile | null
  accessToken: string | null
  refreshToken: string | null
  expiresAt: number | null
  isLoading: boolean
  isAuthenticated: boolean
}

/**
 * Load persisted auth state from localStorage
 */
const loadPersistedState = (): Partial<AuthState> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return {
        user: parsed.user || null,
        profile: parsed.profile || null,
        accessToken: parsed.accessToken || null,
        refreshToken: parsed.refreshToken || null,
        expiresAt: parsed.expiresAt || null,
        isAuthenticated: !!parsed.accessToken,
      }
    }
  } catch {
    console.error('Failed to load auth state from localStorage')
  }
  return {}
}

/**
 * Persist auth state to localStorage
 */
const persistState = (state: AuthState) => {
  try {
    const toStore = {
      user: state.user,
      profile: state.profile,
      accessToken: state.accessToken,
      refreshToken: state.refreshToken,
      expiresAt: state.expiresAt,
      isAuthenticated: state.isAuthenticated,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
  } catch {
    console.error('Failed to persist auth state to localStorage')
  }
}

const initialState: AuthState = {
  user: null,
  profile: null,
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  isLoading: false,
  isAuthenticated: false,
  ...loadPersistedState(),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Set full auth state after login
     */
    setAuth: (
      state,
      action: PayloadAction<{
        tokens: AuthTokens
        user: User
        profile?: AccountProfile
      }>
    ) => {
      const { tokens, user, profile } = action.payload
      state.user = user
      if (profile) state.profile = profile
      state.accessToken = tokens.accessToken
      state.refreshToken = tokens.refreshToken
      state.expiresAt = tokens.expiresAt
      state.isAuthenticated = true
      state.isLoading = false
      persistState(state)
    },

    /**
     * Set user data only
     */
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
      persistState(state)
    },

    /**
     * Set profile data
     */
    setProfile: (state, action: PayloadAction<AccountProfile>) => {
      state.profile = action.payload
      persistState(state)
    },

    /**
     * Update tokens after refresh
     */
    setTokens: (
      state,
      action: PayloadAction<{
        accessToken: string
        refreshToken: string
        expiresIn: number
      }>
    ) => {
      const { accessToken, refreshToken, expiresIn } = action.payload
      state.accessToken = accessToken
      state.refreshToken = refreshToken
      state.expiresAt = Date.now() + expiresIn * 1000
      persistState(state)
    },

    /**
     * Set loading state
     */
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },

    /**
     * Clear all auth state (logout)
     */
    clearAuth: (state) => {
      state.user = null
      state.profile = null
      state.accessToken = null
      state.refreshToken = null
      state.expiresAt = null
      state.isAuthenticated = false
      state.isLoading = false
      localStorage.removeItem(STORAGE_KEY)
    },
  },
})

export const {
  setAuth,
  setUser,
  setProfile,
  setTokens,
  setLoading,
  clearAuth,
} = authSlice.actions

// Selectors
export const selectUser = (state: { auth: AuthState }) => state.auth.user
export const selectProfile = (state: { auth: AuthState }) => state.auth.profile
export const selectAccessToken = (state: { auth: AuthState }) =>
  state.auth.accessToken
export const selectRefreshToken = (state: { auth: AuthState }) =>
  state.auth.refreshToken
export const selectExpiresAt = (state: { auth: AuthState }) =>
  state.auth.expiresAt
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  state.auth.isAuthenticated
export const selectIsLoading = (state: { auth: AuthState }) =>
  state.auth.isLoading

/**
 * Check if token is expired or about to expire (within 30 seconds)
 */
export const selectIsTokenExpired = (state: { auth: AuthState }) => {
  const { expiresAt } = state.auth
  if (!expiresAt) return true
  return Date.now() >= expiresAt - 30000
}

export default authSlice.reducer
