import Button from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

const CheckEmail = () => {
  const navigate = useNavigate()
  const email = useSelector((state: RootState) => state.email)
  return (
    <div className="flex flex-col gap-2">
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        {' '}
        Check Your Email
      </p>
      <span className="flex gap-1">
        <p className="font-bricolage text-officeBrow700 text-[16px] font-normal">
          We've sent a password reset link to:
        </p>
        <p className="font-bricolage text-primary text-[16px] font-normal">
          {email.email}
        </p>
      </span>
      <div className="font-bricolage flex flex-col gap-2 rounded-lg bg-[#F5F0FA] p-4">
        <p className="text-primary200 font-bricolage text-[18px] font-bold">
          What's next?
        </p>
        <span className="flex items-center gap-2">
          <p>•</p>
          <p className="text-primary900">Check your email inbox</p>
        </span>
        <span className="flex items-center gap-2">
          <p>•</p>
          <p>Click the reset link in the email</p>
        </span>
        <span className="flex items-center gap-2">
          <p>•</p>
          <p>Create a new password</p>
        </span>
        <span className="flex items-center gap-2">
          <p>•</p>
          <p>Sign in with your new password</p>
        </span>
      </div>
      <p className="text-officeBrow700">
        Didn't receive the email? Check your spam folder or try again.
      </p>
      <Button onClick={() => navigate('/login/create-password')}>
        Continue
      </Button>
      <div className="mt-3 flex items-center justify-center">
        <p
          className="font-inter text-[16px] font-normal text-[#606060]"
          onClick={() => navigate('/login')}
        >
          Back to Login
        </p>
      </div>
    </div>
  )
}

export default CheckEmail
