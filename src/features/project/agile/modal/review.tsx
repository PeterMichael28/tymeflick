// import React from 'react'
import Button from '../../../../components/button/button'
import { closeAgileSprintModal } from '../../../../redux/slice/modalSlice'
import { openAgileSprintSuccessModal } from '../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'

const list = [
  {
    title: 'Sprint Name',
    description: 'Sprint 14 - July 2025',
  },
  {
    title: 'Duration',
    description: '3 Weeks',
  },
  {
    title: 'Dates',
    description: 'Jul 21 - Aug 10, 2025',
  },
  {
    title: 'Sprint Goal:',
    description: 'No specific goal set',
  },
]

const Review = () => {
  const dispatch = useDispatch()
  const closeSprintModal = () => {
    dispatch(closeAgileSprintModal())
    dispatch(openAgileSprintSuccessModal())
  }
  return (
    <div className="absolute inset-0 flex h-screen items-center justify-center bg-black/20">
      <div className="flex w-[50vw] flex-col gap-4 rounded-lg bg-white p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="/icon/checkImage.svg"
            alt="Check Mark"
            className="size-20"
          />
          <h3 className="font-bricolage text-officeBrown700 text-[20px] font-bold">
            Review Sprint Plan
          </h3>
        </div>

        <div>
          <p className="font-bricolage mb-2 font-normal text-[#101928]">
            Sprint Overview
          </p>
          <div className="flex flex-col gap-2 rounded-lg bg-[#CCDBFF33] p-4">
            {list.map((item, index) => (
              <div
                key={index}
                className="font-bricolage flex justify-between text-sm"
              >
                <p>{item.title}</p>
                <p className="font-bold">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bricolage mb-2 font-normal text-[#101928]">
            Work Items Summary
          </p>
          <div className="flex flex-col gap-2 rounded-lg bg-[#CCDBFF33] p-4">
            <span className="font-bricolage flex justify-between text-sm">
              <p>Total Items</p>
              <p className="font-bold">1 Work Items</p>
            </span>
            <span className="font-bricolage flex justify-between text-sm">
              <p>Breakdown</p>
              <p className="font-bold">1 Stories, 0 tasks</p>
            </span>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            className="font-bricolage h-17 w-full rounded-md bg-[#F2F0F5] px-15 font-normal text-[#404C59]"
            onClick={() => dispatch(closeAgileSprintModal())}
          >
            Edit
          </button>
          <Button
            className="font-bricolage w-full font-normal"
            onClick={closeSprintModal}
          >
            Save and Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Review
