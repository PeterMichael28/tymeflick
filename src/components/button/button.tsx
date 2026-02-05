import type { FC } from 'react'
import { ClipLoader } from 'react-spinners'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'submit' | 'button'
  loading?: boolean
  disabled?: boolean
}

const Button: FC<Props> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-shades50 font-bricolage flex cursor-pointer items-center justify-center gap-2 rounded-xl px-8 py-3 text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      type={type}
      disabled={loading || disabled}
    >
      {loading ? <ClipLoader size={20} color="#fff" /> : children}
    </button>
  )
}

export default Button
