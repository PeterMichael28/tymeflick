import Button from '../../../../components/button/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { closeInvitationSentModal } from '../../../../redux/slice/modalSlice'

const InvitationSent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    dispatch(closeInvitationSentModal())
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
            Invitations Sent
          </p>
          <p className="text-center text-[18px] font-normal text-[#606060]">
            Invitation sent successfully, once accepted, they will appear on the
            team member list.
          </p>
          <Button
            className="font-bricolage mt-6 w-full text-lg font-semibold"
            onClick={handleCloseModal}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InvitationSent
