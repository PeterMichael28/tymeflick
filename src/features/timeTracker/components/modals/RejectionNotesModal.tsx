"use client";

import { useDispatch } from "react-redux";
import { X } from "lucide-react";
import { openSubmissionRejectedModal, closeRejectionNotesModal } from "../../../../redux/slice/modalSlice";

const RejectionNotesModal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeRejectionNotesModal());
  };

  const handleSave = () => {
    dispatch(closeRejectionNotesModal());
    dispatch(openSubmissionRejectedModal());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-1xs">
      <div className="bg-white w-[380px] md:w-[420px] p-6 rounded-2xl shadow-xl text-center">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 font-bricolage">
            Rejection Notes Required
          </h2>
          <button onClick={handleClose}>
            <X className="text-gray-500 hover:text-gray-700" size={20} />
          </button>
        </div>

        {/* Decision */}
        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700">Decision</label>
          <input
            type="text"
            value="Reject"
            readOnly
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm text-gray-800 bg-gray-50"
          />
        </div>

        {/* Reason */}
        <div className="text-left mb-6">
          <label className="text-sm font-medium text-gray-700">
            Reason/Notes <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Please provide a reason for your decision"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Buttons */}
        <button className="w-full py-3 bg-[#70C94C] hover:bg-[#5BB63B] text-white font-semibold rounded-lg transition mb-2"
          onClick={handleSave}>
          Save Changes
        </button>
        <button
          onClick={handleClose}
          className="w-full py-2 text-gray-600 hover:text-gray-800 text-sm font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RejectionNotesModal;
