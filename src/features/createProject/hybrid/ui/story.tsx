import { useState } from 'react'
import IndexChecker from '../../ui/checker/indexChecker'
import DropDown from '../../ui/dropdown'
import { ArrowRight, ArrowLeft } from 'lucide-react'

interface StoryProps {
  onNext: () => void
  onPrev: () => void
}

const Story = ({ onNext, onPrev }: StoryProps) => {
  const stepList = ['Add Epics', 'Add Features', 'Add Stories', 'Add Tasks']

  // STATE TO HOLD STORIES
  const [stories, setStories] = useState([{ id: 1 }])

  const addStory = () => {
    setStories((prev) => [...prev, { id: prev.length + 1 }])
  }

  const removeStory = (id: number) => {
    if (id === 1) return
    setStories((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-[#F9F9F9] p-5">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bricolage text-[16px] font-bold">
            Project Epic (Epic 1)
          </span>
          <img src="/icon/Group (7).svg" alt="Icon" />
          <p className="text-[14px] font-normal text-[#2B323B]">Features</p>
          <img src="/icon/Group (7).svg" alt="Icon" />
          <p className="text-[14px] font-normal text-[#2B323B]">Stories</p>
        </div>

        <button
          onClick={addStory}
          className="bg-primary font-inter flex gap-2 rounded-md px-3 py-2 text-[12px] font-semibold text-white"
        >
          <img src="/icon/AddCross.svg" alt="Icon" />
          Add Story
        </button>
      </div>

      {/* Step Progress */}
      <div className="w-[75%]">
        <IndexChecker steps={stepList} currentStep={3} />
      </div>

      {/* STORY CARDS */}
      {stories.map((story, index) => (
        <div key={story.id} className="mb-4 rounded-lg bg-white p-3">
          <div className="border-primary rounded-lg border bg-[#F5F0FA] p-4">
            <div className="flex items-center justify-between gap-5">
              <p className="text-grey900 flex-1 text-base font-medium">
                Story {index + 1}
              </p>

              <input
                type="text"
                placeholder="Add story title"
                className="border-primary flex-7 rounded-lg border bg-white px-4 py-2"
              />

              <button
                onClick={() => removeStory(story.id)}
                className="size-[43px] rounded-lg bg-[#D00416] text-white"
              >
                X
              </button>
            </div>

            <div className="mt-3 flex flex-col gap-3">
              <DropDown
                label="Assigned To"
                onChange={() => {}}
                options={[]}
                value=""
                placeholder=""
              />
              <DropDown
                label="Priority"
                onChange={() => {}}
                options={[]}
                value=""
                placeholder=""
              />
              <div className="flex flex-col gap-2">
                <label className="text-grey900 font-inter text-[14px] font-normal">
                  Acceptance Criteria
                </label>
                <textarea
                  placeholder="Click to Enter"
                  className="font-bricolage w-full resize-none rounded-md border border-[#D0D5DD] bg-white p-2 text-[13px] text-[#667185]"
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-grey900 font-inter text-[14px] font-normal">
                  Description
                </label>
                <textarea
                  placeholder="Click to Enter"
                  className="font-bricolage w-full resize-none rounded-md border border-[#D0D5DD] bg-white p-2 text-[13px] text-[#667185]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="mt-7 flex justify-between">
        <button
          className="font-inter flex cursor-pointer items-center gap-3 text-xs font-normal text-[#1E1E1E]"
          onClick={onPrev}
        >
          <ArrowLeft size={15} />
          Previous
        </button>

        <button
          className="font-inter flex cursor-pointer items-center gap-3 text-xs font-normal text-[#1E1E1E]"
          onClick={onNext}
        >
          Next
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  )
}

export default Story
