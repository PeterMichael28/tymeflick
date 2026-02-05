import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { authService } from '../api/authService'
import { accountProfileService } from '../api/accountProfileService'
import {
  setAuth,
  setUser,
  setProfile,
  clearAuth,
  selectAccessToken,
} from '../redux/slice/authSlice'
import {
  openCreateAccountModal,
  closeCreateAccountModal,
} from '../redux/slice/modalSlice'
import type {
  LoginFormData,
  ApiError,
  AccountProfile,
  AccountProfilePayload,
  ForgotPasswordFormData,
  ResetPasswordFormData,
} from '../types/auth.types'

/**
 * Query hook for fetching current user
 */
export const useUserQuery = () => {
  const accessToken = useSelector(selectAccessToken)
  const dispatch = useDispatch()

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const user = await authService.getCurrentUser()
      dispatch(setUser(user))
      return user
    },
    enabled: !!accessToken,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

/**
 * Query hook for fetching current account profile
 */
export const useProfileQuery = () => {
  const accessToken = useSelector(selectAccessToken)
  const dispatch = useDispatch()

  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const profile = await accountProfileService.getProfile()
      dispatch(setProfile(profile))
      return profile
    },
    enabled: !!accessToken,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

/**
 * Login mutation hook
 */
export const useLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: LoginFormData) => authService.login(data),
    onSuccess: async (response) => {
      // The login response now includes user data
      const { accessToken, refreshToken, expiresIn, user } = response

      // 1. Calculate expiration
      const expiresAt = Date.now() + expiresIn * 1000

      // 2. Initial auth state setup
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

        toast.success(`Welcome back, ${user.firstName}!`)

        // 5. Check onboarding status - if incomplete, open modal
        if (!profile.isOnboardingComplete) {
          dispatch(openCreateAccountModal())
        } else {
          // Navigate to dashboard
          navigate('/')
        }
      } catch (error) {
        console.error('Failed to fetch profile after login:', error)
        // Even if profile fetch fails, we have tokens and user
        toast.success(`Logged in, but profile fetch failed.`)
        navigate('/')
      }
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Login failed')
    },
  })
}

/**
 * Logout mutation hook
 */
export const useLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authService.logout(),
    onSettled: () => {
      dispatch(clearAuth())
      queryClient.clear()
      navigate('/login')
    },
  })
}

/**
 * Forgot password mutation hook
 */
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: ForgotPasswordFormData) =>
      authService.requestPasswordReset(data.email),
    onSuccess: (response) => {
      toast.success(
        response.message || 'Reset instructions sent to your email.'
      )
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Reset request failed')
    },
  })
}

/**
 * Reset password mutation hook
 */
export const useResetPassword = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: ResetPasswordFormData & { token: string }) =>
      authService.confirmPasswordReset({
        token: data.token,
        newPassword: data.password,
      }),
    onSuccess: () => {
      toast.success('Password reset successful! Please log in.')
      navigate('/login')
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Password reset failed')
    },
  })
}

/**
 * Change password mutation hook
 */
export const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: { oldPassword: string; newPassword: string }) =>
      authService.changePassword(data),
    onSuccess: () => {
      toast.success('Password changed successfully')
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Failed to change password')
    },
  })
}

/**
 * Create account profile mutation hook
 */
export const useCreateAccountProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: AccountProfilePayload) =>
      accountProfileService.createProfile(data),
    onSuccess: async (response) => {
      toast.success('Account profile created successfully!')

      // Update profile in redux
      dispatch(setProfile(response as AccountProfile))

      // Close the onboarding modal
      dispatch(closeCreateAccountModal())

      // Invalidate profile query to refresh data
      await queryClient.invalidateQueries({ queryKey: ['profile'] })

      // Navigate to dashboard
      navigate('/')
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Failed to create account profile')
    },
  })
}
