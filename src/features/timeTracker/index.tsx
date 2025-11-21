'use client';
import Hero from '../../components/ui/hero'
import { useNavigate } from "react-router-dom";
import TimerSection from './components/TimerSection';
import TimeTrackerTable from './components/tables/TimeTrackerTable';
import { Calendar, Plus } from "lucide-react";
import AddManualEntryButton from './components/AddManualEntryButton';

const TimetrackerIndex = () => {
  const navigate = useNavigate();

  return (
  <div className="w-full space-y-8">
      <Hero title="Time tracker" description='Track time across the app!' />
      <TimerSection />

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        <div className="flex items-center justify-between w-full">
          <p className="font-bricolage text-lg font-semibold text-black">
            Log History
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-600 bg-gray-50">
              Jan 2025 - May 2025
              <Calendar size={16} />
            </button>

            <button
              onClick={() => navigate("/viewAll")}
              className="font-semibold text-[#66C61C] text-sm hover:underline"
            >
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-purple-800 font-bold text-xl">6h 30m</p>
            <p className="text-purple-800 text-sm">Total Today</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-900 font-bold text-xl">5h 30m</p>
            <p className="text-green-900 text-sm">Billable</p>
          </div>
        </div>

        <TimeTrackerTable />

        <AddManualEntryButton />
      </div>
    </div>
  )
}

export default TimetrackerIndex

