'use client'

import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import { closeCreateTeamModal } from '../../../../redux/slice/modalSlice'
import DropDown from '../../../../features/project/ui/dropDown'

export default function CreateNewTeamModal() {
  const dispatch = useDispatch()

  return (
    <div className="backdrop-blur-2xs fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Create New Team
          </h2>
          <button
            onClick={() => dispatch(closeCreateTeamModal())}
            className="text-gray-500 transition hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Team Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter client name"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter project name"
              className="mt-1 h-20 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <DropDown
              options={[
                'Bassey Bassey',
                'Sarah Johnson',
              ]}
              value="Select Manager"
              onChange={console.log}
              placeholder="Filter"
              className="w-full"
            />
          </div>

          {/* Team Colors */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Team Colour Tag
            </label>
            <div className="mt-2 flex items-center gap-3">
              {[
                'bg-primary',
                'bg-green-500',
                'bg-purple-500',
                'bg-blue-500',
                'bg-red-500',
                'bg-yellow-400',
              ].map((color, i) => (
                <div
                  key={i}
                  className={`h-6 w-6 rounded-full ${color} cursor-pointer border border-gray-200 transition hover:scale-110`}
                ></div>
              ))}
            </div>
          </div>

          {/* Checkbox */}
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input type="checkbox" className="accent-[#5bb13e]" />
            <span>Send welcome email</span>
          </label>

          {/* Buttons */}
          <div className="space-y-2 pt-2">
            <button
              type="button"
              className="bg-primary w-full rounded-md py-2 font-medium text-white transition hover:bg-primary/90"
            >
              Create Team
            </button>
            <button
              type="button"
              onClick={() => dispatch(closeCreateTeamModal())}
              className="w-full rounded-md py-2 font-medium text-gray-600 transition hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
