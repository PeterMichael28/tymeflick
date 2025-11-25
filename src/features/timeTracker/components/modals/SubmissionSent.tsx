'use client'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { closeSubmissionSentModal } from '../../../../redux/slice/modalSlice'
import { CheckCircle2 } from 'lucide-react'

const SubmissionSentModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleContinue = () => {
    dispatch(closeSubmissionSentModal())
    navigate('/timeTracker')
  }

  return (
    <div className="backdrop-blur-1xs fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[380px] rounded-2xl bg-white p-8 text-center shadow-xl md:w-[420px]">
        {/* Icon */}
        <div className="mb-5 flex justify-center">
          <div className="rounded-full bg-[#E6F8E5] p-4">
            <CheckCircle2
              className="text-[#70C94C]"
              size={64}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-bricolage mb-3 text-xl font-bold text-gray-900">
          Submission Sent
        </h2>

        {/* Message */}
        <p className="font-inter mb-6 text-sm leading-relaxed text-gray-600">
          Your weekly time log has been submitted and is now pending manager
          approval. You’ll be notified once it’s reviewed.
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

export default SubmissionSentModal
