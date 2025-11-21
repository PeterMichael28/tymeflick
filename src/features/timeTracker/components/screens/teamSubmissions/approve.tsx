"use client";

import { ArrowLeft } from "lucide-react";
import WeeklyTimeLogTable from "../../tables/WeeklyTimeLogTable";


export default function Approve() {
    
  return (
    <div className="min-h-screen w-full space-y-6 bg-gray-50 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5 text-gray-700 cursor-pointer" />
            <h1 className="font-semibold text-gray-800 text-lg">Review Timesheet</h1>
            </div>
            <span className="text-xs text-[#1FC16B] font-medium border border-[#1FC16B1A] bg-[#1FC16B1A] px-3 py-1 rounded">
            Approved
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
            <span className="text-[#1FC16B] font-medium">Approved by Manager on Jun 24, 2025, 11:30 AM</span>
        </div>
    </div>
  );
}
