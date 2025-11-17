import { useField } from 'formik'
import type { FC } from 'react'


type InputProps = {
  label: string
  name: string
  type?: string
  isRequired?: boolean
  placeholder?: string
}
const Input:FC<InputProps> = ({label, name, type, isRequired, placeholder}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label htmlFor={name} className='text-grey900 text-[14px] font-inter font-normal'>{label}</label>

        <input 
          id={name} 
          type={type} 
          placeholder={placeholder} 
          {...useField({ name })}
          required={isRequired}
          className="border border-[#D0D5DD] p-2 rounded-lg focus:outline-primary " 
        />
      
    </div>
  )
}

export default Input
