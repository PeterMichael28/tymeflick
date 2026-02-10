import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import {
  closeAddClientModal,
  closeEditClientModal,
} from '../../../redux/slice/modalSlice'
import { BaseModal } from '../../../components/common'
import Input from '../../../components/ui/input'
import Textarea from '../../../components/ui/Textarea'
import { clientSchema } from '../schemas/clientSchema'
import {
  useCreateClient,
  useUpdateClient,
  type UpdateClientPayload,
} from '../queries'
import { useUploadAsset } from '../../../api/uploadQuery'
import type { ClientFormValues } from '../schemas/clientSchema'
import type { RootState } from '../../../redux/store'

interface ClientModalProps {
  mode: 'add' | 'edit'
}

/**
 * Client modal for add and edit operations
 * Uses selectedClient from Redux for edit mode
 */
export default function ClientModal({ mode }: ClientModalProps) {
  const dispatch = useDispatch()
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Get selected client from Redux for edit mode
  const selectedClient = useSelector(
    (state: RootState) => state.modal.selectedClient
  )

  const isEditMode = mode === 'edit'

  // Image state
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    isEditMode ? (selectedClient?.logoUrl ?? null) : null
  )
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const { mutateAsync: uploadAsset, isPending: isUploading } = useUploadAsset()
  const { mutate: createClient, isPending: isCreating } = useCreateClient()
  const { mutate: updateClient, isPending: isUpdating } = useUpdateClient()

  const isLoading = isUploading || isCreating || isUpdating

  // Initial values for form
  const initialValues: ClientFormValues =
    isEditMode && selectedClient
      ? {
          name: selectedClient.name || '',
          description: selectedClient.description || '',
          email: selectedClient.email || '',
          phone: selectedClient.phone || '',
          website: selectedClient.website || '',
          notes: selectedClient.notes || '',
        }
      : {
          name: '',
          description: '',
          email: '',
          phone: '',
          website: '',
          notes: '',
        }

  // Reset preview when selectedClient changes
  useEffect(() => {
    if (isEditMode && selectedClient?.logoUrl) {
      setPreviewUrl(selectedClient.logoUrl)
    }
  }, [isEditMode, selectedClient?.logoUrl])

  const handleClose = () => {
    if (isEditMode) {
      dispatch(closeEditClientModal())
    } else {
      dispatch(closeAddClientModal())
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      return
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return
    }

    setSelectedFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = async (values: ClientFormValues) => {
    let logoUrl: string | undefined

    // Upload image first if a new file is selected
    if (selectedFile) {
      try {
        const uploadResult = await uploadAsset({
          file: selectedFile,
          useCase: 'client-logo',
        })
        logoUrl = uploadResult.fullUrl
      } catch {
        // Error already handled by useUploadAsset
        return
      }
    }

    if (isEditMode && selectedClient) {
      // Build payload with only changed fields
      const payload: Record<string, unknown> = { id: selectedClient.id }

      // Compare each field and only include changed ones
      if (values.name !== selectedClient.name) {
        payload.name = values.name
      }
      if (values.description !== (selectedClient.description || '')) {
        payload.description = values.description
      }
      if (values.email !== (selectedClient.email || '')) {
        payload.email = values.email
      }
      if (values.phone !== (selectedClient.phone || '')) {
        payload.phone = values.phone
      }
      if (values.website !== (selectedClient.website || '')) {
        payload.website = values.website
      }
      if (values.notes !== (selectedClient.notes || '')) {
        payload.notes = values.notes
      }
      if (logoUrl) {
        payload.logoUrl = logoUrl
      }

      // Only send if there are changes
      if (Object.keys(payload).length > 1) {
        updateClient(payload as unknown as UpdateClientPayload, {
          onSuccess: () => handleClose(),
        })
      } else {
        handleClose()
      }
    } else {
      // Create new client
      createClient(
        { ...values, logoUrl },
        {
          onSuccess: () => handleClose(),
        }
      )
    }
  }

  return (
    <BaseModal
      isOpen={true}
      onClose={handleClose}
      title={isEditMode ? 'Edit Client' : 'Add New Client'}
      size="md"
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Add Image Section */}
      <div className="mb-6 flex items-center gap-3">
        <div
          onClick={handleUploadClick}
          className="flex h-[90px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-md border border-dashed border-green-400 bg-[#AD85D633]"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.25 22.5C17.4632 22.5 22.5 17.4632 22.5 11.25C22.5 5.0368 17.4632 0 11.25 0C5.0368 0 0 5.0368 0 11.25C0 17.4632 5.0368 22.5 11.25 22.5ZM12.5 7.5C12.5 6.80964 11.9404 6.25 11.25 6.25C10.5596 6.25 10 6.80964 10 7.5V10H7.5C6.80964 10 6.25 10.5596 6.25 11.25C6.25 11.9404 6.80964 12.5 7.5 12.5H10V15C10 15.6904 10.5596 16.25 11.25 16.25C11.9404 16.25 12.5 15.6904 12.5 15V12.5H15C15.6904 12.5 16.25 11.9404 16.25 11.25C16.25 10.5596 15.6904 10 15 10H12.5V7.5Z"
                fill="#66C61C"
              />
            </svg>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Client Logo/Photo</p>
          <p className="text-xs text-gray-500">PNG/JPEG | 5mb max</p>
        </div>
      </div>

      {/* Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={clientSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {() => (
          <Form className="space-y-4">
            <Input
              label="Client Name"
              name="name"
              placeholder="Enter client name"
              isRequired
            />

            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Contact@client.com"
            />

            <Input
              label="Website"
              name="website"
              type="url"
              placeholder="https://client.com"
            />

            <Textarea
              label="About"
              name="description"
              placeholder="Brief description about the client company"
              rows={3}
            />

            <Textarea
              label="Notes"
              name="notes"
              placeholder="Additional notes about the client"
              rows={3}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90 w-full cursor-pointer rounded-md py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading
                ? isUploading
                  ? 'Uploading...'
                  : isEditMode
                    ? 'Updating...'
                    : 'Adding...'
                : isEditMode
                  ? 'Update Client'
                  : 'Add Client'}
            </button>

            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="w-full cursor-pointer rounded-md py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </BaseModal>
  )
}
