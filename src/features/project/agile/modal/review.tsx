// import React from 'react'
import Button from "../../../../components/button/button"
import { closeAgileSprintModal } from "../../../../redux/slice/modalSlice"
import { openAgileSprintSuccessModal } from "../../../../redux/slice/modalSlice"
import { useDispatch } from "react-redux"

const list = [
  {
    title:'Sprint Name',
    description: 'Sprint 14 - July 2025'
  }, 
  {
    title:'Duration',
    description:'3 Weeks'
  },
  {
    title:'Dates',
    description:'Jul 21 - Aug 10, 2025'
  },
  {
    title:'Sprint Goal:',
    description:'No specific goal set'
  }
]



const Review = () => {
  const dispatch = useDispatch()
  const closeSprintModal = () => {
    dispatch(closeAgileSprintModal())
    dispatch(openAgileSprintSuccessModal())
  }
  return (
   <div className="bg-black/20 absolute inset-0 flex justify-center items-center h-screen">
     <div className="bg-white  w-[50vw] p-4 rounded-lg flex flex-col gap-4">
       <div className="flex flex-col justify-center items-center gap-4">
          <img src="/icon/checkImage.svg" alt="Check Mark" className="size-20" />
          <h3 className="font-bricolage font-bold text-[20px] text-officeBrown700">Review Sprint Plan</h3>
       </div>

       <div>
         <p className="text-[#101928] font-bricolage font-normal mb-2">Sprint Overview</p>
        <div className="bg-[#CCDBFF33] p-4 flex flex-col gap-2 rounded-lg">
            {list.map((item, index) => (
           <div key={index} className="flex justify-between text-sm font-bricolage">
               <p>{item.title}</p>
               <p className="font-bold">{item.description}</p>
           </div>
         ))

         }
        </div>
       </div>

       <div>
           <p className="text-[#101928] font-bricolage font-normal mb-2">Work Items Summary</p>
          <div className="bg-[#CCDBFF33] p-4 flex flex-col gap-2 rounded-lg">
              <span className="flex justify-between text-sm font-bricolage">
              <p>Total Items</p>
              <p className="font-bold">1 Work Items</p>
           </span>
           <span className="flex justify-between text-sm font-bricolage">
              <p>Breakdown</p>
              <p className="font-bold">1 Stories, 0 tasks</p>
           </span>
          </div>
       </div>

       <div className="flex justify-between gap-4">
         <button className="bg-[#F2F0F5] w-full h-17 px-15 rounded-md font-normal font-bricolage text-[#404C59]" onClick={() => dispatch(closeAgileSprintModal())}>Edit</button>
         <Button className="w-full font-normal font-bricolage" onClick={closeSprintModal}>
          Save and Continue
         </Button>
       </div>
   </div>
   </div>
  )
}

export default Review