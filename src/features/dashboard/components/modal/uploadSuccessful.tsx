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
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <div className="w-[40vw] bg-white rounded-lg">
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
       
       <div className='p-4 flex justify-center flex-col items-center gap-3'>
          <p className='font-bold font-bricolage text-[32px]'>Upload Successful!</p>
        <div className='text-[#606060] text-center font-normal text-[16px]'>  
          Your time logs have been saved successfully. 15 entries totalling 42.5
          hours have been added to your timesheet.
        </div>
        <div className='w-full  border border-primary rounded-lg p-4 bg-[#F5F0FA]'>
          <p className='text-[20px] font-bold text-primary'>📊 Summary</p>
          <div className='flex flex-col gap-2 mt-4'>
            {list.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-3">
              <p className='text-[16px] font-inter font-normal'>{item.tile}</p>
              <p className='font-bold '>{item.number}</p>
            </div>
          ))}
          </div>
        </div>
        <div className='w-full flex flex-col gap-3 '>
          <Button className="w-full h-16" onClick={handleCloseModal}>View my time logs</Button>
          <button className='bg-[#F2F0F5] w-full h-16 rounded-lg font-bold' onClick={() => dispatch(closeUploadSuccessModal())}>Back to dashboard</button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default UploadSuccessful
