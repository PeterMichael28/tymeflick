import { useEffect, useRef } from 'react'
import { useCodeExchange, PARENT_APP_URL } from '../hooks/useCodeExchange'

/**
 * AuthCallback page component
 * Handles /auth/callback route for cross-domain authentication
 * Exchanges auth code for tokens and redirects to dashboard or parent app
 */
export const AuthCallback = () => {
  const { mutate: exchangeCode, isPending, error } = useCodeExchange()
  const hasExchanged = useRef(false)

  useEffect(() => {
    // Prevent double exchange in strict mode
    if (hasExchanged.current) return
    hasExchanged.current = true

    const searchParams = new URLSearchParams(window.location.search)
    const code = searchParams.get('code')

    if (code) {
      // Exchange code for tokens
      exchangeCode({
        code,
        redirectUri: window.location.origin + '/auth/callback',
      })
    } else {
      // No code present, redirect to parent app
      window.location.href = PARENT_APP_URL
    }
  }, [exchangeCode])

  if (isPending) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="border-primary mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2" />
          <p className="text-gray-600">Authenticating...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Authentication Failed
          </h2>
          <p className="mb-4 text-gray-600">
            {error.message || 'Failed to authenticate. Please try again.'}
          </p>
          <button
            onClick={() => (window.location.href = PARENT_APP_URL)}
            className="bg-primary hover:bg-primary/90 rounded-lg px-6 py-2 text-white"
          >
            Return to SeamSuite
          </button>
        </div>
      </div>
    )
  }

  // Will redirect on success, show nothing
  return null
}

export default AuthCallback
