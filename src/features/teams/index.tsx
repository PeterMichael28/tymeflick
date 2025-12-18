'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  openCreateTeamModal,
  openAddUserModal,
} from '../../redux/slice/modalSlice'

import Hero from '../../components/ui/hero'
import TeamsOverviewTable from './components/tables/TeamsOverviewTable'
import AllTeamsMembersTable from './components/tables/AllTeamsMembersTable'
import Pagination from './components/Pagination'
import { Search, Plus, Calendar, Filter } from 'lucide-react'

export default function TeamsPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen w-full space-y-8 overflow-y-scroll">
      {/* Page Header */}
      <Hero
        title="Team Management"
        description="Manage your teams and team members"
      />

      {/* Teams Overview Section */}
      <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        {/* Header Controls */}
        <div className="flex flex-col justify-between gap-4 rounded-md bg-[#F3F3F3] p-3 md:flex-row md:items-center">
          {/* Left */}
          <h2 className="text-md font-semibold text-gray-800">Teams</h2>

          {/* Right Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative rounded-md bg-white">
              <input
                type="text"
                placeholder="Search"
                className="w-48 rounded-md border border-gray-300 px-3 py-2 pl-2 text-sm focus:ring-1 focus:ring-green-500 focus:outline-none"
              />
              <Search className="absolute top-2.5 right-2 h-4 w-4 text-gray-400" />
            </div>

            {/* Date Picker */}
            <div className="relative flex w-60 items-center justify-between rounded-md border border-gray-200 bg-white p-1">
              <input
                type="text"
                value="Mon Jun 02 2025 - Mon Jun 02 2025"
                readOnly
                className="w-full bg-transparent px-3 py-2 text-xs text-gray-800 focus:outline-none"
              />
              <Calendar className="mr-3 h-4 w-4 text-gray-800" />
            </div>

            {/* Add Team Button */}
            <button
              onClick={() => dispatch(openCreateTeamModal())}
              className="cursor-pointer bg-primary flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              New Team
            </button>
          </div>
        </div>

        {/* Teams Table */}
        <TeamsOverviewTable />
      </div>

      {/* All Team Members Section */}
      <div className="relative space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        {/* Header Controls */}
        <div className="flex flex-col justify-between gap-4 rounded-md bg-[#F3F3F3] p-3 md:flex-row md:items-center">
          {/* Left */}
          <h2 className="text-md font-semibold text-gray-800">
            All Team Members
          </h2>

          {/* Right Controls */}
          <div className="relative flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative rounded-md bg-white">
              <input
                type="text"
                placeholder="Search"
                className="w-48 rounded-md border border-gray-300 px-3 py-2 pl-2 text-sm focus:ring-1 focus:ring-green-500 focus:outline-none"
              />
              <Search className="absolute top-2.5 right-2 h-4 w-4 text-gray-400" />
            </div>

            {/* Filter Button */}
            <div className="relative rounded-md bg-white">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
              >
                <span>Filter</span>
                <Filter className="h-4 w-4" />
              </button>

              {/* Filter Modal (appears next to the icon) */}
              {filterOpen && (
                <>
                  {/* Overlay */}
                  <div
                    className="backdrop-blur-2xs fixed inset-0 z-10 bg-black/20"
                    onClick={() => setFilterOpen(false)}
                  ></div>

                  {/* Dropdown */}
                  <div className="absolute top-10 right-0 z-20 w-44 rounded-lg border border-gray-200 bg-white shadow-lg">
                    <ul className="divide-y divide-gray-100 text-sm text-gray-700">
                      <li className="cursor-pointer px-4 py-2 hover:bg-gray-50">
                        Admin
                      </li>
                      <li className="cursor-pointer px-4 py-2 hover:bg-gray-50">
                        Manager
                      </li>
                      <li className="cursor-pointer px-4 py-2 hover:bg-gray-50">
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
              className="cursor-pointer bg-primary flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              Add User
            </button>
          </div>
        </div>

        {/* Members Table */}
        <AllTeamsMembersTable />
      </div>

      {/* Pagination */}
      <div className="h=full w-full space-y-8 bg-white">
        <Pagination />
      </div>
    </div>
  )
}
