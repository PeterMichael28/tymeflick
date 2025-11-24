"use client";

import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openSubmissionApprovedModal, openSubmissionRejectedModal } from "../../../../redux/slice/modalSlice";
import { useDispatch } from "react-redux";

export default function TeamSubmissions() {
    const navigate = useNavigate();
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
      <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-[#5a4fcf]">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Go back</span>
        </button>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 border rounded-md focus:ring-[#5a4fcf] focus:border-[#5a4fcf] text-sm"
            />
          </div>

          <select className="border rounded-md px-3 py-2 text-sm focus:ring-[#5a4fcf] focus:border-[#5a4fcf]">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-600 font-medium">Pending Review</p>
          <p className="text-2xl font-bold text-blue-700 mt-1">1</p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-center">
          <p className="text-sm text-green-600 font-medium">Approved</p>
          <p className="text-2xl font-bold text-green-700 mt-1">2</p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-center">
          <p className="text-sm text-red-600 font-medium">Rejected</p>
          <p className="text-2xl font-bold text-red-700 mt-1">1</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 font-medium">Total Submission</p>
          <p className="text-2xl font-bold text-gray-700 mt-1">4</p>
        </div>
      </div>

      {/* Team Submissions List */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="font-semibold text-gray-800 mb-4">Team Submissions</h2>

        {/* CARD 1 */}
        <div className="border-l-4 border-blue-500 rounded-lg bg-blue-50 mb-4 p-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Sarah Bello</p>
            <span className="text-xs text-blue-600 font-medium border border-blue-300 bg-blue-100 px-3 py-1 rounded">
              Submitted
            </span>
          </div>
          <div className="text-sm mt-2 text-gray-600 space-y-1">
            <p>
              <strong>Week:</strong> June 1, 2025
            </p>
            <p>
              <strong>Submitted:</strong> Jun 30, 2025, 05:30 PM
            </p>
            <p>
              <strong>Total Hours:</strong> 31.5 hrs
            </p>
          </div>
          <div className="mt-3 flex space-x-2">
            <button className="border border-blue-400 text-blue-600 px-3 py-1.5 text-sm rounded hover:bg-blue-50"
              onClick={() => navigate("/reviewDetails")}>
              Review Details
            </button>
            <button className="border border-green-400 text-green-600 px-3 py-1.5 text-sm rounded hover:bg-green-50"
              onClick={handleApprove}>
              Approve
            </button>
            <button className="border border-red-400 text-red-600 px-3 py-1.5 text-sm rounded hover:bg-red-50"
              onClick={handleReject}>
              Reject
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="border-l-4 border-green-500 rounded-lg bg-green-50 mb-4 p-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">David</p>
            <span className="text-xs text-green-700 font-medium border border-green-300 bg-green-100 px-3 py-1 rounded">
              Approved
            </span>
          </div>
          <div className="text-sm mt-2 text-gray-600 space-y-1">
            <p>
              <strong>Week:</strong> June 17–23
            </p>
            <p>
              <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
            </p>
            <p>
              <strong>Total Hours:</strong> 40 hrs
            </p>
          </div>
          <div className="mt-3 flex space-x-2">
            <button className="border border-blue-400 text-blue-600 px-3 py-1.5 text-sm rounded hover:bg-blue-50"
              onClick={() => navigate("/reviewDetails")}>
              Review Details
            </button>
            <button className="border border-red-400 text-red-600 px-3 py-1.5 text-sm rounded hover:bg-red-50"
              onClick={handleReject}>
              Reject
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="border-l-4 border-red-500 rounded-lg bg-red-50 p-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Issiah</p>
            <span className="text-xs text-red-700 font-medium border border-red-300 bg-red-100 px-3 py-1 rounded">
              Rejected
            </span>
          </div>
          <div className="text-sm mt-2 text-gray-600 space-y-1">
            <p>
              <strong>Week:</strong> June 17–23
            </p>
            <p>
              <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
            </p>
            <p>
              <strong>Total Hours:</strong> 40 hrs
            </p>
            <p className="text-red-600 font-medium">
              Reason: Missing hours on Thursday and incomplete task descriptions
            </p>
          </div>
          <div className="mt-3 flex space-x-2">
            <button className="border border-blue-400 text-blue-600 px-3 py-1.5 text-sm rounded hover:bg-blue-50"
              onClick={() => navigate("/reviewDetails")}>
              Review Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
