"use client";

import { ArrowLeft } from "lucide-react";
import WeeklyTimeLogTable from "../../tables/WeeklyTimeLogTable";


export default function Reject() {
    
  return (
    <div className="min-h-screen w-full space-y-6 bg-gray-50 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5 text-gray-700 cursor-pointer" />
            <h1 className="font-semibold text-gray-800 text-lg">Review Timesheet</h1>
            </div>
            <span className="text-xs text-[#D00416] font-medium border border-[#FB37481A] bg-[#FB37481A] px-3 py-1 rounded">
            Rejected
            </span>
        </div>

        {/* Subheader */}
        <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <strong>Issiah</strong> • June 24-30 • Submitted on Jun 29, 2025, 06:20 PM
        </p>

        {/* Weekly Time Log Table */}
        <div>
            <div className="mb-4 px-6 py-4 bg-[#FB37481A] border border-red-200 rounded-lg">
                <span className="text-red-600 font-medium">Rejection Reason: Missing hours on 05/06/2025 and incomplete task descriptions</span>
            </div>
            <WeeklyTimeLogTable  />            
        </div>
        

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 text-sm bg-gray-50 rounded-b-lg">
            <span className="text-gray-700 font-medium">Total hours: 25 hours</span>
            <span className="text-[#D00416] font-medium">Rejected by Manager on Jun 24, 2025, 11:30 AM</span>
        </div>
    </div>
  );
}
