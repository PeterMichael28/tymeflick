/**
 * Application URLs Configuration
 * Centralized configuration for all redirect URLs
 * Update these values for different environments
 */
// const dev_config = 'http://localhost:5173'
const prod_config = 'https://seamsuite.vercel.app'
export const APP_CONFIG = {
  PARENT_APP_URL: prod_config,

  PARENT_APP_DASHBOARD: prod_config + '/dashboard',

  PARENT_APP_LOGIN: prod_config + '/auth/login',

  AUTH_CALLBACK_PATH: '/auth/callback',
} as const

/**
 * Get the full auth callback URL for this app
 */
export const getAuthCallbackUrl = (): string => {
  return `${window.location.origin}${APP_CONFIG.AUTH_CALLBACK_PATH}`
}

/**
 * Build parent login URL with redirect parameter
 * @param redirectUrl - URL to redirect back to after login
 */
export const getParentLoginUrl = (redirectUrl?: string): string => {
  const baseUrl = APP_CONFIG.PARENT_APP_LOGIN
  if (redirectUrl) {
    return `${baseUrl}?redirect=${encodeURIComponent(redirectUrl)}`
  }
  return baseUrl
}
