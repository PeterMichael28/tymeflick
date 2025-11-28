"use client";

import { useDispatch } from "react-redux";
import { X } from "lucide-react";
import { closeCreateTeamModal } from "../../../../redux/slice/modalSlice";

export default function CreateNewTeamModal() {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-2xs z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Create New Team</h2>
          <button
            onClick={() => dispatch(closeCreateTeamModal())}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Team Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter client name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter project name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm h-20 resize-none focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Manager</label>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select Manager</option>
              <option>Bassey Bassey</option>
              <option>Sarah Johnson</option>
              <option>David Smith</option>
            </select>
          </div>

          {/* Team Colors */}
          <div>
            <label className="text-sm font-medium text-gray-700">Team Colour Tag</label>
            <div className="flex items-center gap-3 mt-2">
              {["bg-primary", "bg-green-500", "bg-purple-500", "bg-blue-500", "bg-red-500", "bg-yellow-400"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-full ${color} cursor-pointer border border-gray-200 hover:scale-110 transition`}
                  ></div>
                )
              )}
            </div>
          </div>

          {/* Checkbox */}
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input type="checkbox" className="accent-[#5bb13e]" />
            <span>Send welcome email</span>
          </label>

          {/* Buttons */}
          <div className="pt-2 space-y-2">
            <button
              type="button"
              className="w-full bg-primary hover:bg-[#5bb13e] text-white py-2 rounded-md font-medium transition"
            >
              Send Invitation
            </button>
            <button
              type="button"
              onClick={() => dispatch(closeCreateTeamModal())}
              className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 rounded-md transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
