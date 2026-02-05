/**
 * SubscriptionGate Component
 * Wrapper that conditionally renders children based on subscription access
 */

import { type ReactNode } from 'react'
import {
  useSubscriptionAccess,
  type FeatureKey,
} from '../../hooks/useSubscriptionAccess'
import LockedFeature from './LockedFeature'

interface SubscriptionGateProps {
  /** Feature key to check access for */
  feature: FeatureKey
  /** Content to render if user has access */
  children: ReactNode
  /** Custom fallback when access is denied (defaults to LockedFeature) */
  fallback?: ReactNode
  /** If true, shows nothing instead of locked state */
  hideWhenLocked?: boolean
}

/**
 * Gate component that only renders children if user has subscription access
 * @example
 * <SubscriptionGate feature="clients">
 *   <ClientsPage />
 * </SubscriptionGate>
 */
export const SubscriptionGate = ({
  feature,
  children,
  fallback,
  hideWhenLocked = false,
}: SubscriptionGateProps): ReactNode => {
  const { hasAccess, getRequiredTier } = useSubscriptionAccess()

  if (hasAccess(feature)) {
    return children
  }

  if (hideWhenLocked) {
    return null
  }

  if (fallback) {
    return fallback
  }

  return (
    <LockedFeature feature={feature} requiredTier={getRequiredTier(feature)} />
  )
}

export default SubscriptionGate
