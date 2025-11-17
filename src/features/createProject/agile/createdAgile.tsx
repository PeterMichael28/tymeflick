import IndexChecker from '../ui/checker/indexChecker'
import { useNavigate } from 'react-router-dom'

const CreatedAgile = () => {
      const steps = ['Select Template', 'Configure Setup', 'Confirm']
      const stepList = ['Step 1', 'Step 2', 'Step 3']
      const navigate = useNavigate()

      const list = [
        {title:'Project Type', label:'Agile'},
        {title: 'Sprint Duration', label:'2 Weeks'},
        {title: 'Sprint Count', label:'4'},
        {title: 'Start Date', label:'April 15, 2023'},
        {title: 'Epics:', label:'2'},
        {title: 'Agile Rituals', label:'4/4'},

      ]
  return (
    <div className='h-full mb-20 overflow-y-scroll overflow-x-hidden'>
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
<div className='flex flex-col justify-center items-center mt-5 gap-4'>
      
        <div>
            <img src="/icon/icon (33).svg" alt="Icon" />
        </div>

        <div  className='flex justify-center flex-col items-center text-officeBrown700 font-bricolage'>
            <p className='font-bold text-[20px]'>Agile Project "Website Revamp" Created with 4 Sprint Cycles</p>
            <p className='font-normal text-[14px]'>Your project structure has been generated and is ready for team collaboration.</p>
        </div>

        <div className='w-[50%]'>
            <p className='font-bricolage text-grey900 '>Project Summary</p>
            <div className='bg-[#CCDBFF33] p-4 rounded-lg flex flex-col gap-4'>
                {
                    list.map((item, index) => (
                        <div key={index} className='flex items-center justify-between gap-4'>
                            <div className='text-[14px] text-grey900 '>{item.title}:</div>
                            <div className='text-[16px] text-black font-bold'>{item.label}</div>
                        </div>
                    ))
                }

            </div>
        </div>
</div>

<div className='mt-5 w-full flex gap-4'>
    <button className='bg-primary py-4 flex-1 rounded-lg text-white font-bold' onClick={() => navigate('/project')}>View Project</button>
    <button className='border border-[#4F5E6E] flex-1 rounded-lg text-[#2B323B]'onClick={() => navigate('/')} >Go to Dashboard</button>
</div>
      
    </div>
  )
}

export default CreatedAgile
