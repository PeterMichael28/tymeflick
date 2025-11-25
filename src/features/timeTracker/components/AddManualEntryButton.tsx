'use client'

import { useDispatch } from 'react-redux'
import { openAddTimeManualEntryModal } from '../../../redux/slice/modalSlice' // <-- Correct import

export default function AddManualEntryButton() {
  const dispatch = useDispatch()

  const handleAddTimeManual = () => {
    dispatch(
      openAddTimeManualEntryModal({
        id: '',
        date: '',
        startTime: '',
        endTime: '',
        description: '',
        billable: true,
        client: '',
        project: '',
      })
    )
  }

  return (
    <button
      onClick={handleAddTimeManual}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 py-3 transition hover:bg-gray-300"
    >
      <svg width="22" height="22" fill="black">
        <path d="M14 1a1 1 0 1 0-2 0v9H3a1 1 0 1 0 0 2h9v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V1Z" />
      </svg>
      <span className="text-sm font-medium text-black">Add Manual Entry</span>
    </button>
  )
}
