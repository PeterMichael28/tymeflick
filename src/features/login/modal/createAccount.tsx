import { useState, useCallback, type FC } from 'react'
import { useSelector } from 'react-redux'
import { selectUser, selectProfile } from '../../../redux/slice/authSlice'
import type { AccountType } from '../../../types/auth.types'
import { useLogout } from '../../../hooks/authQuery'
import IndividualForm from './IndividualForm'
import SmallBusinessForm from './SmallBusinessForm'
import MediumBusinessForm from './MediumBusinessForm'
import EnterpriseForm from './EnterpriseForm'

interface AccountTypeOption {
  image: string
  title: string
  description: string
  type: AccountType
}

const accountTypeOptions: AccountTypeOption[] = [
  {
    image: '/icon/user-circle.svg',
    title: 'Individual Account',
    description: 'Solo users managing personal time',
    type: 'individual',
  },
  {
    image: '/icon/Frame 1618869169.svg',
    title: 'Small Business Account',
    description: 'Micro-teams or freelancers',
    type: 'small_business',
  },
  {
    image: '/icon/Frame 1618869169 (1).svg',
    title: 'Medium Business Account',
    description: 'Growing teams needing role-based access',
    type: 'medium_business',
  },
  {
    image: '/icon/Frame 1618869169 (1).svg',
    title: 'Enterprise Account',
    description: 'Large organizations with advanced needs',
    type: 'enterprise',
  },
]

/**
 * CreateAccount Modal (Onboarding)
 * Non-closeable modal - user must complete onboarding to continue
 * Step 1: Select account type (skipped if profile already has accountType)
 * Step 2: Fill relevant form based on selection or existing accountType
 */
const CreateAccount: FC = () => {
  const user = useSelector(selectUser)
  const profile = useSelector(selectProfile)
  const logout = useLogout()

  // If profile already has an accountType, skip step 1 and go directly to form
  const hasExistingAccountType = profile?.accountType != null
  const [step, setStep] = useState<1 | 2>(hasExistingAccountType ? 2 : 1)
  const [selectedType, setSelectedType] = useState<AccountType | null>(
    profile?.accountType || null
  )

  const handleTypeSelect = (type: AccountType) => {
    setSelectedType(type)
  }

  const handleContinue = () => {
    if (selectedType) {
      setStep(2)
    }
  }

  const handleLogout = useCallback(() => {
    logout.mutate()
  }, [logout])

  const renderForm = () => {
    if (!user) return null

    switch (selectedType) {
      case 'individual':
        return <IndividualForm user={user} onBack={handleLogout} />
      case 'small_business':
        return <SmallBusinessForm user={user} onBack={handleLogout} />
      case 'medium_business':
        return <MediumBusinessForm user={user} onBack={handleLogout} />
      case 'enterprise':
        return <EnterpriseForm user={user} onBack={handleLogout} />
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="flex max-h-[90vh] w-full flex-col gap-4 overflow-y-auto rounded-2xl bg-white p-4 sm:p-6 md:max-w-[700px] md:p-8">
        {/* Onboarding Header - Always visible */}
        <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 sm:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 text-amber-600 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="text-sm font-semibold text-amber-800 sm:text-base">
              Complete Your Onboarding
            </p>
            <p className="text-xs text-amber-700 sm:text-sm">
              Please complete the setup below to continue using TymeFlick
            </p>
          </div>
        </div>

        {step === 1 ? (
          <>
            {/* Step 1: Account Type Selection */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-neutral600 font-bricolage text-xl font-semibold sm:text-2xl md:text-[32px]">
                Complete Your Onboarding
              </p>
              <p className="text-neutral400 mt-1 text-sm sm:text-base md:text-lg">
                Select an account type to finish setting up your workspace
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {accountTypeOptions.map((item) => (
                <div
                  key={item.type}
                  className={`flex w-full cursor-pointer items-start gap-3 rounded-lg p-4 transition-all sm:p-5 ${
                    selectedType === item.type
                      ? 'ring-primary bg-primary/10 ring-2'
                      : 'bg-[#F9F9F9] hover:bg-[#F0F0F0]'
                  }`}
                  onClick={() => handleTypeSelect(item.type)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                  />
                  <div>
                    <p className="text-neutral600 font-bricolage text-sm font-medium sm:text-[14px]">
                      {item.title}
                    </p>
                    <p className="text-neutral400 font-bricolage text-xs sm:text-[12px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleContinue}
                disabled={!selectedType}
                className="bg-primary w-full rounded-lg px-8 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-12 sm:py-4"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={handleLogout}
                disabled={logout.isPending}
                className="w-full rounded-lg px-8 py-3 font-semibold text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-12 sm:py-4"
              >
                {logout.isPending ? 'Logging out...' : 'Log Out'}
              </button>
            </div>
          </>
        ) : (
          /* Step 2: Account Form */
          renderForm()
        )}
      </div>
    </div>
  )
}

export default CreateAccount
