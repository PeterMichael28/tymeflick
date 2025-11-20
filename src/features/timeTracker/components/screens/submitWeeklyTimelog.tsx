"use client";

import { Clock } from "lucide-react";
import Button from "../../../../components/button/button";
import SubmitWeeklyTimeLogsTable from "../../../../features/timeTracker/components/submitWeeklyTimelogTable";
import Hero from "../../../../components/ui/hero";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSubmissionSentModal } from "../../../../redux/slice/modalSlice";


export default function SubmitWeeklyTimeLogs() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
  return (
    <div className="bg-[#F8F9FB] min-h-screen w-full space-y-6 overflow-y-visible">
      {/* Hero Section */}
      <Hero
          title="Submit Weekly Time Logs"
          description="Here's a summary of your logged hours for the week."
        />

      {/* Weekly Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Clock size={18} strokeWidth={1.75} className="text-[#464E5F]" />
          <p className="font-bricolage text-[14px] text-gray-800">
            Time log for this week{" "}
            <span className="font-semibold">02/06/2025 - 30/06/2025</span>
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#F6F6F6] rounded-md p-4 text-center">
            <p className="text-[22px] font-bold text-[#1E1E1E]">34h</p>
            <p className="text-[13px] text-gray-600">Total Hours</p>
          </div>
          <div className="bg-[#F6F6F6] rounded-md p-4 text-center">
            <p className="text-[22px] font-bold text-[#1E1E1E]">14h</p>
            <p className="text-[13px] text-gray-600">Billable Hours</p>
          </div>
          <div className="bg-[#F6F6F6] rounded-md p-4 text-center">
            <p className="text-[22px] font-bold text-[#1E1E1E]">$420</p>
            <p className="text-[13px] text-gray-600">Total Amount</p>
          </div>
        </div>

        {/* Table Component */}
        <SubmitWeeklyTimeLogsTable />

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button className="bg-[#E4E7EB] hover:bg-[#D9DDE1] text-gray-800 font-semibold px-8 py-3 rounded-lg transition"
          onClick={() => navigate("/timeTracker")}
          >
            Cancel
          </button>
          <Button className="bg-[#70C94C] hover:bg-[#5BB63B] text-white font-semibold px-8 py-3 rounded-lg"
          onClick={() => dispatch(openSubmissionSentModal())}>
            Submit for approval
          </Button>
        </div>
      </div>
    </div>
  );
}
