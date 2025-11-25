'use client'

import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import {
  openSubmissionRejectedModal,
  closeRejectionNotesModal,
} from '../../../../redux/slice/modalSlice'

const RejectionNotesModal = () => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeRejectionNotesModal())
  }

  const handleSave = () => {
    dispatch(closeRejectionNotesModal())
    dispatch(openSubmissionRejectedModal())
  }

  return (
    <div className="backdrop-blur-1xs fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[380px] rounded-2xl bg-white p-6 text-center shadow-xl md:w-[420px]">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bricolage text-lg font-bold text-gray-900">
            Rejection Notes Required
          </h2>
          <button onClick={handleClose}>
            <X className="text-gray-500 hover:text-gray-700" size={20} />
          </button>
        </div>

        {/* Decision */}
        <div className="mb-4 text-left">
          <label className="text-sm font-medium text-gray-700">Decision</label>
          <input
            type="text"
            value="Reject"
            readOnly
            className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800"
          />
        </div>

        {/* Reason */}
        <div className="mb-6 text-left">
          <label className="text-sm font-medium text-gray-700">
            Reason/Notes <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Please provide a reason for your decision"
            className="mt-1 h-24 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <button
          className="mb-2 w-full rounded-lg bg-[#70C94C] py-3 font-semibold text-white transition hover:bg-[#5BB63B]"
          onClick={handleSave}
        >
          Save Changes
        </button>
        <button
          onClick={handleClose}
          className="w-full py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default RejectionNotesModal
