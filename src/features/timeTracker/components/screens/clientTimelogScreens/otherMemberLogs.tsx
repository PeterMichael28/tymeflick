"use client";

import OtherMemberLogsTable from "../../tables/OtherMemberLogsTable";
import { useNavigate } from "react-router-dom";

export default function OtherMemberLogsPage() {
    const navigate = useNavigate();

    return (
        <div className="p-6 space-y-6">
            {/* Filter Section */}
            <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="flex gap-3 flex-wrap">
                    <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50"
                    onClick={() => navigate('/overall/')}
                    >
                        Overall
                    </button>
                    <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50"
                    onClick={() => navigate('/yourTimelogHistory/')}
                    >
                        Your Time Log History
                    </button>
                    <button className="px-4 py-2 rounded-md border border-green-500 bg-green-100 text-green-700"
                    onClick={() => navigate('/otherMemberLogs/')}
                    >
                        Other Member Logs
                    </button>
                    <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50"
                    onClick={() => navigate('/revenue/')}
                    >
                        Revenue
                    </button>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                <input type="text" placeholder="Search" className="border px-3 py-2 rounded-md" />
                <input type="date" className="border px-3 py-2 rounded-md" />
                <select className="border px-3 py-2 rounded-md">
                    <option>Project Sprint</option>
                    <option>Monthly</option>
                    <option>Weekly</option>
                </select>
                </div>
            </div>

            {/* Section 1 */}
            <div className="border rounded-lg bg-white p-4 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-700 font-semibold text-base">
                    Your time entries this week | This Week
                </h2>
                <p className="text-sm text-gray-600 font-medium">2:00:52</p>
                </div>
                <OtherMemberLogsTable />
            </div>

            {/* Section 2 */}
            <div className="border rounded-lg bg-white p-4 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-700 font-semibold text-base">
                    Your time entries last week | This Week
                </h2>
                <p className="text-sm text-gray-600 font-medium">2:00:52</p>
                </div>
                <OtherMemberLogsTable />
            </div>
        </div>
    );
}
