"use client";

import Hero from "../../../../components/ui/hero";
import TimeTrackerTable from "../../../../features/timeTracker/components/TimeTrackerTable";
import { Calendar } from "lucide-react";

export default function ViewAllPage() {
  return (
    <div className="min-h-screen w-full space-y-8 overflow-y-scroll">
        {/* Page Header */}
        <Hero title="Today's Log" description="Simple time tracking for focused work." />

        {/* Log History Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
            {/* Log History Header */}
            <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold text-gray-700">Log History</h2>
            <button className="text-sm text-gray-600 border rounded-md px-3 py-1 flex items-center gap-2">
                <span>Jan 2025 – May 2025</span>
                <Calendar size={16} />
            </button>
            </div>        
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-800">Today</h3>
                    <span className="text-xs font-medium text-gray-600">2:00:52</span>
                </div>
                <TimeTrackerTable />  
            </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
            {/* Yesterday Section */}
            <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-800">Yesterday</h3>
                    <span className="text-xs font-medium text-gray-600">2:00:52</span>
                </div>
                <TimeTrackerTable />
            </div>
        </div>


        {/* Today Section */}
        

        
    </div>
  );
}