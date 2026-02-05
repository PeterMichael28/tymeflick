/**
 * Subscription Configuration
 * Defines subscription tiers, feature permissions, and access control logic
 */

import { type AccountType } from '../types/auth.types'

/**
 * Subscription tier levels for comparison
 * Higher number = more features
 */
export const TIER_LEVELS: Record<AccountType, number> = {
  individual: 0,
  small_business: 1,
  medium_business: 2,
  enterprise: 3,
} as const

/**
 * Human-readable tier names
 */
export const TIER_NAMES: Record<AccountType, string> = {
  individual: 'Free',
  small_business: 'Professional',
  medium_business: 'Business',
  enterprise: 'Enterprise',
} as const

/**
 * Feature keys for access control
 */
export type FeatureKey =
  | 'clients'
  | 'clientTagging'
  | 'teams'
  | 'teamDashboards'
  | 'exports'
  | 'csvExports'
  | 'projectCostBillable'
  | 'pnlViews'
  | 'utilizationInsights'
  | 'clientProfitability'
  | 'roleBasedAccess'
  | 'apiAccess'
  | 'advancedPermissions'
  | 'sso'
  | 'customReports'
  | 'brandTheme'
  | 'integrations'
  | 'teamManagement'
  | 'revenueReports'
  | 'teamSubmissions'
  | 'unlimitedProjects'
  | 'timerTracking'

/**
 * Feature permission configuration
 * minTier: minimum subscription tier required to access this feature
 */
export const FEATURE_PERMISSIONS: Record<
  FeatureKey,
  { minTier: AccountType; name: string }
> = {
  // Pro (small_business) features
  clients: { minTier: 'small_business', name: 'Clients' },
  clientTagging: { minTier: 'small_business', name: 'Client Tagging' },
  exports: { minTier: 'small_business', name: 'Exports' },
  csvExports: { minTier: 'small_business', name: 'CSV Exports' },
  projectCostBillable: {
    minTier: 'small_business',
    name: 'Project Cost vs Billable',
  },
  unlimitedProjects: { minTier: 'small_business', name: 'Unlimited Projects' },
  timerTracking: { minTier: 'small_business', name: 'Timer Tracking' },

  // Business (medium_business) features
  teams: { minTier: 'medium_business', name: 'Teams' },
  teamDashboards: { minTier: 'medium_business', name: 'Team Dashboards' },
  pnlViews: { minTier: 'medium_business', name: 'Project-level P&L' },
  utilizationInsights: {
    minTier: 'medium_business',
    name: 'Utilization & Margin Insights',
  },
  clientProfitability: {
    minTier: 'medium_business',
    name: 'Client Profitability Views',
  },
  roleBasedAccess: { minTier: 'medium_business', name: 'Role-Based Access' },
  apiAccess: { minTier: 'medium_business', name: 'API Access' },
  integrations: { minTier: 'medium_business', name: 'Integrations' },
  teamManagement: { minTier: 'medium_business', name: 'Team Management' },
  revenueReports: { minTier: 'medium_business', name: 'Revenue Reports' },
  teamSubmissions: { minTier: 'medium_business', name: 'Team Submissions' },

  // Enterprise features
  advancedPermissions: { minTier: 'enterprise', name: 'Advanced Permissions' },
  sso: { minTier: 'enterprise', name: 'Single Sign-On (SSO)' },
  customReports: { minTier: 'enterprise', name: 'Custom Reports' },
  brandTheme: { minTier: 'enterprise', name: 'Brand & Theme Customization' },
} as const

/**
 * Tier limits configuration
 */
export const TIER_LIMITS: Record<
  AccountType,
  {
    maxWorkspaces: number | null
    maxUsers: number | null
    maxProjects: number | null
    dataRetentionDays: number | null
  }
> = {
  individual: {
    maxWorkspaces: 1,
    maxUsers: 5,
    maxProjects: 3,
    dataRetentionDays: 30,
  },
  small_business: {
    maxWorkspaces: null, // unlimited
    maxUsers: null,
    maxProjects: null,
    dataRetentionDays: 365,
  },
  medium_business: {
    maxWorkspaces: null,
    maxUsers: null,
    maxProjects: null,
    dataRetentionDays: null, // unlimited
  },
  enterprise: {
    maxWorkspaces: null,
    maxUsers: null,
    maxProjects: null,
    dataRetentionDays: null,
  },
} as const

/**
 * Helper to get tier level from account type
 */
export const getTierLevel = (
  accountType: AccountType | null | undefined
): number => {
  return TIER_LEVELS[accountType || 'individual']
}

/**
 * Helper to check if tier has access to a feature
 */
export const canAccessFeature = (
  userTier: AccountType | null | undefined,
  feature: FeatureKey
): boolean => {
  const userLevel = getTierLevel(userTier)
  const requiredLevel = getTierLevel(FEATURE_PERMISSIONS[feature].minTier)
  return userLevel >= requiredLevel
}

/**
 * Get the required tier name for a feature (for upgrade prompts)
 */
export const getRequiredTierName = (feature: FeatureKey): string => {
  return TIER_NAMES[FEATURE_PERMISSIONS[feature].minTier]
}
