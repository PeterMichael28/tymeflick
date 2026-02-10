import { useState, useRef, useEffect, useCallback, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

/**
 * Dropdown menu item
 */
export interface DropdownMenuItem {
  label: string
  onClick: () => void
  icon?: ReactNode
  variant?: 'default' | 'danger'
  disabled?: boolean
}

/**
 * Dropdown menu props
 */
interface DropdownMenuProps {
  /** Trigger element that opens the dropdown */
  trigger: ReactNode
  /** Menu items */
  items: DropdownMenuItem[]
  /** Optional custom className for dropdown container */
  className?: string
}

/**
 * Reusable dropdown menu component with portal rendering
 * Automatically positions above/below based on available space
 *
 * @example
 * <DropdownMenu
 *   trigger={<MoreVertical className="h-5 w-5 cursor-pointer" />}
 *   items={[
 *     { label: 'Edit', onClick: handleEdit },
 *     { label: 'Delete', onClick: handleDelete, variant: 'danger' },
 *   ]}
 * />
 */
export const DropdownMenu = ({
  trigger,
  items,
  className = '',
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !menuRef.current) {
      return
    }

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const menuRect = menuRef.current.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth

    // Calculate vertical position
    const spaceBelow = viewportHeight - triggerRect.bottom
    const spaceAbove = triggerRect.top
    const menuHeight = menuRect.height || 150 // fallback estimate

    let top: number
    if (spaceBelow >= menuHeight || spaceBelow > spaceAbove) {
      // Show below
      top = triggerRect.bottom + 4
    } else {
      // Show above
      top = triggerRect.top - menuHeight - 4
    }

    // Calculate horizontal position
    let left = triggerRect.right - 176 // 176px = w-44
    if (left < 8) {
      left = 8
    }
    if (left + 176 > viewportWidth - 8) {
      left = viewportWidth - 184
    }

    setPosition({ top, left })
  }, [])

  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleItemClick = useCallback((onClick: () => void) => {
    onClick()
    setIsOpen(false)
  }, [])

  // Position after opening
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure menu is rendered
      requestAnimationFrame(calculatePosition)
    }
  }, [isOpen, calculatePosition])

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Close on scroll
  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => setIsOpen(false)
      window.addEventListener('scroll', handleScroll, true)
      return () => window.removeEventListener('scroll', handleScroll, true)
    }
  }, [isOpen])

  return (
    <>
      <div ref={triggerRef} onClick={handleToggle} className="inline-flex">
        {trigger}
      </div>

      {isOpen
        ? createPortal(
            <>
              {/* Backdrop */}
              <div className="fixed inset-0 z-40" onClick={handleClose} />
              {/* Menu */}
              <div
                ref={menuRef}
                className={`fixed z-50 w-44 rounded-lg border border-gray-200 bg-white shadow-lg ${className}`}
                style={{ top: position.top, left: position.left }}
              >
                <ul className="divide-y divide-gray-100 text-sm">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        item.disabled
                          ? undefined
                          : handleItemClick(item.onClick)
                      }
                      className={`flex cursor-pointer items-center gap-2 px-4 py-2 transition-colors ${
                        item.disabled
                          ? 'cursor-not-allowed opacity-50'
                          : item.variant === 'danger'
                            ? 'text-red-600 hover:bg-red-50'
                            : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.icon ? item.icon : null}
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </>,
            document.body
          )
        : null}
    </>
  )
}
