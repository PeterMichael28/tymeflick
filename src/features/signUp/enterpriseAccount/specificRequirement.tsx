import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import 'yup-phone-lite'
import Button from '../../../components/button/button'
import DropDown from './ui/dropDown'
import { openEnterPriceSuccessModal } from '../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'

const SpecificRequirement = () => {
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    specificRequirements: Yup.string().required(
      'Specific Requirement is required'
    ),
    preferredContactMethod: Yup.string().required(
      'Preferred Contact Method is required'
    ),
    bestTimeToContact: Yup.string().required(
      'Best Time to Contact is required'
    ),
  })

  const contactMethods = [
    { value: '', label: 'Select a method' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'whatsapp', label: 'WhatsApp' },
  ]

  const contactTimes = [
    { value: '', label: 'Select a time' },
    { value: 'morning', label: 'Morning (8AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 5PM)' },
    { value: 'evening', label: 'Evening (5PM - 9PM)' },
  ]

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
          specificRequirements: '',
          preferredContactMethod: '',
          bestTimeToContact: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form values:', values)
          setSubmitting(false)
          dispatch(openEnterPriceSuccessModal())
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            {/* Specific Requirements */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="specificRequirements"
                className="text-grey900 font-bricolage flex gap-2 text-[19px] font-normal"
              >
                Specific Requirements
              </label>
              <Field
                id="specificRequirements"
                name="specificRequirements"
                placeholder="Enter your specific requirements"
                className="focus:border-primary h-[127px] w-full rounded-md border border-[#D0D5DD] p-2"
                as="textarea"
              />
              <ErrorMessage
                name="specificRequirements"
                component="p"
                className="text-sm text-red-500"
              />
            </div>
            <p className="font-inter text-[14px] text-[#667185]">
              Tell us about any specific features or integrations you need
            </p>

            <div className="flex w-full justify-between gap-3">
              {/* Preferred Contact Method Dropdown */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="preferredContactMethod"
                  className="text-grey900 font-bricolage flex gap-2 text-[19px] font-normal"
                >
                  Preferred Contact Method
                </label>
                <DropDown
                  placeholder="preferredContactMethod"
                  value={values.preferredContactMethod}
                  onChange={(val: string) =>
                    setFieldValue('preferredContactMethod', val)
                  }
                  options={contactMethods}
                />
                <ErrorMessage
                  name="preferredContactMethod"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* Best Time to Contact Dropdown */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="bestTimeToContact"
                  className="text-grey900 font-bricolage flex gap-2 text-[19px] font-normal"
                >
                  Best Time to Contact
                </label>
                <DropDown
                  placeholder="bestTimeToContact"
                  value={values.bestTimeToContact}
                  onChange={(val: string) =>
                    setFieldValue('bestTimeToContact', val)
                  }
                  options={contactTimes}
                />
                <ErrorMessage
                  name="bestTimeToContact"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
            </div>

            <Button type="submit">Next</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SpecificRequirement
