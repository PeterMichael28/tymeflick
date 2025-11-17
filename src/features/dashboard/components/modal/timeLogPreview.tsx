import { useSelector } from 'react-redux'
import type { RootState } from '../../../../redux/store'
import Papa from 'papaparse'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { closeReviewTimeLogModal } from '../../../../redux/slice/modalSlice'
import Button from '../../../../components/button/button'
import { openUploadSuccessModal } from '../../../../redux/slice/modalSlice'
import { openUploadTimeLogModal } from '../../../../redux/slice/modalSlice'
const TimeLogPreview = () => {
  const dispatch = useDispatch()
  const selectedFile = useSelector(
    (state: RootState) => state.modal.selectedFile
  )
  const [csvData, setCsvData] = useState<any[]>([])
  const [markAll, setMarkAll] = useState(false)
  const [openActionIndex, setOpenActionIndex] = useState<number | null>(null) // Track which row is open
  const actionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedFile && selectedFile.type === 'text/csv') {
      Papa.parse(selectedFile, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedData = results.data.map((row: any) => ({
            ...row,
            billable: row.billable?.toLowerCase() === 'yes' || false,
          }))
          setCsvData(parsedData)
        },
      })
    }
  }, [selectedFile])

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target as Node)
      ) {
        setOpenActionIndex(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!selectedFile || csvData.length === 0) return null

  const totalDuration = csvData.reduce((acc, item) => {
    const duration = parseFloat(item.duration?.replace('h', '') || '0')
    return acc + duration
  }, 0)

  const handleToggleBillable = (index: number) => {
    setCsvData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, billable: !item.billable } : item
      )
    )
  }

  const handleToggleAll = () => {
    setMarkAll((prev) => !prev)
    setCsvData((prev) => prev.map((item) => ({ ...item, billable: !markAll })))
  }

  const columnWidths: Record<string, string> = {
    date: '10%',
    start_time: '10%',
    end_time: '10%',
    duration: '10%',
    project: '20%',
    description: '25%',
    billable: '10%',
  }

  const actionsList = ['Edit Log', 'Delete Log']

  const handleSubmit = () => {
    dispatch(openUploadSuccessModal())
    dispatch(closeReviewTimeLogModal())
  }

  const handleBack = () => {
    dispatch(closeReviewTimeLogModal())
    dispatch(openUploadTimeLogModal())
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="flex max-h-[85vh] w-[80vw] flex-col gap-5 overflow-y-auto rounded-lg bg-white p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="font-inter text-[26px] font-bold">Time Log Preview</p>
          <p
            className="font-inter cursor-pointer text-xl"
            onClick={() => dispatch(closeReviewTimeLogModal())}
          >
            X
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-[18px] font-medium">Review Your Time Entries</p>
          <p className="text-[14px] text-[#404C59]">
            {csvData.length} entries found | Total: {totalDuration}h
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={markAll}
            onChange={handleToggleAll}
            className="cursor-pointer accent-primary"
          />
          <p className="text-grey900 text-[14px]">Mark All as Billable</p>
        </div>

        {/* Table */}
        <div className="relative w-full rounded-lg border border-[#E5E7EB]">
          {/* Header */}
          <div className="flex rounded-t-lg bg-[#F3F3F3] p-3 text-[14px] font-medium">
            {Object.keys(csvData[0]).map((key) => (
              <div
                key={key}
                className="truncate px-2 capitalize"
                style={{ width: columnWidths[key] || 'auto' }}
              >
                {key.replaceAll('_', ' ')}
              </div>
            ))}
            <div className="px-2 text-center" style={{ width: '8%' }}>
              Action
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y">
            {csvData.map((row, i) => (
              <div
                key={i}
                className="relative flex items-center border-b border-[#F2F0F5] p-3 text-[14px] hover:bg-gray-50"
              >
                {Object.entries(row).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex items-center truncate px-2"
                    style={{ width: columnWidths[key] || 'auto' }}
                  >
                    {key === 'billable' ? (
                      <input
                        type="checkbox"
                        checked={!!val}
                        onChange={() => handleToggleBillable(i)}
                        className="cursor-pointer accent-primary"
                      />
                    ) : (
                      (val as any)
                    )}
                  </div>
                ))}

                {/* Action Button */}
                <div
                  className="relative flex items-center justify-center"
                  style={{ width: '8%' }}
                  ref={openActionIndex === i ? actionRef : null}
                >
                  <button
                    onClick={() =>
                      setOpenActionIndex((prev) => (prev === i ? null : i))
                    }
                    className="transition hover:opacity-70"
                  >
                    <img src="/icon/Vector (18).svg" alt="Action Icon" />
                  </button>

                  {/* Dropdown Menu */}
                  {openActionIndex === i && (
                    <div className="absolute top-8 right-0 z-50 w-32 cursor-pointer rounded-md border border-gray-200 bg-white shadow-lg">
                      {actionsList.map((action, idx) => (
                        <p
                          key={idx}
                          className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                        >
                          {action}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between gap-3">
          <button
            className="h-[63px] w-full rounded-md bg-[#F2F0F5]"
            onClick={handleBack}
          >
            Back to upload
          </button>
          <Button className="h-[63px] w-full" onClick={handleSubmit}>
            Confirm and save logs
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TimeLogPreview
