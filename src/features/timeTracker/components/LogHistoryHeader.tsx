'use client'

export default function LogHistoryHeader({ router }: any) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-900">Log History</h2>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2">
          <span className="text-sm text-black">Duration</span>
          <svg width="16" height="16" fill="currentColor">
            <circle cx="8" cy="8" r="7" stroke="black" fill="transparent" />
          </svg>
        </button>

        <button
          onClick={() => router.push('/dashboard/timeTracker/view-all')}
          className="text-sm font-semibold text-green-600 hover:underline"
        >
          View All
        </button>
      </div>
    </div>
  )
}
