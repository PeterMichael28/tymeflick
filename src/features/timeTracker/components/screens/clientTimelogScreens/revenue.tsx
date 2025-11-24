"use client";

import RevenueBreakdownTable from "../../tables/RevenueBreakdownTable";
import { useNavigate } from "react-router-dom";

export default function RevenuePage() {
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
                    <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50"
                    onClick={() => navigate('/otherMemberLogs/')}
                    >
                        Other Member Logs
                    </button>
                    <button className="px-4 py-2 rounded-md border border-green-500 bg-green-100 text-green-700"
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Billable Hours Card */}
                <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-blue-600"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-600">Billable Hours</p>
                    </div>
                    <h2 className="text-3xl font-semibold text-gray-900">18.5h</h2>
                </div>


                {/* Avg Rate/hr Card */}
                <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-green-600"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8c-1.657 0-3 1.343-3 3 0 1.5 1.134 2.742 2.58 2.962L12 15m0 0v2m0-2a3.001 3.001 0 002.995-2.824L15 12m0 0V9m0 0a3 3 0 00-3-3m0 0V4m0 2a3.001 3.001 0 01-2.995 2.824L9 9"
                                />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-600">Avg Rate/hr</p>
                    </div>
                    <h2 className="text-3xl font-semibold text-gray-900">$125</h2>
                </div>


                {/* Estimated Revenue Card */}
                <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-yellow-600"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8c-1.657 0-3 1.343-3 3 0 1.5 1.134 2.742 2.58 2.962L12 15m0 0v2m0-2a3.001 3.001 0 002.995-2.824L15 12m0 0V9m0 0a3 3 0 00-3-3m0 0V4m0 2a3.001 3.001 0 01-2.995 2.824L9 9"
                                />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-600">Est. Revenue</p>
                    </div>
                    <h2 className="text-3xl font-semibold text-gray-900">$2,312</h2>
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
                <RevenueBreakdownTable />
            </div>            
        </div>
    );
}
