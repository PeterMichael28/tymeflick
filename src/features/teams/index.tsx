"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  openCreateTeamModal,
  openAddUserModal,
} from "../../redux/slice/modalSlice";

import Hero from "../../components/ui/hero";
import TeamsOverviewTable from "./components/tables/TeamsOverviewTable";
import AllTeamsMembersTable from "./components/tables/AllTeamsMembersTable";
import Pagination from "./components/Pagination";
import { Search, Plus, Calendar, Filter } from "lucide-react";

export default function TeamsPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen w-full space-y-8 overflow-y-scroll">
      {/* Page Header */}
      <Hero
        title="Team Management"
        description="Manage your teams and team members"
      />

      {/* Teams Overview Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6 shadow-sm">
        {/* Header Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F3F3F3] p-3 rounded-md">
          {/* Left */}
          <h2 className="text-md font-semibold text-gray-800">Teams</h2>

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
            <div className="relative bg-white rounded-md p-1">
              <input
                type="text"
                value="Mon Jun 02 2025 - Mon Jun 02 2025"
                readOnly
                className="rounded-md pr-5 py-2 text-xs w-60 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <Calendar className="absolute right-5 top-2.5 w-5 h-4 text-gray-400" />
            </div>

            {/* Add Team Button */}
            <button
              onClick={() => dispatch(openCreateTeamModal())}
              className="flex items-center gap-1 bg-primary hover:bg-[#5bb13e] text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              <Plus className="w-4 h-4" />
              New Team
            </button>
          </div>
        </div>

        {/* Teams Table */}
        <TeamsOverviewTable />
      </div>

      {/* All Team Members Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6 shadow-sm relative">
        {/* Header Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F3F3F3] p-3 rounded-md">
          {/* Left */}
          <h2 className="text-md font-semibold text-gray-800">
            All Team Members
          </h2>

          {/* Right Controls */}
          <div className="flex items-center gap-3 flex-wrap relative">
            {/* Search */}
            <div className="relative bg-white rounded-md">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md px-3 py-2 pl-2 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <Search className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            {/* Filter Button */}
            <div className="relative bg-white rounded-md">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 transition"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>

              {/* Filter Modal (appears next to the icon) */}
              {filterOpen && (
                <>
                  {/* Overlay */}
                  <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-2xs z-10"
                    onClick={() => setFilterOpen(false)}
                  ></div>

                  {/* Dropdown */}
                  <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded-lg shadow-lg w-44 z-20">
                    <ul className="text-sm text-gray-700 divide-y divide-gray-100">
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                        Admin
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                        Manager
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                        Regular User
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Add User Button */}
            <button
              onClick={() => dispatch(openAddUserModal())}
              className="flex items-center gap-1 bg-primary hover:bg-[#5bb13e] text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              <Plus className="w-4 h-4" />
              Add User
            </button>
          </div>
        </div>

        {/* Members Table */}
        <AllTeamsMembersTable />
      </div>

      {/* Pagination */}
      <div className="w-full h=full bg-white space-y-8">
        <Pagination />
      </div>
    </div>
  );
}
