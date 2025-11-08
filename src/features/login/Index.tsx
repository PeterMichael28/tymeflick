import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Input from './ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import Button from './ui/button'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(6, 'Too short').required('Password is Required'),
  })

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex justify-between">
        <p className="text-officeBrow font-bricolage text-[26px] font-bold">
          Stay on Schedule
        </p>
        <p className="text-primary font-bricolage text-[26px] font-bold">
          Create Account
        </p>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="flex flex-col gap-5">
          <Input
            label="Email Address"
            name="email"
            placeholder="user@gmail.com"
          />
          <div className="relative w-full">
            <Input
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="*************"
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
        <Button type="submit">Sign in</Button>
          <div className="flex gap-5">
            <Field
              type={'checkbox'}
              name={'Remember me'}
              className="size-5 border border-[#D0D5DD]"
            />
            <p className="text-officeBrow font-inter text-[15px] font-normal">
              Remember me
            </p>
          </div>
          <div className="font-inter flex flex-col items-center justify-center gap-2 text-[18px]">
            <p
              className="text-primary cursor-pointer font-bold"
              onClick={() => navigate('reset-password')}
            >
              Forgot Password?
            </p>
            <span className="flex gap-2 font-bold">
              <p className="text-officeBrow">Need help?</p>
              <p className="text-primary">Contact Support</p>
            </span>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Index
