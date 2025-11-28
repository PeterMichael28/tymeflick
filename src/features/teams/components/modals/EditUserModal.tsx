"use client";

import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { closeEditUserModal } from "../../../../redux/slice/modalSlice";

export default function EditUserModal() {
  const dispatch = useDispatch();

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-2xs z-40"
        onClick={() => dispatch(closeEditUserModal())}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg relative p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-lg font-semibold text-gray-800">Edit User</h2>
            <button
              onClick={() => dispatch(closeEditUserModal())}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-5 h-5" />
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
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
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
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Role */}
            <div>
              <label className="text-sm font-medium text-gray-700">Role</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500">
                <option>User</option>
                <option>Manager</option>
                <option>Admin</option>
              </select>
            </div>

            {/* Team */}
            <div>
              <label className="text-sm font-medium text-gray-700">Team</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500">
                <option>Development Team</option>
                <option>Marketing Team</option>
                <option>Design Team</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="text-sm font-medium text-gray-700">Status</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Send welcome email */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="welcome"
                className="accent-[#5bb13e]"
              />
              <label htmlFor="welcome" className="text-sm text-gray-700">
                Send welcome email
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-3">
              <button
                type="submit"
                className="bg-primary hover:bg-[#5bb13e] text-white w-full py-2 rounded-md text-sm font-medium transition"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => dispatch(closeEditUserModal())}
                className="border border-gray-300 text-gray-700 w-full py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
