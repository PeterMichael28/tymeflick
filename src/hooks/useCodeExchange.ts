import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { authService } from '../api/authService'
import { accountProfileService } from '../api/accountProfileService'
import { setAuth, setProfile } from '../redux/slice/authSlice'
import { openCreateAccountModal } from '../redux/slice/modalSlice'
import type { ApiError } from '../types/auth.types'
import { APP_CONFIG } from '../config/urls'

// Parent app URL for redirect when auth fails
// const PARENT_APP_URL = 'https://seamsuite.com/dashboard'
const PARENT_APP_URL = APP_CONFIG.PARENT_APP_DASHBOARD
/**
 * Hook for exchanging auth code for tokens
 * Used when user is redirected from parent app with a code
 */
export const useCodeExchange = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: { code: string; redirectUri: string }) =>
      authService.exchangeCode(data),
    onSuccess: async ({ accessToken, refreshToken, expiresIn, user }) => {
      // 1. Calculate expiration
      const expiresAt = Date.now() + expiresIn * 1000

      // 2. Store tokens and user in Redux
      dispatch(
        setAuth({
          tokens: {
            accessToken,
            refreshToken,
            expiresAt,
          },
          user,
        })
      )

      // 3. Fetch account profile immediately
      try {
        const profile = await accountProfileService.getProfile()
        dispatch(setProfile(profile))

        // 4. Invalidate queries
        await queryClient.invalidateQueries({ queryKey: ['user'] })
        await queryClient.invalidateQueries({ queryKey: ['profile'] })

        toast.success(`Welcome, ${user.firstName}!`)

        // 5. Check onboarding status - if incomplete, open modal
        if (!profile.isOnboardingComplete) {
          dispatch(openCreateAccountModal())
          // Navigate to dashboard - modal will appear on top
          navigate('/', { replace: true })
        } else {
          // Navigate to dashboard
          navigate('/', { replace: true })
        }
      } catch (error) {
        console.error('Failed to fetch profile after code exchange:', error)
        // Even if profile fetch fails, we have tokens and user
        toast.success(`Logged in, but profile fetch failed.`)
        navigate('/', { replace: true })
      }
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Authentication failed')
      // Redirect to parent app on failure
      window.location.href = PARENT_APP_URL
    },
  })
}

export { PARENT_APP_URL }
