import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import 'yup-phone-lite'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'

const CreateMediumBusinessAccount = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    businessName: Yup.string().required(),
    businessWebsite: Yup.string()
      .url('Enter a valid website URL (must start with http:// or https://)')
      .optional(),
    businessPhone: Yup.string()
      .matches(/^\+?[0-9\s]*$/, 'Phone number must contain only numbers')
      .phone('International', 'Enter a valid international phone number'),
    businessDescription: Yup.string()
      .min(10)
      .max(1000)
      .required('Description is required'),
    businessSlug: Yup.string().optional(),
    customDomain: Yup.string()
      .url('Enter a valid website URL (must start with http:// or https://)')
      .optional(),
    numberOfEmployees: Yup.number().required('Number of employees is required'),
  })
  return (
    <div className="flex flex-col gap-3">
      <p className="text-officeBrow font-bricolage text-[26px] font-bold">
        Create An Account For Medium Business
      </p>
      <p className="text-officeBrow700 font-bricolage text-[16px] font-normal">
        Growing teams needing role-based access
      </p>

      <Formik
        initialValues={{
          businessName: '',
          businessWebsite: '',
          businessPhone: '',
          businessDescription: '',
          businessSlug: '',
          customDomain: '',
          numberOfEmployees: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form values:', values)
          setSubmitting(false)
          navigate('/signup/medium-business/create-admin-account')
        }}
      >
        {({ values }) => (
          <Form className="flex flex-col gap-2">
            <Input
              name="businessName"
              placeholder="Business Name"
              label="Business Name"
              type="text"
              isRequired
            />
            <div className="flex w-full justify-between gap-4">
              <Input
                name="businessWebsite"
                placeholder="Business Website"
                label="Business Website"
                type="text"
              />
              <Input
                name="businessPhone"
                placeholder="Business Phone"
                label="Business Phone"
                type="text"
                isRequired
              />
            </div>
            <div className="flex w-full justify-between gap-4">
              <Input
                name="customDomain"
                placeholder="Custom Domain"
                label="Custom Domain"
                type="text"
              />
              <Input
                name="numberOfEmployees"
                placeholder="Number of Employees"
                label="Number of Employees"
                type="number"
                isRequired
              />
            </div>
            <Input
              name="businessDescription"
              placeholder="Business Description"
              label="Business Description"
              isRequired
            />
            <Input
              name="businessSlug"
              placeholder={
                values.businessName ? values.businessName : 'Business Slug'
              }
              label="Business Slug"
            />
            <p className="font-inter font-normal text-[#667185]">
              tymelfick.com/
              {values.businessName ? values.businessName : 'my-business'}
            </p>

            <Button type="submit">Next</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateMediumBusinessAccount
