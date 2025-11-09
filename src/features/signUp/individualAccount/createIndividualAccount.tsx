import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import 'yup-phone-lite'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'

const CreateIndividualAccount = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9\s]*$/, 'Phone number must contain only numbers')
      .phone('International', 'Enter a valid international phone number')
      .optional(),
  })

  const formatPhoneNumber = (value: string) => {
    // remove all non-digit characters
    const digits = value.replace(/\D/g, '')
    // format like +234 801 234 5678
    return digits.replace(
      /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,4})$/,
      (_, p1, p2, p3, p4) =>
        [p1 ? '+' + p1 : '', p2, p3, p4].filter(Boolean).join(' ')
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Create Individual Your Account
      </p>
      <p className="text-officeBrow700 font-bricolage text-[16px] font-normal">
        Get started with your free personal time tracking account
      </p>

      <Formik
        initialValues={{ fullName: '', email: '', phoneNumber: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          ;(navigate('/signup/individual/create-password'), console.log(values))
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            <Input
              name="fullName"
              label="Full Name"
              isRequired
              placeholder="John Doe"
            />
            <Input
              name="email"
              label="Email Address"
              isRequired
              placeholder="John@mail.com"
            />
            <Field name="phoneNumber">
              {({ field }: any) => (
                <Input
                  {...field}
                  label="Phone Number"
                  placeholder="+2348012345678"
                  value={values.phoneNumber}
                  onChange={(e: any) =>
                    setFieldValue(
                      'phoneNumber',
                      formatPhoneNumber(e.target.value)
                    )
                  }
                />
              )}
            </Field>
            <Button type="submit">Continue</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateIndividualAccount
