/**
 * API Endpoint URIs
 * All API endpoint paths are defined here
 */

export const API_BASE_URL = 'https://api.seamsuite.com/api/v1'

// Authentication endpoints
export const AUTH_ENDPOINTS = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  ME: '/auth/me',
  REFRESH: '/auth/refresh',
  EMAIL_VERIFY: '/auth/email/verify',
  PASSWORD_RESET_REQUEST: '/auth/password/reset-request',
  PASSWORD_RESET_CONFIRM: '/auth/password/reset-confirm',
  PASSWORD_CHANGE: '/auth/password/change',
  CODE_EXCHANGE: '/auth/code/exchange',
} as const

// User endpoints
export const USER_ENDPOINTS = {
  PROFILE: '/users/profile',
} as const

// TymeFlick-specific endpoints
export const TYMEFLICK_ENDPOINTS = {
  ACCOUNT_PROFILES: '/time-tracking/account-profiles',
} as const

// Asset endpoints
export const ASSET_ENDPOINTS = {
  UPLOAD: '/assets/upload',
} as const

// Client endpoints
export const CLIENT_ENDPOINTS = {
  LIST: '/time-tracking/clients',
  GET: (id: string) => `/time-tracking/clients/${id}`,
  DETAILS: (id: string) => `/time-tracking/clients/${id}/details`,
  CREATE: '/time-tracking/clients',
  UPDATE: (id: string) => `/time-tracking/clients/${id}`,
  DELETE: (id: string) => `/time-tracking/clients/${id}`,
} as const
