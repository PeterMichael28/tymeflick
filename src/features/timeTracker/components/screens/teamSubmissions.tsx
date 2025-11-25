'use client'

import { ArrowLeft, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  openSubmissionApprovedModal,
  openSubmissionRejectedModal,
} from '../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'

export default function TeamSubmissions() {
  const navigate = useNavigate()
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
        <button className="flex items-center space-x-2 text-gray-700 hover:text-[#5a4fcf]">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Go back</span>
        </button>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="rounded-md border py-2 pr-4 pl-9 text-sm focus:border-[#5a4fcf] focus:ring-[#5a4fcf]"
            />
          </div>

          <select className="rounded-md border px-3 py-2 text-sm focus:border-[#5a4fcf] focus:ring-[#5a4fcf]">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-center">
          <p className="text-sm font-medium text-blue-600">Pending Review</p>
          <p className="mt-1 text-2xl font-bold text-blue-700">1</p>
        </div>

        <div className="rounded-lg border border-green-100 bg-green-50 p-4 text-center">
          <p className="text-sm font-medium text-green-600">Approved</p>
          <p className="mt-1 text-2xl font-bold text-green-700">2</p>
        </div>

        <div className="rounded-lg border border-red-100 bg-red-50 p-4 text-center">
          <p className="text-sm font-medium text-red-600">Rejected</p>
          <p className="mt-1 text-2xl font-bold text-red-700">1</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <p className="text-sm font-medium text-gray-600">Total Submission</p>
          <p className="mt-1 text-2xl font-bold text-gray-700">4</p>
        </div>
      </div>

      {/* Team Submissions List */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-semibold text-gray-800">Team Submissions</h2>

        {/* CARD 1 */}
        <div className="mb-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">Sarah Bello</p>
            <span className="rounded border border-blue-300 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
              Submitted
            </span>
          </div>
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            <p>
              <strong>Week:</strong> June 1, 2025
            </p>
            <p>
              <strong>Submitted:</strong> Jun 30, 2025, 05:30 PM
            </p>
            <p>
              <strong>Total Hours:</strong> 31.5 hrs
            </p>
          </div>
          <div className="mt-3 flex space-x-2">
            <button
              className="rounded border border-blue-400 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50"
              onClick={() => navigate('/reviewDetails')}
            >
              Review Details
            </button>
            <button
              className="rounded border border-green-400 px-3 py-1.5 text-sm text-green-600 hover:bg-green-50"
              onClick={handleApprove}
            >
              Approve
            </button>
            <button
              className="rounded border border-red-400 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
              onClick={handleReject}
            >
              Reject
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="mb-4 rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">David</p>
            <span className="rounded border border-green-300 bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Approved
            </span>
          </div>
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            <p>
              <strong>Week:</strong> June 17–23
            </p>
            <p>
              <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
            </p>
            <p>
              <strong>Total Hours:</strong> 40 hrs
            </p>
          </div>
          <div className="mt-3 flex space-x-2">
            <button
              className="rounded border border-blue-400 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50"
              onClick={() => navigate('/reviewDetails')}
            >
              Review Details
            </button>
            <button
              className="rounded border border-red-400 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
              onClick={handleReject}
            >
              Reject
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">Issiah</p>
            <span className="rounded border border-red-300 bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
              Rejected
            </span>
          </div>
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            <p>
              <strong>Week:</strong> June 17–23
            </p>
            <p>
              <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
            </p>
            <p>
              <strong>Total Hours:</strong> 40 hrs
            </p>
            <p className="font-medium text-red-600">
              Reason: Missing hours on Thursday and incomplete task descriptions
            </p>
          </div>
          <div className="mt-3 flex space-x-2">
            <button
              className="rounded border border-blue-400 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50"
              onClick={() => navigate('/reviewDetails')}
            >
              Review Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
