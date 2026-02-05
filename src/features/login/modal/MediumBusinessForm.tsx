import type { FC } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import type {
  User,
  MediumBusinessAccountPayload,
} from '../../../types/auth.types'
import { useCreateAccountProfile } from '../../../hooks/authQuery'
import Input from '../../../components/ui/input'
import Button from '../../../components/button/button'

interface MediumBusinessFormProps {
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
  adminFullName: Yup.string().required('Admin full name is required'),
  adminEmail: Yup.string()
    .email('Invalid email')
    .required('Admin email is required'),
  expectedNumberOfUsers: Yup.number()
    .min(1, 'Must be at least 1')
    .required('Expected users is required'),
  businessDescription: Yup.string().optional(),
  businessWebsite: Yup.string().url('Enter a valid URL').optional(),
  businessPhone: Yup.string().optional(),
  customDomain: Yup.string().optional(),
})

/**
 * Medium Business Account Form
 * All small business fields + expectedNumberOfUsers
 */
export const MediumBusinessForm: FC<MediumBusinessFormProps> = ({
  user,
  onBack,
}) => {
  const createProfileMutation = useCreateAccountProfile()

  const initialValues = {
    businessName: '',
    businessSlug: '',
    adminFullName: `${user.firstName} ${user.lastName}`,
    adminEmail: user.email,
    expectedNumberOfUsers: 10,
    businessDescription: '',
    businessWebsite: '',
    businessPhone: user.phoneNumber || '',
    customDomain: '',
  }

  const handleSubmit = (values: typeof initialValues) => {
    const payload: MediumBusinessAccountPayload = {
      termsAccepted: true,
      businessName: values.businessName,
      businessSlug: values.businessSlug,
      adminFullName: values.adminFullName,
      adminEmail: values.adminEmail,
      expectedNumberOfUsers: values.expectedNumberOfUsers,
      businessDescription: values.businessDescription || undefined,
      businessWebsite: values.businessWebsite || undefined,
      businessPhone: values.businessPhone || undefined,
      customDomain: values.customDomain || undefined,
    }
    createProfileMutation.mutate(payload)
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-neutral600 font-bricolage text-center md:text-[32px]">
          Medium Business Account
        </p>
        <p className="text-neutral400 text-center font-normal md:text-[16px]">
          For growing teams with role-based access needs
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
                placeholder="Acme Corporation"
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
                  placeholder="acme-corp"
                  isRequired
                />
                <p className="text-neutral400 mt-1 text-xs">
                  tymeflick.com/{values.businessSlug || 'your-business'}
                </p>
              </div>
            </div>

            {/* Row 2: Admin Name & Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="adminFullName"
                label="Admin Full Name"
                placeholder="John Smith"
                isRequired
              />
              <Input
                name="adminEmail"
                label="Admin Email"
                placeholder="admin@acme.com"
                type="email"
                isRequired
              />
            </div>

            {/* Row 3: Expected Users & Custom Domain */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="expectedNumberOfUsers"
                label="Expected Number of Users"
                placeholder="50"
                type="number"
                isRequired
              />
              <Input
                name="customDomain"
                label="Custom Domain (Optional)"
                placeholder="timetracking.acme.com"
              />
            </div>

            {/* Row 4: Website & Phone */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="businessWebsite"
                label="Business Website"
                placeholder="https://acme.com"
                type="url"
              />
              <Input
                name="businessPhone"
                label="Business Phone"
                placeholder="+1-555-123-4567"
                type="tel"
              />
            </div>

            {/* Row 5: Description */}
            <Input
              name="businessDescription"
              label="Business Description"
              placeholder="Brief description of your business"
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

export default MediumBusinessForm
