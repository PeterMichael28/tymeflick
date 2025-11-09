import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import 'yup-phone-lite'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'
const CreateAdminMeduminBusinessAccount = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email address').required(),
    fullName: Yup.string().required('Enter a valid full name'),
    phone: Yup.string()
      .matches(/^\+?[0-9\s]*$/, 'Phone number must contain only numbers')
      .phone('International', 'Enter a valid international phone number'),
    jobTitle: Yup.string().required('Enter a valid job title'),
    department: Yup.string().required('Enter a valid department'),
    location: Yup.string().required('Enter a valid location'),
  })
  return (
    <div>
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Create An Account For Medium Business
      </p>
      <p className="text-officeBrow700 font-bricolage text-[16px] font-normal">
        Growing teams needing role-based access
      </p>

      <Formik
        initialValues={{
          email: '',
          fullName: '',
          phone: '',
          jobTitle: '',
          department: '',
          location: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form values:', values)
          setSubmitting(false)
          navigate('/signup/medium-business/create-password')
        }}
      >
        <Form className="flex flex-col gap-4">
          <Input
            name="fullName"
            placeholder="Admin Full Name "
            label="Admin Full Name "
            type="text"
            isRequired
            height="medium"
          />

          <div className="flex gap-4">
            <Input
              name="phone"
              placeholder="Admin Phone"
              label="Admin Phone"
              type="text"
              height="medium"
            />
            <Input
              name="jobTitle"
              placeholder="Admin Job Title"
              label="Admin Job Title"
              type="text"
              height="medium"
            />
          </div>
          <Input
            name="email"
            placeholder="Admin Email"
            label="Admin Email"
            type="email"
            isRequired
            height="medium"
          />
          <div className="flex gap-4">
            <Input
              name="department"
              placeholder="Admin Department"
              label="Admin Department"
              type="text"
              height="medium"
            />
            <Input
              name="location"
              placeholder="Admin Location"
              label="Admin Location"
              type="text"
              height="medium"
            />
          </div>

          <Button type="submit">Next</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateAdminMeduminBusinessAccount
