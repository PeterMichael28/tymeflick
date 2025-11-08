import { useField } from 'formik'

type InputProps = {
  label: string
  name: string
  type?: string
  isRequired?: boolean
  placeholder: string
}

const Input = ({
  label,
  name,
  type = 'text',
  isRequired = false,
  placeholder,
}: InputProps) => {
  const [field, meta] = useField(name)
  const hasError = meta.touched && meta.error

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-grey900 font-bricolage text-[19px] font-normal"
      >
        {label} {isRequired && '*'}
      </label>

      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`h-[75px] rounded-lg border p-5 focus:outline-none transition-all duration-200 ${
          hasError
            ? 'border-red-400 focus:border-red-500'
            : 'border-[#D0D5DD] focus:border-primary'
        }`}
      />

      {hasError && (
        <div className="text-red-400 text-sm">{meta.error}</div>
      )}
    </div>
  )
}

export default Input
