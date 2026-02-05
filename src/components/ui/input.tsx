import { useField } from 'formik'
import type { ChangeEvent } from 'react'

type InputProps = {
  label: string
  name: string
  type?: string
  isRequired?: boolean
  placeholder?: string
  height?: 'small' | 'medium' | 'large' | string
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  label,
  name,
  type = 'text',
  isRequired = false,
  placeholder = '',
  height = '48px',
  disabled = false,
  onChange,
}: InputProps) => {
  const [field, meta] = useField(name)
  const hasError = Boolean(meta.touched && meta.error)

  // preset height map
  const heightMap: Record<string, string> = {
    small: '40px',
    medium: '55px',
    large: '70px',
  }

  // pick base height and adjust if there's an error
  const baseHeight = heightMap[height] || height

  // Custom change handler that chains with Formik
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e)
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={name}
        className="text-grey900 font-bricolage flex gap-2 text-[16px] font-normal"
      >
        {label} {isRequired && <span className="text-[#D00416]">*</span>}
      </label>

      <input
        {...field}
        onChange={handleChange}
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          height: baseHeight,
          boxSizing: 'border-box',
          transition: 'height 0.2s ease',
        }}
        className={`w-full rounded-lg border px-4 py-2 transition-all duration-200 focus:outline-none ${
          hasError
            ? 'border-red-400 focus:border-red-500'
            : 'focus:border-primary border-[#D0D5DD]'
        }`}
      />

      {hasError && <div className="text-sm text-red-400">{meta.error}</div>}
    </div>
  )
}

export default Input
