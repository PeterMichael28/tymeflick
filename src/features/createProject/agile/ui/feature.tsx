import { useState } from "react"
import IndexChecker from '../../ui/checker/indexChecker'
import DropDown from '../../ui/dropdown'
import { ArrowRight, ArrowLeft } from 'lucide-react'

interface FeatureProps {
  onNext: () => void
  onPrev: () => void
}
const Feature = ({ onNext, onPrev }: FeatureProps) => {
  const stepList = ['Add Epics', 'Add Features', 'Add Stories', 'Add Tasks']

  // STATE TO HOLD FEATURES
  const [features, setFeatures] = useState([{ id: 1 }])

  const addFeature = () => {
    setFeatures(prev => [...prev, { id: prev.length + 1 }])
  }

  const removeFeature = (id: number) => {
    if(id === 1) return
    setFeatures(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className='bg-[#F9F9F9] p-5 rounded-3xl flex flex-col gap-4'>

      {/* Header */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <span className='font-bold font-bricolage text-[16px]'>Project Epics (Epic 1)</span>
          <img src="/icon/Group (7).svg" alt="Icon" />
          <p className='font-normal text-[#2B323B] text-[14px]'>Features</p>
        </div>

        <button
          onClick={addFeature}
          className='bg-primary py-2 px-3 rounded-md text-[12px] text-white font-inter font-semibold flex gap-2'
        >
          <img src="/icon/AddCross.svg" alt="Icon" />
          Add Feature
        </button>
      </div>

      {/* Step Progress */}
      <div className='w-[75%]'>
        <IndexChecker steps={stepList} currentStep={2} />
      </div>

      {/* FEATURE CARDS */}
      {features.map((feature, index) => (
        <div key={feature.id} className='bg-white p-3 rounded-lg mb-4'>
          <div className='bg-[#F5F0FA] p-4 border border-primary rounded-lg'>
            <div className='flex justify-between items-center gap-5'>
              <p className='text-grey900 font-medium text-base flex-1'>
                Feature {index + 1}
              </p>

              <input
                type="text"
                placeholder='Add feature title'
                className='flex-7 bg-white px-4 py-2 rounded-lg border border-primary'
              />

              <button
                onClick={() => removeFeature(feature.id)}
                className='bg-[#D00416] size-[43px] text-white rounded-lg'
              >
                X
              </button>
            </div>

            <div className='flex flex-col gap-3 mt-3'>
              <DropDown label='Assigned To' onChange={() => {}} options={[]} value='' placeholder='' />
              <DropDown label='Priority' onChange={() => {}} options={[]} value='' placeholder='' />

              <div className='flex flex-col gap-2'>
                <label className='text-grey900 text-[14px] font-inter font-normal'>Description</label>
                <textarea
                  placeholder='Click to Enter'
                  className="font-bricolage w-full bg-white rounded-md border border-[#D0D5DD] resize-none p-2 text-[13px] text-[#667185]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className='flex justify-between mt-7'>
        <button className='flex gap-3 items-center text-[#1E1E1E] font-inter font-normal text-xs cursor-pointer' onClick={onPrev}> 
          <ArrowLeft size={15} />
          Previous
        </button>

        <button className='flex gap-3 items-center text-[#1E1E1E] font-inter font-normal text-xs cursor-pointer' onClick={onNext}>
          Next
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  )
}

export default Feature
