"use client";

import { useDispatch, useSelector } from "react-redux";
import { closeDeleteTimeEntryModal } from "../../../../redux/slice/modalSlice";
import { type RootState } from "../../../../redux/store";

export default function DeleteTimeEntryModal() {
  const dispatch = useDispatch();
  const { deleteTimeEntryModal } = useSelector((state: RootState) => state.modal);

  if (!deleteTimeEntryModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-1xs">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => dispatch(closeDeleteTimeEntryModal())}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Delete Time Entry
        </h2>

        <div className="flex items-start gap-2 text-sm text-gray-700 mb-4">
          <span className="text-red-500 text-lg">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.375 13.375V6.5M1 13.375C1 10.0929 2.30379 6.94532 4.62455 4.62455C6.94532 2.30379 10.0929 1 13.375 1C16.6571 1 19.8047 2.30379 22.1254 4.62455C24.4462 6.94532 25.75 10.0929 25.75 13.375C25.75 16.6571 24.4462 19.8047 22.1254 22.1254C19.8047 24.4462 16.6571 25.75 13.375 25.75C10.0929 25.75 6.94532 24.4462 4.62455 22.1254C2.30379 19.8047 1 16.6571 1 13.375Z" stroke="#D00416" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <p>
            Are you sure you want to delete this time entry? <br />
            <span className="text-gray-500">This action cannot be undone.</span>
          </p>
        </div>

        <div className="bg-gray-50 rounded-md p-3 mb-6 border border-gray-100">
          <p className="font-medium text-gray-800">Daily standup meeting</p>
          <p className="text-gray-600 text-sm">9:00 AM - 10:30 AM (1h 30m)</p>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => dispatch(closeDeleteTimeEntryModal())}
            className="w-full bg-[#D00416] hover:bg-red-700 text-white font-medium py-2 rounded-md transition"
          >
            Delete Entry
          </button>
          <button
            onClick={() => dispatch(closeDeleteTimeEntryModal())}
            className="w-full border border-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
