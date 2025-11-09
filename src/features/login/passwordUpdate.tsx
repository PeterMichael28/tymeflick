import Button from '../../components/button/button'
import { useNavigate } from 'react-router-dom'

const PasswordUpdate = () => {
  const naviagte = useNavigate()
  return (
    <div className="flex flex-col gap-4">
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Password Updated
      </p>
      <p className="text-officeBrow font-bricolage text-[16px] font-normal">
        Your password has been successfully reset
      </p>
      <div className="text-primary900 flex items-center justify-center rounded-md bg-[#F5F0FA] p-4 text-[18px]">
        <p>You can now sign in to your account with your new password.</p>
      </div>
      <Button onClick={() => naviagte('/login')}>Continue to Login</Button>
    </div>
  )
}

export default PasswordUpdate
