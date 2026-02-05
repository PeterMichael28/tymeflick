/**
 * Authentication Type Definitions
 * Shared interfaces for auth-related data structures
 */

/**
 * Account type enum for TymeFlick profiles
 */
export type AccountType =
  | 'individual'
  | 'small_business'
  | 'medium_business'
  | 'enterprise'

/**
 * User type from API response
 */
export interface User {
  id: string
  tenantId: string
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  role: string
  status: string
  emailVerified: boolean
  phoneVerified: boolean
  avatar: string | null
  timezone: string | null
  language: string
  mfaEnabled: boolean
  lastLoginAt: string | null
  createdAt: string
  updatedAt: string
  accountType?: AccountType | null
  tenant?: {
    id: string
    name: string
    slug: string
    status: string
    plan: string
  }
}

/**
 * Account profile from TymeFlick API
 */
export interface AccountProfile {
  id: string
  tenantId: string
  accountType: AccountType | null
  businessName: string | null
  businessDescription: string | null
  businessWebsite: string | null
  businessPhone: string | null
  businessSlug: string | null
  customDomain: string | null
  expectedNumberOfUsers: number | null
  adminFullName: string | null
  adminEmail: string | null
  adminPhone: string | null
  adminJobTitle: string | null
  adminDepartment: string | null
  adminLocation: string | null
  contactPersonFullName: string | null
  contactPersonEmail: string | null
  contactPersonPhone: string | null
  industry: string | null
  currentTimeTrackingSolution: string | null
  specificRequirements: string | null
  preferredContactMethod: string | null
  bestTimeToContact: string | null
  isOnboardingComplete: boolean
  onboardingStep: number
  termsAccepted: boolean
  termsAcceptedAt: string | null
  accountTypeUpdatedAt: string | null
  accountTypeHistory: any | null
  createdAt: string
  updatedAt: string
}

/**
 * Auth tokens from login response
 */
export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresAt: number
}

/**
 * API auth response (includes user in login response)
 */
export interface AuthResponse {
  accessToken: string
  refreshToken: string
  expiresIn: number
  user: User
  profile?: AccountProfile
}

/**
 * Login form data
 */
export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

/**
 * Forgot password form data
 */
export interface ForgotPasswordFormData {
  email: string
}

/**
 * Reset password form data
 */
export interface ResetPasswordFormData {
  password: string
  confirmPassword: string
}

/**
 * Code exchange request for cross-domain auth
 */
export interface CodeExchangeRequest {
  code: string
  redirectUri: string
}

/**
 * Code exchange response - same as AuthResponse
 */
export type CodeExchangeResponse = AuthResponse

/**
 * API Error response
 */
export interface ApiError {
  message: string
  error?: string
  errors?: Record<string, string[]>
  status?: number
}

// ============================================
// Account Profile Payloads
// ============================================

/**
 * Base fields shared by all account types
 */
interface BaseAccountProfile {
  termsAccepted: boolean
}

/**
 * Individual account - no additional fields required
 */
export interface IndividualAccountPayload extends BaseAccountProfile {
  accountType: 'individual'
}

/**
 * Small Business account
 */
export interface SmallBusinessAccountPayload extends BaseAccountProfile {
  businessName: string
  businessSlug: string
  adminFullName: string
  adminEmail: string
  businessDescription?: string
  businessWebsite?: string
  businessPhone?: string
}

/**
 * Medium Business account
 */
export interface MediumBusinessAccountPayload extends BaseAccountProfile {
  businessName: string
  businessSlug: string
  adminFullName: string
  adminEmail: string
  expectedNumberOfUsers: number
  businessDescription?: string
  businessWebsite?: string
  businessPhone?: string
  customDomain?: string
}

/**
 * Enterprise account
 */
export interface EnterpriseAccountPayload extends BaseAccountProfile {
  businessName: string
  businessSlug: string
  expectedNumberOfUsers: number
  contactPersonFullName: string
  contactPersonEmail: string
  contactPersonPhone?: string
  industry?: string
  currentTimeTrackingSolution?: string
  specificRequirements?: string
  preferredContactMethod?: string
  bestTimeToContact?: string
}

/**
 * Union type for all account profile payloads
 */
export type AccountProfilePayload =
  | IndividualAccountPayload
  | SmallBusinessAccountPayload
  | MediumBusinessAccountPayload
  | EnterpriseAccountPayload
