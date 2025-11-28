"use client";

import { useDispatch } from "react-redux";
import {
  openAddClientModal,
} from "../../redux/slice/modalSlice";

import Hero from "../../components/ui/hero";
import ClientsTable from "./tables/ClientsTable";
import { Search, Plus, Calendar } from "lucide-react";

export default function ClientsPage() {
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen w-full space-y-8 overflow-y-scroll">
        {/* Page Header */}
        <Hero
            title="Clients"
            description="All your clients, perfectly organized and just a tap away"
        />

        {/* Teams Overview Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6 shadow-sm">
            {/* Header Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F3F3F3] p-3 rounded-md">
            {/* Left */}
            <h2 className="text-md font-semibold text-gray-800">All Clients</h2>

            {/* Right Controls */}
            <div className="flex items-center gap-3 flex-wrap">
                {/* Search */}
                <div className="relative bg-white rounded-md">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 rounded-md px-3 py-2 pl-2 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <Search className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
                </div>

                {/* Date Picker */}
                <div className="relative bg-white rounded-md p-1 flex items-center justify-between w-60 border border-gray-200">
                <input
                    type="text"
                    value="Mon Jun 02 2025 - Mon Jun 02 2025"
                    readOnly
                    className="bg-transparent text-xs text-gray-800 focus:outline-none px-3 py-2 w-full"
                />
                <Calendar className="w-4 h-4 text-gray-800 mr-3" />
                </div>


                {/* Add Team Button */}
                <button
                onClick={() => dispatch(openAddClientModal())}
                className="flex items-center gap-1 bg-primary hover:bg-[#5bb13e] text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                <Plus className="w-4 h-4" />
                New Client
                </button>
            </div>
            </div>
            {/* Clients Table */}
            <ClientsTable />
        </div>

        
    </div>
  );
}
