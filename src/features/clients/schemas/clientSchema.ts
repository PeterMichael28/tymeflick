import * as Yup from 'yup'

/**
 * Client form validation schema
 * Based on API payload: name, description, email, phone, website, notes, logoUrl
 */
export const clientSchema = Yup.object().shape({
  name: Yup.string()
    .required('Client name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  description: Yup.string()
    .max(1000, 'Description must be less than 1000 characters')
    .nullable(),
  email: Yup.string().email('Invalid email address').nullable(),
  phone: Yup.string().nullable(),
  website: Yup.string().url('Invalid website URL').nullable(),
  notes: Yup.string()
    .max(500, 'Notes must be less than 500 characters')
    .nullable(),
})

/**
 * Initial values for add client form
 */
export const clientInitialValues = {
  name: '',
  description: '',
  email: '',
  phone: '',
  website: '',
  notes: '',
}

export type ClientFormValues = typeof clientInitialValues

/**
 * Payload sent to API (includes logoUrl from upload)
 */
export interface CreateClientPayload extends ClientFormValues {
  logoUrl?: string
}
