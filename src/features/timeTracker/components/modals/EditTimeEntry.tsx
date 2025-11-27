'use client'

import { X } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux'
import { closeEditTimeEntryModal } from '../../../../redux/slice/modalSlice'
import { type RootState } from '../../../../redux/store'

export default function EditTimeEntryModal() {
  const dispatch = useDispatch()
  const { editTimeEntryModal } = useSelector((state: RootState) => state.modal)

  if (!editTimeEntryModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-1xs">

      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <div className="backdrop-blur-1xs fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={() => dispatch(closeEditTimeEntryModal())}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="font-inter mb-4 text-lg text-gray-900">
              Edit Time Entry
            </h2>

            <form className="space-y-4">

              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Edit Time Entry</h2>
                <button
                  onClick={() => dispatch(closeEditTimeEntryModal())}
                  className="text-gray-500 hover:text-gray-700 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Date */}
              <div>
                <label className="font-inter block text-sm text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Start & End Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-inter block text-sm text-gray-700">
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="font-inter block text-sm text-gray-700">
                    End Time
                  </label>
                  <input
                    type="time"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="font-inter block text-sm text-gray-700">
                  Description
                </label>
                <textarea
                  className="mt-1 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
                  rows={2}
                />
              </div>

              {/* Save / Cancel Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="submit"
                  className="bg-primary font-inter w-full rounded-md py-2 text-white transition hover:bg-green-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(closeEditTimeEntryModal())}
                  className="font-inter w-full rounded-md border border-gray-100 py-2 text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
