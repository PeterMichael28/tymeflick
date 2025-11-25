import Button from '../../../../components/button/button'
import { closeAgileSprintSuccessModal } from '../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SprintSaved = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    dispatch(closeAgileSprintSuccessModal())
    navigate('/project/agile')
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="p7 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white md:w-[45vw]">
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

        <div className="flex w-full flex-col items-center justify-center gap-3 p-5">
          <p className="font-bricolage text-[32px] font-bold text-[#000000]">
            Sprint Saved Successfully!
          </p>
          <p className="text-center text-[18px] font-normal text-[#606060]">
            Your team can now begin executing the sprint plan
          </p>
          <Button className="font-bricolage mt-6 w-full text-lg font-semibold">
            Invite Team Members
          </Button>
          <button
            className="font-bricolage h-17 w-full rounded-md bg-[#F2F0F5] px-15 text-lg font-semibold text-[#404C59]"
            onClick={handleCloseModal}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default SprintSaved
