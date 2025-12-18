'use client'

import RevenueBreakdownTable from '../../tables/RevenueBreakdownTable'
import { useNavigate } from 'react-router-dom'
import Hero from '../../../../../components/ui/hero'
import { Calendar, Search } from 'lucide-react'
import DropDown from '../../../../../features/project/ui/dropDown'
import { ClockIcon, RevenueIcon, ActivityIcon } from '../../ui/TimeTrackerIcons'

export default function RevenuePage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <Hero
        title="Insigh Mesh"
        description="Insight Mesh Time Log"
      />

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between rounded-md bg-[#F3F3F3] p-3 gap-3">
          {/* Left */}
          <h2 className="text-md font-semibold text-gray-800">Filter</h2>

          {/* Right Controls */}
          <div className="flex items-center gap-3 flex-wrap justify-end">
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

            {/* Dropdown */}
            <DropDown
              options={['Sprint 1', 'Sprint 2', 'Sprint 3']}
              value="Project Sprint"
              onChange={console.log}
              placeholder="Filter"
              className="w-40"
            />
          </div>
        </div>


        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => navigate('/overall/')}
            >
              Overall
            </button>
            <button
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => navigate('/yourTimelogHistory/')}
            >
              Your Time Log History
            </button>
            <button
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => navigate('/otherMemberLogs/')}
            >
              Other Member Logs
            </button>
            <button
              className="rounded-md border border-gray-300 px-4 py-2 bg-[#F3EDF9] text-[#66C61C] hover:bg-gray-50"
              onClick={() => navigate('/revenue/')}
            >
              Revenue
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Billable Hours Card */}
        <div className="flex flex-col justify-between rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
          <div className="rounded-lg p-2 mb-2">
            <ClockIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <p className="text-sm text-gray-600">Billable Hours</p>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">18.5h</h2>
        </div>

        {/* Avg Rate/hr Card */}
        <div className="flex flex-col justify-between rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
          <div className="rounded-lg p-2 mb-2">
            <RevenueIcon className="h-5 w-5 text-green-600" />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <p className="text-sm text-gray-600">Avg Rate/hr</p>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">$125</h2>
        </div>

        {/* Estimated Revenue Card */}
        <div className="flex flex-col justify-between rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
          <div className="rounded-lg p-2 mb-2">
            <ActivityIcon className="h-5 w-5 text-yellow-600" />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <p className="text-sm text-gray-600">Est. Revenue</p>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">$2,312</h2>
        </div>
      </div>

      {/* Section 1 */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-700">
            Your time entries this week | This Week
          </h2>
          <p className="text-sm font-medium text-gray-600">2:00:52</p>
        </div>
        <RevenueBreakdownTable />
      </div>
    </div>
  )
}
