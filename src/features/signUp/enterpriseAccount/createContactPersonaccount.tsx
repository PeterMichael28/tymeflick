import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import 'yup-phone-lite'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'

const CreateContactPersonaccount = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email().required('Email is required'),
    Phone: Yup.string()
      .matches(/^\+?[0-9\s]*$/, 'Phone number must contain only numbers')
      .phone('International', 'Enter a valid international phone number'),
    industry: Yup.string(),
    currentTimeTrackingSolution: Yup.string(),
  })
  return (
    <div className="flex flex-col gap-3">
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Create An Account For Enterprise
      </p>
      <p className="text-officeBrow700 font-bricolage text-[16px] font-normal">
        Large organizations with advanced needs
      </p>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          industry: '',
          currentTimeTrackingSolution: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form values:', values)
          setSubmitting(false)
          navigate('/signup/enterprise/specific-requirements')
        }}
      >
        <Form className="flex flex-col gap-2">
          <Input
            name="fullName"
            placeholder="Full Name"
            label="Contact Person Full Name"
            type="text"
            isRequired
            height="medium"
          />
          <Input
            name="email"
            placeholder="Email"
            label="Contact Person Email"
            type="email"
            isRequired
            height="medium"
          />
          <Input
            name="phone"
            placeholder="Phone"
            label="Contact Person Phone"
            type="text"
            isRequired
            height="medium"
          />
          <Input
            name="industry"
            placeholder="Industry"
            label="Industry"
            type="text"
            height="medium"
          />
          <Input
            name="currentTimeTrackingSolution"
            placeholder="Current Time Tracking Solution"
            label="Current Time Tracking Solution"
            type="text"
            height="medium"
          />
          <Button type="submit">Next</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateContactPersonaccount
