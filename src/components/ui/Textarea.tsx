import { useField } from 'formik'
import type { ChangeEvent } from 'react'

/**
 * Formik-integrated Textarea component
 * @param label - Label text for the textarea
 * @param name - Field name (must match Formik field)
 * @param isRequired - Show required asterisk
 * @param placeholder - Placeholder text
 * @param rows - Number of visible rows
 * @param disabled - Disable the textarea
 * @param onChange - Additional change handler
 */
interface TextareaProps {
  label: string
  name: string
  isRequired?: boolean
  placeholder?: string
  rows?: number
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = ({
  label,
  name,
  isRequired = false,
  placeholder = '',
  rows = 3,
  disabled = false,
  onChange,
}: TextareaProps) => {
  const [field, meta] = useField(name)
  const hasError = Boolean(meta.touched && meta.error)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
        {label} {isRequired ? <span className="text-[#D00416]">*</span> : null}
      </label>

      <textarea
        {...field}
        onChange={handleChange}
        id={name}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`w-full resize-none rounded-lg border px-4 py-3 transition-all duration-200 focus:outline-none ${
          hasError
            ? 'border-red-400 focus:border-red-500'
            : 'focus:border-primary border-[#D0D5DD]'
        }`}
      />

      {hasError ? (
        <div className="text-sm text-red-400">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default Textarea
