'use client'

import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { closeEditUserModal } from '../../../../redux/slice/modalSlice'
import DropDown from '../../../../features/project/ui/dropDown'

export default function EditUserModal() {
  const dispatch = useDispatch()

  return (
    <>
      {/* Overlay */}
      <div
        className="backdrop-blur-2xs fixed inset-0 z-40 bg-black/30"
        onClick={() => dispatch(closeEditUserModal())}
      ></div>

      {/* Modal */}
      <div className="backdrop-blur-2xs fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-lg font-semibold text-gray-800">Edit User</h2>
            <button
              onClick={() => dispatch(closeEditUserModal())}
              className="text-gray-400 transition hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Bassey Bassey"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Bassey.Bassey@company.com"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-green-500 focus:outline-none"
              />
            </div>            

            {/* Role */}
            <div>
              <label className="text-sm font-medium text-gray-700">Role</label>
              <DropDown
                options={[
                  'Admin',
                  'Manager',
                  'Regular User',
                ]}
                value="Select Role"
                onChange={console.log}
                placeholder="Filter"
                className="w-full"
              />
            </div>

            {/* Team */}
            <div>
              <label className="text-sm font-medium text-gray-700">Team</label>
              <DropDown
                options={[
                  'Development Team',
                  'Design Team',
                  'Marketing Team',
                ]}
                value="Select Team"
                onChange={console.log}
                placeholder="Filter"
                className="w-full"
              />
            </div>

            {/* Status */}
            <div>
              <label className="text-sm font-medium text-gray-700">Status</label>
              <DropDown
                options={[
                  'Active',
                  'Inactive',
                ]}
                value="Select Status"
                onChange={console.log}
                placeholder="Filter"
                className="w-full"
              />
            </div>

            {/* Send welcome email */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="welcome"
                className="accent-primary"
              />
              <label htmlFor="welcome" className="text-sm text-gray-700">
                Send welcome email
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-3">
              <button
                type="submit"
                className="bg-primary w-full rounded-md py-2 text-sm font-medium text-white transition hover:bg-[#5bb13e]"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => dispatch(closeEditUserModal())}
                className="w-full rounded-md py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
