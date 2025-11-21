import Button from '../../../../components/button/button'
import { useDispatch } from 'react-redux'
import { closeUploadSuccessModal } from '../../../../redux/slice/modalSlice'
import { openUploadFailedModal } from '../../../../redux/slice/modalSlice'

const UploadSuccessful = () => {
  const list = [
    { tile: 'Total Entries:', number: 15 },
    { tile: 'Total Hours:', number: 42.5 },
    { tile: 'Billable Hours:', number: 3.125 },
    { tile: 'Projects Updated::', number: 150 },
  ]
  const dispatch = useDispatch()
  const handleCloseModal = () => {
    dispatch(closeUploadSuccessModal())
    dispatch(openUploadFailedModal())
  }
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="w-[40vw] rounded-lg bg-white">
        <div className="relative flex items-center justify-center">
          {/* Base image */}
          <img src="/icon/Ellipse 13 (4).svg" alt="Base" />

          {/* Overlay image */}
          <img
            src="/icon/icon (32).svg"
            alt="Overlay"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <p className="font-bricolage text-[32px] font-bold">
            Upload Successful!
          </p>
          <div className="text-center text-[16px] font-normal text-[#606060]">
            Your time logs have been saved successfully. 15 entries totalling
            42.5 hours have been added to your timesheet.
          </div>
          <div className="border-primary w-full rounded-lg border bg-[#F5F0FA] p-4">
            <p className="text-primary text-[20px] font-bold">📊 Summary</p>
            <div className="mt-4 flex flex-col gap-2">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3"
                >
                  <p className="font-inter text-[16px] font-normal">
                    {item.tile}
                  </p>
                  <p className="font-bold">{item.number}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-3">
            <Button className="h-16 w-full" onClick={handleCloseModal}>
              View my time logs
            </Button>
            <button
              className="h-16 w-full rounded-lg bg-[#F2F0F5] font-bold"
              onClick={() => dispatch(closeUploadSuccessModal())}
            >
              Back to dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadSuccessful
