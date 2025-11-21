"use client";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeSubmissionApprovedModal } from "../../../../redux/slice/modalSlice";
import { CheckCircle2 } from "lucide-react";

const SubmissionApprovedModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContinue = () => {
    dispatch(closeSubmissionApprovedModal());
    navigate("/approve");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-1xs">
      <div className="bg-white w-[380px] md:w-[420px] p-8 rounded-2xl shadow-xl text-center">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-[#E6F8E5] rounded-full p-4">
            <CheckCircle2 className="text-[#70C94C]" size={64} strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold font-bricolage text-gray-900 mb-3">
          Submission Approved
        </h2>

        {/* Message */}
        <p className="text-gray-600 text-sm font-inter mb-6 leading-relaxed">
          The submission by <strong>Sofia</strong> for week 05/06/2025 – 11/06/2025 has been approved.
        </p>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full py-3 bg-[#70C94C] hover:bg-[#5BB63B] text-white font-semibold rounded-lg transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SubmissionApprovedModal;
