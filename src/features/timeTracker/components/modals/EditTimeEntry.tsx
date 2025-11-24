"use client";

import { useDispatch, useSelector } from "react-redux";
import { closeEditTimeEntryModal } from "../../../../redux/slice/modalSlice";
import { type RootState } from "../../../../redux/store";

export default function EditTimeEntryModal() {
  const dispatch = useDispatch();
  const { editTimeEntryModal } = useSelector((state: RootState) => state.modal);

  if (!editTimeEntryModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-1xs">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => dispatch(closeEditTimeEntryModal())}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-lg font-inter text-gray-900 mb-4">
          Edit Time Entry
        </h2>

        <form className="space-y-4">
          {/* Date */}
          <div>
            <label className="block text-sm font-inter text-gray-700">Date</label>
            <input
              type="date"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Start & End Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-inter text-gray-700">Start Time</label>
              <input
                type="time"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-inter text-gray-700">End Time</label>
              <input
                type="time"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-inter text-gray-700">Description</label>
            <textarea
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500 resize-none"
              rows={2}
            />
          </div>

          {/* Save / Cancel Buttons */}
          <div className="space-y-2 pt-2">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-green-600 text-white py-2 rounded-md font-inter transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => dispatch(closeEditTimeEntryModal())}
              className="w-full border border-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition font-inter"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
