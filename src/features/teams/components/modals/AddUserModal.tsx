'use client'

import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import { closeAddUserModal } from '../../../../redux/slice/modalSlice'

export default function AddUserModal() {
  const dispatch = useDispatch()

  return (
    <div className="backdrop-blur-2xs fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Add User</h2>
          <button
            onClick={() => dispatch(closeAddUserModal())}
            className="text-gray-500 transition hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter client name"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Role</label>
            <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select Role</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Regular User</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Team</label>
            <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select Team</option>
              <option>Development Team</option>
              <option>Design Team</option>
              <option>Marketing Team</option>
            </select>
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
              className="bg-primary w-full rounded-md py-2 font-medium text-white transition hover:bg-[#5bb13e]"
            >
              Send Invitation
            </button>
            <button
              type="button"
              onClick={() => dispatch(closeAddUserModal())}
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
