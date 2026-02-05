import type { FC } from 'react'
import type { User } from '../../../types/auth.types'
import { useCreateAccountProfile } from '../../../hooks/authQuery'
import Button from '../../../components/button/button'

interface IndividualFormProps {
  user: User
  onBack: () => void
}

/**
 * Individual Account Form
 * Read-only display of user info, just confirm and submit
 */
export const IndividualForm: FC<IndividualFormProps> = ({ user, onBack }) => {
  const createProfileMutation = useCreateAccountProfile()

  const handleSubmit = () => {
    createProfileMutation.mutate({
      accountType: 'individual',
      termsAccepted: true,
    })
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-neutral600 font-bricolage text-center md:text-[32px]">
          Confirm Your Individual Account
        </p>
        <p className="text-neutral400 text-center font-normal md:text-[16px]">
          Your account will be created with the following details
        </p>
      </div>

      {/* Read-only user details */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-[#F9F9F9] p-4">
          <p className="text-neutral400 text-sm font-medium">Full Name</p>
          <p className="text-neutral600 font-bricolage text-lg font-semibold">
            {user.firstName} {user.lastName}
          </p>
        </div>

        <div className="rounded-lg bg-[#F9F9F9] p-4">
          <p className="text-neutral400 text-sm font-medium">Email Address</p>
          <p className="text-neutral600 font-bricolage text-lg font-semibold">
            {user.email}
          </p>
        </div>

        <div className="rounded-lg bg-[#F9F9F9] p-4">
          <p className="text-neutral400 text-sm font-medium">Phone Number</p>
          <p className="text-neutral600 font-bricolage text-lg font-semibold">
            {user.phoneNumber || 'Not provided'}
          </p>
        </div>

        <div className="rounded-lg bg-[#F9F9F9] p-4">
          <p className="text-neutral400 text-sm font-medium">Account Type</p>
          <p className="text-neutral600 font-bricolage text-lg font-semibold">
            Individual
          </p>
        </div>
      </div>

      {/* Terms acceptance notice */}
      <p className="text-neutral400 text-center text-sm">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </p>

      {/* Actions */}
      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={createProfileMutation.isPending}
          className="text-neutral600 rounded-lg bg-[#F9F9F9] px-8 py-4 font-semibold disabled:opacity-50 md:px-16"
        >
          Back
        </button>
        <Button
          onClick={handleSubmit}
          loading={createProfileMutation.isPending}
        >
          Create Account
        </Button>
      </div>
    </div>
  )
}

export default IndividualForm
