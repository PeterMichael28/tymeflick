import Button from '../../../../components/button/button'
import { useDispatch } from 'react-redux'
import { closeEnterPriceSuccessModal } from '../../../../redux/slice/modalSlice'
import { useNavigate } from 'react-router-dom'

const SuccessModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeModal = () => {
    dispatch(closeEnterPriceSuccessModal())
    navigate('/')
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

        <div className="flex flex-col items-center justify-center gap-3 p-7">
          <p className="font-bricolage text-[32px] font-bold text-[#000000]">
            Submission Received
          </p>
          <p className="text-center text-[18px] font-normal text-[#606060]">
            Your Submission has been received, you’ll be contacted by the team
            within 2-3 business day
          </p>
          <Button onClick={closeModal} className="w-full">
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
