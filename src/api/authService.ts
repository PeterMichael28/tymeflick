import type { LoginFormData, AuthResponse, User } from '../types/auth.types'
import { apiCall } from './apiClient'
import { AUTH_ENDPOINTS, USER_ENDPOINTS } from './uri'

/**
 * Auth API Service
 * Handles all authentication-related API calls
 */

/** Data sent to login endpoint */
type LoginData = Omit<LoginFormData, 'rememberMe'>

/** Password reset confirm data */
interface PasswordResetConfirmData {
  token: string
  newPassword: string
}

/** Change password data */
interface ChangePasswordData {
  oldPassword: string
  newPassword: string
}

export const authService = {
  /**
   * Login user
   * @param data - Login credentials
   * @returns Auth tokens
   */
  login: (data: LoginData) =>
    apiCall<AuthResponse>('post', AUTH_ENDPOINTS.LOGIN, {
      ...data,
      tenantId: '',
    }),

  /**
   * Get current user profile
   * @returns User data
   */
  getCurrentUser: () => apiCall<User>('get', AUTH_ENDPOINTS.ME),

  /**
   * Refresh access token
   * @param refreshToken - Current refresh token
   * @returns New auth tokens
   */
  refreshTokens: (refreshToken: string) =>
    apiCall<AuthResponse>('post', AUTH_ENDPOINTS.REFRESH, {
      refreshToken,
    }),

  /**
   * Logout user
   * @returns Success message
   */
  logout: () => apiCall<{ message: string }>('post', AUTH_ENDPOINTS.LOGOUT),

  /**
   * Request password reset
   * @param email - User email
   * @returns Success message with optional token
   */
  requestPasswordReset: (email: string) =>
    apiCall<{ message: string; token?: string }>(
      'post',
      AUTH_ENDPOINTS.PASSWORD_RESET_REQUEST,
      {
        email,
        tenantId: '',
      }
    ),

  /**
   * Confirm password reset
   * @param data - Token and new password
   * @returns Success message
   */
  confirmPasswordReset: (data: PasswordResetConfirmData) =>
    apiCall<{ message: string }>(
      'post',
      AUTH_ENDPOINTS.PASSWORD_RESET_CONFIRM,
      data
    ),

  /**
   * Change password (authenticated)
   * @param data - Old and new password
   * @returns Success message
   */
  changePassword: (data: ChangePasswordData) =>
    apiCall<{ message: string }>('post', AUTH_ENDPOINTS.PASSWORD_CHANGE, data),

  /**
   * Update user profile
   * @param data - Profile data to update
   * @returns Updated user
   */
  updateProfile: (data: Partial<User>) =>
    apiCall<User>('patch', USER_ENDPOINTS.PROFILE, data),

  /**
   * Exchange auth code for tokens (cross-domain auth)
   * Called when user is redirected from parent app with a code
   * @param data - Code and redirect URI
   * @returns Auth tokens and user data
   */
  exchangeCode: (data: { code: string; redirectUri: string }) =>
    apiCall<{
      accessToken: string
      refreshToken: string
      expiresIn: number
      user: User
    }>('post', AUTH_ENDPOINTS.CODE_EXCHANGE, data),
}
