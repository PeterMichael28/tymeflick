'use client'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { closeSubmissionRejectedModal } from '../../../../redux/slice/modalSlice'
import { XCircle } from 'lucide-react'

const SubmissionRejectedModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleContinue = () => {
    dispatch(closeSubmissionRejectedModal())
    navigate('/reject')
  }

  return (
    <div className="backdrop-blur-1xs fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[380px] rounded-2xl bg-white p-8 text-center shadow-xl md:w-[420px]">
        {/* Icon */}
        <div className="mb-5 flex justify-center">
          <div className="rounded-full bg-[#FDECEC] p-4">
            <XCircle className="text-[#E03E3E]" size={64} strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-bricolage mb-3 text-xl font-bold text-gray-900">
          Submission Rejected
        </h2>

        {/* Message */}
        <p className="font-inter mb-6 text-sm leading-relaxed text-gray-600">
          The submission by <strong>Sofia</strong> for week 05/06/2025 –
          11/06/2025 has been rejected.
        </p>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full rounded-lg bg-[#70C94C] py-3 font-semibold text-white transition hover:bg-[#5BB63B]"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default SubmissionRejectedModal
