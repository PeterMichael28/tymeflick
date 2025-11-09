import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import 'yup-phone-lite'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'
const CreateAdminAccount = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email address').required(),
    fullName: Yup.string().required('Enter a valid full name'),
    phone: Yup.string()
      .matches(/^\+?[0-9\s]*$/, 'Phone number must contain only numbers')
      .phone('International', 'Enter a valid international phone number'),
    jobTitle: Yup.string().required('Enter a valid job title'),
  })
  return (
    <div>
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Create An Account For Small Business
      </p>
      <p className="text-officeBrow700 font-bricolage text-[16px] font-normal">
        Micro-teams or freelancers
      </p>

      <Formik
        initialValues={{ email: '', fullName: '', phone: '', jobTitle: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form values:', values)
          setSubmitting(false)
          navigate('/signup/small-business/create-password')
        }}
      >
        <Form className="flex flex-col gap-4">
          <Input
            name="fullName"
            placeholder="Admin Full Name "
            label="Full Name"
            type="text"
            isRequired
          />
          <Input
            name="email"
            placeholder="Admin Email"
            label="Email"
            type="email"
            isRequired
          />
          <Input
            name="phone"
            placeholder="Admin Phone"
            label="Phone"
            type="text"
          />
          <Input
            name="jobTitle"
            placeholder="Admin Job Title"
            label="Job Title"
            type="text"
          />

          <Button type="submit">Next</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateAdminAccount
