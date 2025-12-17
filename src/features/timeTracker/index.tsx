'use client'
import Hero from '../../components/ui/hero'
import { useNavigate } from 'react-router-dom'
import TimerSection from './components/TimerSection'
import TimeTrackerTable from './components/tables/TimeTrackerTable'
import { Calendar } from 'lucide-react'
import AddManualEntryButton from './components/AddManualEntryButton'

const TimetrackerIndex = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full space-y-8">
      <Hero title="Time tracker" description="Track time across the app!" />
      <TimerSection />

      <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6">
        <div className="flex w-full items-center justify-between">
          <p className="font-bricolage text-lg font-semibold text-black">
            Log History
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-600">
              Jan 2025 - May 2025
              <Calendar size={16} />
            </button>

            <button
              onClick={() => navigate('/viewAll')}
              className="text-sm font-semibold text-primary hover:underline"
            >
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-purple-50 p-4">
            <p className="text-xl font-bold text-purple-800">6h 30m</p>
            <p className="text-sm text-purple-800">Total Today</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4">
            <p className="text-xl font-bold text-green-900">5h 30m</p>
            <p className="text-sm text-green-900">Billable</p>
          </div>
        </div>

        <TimeTrackerTable />

        <AddManualEntryButton />
      </div>
    </div>
  )
}

export default TimetrackerIndex
