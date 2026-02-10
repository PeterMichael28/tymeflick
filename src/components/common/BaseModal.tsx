import type { ReactNode } from 'react'
import { X } from 'lucide-react'

/**
 * Reusable modal wrapper component
 * @param isOpen - Control modal visibility
 * @param onClose - Close handler
 * @param title - Modal header title
 * @param children - Modal content
 * @param footer - Optional footer with action buttons
 * @param size - Modal width: 'sm' (384px), 'md' (537px), 'lg' (640px)
 */
interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'max-w-sm',
  md: 'max-w-[537px]',
  lg: 'max-w-lg',
} as const

export const BaseModal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
}: BaseModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="backdrop-blur-2xs fixed inset-0 z-50 flex max-h-screen items-center justify-center overflow-auto bg-black/30 p-4">
      <div
        className={`relative max-h-[90vh] w-full ${sizeMap[size]} overflow-y-auto rounded-xl bg-white p-6 shadow-xl`}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-black md:text-[28px]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>

        {/* Footer */}
        {footer ? <div className="mt-4">{footer}</div> : null}
      </div>
    </div>
  )
}
