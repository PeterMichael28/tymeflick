'use client'

import { useDispatch } from 'react-redux'
import {
  ArrowLeft,
  LockKeyhole,
  FileText,
  CheckCircle2,
} from 'lucide-react'
import { openApprovalNotesModal } from '../../../../../redux/slice/modalSlice'
import SubmitWeeklyTimeLogTable from '../../tables/WeeklyTimeLogTable'
import { ApproveButton } from '../../ui/TeamSubmissionButtons'
import Hero from '../../../../../components/ui/hero'
import { useNavigate } from 'react-router-dom'

const ForceApproveAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleApprove = () => {
    dispatch(openApprovalNotesModal())
  }

  return (
    <div className="font-inter space-y-8 p-6">
      <Hero
        title=""
        description=""
      />

      <div className="bg-white p-4 rounded-lg">
        {/* Header Section */}
        <div className="flex items-start justify-between rounded-lg bg-white p-4">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 text-gray-700 cursor-pointer" onClick={() => navigate('/teamSubmissionForAdmin')}/>
              <h2 className="font-semibold text-gray-900">
                Sarah Bello – June 24–30
              </h2>
            </div>
            <p className="text-sm text-gray-700 pl-7">Department: Engineering</p>
            <p className="text-sm text-gray-700 pl-7">Project Lead: Alex Johnson</p>
            <p className="text-sm text-gray-700 pl-7">Submitted: Jun 30, 2025, 05:30 PM</p>
          </div>
          <span className="h-fit rounded-full border border-red-300 px-3 py-1 text-sm bg-[#FB37481A] text-red-600">
            Rejected
          </span>
        </div>

        {/* Rejection Details Section */}
        <div className="rounded-lg bg-red-50 p-4">
          <h3 className="mb-1 font-semibold text-red-700">Rejection Details</h3>
          <p className="mb-1 text-sm text-red-700">
            <strong>Reason:</strong> Missing hours on 05/06/2025 and incomplete
            task descriptions
          </p>
          <p className="text-xs text-red-600">
            Rejected on Jun 06, 2025, 10:30 AM by Mr Bassey
          </p>
        </div>
      </div>

      {/* Imported Weekly Time Log Table */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <SubmitWeeklyTimeLogTable />

        {/* Summary and Actions */}
        <div className="flex flex-col items-left justify-left gap-3 rounded-b-lg bg-white px-6 py-4 text-sm">
          <p className="font-semibold text-gray-700">
            Total hours: <span className="font-normal">35 hours</span>
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-1 rounded-md border border-yellow-400 px-3 py-1 text-sm text-yellow-600 hover:bg-yellow-50">
              <LockKeyhole className="h-4 w-4" /> Unlock Week
            </button>
            <ApproveButton onClick={handleApprove} isAdmin />
          </div>
        </div>
      </div>

      {/* Activity Timeline Section */}
      <div className="mb-4 rounded-lg border-l-4 border-blue-500 bg-white p-4">
        <h3 className="mb-3 font-semibold text-gray-800">Activity Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-blue-50 p-2">
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
            <div className="rounded-full bg-green-50 p-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                Timesheet rejected: Missing hours on 05/06/2025 and incomplete
                task descriptions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForceApproveAdmin
