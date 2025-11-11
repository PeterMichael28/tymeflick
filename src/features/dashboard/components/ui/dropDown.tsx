import type { FC } from 'react'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { createPortal } from 'react-dom'

interface Option {
  value: string
  label: string
}

interface DropDownProps {
  options: string[] | Option[]
  onChange: (option: string) => void
  value: string
  placeholder: string
  className?: string
}

const DropDown: FC<DropDownProps> = ({
  options,
  onChange,
  value,
  placeholder,
  className,
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div className={` ${className || ''}`} ref={ref}>
      {/* Trigger */}
      <div
        className="font-bricolage flex h-8 w-full cursor-pointer items-center justify-between rounded-md border border-[#D0D5DD] bg-[#FFF1EB17] p-2 text-[9px] text-[#667185] capitalize"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p>{value || placeholder}</p>
        <ChevronDown
          size="16"
          className={`ml-2 transition-transform ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {/* Overlay */}
      {open &&
        createPortal(
          <>
            {/* Transparent overlay to close dropdown on click outside */}
            <div onClick={() => setOpen(false)}></div>

            <div
              ref={menuRef}
              className="z-50 max-h-[200px] w-[100px] overflow-y-auto rounded bg-white p-2 shadow-lg"
              style={{
                position: 'absolute',
                top: ref.current
                  ? ref.current.getBoundingClientRect().bottom + window.scrollY
                  : 0,
                left: ref.current
                  ? ref.current.getBoundingClientRect().left + window.scrollX
                  : 0,
              }}
            >
              {options.map((option, index) => {
                const label = typeof option === 'string' ? option : option.label
                const val = typeof option === 'string' ? option : option.value
                return (
                  <div
                    key={index}
                    onClick={() => {
                      onChange(val)
                      setOpen(false)
                    }}
                    className="hover:bg-primary50 hover:text-primary150 cursor-pointer rounded-lg px-2 py-2 text-[10px] text-black capitalize hover:font-bold"
                  >
                    {label}
                  </div>
                )
              })}
            </div>
          </>,
          document.body
        )}
    </div>
  )
}

export default DropDown
