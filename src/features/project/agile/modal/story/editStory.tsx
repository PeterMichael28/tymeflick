import { closeEditStoryModal } from '../../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Details from './details'
import { X } from 'lucide-react'
import StoryPlanning from './storyPlanning'
import ChildItem from './chidiItem'

const EditStory = () => {
  const [tab, setTab] = useState(0)
  const dispatch = useDispatch()
  const list = ['Details', 'User Story Planning ', 'Child Items']

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="flex w-[50vw] flex-col gap-4 rounded-lg bg-white p-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 rounded-lg border-2 border-[#1FC16B] bg-[#CCDBFF4D] px-3 py-2">
              <p className="size-4 bg-[#1FC16B]"></p>
              <p className="font-bricolage text-[#1FC16B]">Story</p>
            </span>
            <p className="font-bricolage font-bold text-[#404C59]">
              #1 E-commerce Platform Enhancement
            </p>
          </div>
          <button
            onClick={() => dispatch(closeEditStoryModal())}
            className="cursor-pointer"
          >
            <X />
          </button>
        </div>

        <div className="flex gap-6 bg-[#F3F3F3] p-2">
          {list.map((item, index) => (
            <button
              key={index}
              className={`font-bricolage px-4 py-2 text-base ${tab === index ? 'text-primary border-b-2 border-[#66C61C] bg-white font-semibold' : 'border-b-2 border-[#F3F3F3]'} `}
              onClick={() => setTab(index)}
            >
              {item}
            </button>
          ))}
        </div>

        {tab === 0 && <Details />}
        {tab === 1 && <StoryPlanning />}
        {tab === 2 && <ChildItem />}
      </div>
    </div>
  )
}

export default EditStory
