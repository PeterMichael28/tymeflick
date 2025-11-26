'use client'

<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { closeDeleteTimeEntryModal } from "../../../../redux/slice/modalSlice";
import { type RootState } from "../../../../redux/store";
import { X } from "lucide-react";
=======
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteTimeEntryModal } from '../../../../redux/slice/modalSlice'
import { type RootState } from '../../../../redux/store'
>>>>>>> 5f820ff209764b5de508ad2c9f74591f7131f474

export default function DeleteTimeEntryModal() {
  const dispatch = useDispatch()
  const { deleteTimeEntryModal } = useSelector(
    (state: RootState) => state.modal
  )

  if (!deleteTimeEntryModal) return null

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-1xs">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Delete Time Entry</h2>
            <button
            onClick={() => dispatch(closeDeleteTimeEntryModal())}
            className="text-gray-500 hover:text-gray-700 transition"
            >
            <X className="w-5 h-5" />
            </button>
        </div>
=======
    <div className="backdrop-blur-1xs fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={() => dispatch(closeDeleteTimeEntryModal())}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          Delete Time Entry
        </h2>
>>>>>>> 5f820ff209764b5de508ad2c9f74591f7131f474

        <div className="mb-4 flex items-start gap-2 text-sm text-gray-700">
          <span className="text-lg text-red-500">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.375 13.375V6.5M1 13.375C1 10.0929 2.30379 6.94532 4.62455 4.62455C6.94532 2.30379 10.0929 1 13.375 1C16.6571 1 19.8047 2.30379 22.1254 4.62455C24.4462 6.94532 25.75 10.0929 25.75 13.375C25.75 16.6571 24.4462 19.8047 22.1254 22.1254C19.8047 24.4462 16.6571 25.75 13.375 25.75C10.0929 25.75 6.94532 24.4462 4.62455 22.1254C2.30379 19.8047 1 16.6571 1 13.375Z"
                stroke="#D00416"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <p>
            Are you sure you want to delete this time entry? <br />
            <span className="text-gray-500">This action cannot be undone.</span>
          </p>
        </div>

        <div className="mb-6 rounded-md border border-gray-100 bg-gray-50 p-3">
          <p className="font-medium text-gray-800">Daily standup meeting</p>
          <p className="text-sm text-gray-600">9:00 AM - 10:30 AM (1h 30m)</p>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => dispatch(closeDeleteTimeEntryModal())}
            className="w-full rounded-md bg-[#D00416] py-2 font-medium text-white transition hover:bg-red-700"
          >
            Delete Entry
          </button>
          <button
            onClick={() => dispatch(closeDeleteTimeEntryModal())}
            className="w-full rounded-md border border-gray-100 py-2 text-gray-700 transition hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
