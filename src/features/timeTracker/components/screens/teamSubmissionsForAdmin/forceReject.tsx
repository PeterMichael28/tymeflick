"use client";

import { useDispatch } from "react-redux";
import { ArrowLeft, LockKeyhole, XCircle, FileText, CheckCircle2 } from "lucide-react";
import { openRejectionNotesModal } from "../../../../../redux/slice/modalSlice";
import SubmitWeeklyTimeLogTable from "../../tables/WeeklyTimeLogTable";

const ForceRejectAdmin = () => {
  const dispatch = useDispatch();

  const handleReject = () => {
    dispatch(openRejectionNotesModal());
  };

  return (
    <div className="p-6 space-y-8 font-inter">
      {/* Header Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
            <h2 className="font-semibold text-gray-900">Sarah Bello – June 24–30</h2>
          </div>
          <p className="text-sm text-gray-700">Department: Engineering</p>
          <p className="text-sm text-gray-700">Project Lead: Alex Johnson</p>
          <p className="text-sm text-gray-700">Submitted: Jun 30, 2025, 05:30 PM</p>
        </div>
        <span className="text-sm text-green-600 border border-green-300 px-3 py-1 rounded-full h-fit">
          Approved
        </span>
      </div>

      {/* Imported Time Log Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <SubmitWeeklyTimeLogTable />

        {/* Summary & Actions */}
        <div className="flex justify-between items-center mt-5">
          <p className="font-semibold text-gray-700">
            Total hours: <span className="font-normal">35 hours</span>
          </p>
          <div className="flex gap-3">
            <button className="text-yellow-600 border border-yellow-400 hover:bg-yellow-50 px-3 py-1 rounded-md text-sm flex items-center gap-1">
              <LockKeyhole className="w-4 h-4" /> Unlock Week
            </button>
            <button
              onClick={handleReject}
              className="text-red-600 border border-red-400 hover:bg-red-50 px-3 py-1 rounded-md text-sm flex items-center gap-1"
            >
              <XCircle className="w-4 h-4" /> Force Reject
            </button>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Activity Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-50 p-2 rounded-full">
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-800 font-medium">
                Timesheet submitted with 31.5 total hours
              </p>
              <p className="text-xs text-gray-600">Jun 30, 2025, 05:30 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-green-50 p-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-800 font-medium">
                Timesheet approved by Mr Bassey — All hours properly documented
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForceRejectAdmin;