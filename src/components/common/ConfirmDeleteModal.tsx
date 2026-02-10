import { AlertCircle } from 'lucide-react'
import { BaseModal } from './BaseModal'

/**
 * Reusable delete confirmation modal
 * @param isOpen - Control modal visibility
 * @param onClose - Close handler
 * @param onConfirm - Confirm delete handler
 * @param title - Modal title
 * @param message - Warning message
 * @param confirmText - Confirm button text (default: "Delete")
 * @param isLoading - Loading state for confirm button
 */
interface ConfirmDeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  isLoading?: boolean
}

export const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Delete',
  isLoading = false,
}: ConfirmDeleteModalProps) => {
  const handleConfirm = () => {
    if (!isLoading) {
      onConfirm()
    }
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="items-top mb-4 flex">
        <AlertCircle className="mr-2 h-15 w-15 shrink-0 text-red-600" />
        <p className="text-sm text-gray-600">{message}</p>
      </div>

      <button
        type="button"
        onClick={handleConfirm}
        disabled={isLoading}
        className="w-full rounded-md bg-red-600 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? 'Deleting...' : confirmText}
      </button>

      <button
        type="button"
        onClick={onClose}
        disabled={isLoading}
        className="mt-3 w-full rounded-md py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed"
      >
        Cancel
      </button>
    </BaseModal>
  )
}
