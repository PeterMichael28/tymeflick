/**
 * useSubscriptionAccess Hook
 * Provides subscription access checking functionality throughout the app
 */

import { useSelector } from 'react-redux'
import { type RootState } from '../redux/store'
import {
  type FeatureKey,
  FEATURE_PERMISSIONS,
  TIER_NAMES,
  TIER_LIMITS,
  getTierLevel,
  canAccessFeature,
  getRequiredTierName,
} from '../config/subscriptionConfig'
import { type AccountType } from '../types/auth.types'

/**
 * Check if subscription checks should be bypassed (dev mode only)
 * This is controlled via VITE_BYPASS_SUBSCRIPTION_CHECKS in .env.development
 */
const shouldBypassChecks = (): boolean => {
  return import.meta.env.VITE_BYPASS_SUBSCRIPTION_CHECKS === 'true'
}

interface SubscriptionAccessReturn {
  /** Current user's account type */
  accountType: AccountType
  /** Human-readable tier name */
  tierName: string
  /** Numeric tier level for comparisons */
  tierLevel: number
  /** Check if user has access to a specific feature */
  hasAccess: (feature: FeatureKey) => boolean
  /** Get features the user doesn't have access to */
  getLockedFeatures: () => FeatureKey[]
  /** Get required tier name for a feature */
  getRequiredTier: (feature: FeatureKey) => string
  /** Get tier limits for current user */
  limits: {
    maxWorkspaces: number | null
    maxUsers: number | null
    maxProjects: number | null
    dataRetentionDays: number | null
  }
  /** Check if user is on free tier */
  isFreeTier: boolean
  /** Check if user is on enterprise tier */
  isEnterprise: boolean
  /** Whether bypass mode is active (dev only) */
  isBypassMode: boolean
}

/**
 * Hook to check subscription-based feature access
 * @returns Subscription access utilities and information
 */
export const useSubscriptionAccess = (): SubscriptionAccessReturn => {
  const profile = useSelector((state: RootState) => state.auth.profile)
  const accountType: AccountType = profile?.accountType || 'individual'
  const isBypassMode = shouldBypassChecks()

  const tierLevel = getTierLevel(accountType)
  const tierName = TIER_NAMES[accountType]
  const limits = TIER_LIMITS[accountType]

  const hasAccess = (feature: FeatureKey): boolean => {
    // Bypass all checks in dev mode if flag is set
    if (isBypassMode) {
      return true
    }
    return canAccessFeature(accountType, feature)
  }

  const getLockedFeatures = (): FeatureKey[] => {
    if (isBypassMode) {
      return [] // No locked features in bypass mode
    }
    return (Object.keys(FEATURE_PERMISSIONS) as FeatureKey[]).filter(
      (feature) => !canAccessFeature(accountType, feature)
    )
  }

  const getRequiredTier = (feature: FeatureKey): string => {
    return getRequiredTierName(feature)
  }

  return {
    accountType,
    tierName,
    tierLevel,
    hasAccess,
    getLockedFeatures,
    getRequiredTier,
    limits,
    isFreeTier: accountType === 'individual',
    isEnterprise: accountType === 'enterprise',
    isBypassMode,
  }
}

export type { FeatureKey }
