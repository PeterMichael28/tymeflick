import DropDown from '../../ui/dropdown'
import { useDispatch } from 'react-redux'
import { closeEditTaskModal } from '../../../../../redux/slice/modalSlice'

const UserStoryPlanning = () => {
  const dispatch = useDispatch()
  const handleCloseModal = () => dispatch(closeEditTaskModal())
  return (
    <div className="flex flex-col gap-3">
      <DropDown
        label="User Story Attached to"
        placeholder="#3 As a customer, I want to browse products on my mobile device"
        options={[]}
        value=""
        onChange={() => console.log}
      />

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

export default UserStoryPlanning
