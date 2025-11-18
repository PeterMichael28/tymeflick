import { useField } from 'formik'
import type { FC } from 'react'

type InputProps = {
  label: string
  name: string
  type?: string
  isRequired?: boolean
  placeholder?: string
}
const Input: FC<InputProps> = ({
  label,
  name,
  type,
  isRequired,
  placeholder,
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={name}
        className="text-grey900 font-inter text-[14px] font-normal"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...useField({ name })}
        required={isRequired}
        className="focus:outline-primary rounded-lg border border-[#D0D5DD] p-2"
      />
    </div>
  )
}

export default Input
