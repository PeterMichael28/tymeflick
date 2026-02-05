import type { FC, ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsAuthenticated, selectProfile } from '../redux/slice/authSlice'
import {
  openCreateAccountModal,
  closeCreateAccountModal,
} from '../redux/slice/modalSlice'
import { useEffect } from 'react'
import { useProfileQuery } from '../hooks/authQuery'
import { getParentLoginUrl } from '../config/urls'

interface ProtectedRouteProps {
  children: ReactNode
}

/**
 * ProtectedRoute component
 * Redirects to parent app if not authenticated (no login page in sub-app)
 * Opens account type modal if profile onboarding is not complete
 * Closes modal when onboarding becomes complete
 */
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const profile = useSelector(selectProfile)
  const dispatch = useDispatch()

  // Ensure profile is fetched/synced
  useProfileQuery()

  useEffect(() => {
    if (isAuthenticated && profile) {
      if (!profile.isOnboardingComplete) {
        // If authenticated but onboarding is not complete, open modal
        dispatch(openCreateAccountModal())
      } else {
        // If onboarding is complete, ensure modal is closed
        dispatch(closeCreateAccountModal())
      }
    }
  }, [isAuthenticated, profile, dispatch])

  // Redirect to parent app if not authenticated
  // This is a sub-app - users must authenticate through parent app
  if (!isAuthenticated) {
    // Include current URL as redirect param so user can return after login
    const currentUrl = window.location.href
    window.location.href = getParentLoginUrl(currentUrl)
    return null
  }

  return <>{children}</>
}

export default ProtectedRoute
