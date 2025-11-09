import Button from '../../components/button/button'
import Input from '../../components/ui/input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { setEmail } from '../../redux/slice/emailSlice'
import { useDispatch } from 'react-redux'

const ResetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
  })

  interface ResetPasswordFormValues {
    email: string
  }

  const handleSubmit = (values: ResetPasswordFormValues): void => {
    try {
      console.log(values)
      dispatch(setEmail(values.email))
      navigate('/login/check-email')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Reset Your Password
      </p>
      <p className="text-officeBrow font-bricolage text-[16px] font-normal">
        Enter your email to receive reset instructions
      </p>

      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex w-full flex-col gap-4">
          <Input
            name="email"
            label="Email Address"
            placeholder="user@gmail.com"
            type="email"
          />

          <Button type="submit">Send Reset Link</Button>
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

export default ResetPassword
