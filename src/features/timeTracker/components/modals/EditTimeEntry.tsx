import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../redux/store'
import Button from '../../../../components/button/button'
import { closeEditTimeEntryModal } from '../../../../redux/slice/modalSlice'
import { Calendar, Clock3 } from 'lucide-react'

type TimeEntry = {
  id?: string | number
  date?: string
  startTime?: string
  endTime?: string
  description?: string
  billable?: boolean
}

const EditTimeEntry = () => {
  const dispatch = useDispatch()

  // Assuming you have something like this in modalSlice
  const selectedEntry = useSelector(
    (state: RootState) => state.modal.selectedTimeEntry as TimeEntry | null
  )

  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (selectedEntry) {
      setDate(selectedEntry.date || '')
      setStartTime(selectedEntry.startTime || '')
      setEndTime(selectedEntry.endTime || '')
      setDescription(selectedEntry.description || '')
    }
  }, [selectedEntry])

  // Close modal
  const handleClose = () => {
    dispatch(closeEditTimeEntryModal())
  }

  // Save changes (wire this to your API / redux update later)
  const handleSave = () => {
    const updated: TimeEntry = {
      ...(selectedEntry || {}),
      date,
      startTime,
      endTime,
      description,
    }

    // TODO: dispatch an action to persist `updated` to store/backend
    console.log('Updated time entry:', updated)

    dispatch(closeEditTimeEntryModal())
  }

  // If you want to hide modal when nothing is selected:
  // if (!selectedEntry) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <p className="font-inter text-[22px] font-bold">Edit Time Entry</p>
          <button
            onClick={handleClose}
            className="text-xl font-inter text-[#111827] hover:opacity-70"
          >
            ×
          </button>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-[#111827]">
            Date
          </label>
          <div className="relative">
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="30/05/2025"
              className="w-full rounded-md border border-[#D2D9DF] px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8898AA]" />
          </div>
        </div>

        {/* Times row */}
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Start Time */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#111827]">
              Start Time
            </label>
            <div className="relative">
              <input
                type="text"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="9:00 AM"
                className="w-full rounded-md border border-[#D2D9DF] px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Clock3 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8898AA]" />
            </div>
          </div>

          {/* End Time */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#111827]">
              End Time
            </label>
            <div className="relative">
              <input
                type="text"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="10:30 AM"
                className="w-full rounded-md border border-[#D2D9DF] px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Clock3 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8898AA]" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-[#111827]">
            Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Daily StandUp Meeting"
            className="w-full rounded-md border border-[#D2D9DF] px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button
            className="h-14 w-full"
            onClick={handleSave}
          >
            Save Changes
          </Button>
          <button
            onClick={handleClose}
            className="h-10 w-full text-center text-sm font-medium text-[#606060] hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditTimeEntry
