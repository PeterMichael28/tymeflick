'use client'

import { ArrowLeft } from 'lucide-react'
import WeeklyTimeLogTable from '../../tables/WeeklyTimeLogTable'

export default function Reject() {
  return (
    <div className="min-h-screen w-full space-y-6 bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <ArrowLeft className="h-5 w-5 cursor-pointer text-gray-700" />
          <h1 className="text-lg font-semibold text-gray-800">
            Review Timesheet
          </h1>
        </div>
        <span className="rounded border border-[#FB37481A] bg-[#FB37481A] px-3 py-1 text-xs font-medium text-[#D00416]">
          Rejected
        </span>
      </div>

      {/* Subheader */}
      <p className="rounded-lg border border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-sm">
        <strong>Issiah</strong> • June 24-30 • Submitted on Jun 29, 2025, 06:20
        PM
      </p>

      {/* Weekly Time Log Table */}
      <div>
        <div className="mb-4 rounded-lg border border-red-200 bg-[#FB37481A] px-6 py-4">
          <span className="font-medium text-red-600">
            Rejection Reason: Missing hours on 05/06/2025 and incomplete task
            descriptions
          </span>
        </div>
        <WeeklyTimeLogTable />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between rounded-b-lg bg-gray-50 px-6 py-4 text-sm">
        <span className="font-medium text-gray-700">Total hours: 25 hours</span>
        <span className="font-medium text-[#D00416]">
          Rejected by Manager on Jun 24, 2025, 11:30 AM
        </span>
      </div>
    </div>
  )
}
