"use client";

import { useDispatch } from "react-redux";
import { openAddTimeManualEntryModal } from "../../../redux/slice/modalSlice"; // <-- Correct import

export default function AddManualEntryButton() {
  const dispatch = useDispatch();

  const handleAddTimeManual = () => {
    dispatch(
      openAddTimeManualEntryModal({
        id: "",
        date: "",
        startTime: "",
        endTime: "",
        description: "",
        billable: true,
        client: "",
        project: "",
      })
    );
  };

  return (
    <button
      onClick={handleAddTimeManual}
      className="w-full flex items-center justify-center gap-2 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
    >
      <svg width="22" height="22" fill="black">
        <path d="M14 1a1 1 0 1 0-2 0v9H3a1 1 0 1 0 0 2h9v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V1Z" />
      </svg>
      <span className="text-black text-sm font-medium">Add Manual Entry</span>
    </button>
  );
}
