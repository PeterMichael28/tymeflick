import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import 'yup-phone-lite'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'

const CreateEnterpriseAccount = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    companyName: Yup.string().required(),
    companyWebsite: Yup.string()
      .url('Enter a valid website URL (must start with http:// or https://)')
      .optional(),
    companyPhone: Yup.string()
      .matches(/^\+?[0-9\s]*$/, 'Phone number must contain only numbers')
      .phone('International', 'Enter a valid international phone number'),
    companyDescription: Yup.string()
      .min(10)
      .max(1000)
      .required('Description is required'),
    businessSlug: Yup.string().optional(),
    numberOfEmployees: Yup.number().required('Number of employees is required'),
    customDomain: Yup.string().optional(),
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
          companyName: '',
          companyWebsite: '',
          companyPhone: '',
          companyDescription: '',
          businessSlug: '',
          numberOfEmployees: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form values:', values)
          setSubmitting(false)
          navigate('/signup/enterprise/create-contact-person-account')
        }}
      >
        {({ values }) => (
          <Form className="flex flex-col gap-2">
            <Input
              name="companyName"
              placeholder="Company Name"
              label="Company Name"
              type="text"
              isRequired
              height="medium"
            />
            <Input
              name="companyDescription"
              placeholder="Company Description"
              label="Company Description"
              isRequired
              height="medium"
            />
            <div className="flex w-full justify-between gap-4">
              <Input
                name="companyWebsite"
                placeholder="Company Website"
                label="Company Website"
                type="text"
                height="medium"
              />
              <Input
                name="companyPhone"
                placeholder="Company Phone"
                label="Company Phone"
                type="text"
                isRequired
                height="medium"
              />
            </div>
            <div className="flex w-full justify-between gap-4">
              <Input
                name="customDomain"
                placeholder="Custom Domain"
                label="Custom Domain"
                type="text"
                height="medium"
              />
              <Input
                name="numberOfEmployees"
                placeholder="Number of Employees"
                label="Number of Employees"
                type="number"
                isRequired
                height="medium"
              />
            </div>

            <Input
              name="businessSlug"
              placeholder={
                values.companyName ? values.companyName : 'Business Slug'
              }
              label="Business Slug"
              height="medium"
            />
            <p className="font-inter font-normal text-[#667185]">
              tymelfick.com/
              {values.companyName ? values.companyName : 'my-business'}
            </p>

            <Button type="submit">Next</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateEnterpriseAccount
