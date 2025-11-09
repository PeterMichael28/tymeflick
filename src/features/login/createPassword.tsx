import Button from '../../components/button/button'
import Input from '../../components/ui/input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CreatePassword = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)
  const validationSchema = Yup.object({
    newPassword: Yup.string().min(6, 'Too short').required('Required'),
    confirmPassword: Yup.string().min(6, 'Too short').required('Required'),
  })

  const handleSubmit = () => {
    navigate('/login/password-update')
  }
  return (
    <div className="flex flex-col gap-3">
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Create New Password
      </p>
      <p className="text-officeBrow font-bricolage text-[16px] font-normal">
        Enter a strong password for your account
      </p>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ newPassword: '', confirmPassword: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="flex w-full flex-col gap-3">
          <div className="relative w-full">
            <Input
              name="newPassword"
              label="New Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="*******"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-[60px] right-4 text-sm text-[#000000] focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="text-primary50 size-[25px]" />
              ) : (
                <Eye className="text-primary50 size-[25px]" />
              )}
            </button>
          </div>
          <div className="relative w-full">
            <Input
              name="confirmPassword"
              label="Confirm New Password"
              placeholder="*******"
              type={confirmPassword ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={() => setConfirmPassword((prev) => !prev)}
              className="absolute top-[60px] right-4 text-sm text-[#000000] focus:outline-none"
            >
              {confirmPassword ? (
                <EyeOff className="text-primary50 size-[25px]" />
              ) : (
                <Eye className="text-primary50 size-[25px]" />
              )}
            </button>
          </div>

          <Button type="submit">Update Password</Button>
        </Form>
      </Formik>
      <div className="mt-3 flex items-center justify-center">
        <p
          className="font-inter cursor-pointer text-[16px] font-normal text-[#606060]"
          onClick={() => navigate('/login')}
        >
          Back to Login
        </p>
      </div>
    </div>
  )
}

export default CreatePassword
