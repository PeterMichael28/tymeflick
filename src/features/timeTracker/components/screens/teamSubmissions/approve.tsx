'use client'

import { ArrowLeft } from 'lucide-react'
import WeeklyTimeLogTable from '../../tables/WeeklyTimeLogTable'
import Hero from '../../../../../components/ui/hero'
import { useNavigate } from 'react-router-dom'

export default function Approve() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full space-y-6 bg-none">
      <Hero
        title=""
        description=""
      />


      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
        {/* Left side: back icon + title + subtext */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 cursor-pointer text-gray-700" onClick={() => navigate('/reviewDetails')} />
            <h1 className="text-lg font-semibold text-gray-800">Review Timesheet</h1>
          </div>
          <p className="mt-1 text-sm text-gray-600 pl-7">
            <strong>Issiah</strong> • June 24–30 • Submitted on Jun 29, 2025, 06:20 PM
          </p>
        </div>

        {/* Right side: status badge */}
        <span className="rounded border border-[#1FC16B1A] bg-[#1FC16B1A] px-3 py-1 text-xs font-medium text-[#1FC16B]">
          Approved
        </span>
      </div>

      <div className="rounded-lg bg-white p-6">
        {/* Weekly Time Log Table */}
        <WeeklyTimeLogTable />

        {/* Footer */}
        <div className="flex flex-col items-start rounded-b-lg bg-white px-6 py-4 text-sm">
          <span className="font-medium text-gray-700">Total hours: 25 hours</span>
          <span className="font-medium text-[#1FC16B]">
            Approved by Manager on Jun 24, 2025, 11:30 AM
          </span>
        </div>
      </div>
    </div>
  )
}
