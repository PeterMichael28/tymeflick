import { closeEditEpicModal } from '../../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'

const ChildItem = () => {
  const dispatch = useDispatch()
  const handleCloseModal = () => dispatch(closeEditEpicModal())
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bricolage text-sm font-normal text-[#4F5E6E]">
        Child Items (1)
      </p>
      <div className="mt-1 flex items-center gap-3 rounded-lg border border-[#D2D9DF] bg-[#FAF9FB] p-4">
        <span className="flex items-center gap-2 rounded-lg border border-[#0B54FF] bg-[#CCDBFF4D] px-3 py-2">
          <p className="size-4 rounded-md bg-[#0B54FF]"></p>
          <p className="font-bricolage text-sm text-[#0B54FF]">Feature</p>
        </span>
        <p className="font-inter font-normal text-[#404C59]">
          Signup Form Enhancements
        </p>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-[#66C61C] py-3 text-sm font-bold text-white"
        onClick={handleCloseModal}
      >
        Save and Continue
      </button>
    </div>
  )
}

export default ChildItem
