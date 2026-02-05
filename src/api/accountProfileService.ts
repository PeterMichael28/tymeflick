import type { AccountProfilePayload, AccountProfile } from '../types/auth.types'
import { apiCall } from './apiClient'
import { TYMEFLICK_ENDPOINTS } from './uri'

/**
 * Account Profile API Service
 * Handles TymeFlick-specific profile creation and retrieval
 */

export const accountProfileService = {
  /**
   * Get the current user's TymeFlick account profile
   * @returns Account profile data
   */
  getProfile: () =>
    apiCall<AccountProfile>('get', TYMEFLICK_ENDPOINTS.ACCOUNT_PROFILES),

  /**
   * Create TymeFlick account profile
   * Called after login when accountType is null
   * @param data - Account profile payload based on type
   * @returns Created profile data
   */
  createProfile: (data: AccountProfilePayload) =>
    apiCall<AccountProfile>('post', TYMEFLICK_ENDPOINTS.ACCOUNT_PROFILES, data),
}
