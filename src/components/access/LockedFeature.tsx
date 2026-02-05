/**
 * LockedFeature Component
 * Displays a locked state with upgrade prompt when user lacks access
 */

import React from 'react'
import { Lock } from 'lucide-react'
import {
  type FeatureKey,
  FEATURE_PERMISSIONS,
} from '../../config/subscriptionConfig'
import { APP_CONFIG } from '../../config/urls'
import Button from '../button/button'

interface LockedFeatureProps {
  /** Feature that is locked */
  feature: FeatureKey
  /** Required tier name to display */
  requiredTier: string
  /** Compact mode for inline locked states */
  compact?: boolean
}

/**
 * Displays a locked feature state with upgrade CTA
 */
export const LockedFeature = ({
  feature,
  requiredTier,
  compact = false,
}: LockedFeatureProps): React.ReactNode => {
  const featureName = FEATURE_PERMISSIONS[feature]?.name || feature

  const handleUpgrade = (): void => {
    window.location.href = APP_CONFIG.PARENT_APP_DASHBOARD
  }

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 rounded-lg bg-[#F3F3F3] px-3 py-2">
        <Lock className="text-primary size-4" />
        <span className="font-bricolage text-xs text-[#667185]">
          Upgrade to {requiredTier} to unlock
        </span>
      </div>
    )
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-lg bg-[#F3F3F3] p-8 text-center">
      {/* Icon */}
      <div className="bg-primary mb-6 flex size-20 items-center justify-center rounded-full shadow-lg">
        <Lock className="size-10 text-white" />
      </div>

      {/* Title */}
      <h2 className="font-bricolage mb-3 text-2xl font-bold text-[#101928]">
        {featureName} is locked
      </h2>

      {/* Description */}
      <p className="mb-6 max-w-md text-[14px] leading-relaxed text-[#667185]">
        This feature requires a{' '}
        <span className="text-primary font-semibold">{requiredTier}</span>{' '}
        subscription. Upgrade your plan to unlock access to{' '}
        {featureName.toLowerCase()} and other premium features.
      </p>

      {/* Upgrade Button */}
      <Button onClick={handleUpgrade} className="px-10">
        Upgrade to {requiredTier}
      </Button>

      {/* Help text */}
      <p className="mt-4 text-xs text-[#98A2B3]">
        Need help? Contact our support team for assistance.
      </p>
    </div>
  )
}

export default LockedFeature
