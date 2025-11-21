"use client";

import { ArrowLeft } from "lucide-react";
import WeeklyTimeLogTable from "../../tables/WeeklyTimeLogTable";
import { useDispatch } from "react-redux";
import { openSubmissionApprovedModal, openSubmissionRejectedModal } from "../../../../../redux/slice/modalSlice";


export default function ReviewDetails() {
    const dispatch = useDispatch();
    const handleApprove = () => {
        dispatch(openSubmissionApprovedModal());
      };

    const handleReject = () => {
        dispatch(openSubmissionRejectedModal());
      };

  return (
    <div className="min-h-screen w-full space-y-6 bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-2">
          <ArrowLeft className="w-5 h-5 text-gray-700 cursor-pointer" />
          <h1 className="font-semibold text-gray-800 text-lg">Review Timesheet</h1>
        </div>
        <span className="text-xs text-blue-600 font-medium border border-blue-300 bg-blue-100 px-3 py-1 rounded">
          Submitted
        </span>
      </div>

      {/* Subheader */}
      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <strong>Issiah</strong> • June 24-30 • Submitted on Jun 29, 2025, 06:20 PM
      </p>

      {/* Weekly Time Log Table */}
      <WeeklyTimeLogTable  />

      {/* Footer */}
      <div className="flex justify-between items-center px-6 py-4 text-sm bg-gray-50 rounded-b-lg">
        <span className="text-gray-700 font-medium">Total hours: 25 hours</span>
        <div className="flex space-x-3">
          <button className="border border-green-400 text-green-700 font-medium px-4 py-1.5 rounded text-sm hover:bg-green-50 flex items-center space-x-1"
            onClick={handleApprove}>
            <span>Approve</span>
          </button>
          <button className="border border-red-400 text-red-700 font-medium px-4 py-1.5 rounded text-sm hover:bg-red-50 flex items-center space-x-1"
            onClick={handleReject}>
            <span>Reject</span>
          </button>
        </div>
      </div>
    </div>
  );
}
