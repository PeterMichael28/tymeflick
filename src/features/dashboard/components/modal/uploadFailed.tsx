import { useDispatch } from 'react-redux'
import { closeUploadFailedModal } from '../../../../redux/slice/modalSlice'
import { openUploadTimeLogModal } from '../../../../redux/slice/modalSlice'

const UploadFailed = () => {
  const dispatch = useDispatch()
  const handleCloseModal = () => {
    dispatch(closeUploadFailedModal())
    dispatch(openUploadTimeLogModal())
  }
  const errorList = [
    { row: 'Row 3', error: 'Invalid entry format' },
    { row: 'Row 5', error: 'Project not found' },
    { row: 'Row 7', error: 'Invalid date format' },
    { row: 'Row 10', error: 'Invalid time format' },
    { row: 'Row 12', error: 'Invalid project code' },
    { row: 'Row 15', error: 'Invalid client code' },
  ]
  const quickFixTips = [
    'Double-check your file format',
    'Check your file content for errors',
    'Make sure your file is in the correct format',
    'Review your project codes and ensure they match the ones in your timesheet',
    'Review your client codes and ensure they match the ones in your timesheet',
    'Make sure your date, time, and project codes are in the correct format',
  ]
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="max-h-[80vh] w-[40vw] overflow-y-auto rounded-lg bg-white">
        <div className="relative flex items-center justify-center">
          <img src="/icon/Ellipse 13 (5).svg" alt="Base" />
          <img
            src="/icon/Vector (19).svg"
            alt="Overlay"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <p className="font-bricolage text-[32px] font-bold text-[#D00416]">
            Upload Failed
          </p>
          <p className="text-center text-[16px] font-normal text-[#606060]">
            We encountered errors while parsing your file. Please review the
            issues below and try again.
          </p>

          <div className="w-full rounded-lg border border-[#D00416] bg-[#FB37481A] p-4">
            <p className="text-[20px] font-bold text-[#D00416]">
              ⚠️ Errors Found
            </p>
            {errorList.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <p className="font-bold">Row {item.row}</p>
                <p>{item.error}</p>
              </div>
            ))}
          </div>

          <div className="w-full rounded-lg border border-[#FF8800] bg-[#FFDB431A] p-4">
            <p className="text-[20px] font-bold text-[#FF8800]">
              💡 Quick Fix Tips
            </p>
            {quickFixTips.map((tip, index) => (
              <div key={index} className="flex gap-2">
                <span>.</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>

          <button
            className="h-16 w-full rounded-lg bg-[#F2F0F5] font-bold"
            onClick={() => handleCloseModal()}
          >
            Back to Upload
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadFailed
