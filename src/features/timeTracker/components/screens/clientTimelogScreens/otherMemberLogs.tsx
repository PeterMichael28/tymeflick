'use client'

import OtherMemberLogsTable from '../../tables/OtherMemberLogsTable'
import { useNavigate } from 'react-router-dom'

export default function OtherMemberLogsPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6 p-6">
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
            className="rounded-md border border-green-500 bg-green-100 px-4 py-2 text-green-700"
            onClick={() => navigate('/otherMemberLogs/')}
          >
            Other Member Logs
          </button>
          <button
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50"
            onClick={() => navigate('/revenue/')}
          >
            Revenue
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="rounded-md border px-3 py-2"
          />
          <input type="date" className="rounded-md border px-3 py-2" />
          <select className="rounded-md border px-3 py-2">
            <option>Project Sprint</option>
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>

      {/* Section 1 */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-700">
            Your time entries this week | This Week
          </h2>
          <p className="text-sm font-medium text-gray-600">2:00:52</p>
        </div>
        <OtherMemberLogsTable />
      </div>

      {/* Section 2 */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-700">
            Your time entries last week | This Week
          </h2>
          <p className="text-sm font-medium text-gray-600">2:00:52</p>
        </div>
        <OtherMemberLogsTable />
      </div>
    </div>
  )
}
