'use client'

import { ArrowLeft } from 'lucide-react'
import WeeklyTimeLogTable from '../../tables/WeeklyTimeLogTable'
import { useDispatch } from 'react-redux'
import {
  openSubmissionApprovedModal,
  openSubmissionRejectedModal,
} from '../../../../../redux/slice/modalSlice'
import { ApproveButton, RejectButton } from '../../ui/TeamSubmissionButtons'
import Hero from '../../../../../components/ui/hero'
import { useNavigate } from 'react-router-dom'

export default function ReviewDetails() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleApprove = () => {
    dispatch(openSubmissionApprovedModal())
  }

  const handleReject = () => {
    dispatch(openSubmissionRejectedModal())
  }

  return (
    <div className="min-h-screen w-full space-y-3 bg-none">
      <div className="min-h-6 space-y-5 rounded-lg">
        <Hero title="" description="" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
        {/* Left side: back icon + title + subtext */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <ArrowLeft
              className="h-5 w-5 cursor-pointer text-gray-700"
              onClick={() => navigate('/teamSubmissions')}
            />
            <h1 className="text-lg font-semibold text-gray-800">
              Review Timesheet
            </h1>
          </div>
          <p className="mt-1 pl-7 text-sm text-gray-600">
            <strong>Issiah</strong> • June 24–30 • Submitted on Jun 29, 2025,
            06:20 PM
          </p>
        </div>

        {/* Right side: status badge */}
        <span className="rounded border border-blue-300 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
          Submitted
        </span>
      </div>

      <div className="rounded-lg bg-white p-6">
        {/* Weekly Time Log Table */}
        <WeeklyTimeLogTable />

        {/* Footer */}
        <div className="justify-left flex items-center gap-3 rounded-b-lg bg-white px-6 py-4 text-sm">
          <span className="font-medium text-gray-700">
            Total hours: 25 hours
          </span>
          <div className="flex space-x-3">
            <ApproveButton onClick={handleApprove} />
            <RejectButton onClick={handleReject} />
          </div>
        </div>
      </div>
    </div>
  )
}
