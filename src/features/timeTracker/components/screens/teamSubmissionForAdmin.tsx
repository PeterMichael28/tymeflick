'use client'

import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, XCircle, Unlock } from 'lucide-react'

const TeamSubmissionForAdmin = () => {
  const navigate = useNavigate()

  return (
    <div className="font-inter space-y-8 p-6">
      {/* Go Back */}
      <div className="flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3">
        <ArrowLeft className="h-5 w-5 text-gray-700" />
        <span className="font-medium text-gray-800">Go back</span>
        <div className="ml-auto flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="w-40 rounded-md border px-3 py-1 text-sm"
          />
          <select className="rounded-md border px-2 py-1 text-sm text-gray-700">
            <option>All Status</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* System Statistics */}
      <div>
        <h2 className="mb-3 font-semibold text-gray-800">System Statistics</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-center">
            <p className="text-sm font-medium text-blue-600">
              Audit Log Entries
            </p>
            <h2 className="mt-2 text-3xl font-bold text-blue-600">10</h2>
          </div>
          <div className="rounded-lg border border-green-100 bg-green-50 p-4 text-center">
            <p className="text-sm font-medium text-green-600">Approved</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">2</h2>
          </div>
          <div className="rounded-lg border border-red-100 bg-red-50 p-4 text-center">
            <p className="text-sm font-medium text-red-600">Rejected</p>
            <h2 className="mt-2 text-3xl font-bold text-red-600">1</h2>
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-center">
            <p className="text-sm font-medium text-gray-700">
              Total Submission
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-700">4</h2>
          </div>
        </div>
      </div>

      {/* Submission Management */}
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <h3 className="mb-2 font-semibold text-gray-800">
          Submission Management
        </h3>
        <p className="mb-4 text-sm text-gray-600">
          Click on any row to view detailed submission information and activity
          logs
        </p>

        <div className="space-y-5">
          {/* Card 1 */}
          <div className="rounded-lg border-l-4 border-blue-400 bg-gray-50 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-semibold text-gray-800">Sarah Bello</h4>
              <span className="rounded-full border border-blue-300 px-3 py-1 text-sm text-blue-600">
                Submitted
              </span>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Manager:</strong> Mr Bassey
            </p>
            <p className="text-sm text-gray-700">
              <strong>Week:</strong> June 1, 2025
            </p>
            <p className="text-sm text-gray-700">
              <strong>Submitted:</strong> Jun 30, 2025, 05:30 PM
            </p>
            <p className="mb-3 text-sm text-gray-700">
              <strong>Total Hours:</strong> 31.5 hrs
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-md border border-blue-300 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50"
                onClick={() => navigate('/reviewDetailsAdmin')}
              >
                Review Details
              </button>
              <button className="flex items-center gap-1 rounded-md border border-yellow-400 px-3 py-1 text-sm text-yellow-600 hover:bg-yellow-50">
                <Unlock className="h-4 w-4" /> Unlock
              </button>
              <button
                onClick={() => navigate('/forceApprove')}
                className="flex items-center gap-1 rounded-md border border-green-400 px-3 py-1 text-sm text-green-600 hover:bg-green-50"
              >
                <CheckCircle2 className="h-4 w-4" /> Force Approve
              </button>
              <button
                onClick={() => navigate('/forceReject')}
                className="flex items-center gap-1 rounded-md border border-red-400 px-3 py-1 text-sm text-red-600 hover:bg-red-50"
              >
                <XCircle className="h-4 w-4" /> Force Reject
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border-l-4 border-green-500 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-semibold text-gray-800">David</h4>
              <span className="rounded-full border border-green-300 px-3 py-1 text-sm text-green-600">
                Approved
              </span>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Week:</strong> June 17–23
            </p>
            <p className="text-sm text-gray-700">
              <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
            </p>
            <p className="mb-3 text-sm text-gray-700">
              <strong>Total Hours:</strong> 40 hrs
            </p>
            <div className="flex gap-3">
              <button
                className="rounded-md border border-blue-300 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50"
                onClick={() => navigate('/reviewDetailsAdmin')}
              >
                Review Details
              </button>
              <button
                onClick={() => navigate('/forceReject')}
                className="flex items-center gap-1 rounded-md border border-red-400 px-3 py-1 text-sm text-red-600 hover:bg-red-50"
              >
                <XCircle className="h-4 w-4" /> Force Reject
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border-l-4 border-red-500 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-semibold text-gray-800">Issiah</h4>
              <span className="rounded-full border border-red-300 px-3 py-1 text-sm text-red-600">
                Rejected
              </span>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Week:</strong> June 17–23
            </p>
            <p className="text-sm text-gray-700">
              <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
            </p>
            <p className="mb-2 text-sm text-gray-700">
              <strong>Total Hours:</strong> 40 hrs
            </p>
            <p className="mb-3 text-sm font-medium text-red-600">
              Reason: Missing hours on Thursday and incomplete task descriptions
            </p>
            <button
              className="rounded-md border border-blue-300 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50"
              onClick={() => navigate('/reviewDetailsAdmin')}
            >
              Review Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSubmissionForAdmin
