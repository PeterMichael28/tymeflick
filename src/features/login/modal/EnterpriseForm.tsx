import type { FC } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import type { User, EnterpriseAccountPayload } from '../../../types/auth.types'
import { useCreateAccountProfile } from '../../../hooks/authQuery'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'

interface EnterpriseFormProps {
  user: User
  onBack: () => void
}

const validationSchema = Yup.object({
  businessName: Yup.string().required('Business name is required'),
  businessSlug: Yup.string()
    .matches(
      /^[a-z0-9-]+$/,
      'Slug must be lowercase letters, numbers, and hyphens only'
    )
    .required('Business slug is required'),
  expectedNumberOfUsers: Yup.number()
    .min(1, 'Must be at least 1')
    .required('Expected users is required'),
  contactPersonFullName: Yup.string().required(
    'Contact person name is required'
  ),
  contactPersonEmail: Yup.string()
    .email('Invalid email')
    .required('Contact email is required'),
  contactPersonPhone: Yup.string().optional(),
  industry: Yup.string().optional(),
  currentTimeTrackingSolution: Yup.string().optional(),
  specificRequirements: Yup.string().optional(),
  preferredContactMethod: Yup.string().optional(),
  bestTimeToContact: Yup.string().optional(),
})

/**
 * Enterprise Account Form
 * Comprehensive form for large organizations
 */
export const EnterpriseForm: FC<EnterpriseFormProps> = ({ user, onBack }) => {
  const createProfileMutation = useCreateAccountProfile()

  const initialValues = {
    businessName: '',
    businessSlug: '',
    expectedNumberOfUsers: 100,
    contactPersonFullName: `${user.firstName} ${user.lastName}`,
    contactPersonEmail: user.email,
    contactPersonPhone: user.phoneNumber || '',
    industry: '',
    currentTimeTrackingSolution: '',
    specificRequirements: '',
    preferredContactMethod: 'email',
    bestTimeToContact: 'morning',
  }

  const handleSubmit = (values: typeof initialValues) => {
    const payload: EnterpriseAccountPayload = {
      termsAccepted: true,
      businessName: values.businessName,
      businessSlug: values.businessSlug,
      expectedNumberOfUsers: values.expectedNumberOfUsers,
      contactPersonFullName: values.contactPersonFullName,
      contactPersonEmail: values.contactPersonEmail,
      contactPersonPhone: values.contactPersonPhone || undefined,
      industry: values.industry || undefined,
      currentTimeTrackingSolution:
        values.currentTimeTrackingSolution || undefined,
      specificRequirements: values.specificRequirements || undefined,
      preferredContactMethod: values.preferredContactMethod || undefined,
      bestTimeToContact: values.bestTimeToContact || undefined,
    }
    createProfileMutation.mutate(payload)
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-neutral600 font-bricolage text-center md:text-[32px]">
          Enterprise Account
        </p>
        <p className="text-neutral400 text-center font-normal md:text-[16px]">
          For large organizations with advanced needs
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            {/* Row 1: Business Name & Slug */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="businessName"
                label="Business Name"
                placeholder="Acme Enterprise"
                isRequired
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('businessName', e.target.value)
                  const slug = e.target.value
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-|-$/g, '')
                  setFieldValue('businessSlug', slug)
                }}
              />
              <div>
                <Input
                  name="businessSlug"
                  label="Business Slug"
                  placeholder="acme-enterprise"
                  isRequired
                />
                <p className="text-neutral400 mt-1 text-xs">
                  tymeflick.com/{values.businessSlug || 'your-enterprise'}
                </p>
              </div>
            </div>

            {/* Row 2: Expected Users & Industry */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="expectedNumberOfUsers"
                label="Expected Number of Users"
                placeholder="500"
                type="number"
                isRequired
              />
              <Input
                name="industry"
                label="Industry"
                placeholder="Technology"
              />
            </div>

            {/* Row 3: Contact Person Name & Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="contactPersonFullName"
                label="Contact Person Full Name"
                placeholder="Jane Doe"
                isRequired
              />
              <Input
                name="contactPersonEmail"
                label="Contact Person Email"
                placeholder="jane@enterprise.com"
                type="email"
                isRequired
              />
            </div>

            {/* Row 4: Contact Phone & Preferred Method */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="contactPersonPhone"
                label="Contact Phone"
                placeholder="+1-555-111-2222"
                type="tel"
              />
              <Input
                name="preferredContactMethod"
                label="Preferred Contact Method"
                placeholder="email, phone, or meeting"
              />
            </div>

            {/* Row 5: Current Solution & Best Time */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="currentTimeTrackingSolution"
                label="Current Time Tracking Solution"
                placeholder="Spreadsheets, other tools..."
              />
              <Input
                name="bestTimeToContact"
                label="Best Time to Contact"
                placeholder="morning, afternoon, evening"
              />
            </div>

            {/* Row 6: Specific Requirements */}
            <Input
              name="specificRequirements"
              label="Specific Requirements"
              placeholder="Integration needs, custom features, etc."
            />

            {/* Terms notice */}
            <p className="text-neutral400 text-center text-sm">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>

            {/* Actions */}
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={onBack}
                disabled={createProfileMutation.isPending}
                className="text-neutral600 rounded-lg bg-[#F9F9F9] px-8 py-4 font-semibold disabled:opacity-50 md:px-16"
              >
                Back
              </button>
              <Button type="submit" loading={createProfileMutation.isPending}>
                Create Account
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EnterpriseForm
