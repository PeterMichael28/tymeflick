import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateIndividualPassword = () => {
  const [createPasswordVisible, setCreatePasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    createPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Must contain an uppercase letter')
      .matches(/[0-9]/, 'Must contain a number')
      .matches(/[^A-Za-z0-9]/, 'Must contain a special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('createPassword')], 'Passwords must match')
      .required('Confirm your password'),
  })

  const handleSubmit = (values: any) => {
    console.log('Form values:', values)
    navigate('/signup/individual/confirm-email')
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Create Your Password
      </p>
      <p className="text-officeBrow700 font-bricolage text-[16px] font-normal">
        Get started with your free personal time tracking account
      </p>

      <Formik
        initialValues={{ createPassword: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => {
          const password = values.createPassword

          const rules = [
            {
              label: '8 Characters minimum',
              isValid: password.length >= 8,
            },
            {
              label: 'Has Number',
              isValid: /\d/.test(password),
            },
            {
              label: 'Uppercase letter',
              isValid: /[A-Z]/.test(password),
            },
            {
              label: 'One special character',
              isValid: /[^A-Za-z0-9]/.test(password),
            },
          ]

          return (
            <Form className="flex flex-col gap-5">
              {/* Create Password Field */}
              <div className="relative w-full">
                <Input
                  name="createPassword"
                  label="Create Password"
                  placeholder="********"
                  type={createPasswordVisible ? 'text' : 'password'}
                  isRequired
                />
                <button
                  type="button"
                  onClick={() => setCreatePasswordVisible((prev) => !prev)}
                  className="absolute top-[60px] right-4 text-sm focus:outline-none"
                >
                  {createPasswordVisible ? (
                    <EyeOff className="text-primary50 size-[25px]" />
                  ) : (
                    <Eye className="text-primary50 size-[25px]" />
                  )}
                </button>
              </div>

              {/* Confirm Password Field */}
              <div className="relative w-full">
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="********"
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  isRequired
                />
                <button
                  type="button"
                  onClick={() => setConfirmPasswordVisible((prev) => !prev)}
                  className="absolute top-[60px] right-4 text-sm focus:outline-none"
                >
                  {confirmPasswordVisible ? (
                    <EyeOff className="text-primary50 size-[25px]" />
                  ) : (
                    <Eye className="text-primary50 size-[25px]" />
                  )}
                </button>
              </div>

              {/* Password Rules */}
              <div className="flex flex-col gap-4">
                <p className="text-officeBrow700 font-inter font-medium">
                  Your Password Must Contain
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {rules.map((rule, index) => (
                    <div
                      key={index}
                      className={`font-inter flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-[12px] ${
                        rule.isValid
                          ? 'border-[#1FC16B] bg-[#1FC16B1A] text-[#1FC16B]'
                          : 'border-[#D2D9DF] text-[#8898AA]'
                      } `}
                    >
                      <p>{rule.label}</p>
                      {rule.isValid ? (
                        <img src="/icon/icon.svg" alt="Check Box" />
                      ) : (
                        <div className="h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-black"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Field
                  type={'checkbox'}
                  name={'Remember me'}
                  className="size-5 border border-[#D0D5DD]"
                />
                <div className="text-officeBrow font-inter flex gap-1 text-[15px] font-normal">
                  <p className="">I agree to the </p>
                  <p className="text-primary font-bold">Terms & Conditions </p>
                  <p>and</p>
                  <p className="text-primary font-bold">Privacy Policy</p>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit">
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Submitting...
                  </div>
                ) : (
                  'Continue'
                )}
              </Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default CreateIndividualPassword
