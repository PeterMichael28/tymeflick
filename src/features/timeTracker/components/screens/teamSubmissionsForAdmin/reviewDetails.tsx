'use client'

import { useDispatch } from 'react-redux'
import { ArrowLeft, LockKeyhole, FileText, Clock3 } from 'lucide-react'
import {
  openSubmissionApprovedModal,
  openSubmissionRejectedModal,
} from '../../../../../redux/slice/modalSlice'
import WeeklyTimeLogTable from '../../tables/WeeklyTimeLogTable'
import { ApproveButton, RejectButton } from '../../ui/TeamSubmissionButtons'
import Hero from '../../../../../components/ui/hero'
import { useNavigate } from 'react-router-dom'

const ReviewDetailsAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleApprove = () => {
    dispatch(openSubmissionApprovedModal())
  }

  const handleReject = () => {
    dispatch(openSubmissionRejectedModal())
  }

  return (
    <div className="font-inter space-y-4 p-2">
      <Hero title="" description="" />

      {/* Header Section */}
      <div className="flex items-start justify-between rounded-lg border border-gray-200 bg-white p-4">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <ArrowLeft
              className="h-5 w-5 cursor-pointer text-gray-700"
              onClick={() => navigate('/teamSubmissionForAdmin')}
            />
            <h2 className="font-semibold text-gray-900">
              Sarah Bello – June 24–30
            </h2>
          </div>
          <p className="pl-7 text-sm text-gray-700">Department: Engineering</p>
          <p className="pl-7 text-sm text-gray-700">
            Project Lead: Alex Johnson
          </p>
          <p className="pl-7 text-sm text-gray-700">
            Submitted: Jun 30, 2025, 05:30 PM
          </p>
        </div>
        <span className="h-fit rounded-full border border-blue-300 bg-[#CCDBFF4D] px-3 py-1 text-sm text-blue-600">
          Submitted
        </span>
      </div>

      {/* Time Log Table (imported component) */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <WeeklyTimeLogTable />

        {/* Summary & Actions */}
        <div className="flex flex-col items-start gap-4 rounded-b-lg bg-white px-6 py-4 text-sm">
          <p className="font-semibold text-gray-700">
            Total hours: <span className="font-normal">35 hours</span>
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-1 rounded-md border border-yellow-400 px-3 py-1 text-sm text-yellow-600 hover:bg-yellow-50">
              <LockKeyhole className="h-4 w-4" /> Unlock Week
            </button>
            <ApproveButton onClick={handleApprove} isAdmin />
            <RejectButton onClick={handleReject} isAdmin />
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="mb-4 rounded-lg border-l-4 border-blue-500 bg-white p-4">
        <h3 className="mb-3 font-semibold text-gray-800">Activity Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-[#CCDBFF4D] p-2">
              <FileText className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                Timesheet submitted with 31.5 total hours
              </p>
              <p className="text-xs text-gray-600">Jun 30, 2025, 05:30 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-[#CCDBFF4D] p-2">
              <Clock3 className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                Awaiting Approval by manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewDetailsAdmin
