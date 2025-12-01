import { closeEditStoryModal } from '../../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'
import DropDown from '../../../ui/dropDown'

const ChildItem = () => {
  const dispatch = useDispatch()
  const handleCloseModal = () => dispatch(closeEditStoryModal())
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bricolage text-sm font-normal text-[#4F5E6E]">
        Child Items (1)
      </p>
      <div className="mt-1 flex items-center justify-between gap-3 rounded-lg border border-[#D2D9DF] bg-[#FAF9FB] p-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2 rounded-lg border border-[#FF8800] bg-[#FFDB431A] px-3 py-2">
            <p className="size-4 rounded-md bg-[#FF8800]"></p>
            <p className="font-bricolage text-sm text-[#FF8800]">Task</p>
          </span>
          <p className="font-inter font-normal text-[#404C59]">
            Signup Form Enhancements
          </p>
        </div>
        <DropDown
          options={[
            { value: 'Option 1', label: 'Option 1' },
            { value: 'Option 2', label: 'Option 2' },
            { value: 'Option 3', label: 'Option 3' },
            { value: 'Option 4', label: 'Option 4' },
          ]}
          placeholder="Change Parent"
          value=""
          onChange={() => console.log('dropdown changed')}
          className="w-[15vw]"
        />
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
