'use client'

import { ArrowLeft } from 'lucide-react'
import WeeklyTimeLogTable from '../../tables/WeeklyTimeLogTable'
import { useDispatch } from 'react-redux'
import {
  openSubmissionApprovedModal,
  openSubmissionRejectedModal,
} from '../../../../../redux/slice/modalSlice'

export default function ReviewDetails() {
  const dispatch = useDispatch()
  const handleApprove = () => {
    dispatch(openSubmissionApprovedModal())
  }

  const handleReject = () => {
    dispatch(openSubmissionRejectedModal())
  }

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
        <span className="rounded border border-blue-300 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
          Submitted
        </span>
      </div>

      {/* Subheader */}
      <p className="rounded-lg border border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-sm">
        <strong>Issiah</strong> • June 24-30 • Submitted on Jun 29, 2025, 06:20
        PM
      </p>

      {/* Weekly Time Log Table */}
      <WeeklyTimeLogTable />

      {/* Footer */}
      <div className="flex items-center justify-between rounded-b-lg bg-gray-50 px-6 py-4 text-sm">
        <span className="font-medium text-gray-700">Total hours: 25 hours</span>
        <div className="flex space-x-3">
          <button
            className="flex items-center space-x-1 rounded border border-green-400 px-4 py-1.5 text-sm font-medium text-green-700 hover:bg-green-50"
            onClick={handleApprove}
          >
            <span>Approve</span>
          </button>
          <button
            className="flex items-center space-x-1 rounded border border-red-400 px-4 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50"
            onClick={handleReject}
          >
            <span>Reject</span>
          </button>
        </div>
      </div>
    </div>
  )
}
