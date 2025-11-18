import IndexChecker from '../ui/checker/indexChecker'
import { useNavigate } from 'react-router-dom'

const ReviewWaterFall = () => {
  const steps = [
    'Select Template',
    'Configure Setup',
    'Preview Structure',
    'Confirm',
  ]
  const stepList = ['Step 1', 'Step 2', 'Step 3', 'Step 4']
  const navigate = useNavigate()

  const dataList = [
    {title:'Design' , time:'6 weeks', list:[
        {title:'System Architecture', assigned:'John Doe'},
        {title:'Database Design', assigned:'John Doe'},
        {title:'Frontend Development', assigned:'Jane Smith'},
    ]},
    {title:'Development' , time:'8 weeks', list:[
        {title:'User Interface Design', assigned:'Jane Smith'},
        {title:'Backend Development', assigned:'Mike Johnson'},
        {title:'Deployment', assigned:'John Doe'},
    ]},
    {title:'Testing' , time:'4 weeks', list:[
        {title:'Integration Testing', assigned:'Jane Smith'},
        {title:'User Acceptance Testing', assigned:'Mike Johnson'},
        {title:'Performance Testing', assigned:'Mike Johnson'},
    ]},
    {title:'Deployment' , time:'2 weeks', list:[
        {title:'Deployment Plan', assigned:'John Doe'},
        {title:'Production Environment Setup', assigned:'John Doe'},
        {title:'Monitoring and Maintenance', assigned:'John Doe'},
    ]},
  ]
  return (
    <div>
      <div className="mb-32 flex h-full flex-col gap-4 overflow-y-scroll rounded-lg bg-white p-5">
        <div className="w-full">
          <div className="flex justify-between">
            {stepList.map((step, index) => (
              <div key={index} className="mb-2">
                <div className="text-neutral200 text-[10px] font-bold">
                  {step}
                </div>
              </div>
            ))}
          </div>
          <IndexChecker steps={steps} currentStep={3} />
        </div>

         <div>
          <p className="font-inter text-[18px] font-bold">
            Waterfall Project Setup
          </p>
          <p className="text-[14px] font-normal text-[#8898AA]">
           Review your sequential phases and milestones
          </p>
        </div>

        <div>
             {/* <p>Project Timeline</p> */}
              
              <div className='flex flex-col gap-4'>
                {dataList.map((item, index) => (
                    <div key={index} className='flex flex-col gap-4'>
                          <div className='bg-[#F9F9F9] w-full p-4 '>
                             <div className='bg-white py-4 px-6 rounded-[20px] border-l-5  border-[#0B54FF]'>
                               <div className='flex justify-between'>
                                  <p className='text-grey900 font-bold font-inter'>{item.title}</p>
                                  <p className='text-[#0B54FF] rounded-lg border border-[#0B54FF] px-2 py-1.5 bg-[#CCDBFF80]  font-bricolage text-sm'>{item.time}</p>
                               </div>
                              <div className='flex justify-between mt-3 gap-3'>
                                 {item.list.map((listItem, listIndex) => (
                                 <div key={listIndex} className='border border-[#D2D9DF] rounded-md px-4 w-full py-2 bg-[#F9F9F9]'>
                                      <p className='text-grey900 font-bold font-bricolage text-sm'>{listItem.title}</p>
                                      <p className='text-grey900 font-normal font-bricolage text-xs'>{listItem.assigned}</p>
                                  </div>
                               ))}
                              </div>
                          </div>
                          </div>

                          <div className='flex gap-3 bg-[#FFB6001A] p-5 rounded-[20px] border-l-5  border-[#FFB600] items-center ml-4 '>
                              <img src="/icon/Group (8).svg" alt="Icon" />
                              <div className='flex flex-col gap-3'>
                                 <p className='text-grey900 font-bold font-bricolage text-sm'>Milestone: Design Complete</p>
                                 <p className='text-grey900 font-normal font-bricolage text-xs'>Phase deliverables reviewed and approved</p>
                              </div>
                          </div>
                    </div>
                ))

                }
              </div>
               <div className="mt-7 flex justify-between gap-5">
          <button className="font-bricolage flex-1 font-bold text-[#404C59]">
            Previous
          </button>
          <button
            className="bg-primary flex-1 rounded-lg py-4 font-bold text-white"
            onClick={() => navigate('/create-project/created-waterfall')}
          >
            Next
          </button>
        </div>

        </div>

      </div>
    </div>
  )
}

export default ReviewWaterFall
