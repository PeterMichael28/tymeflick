import IndexChecker from '../ui/checker/indexChecker'
import { useNavigate } from 'react-router-dom'

const CreatedHybrid = () => {
    const steps = [
    'Select Template',
    'Configure Setup',
    'Preview Structure',
    'Confirm',
  ]
  const stepList = ['Step 1', 'Step 2', 'Step 3', 'Step 4']
  const navigate = useNavigate()

   const list = [
    { title: 'Project Type', label: 'Water' },
    { title: 'Project Name', label: 'Website Revamping' },
    { title: 'Client:', label: 'Acme Inc.' },
    { title: 'Total Duration:', label: '12 weeks' },
    { title: 'Planning:', label: '5 weeks' },
    { title: 'Execution', label: '4 weeks' },
    { title: 'Final Phase :', label: '3 weeks' },
    { title: 'Est. Start:', label: 'Jan 1, 2025' },
    { title: 'Est. Completion: ', label: 'Apr 15, 2025' },
  ]
  return (
    <div className="mb20 min-h-[calc(130vh-80px)] overflow-x-hidden overflow-y-scroll">
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
        <IndexChecker steps={steps} currentStep={4} />
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-4">
        <div>
          <img src="/icon/icon (33).svg" alt="Icon" />
        </div>

        <div className="text-officeBrown700 font-bricolage flex flex-col items-center justify-center">
          <p className="text-[20px] font-bold">
            Waterfall Project "Audit Readiness" Created with 6 Sequential Phases
          </p>
          <p className="text-[14px] font-normal">
            Your project structure has been generated and is ready for team
            collaboration.
          </p>
        </div>

        <div className="w-[50%]">
          <p className="font-bricolage text-grey900">Project Summary</p>
          <div className="flex flex-col gap-4 rounded-lg bg-[#CCDBFF33] p-4">
            {list.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4"
              >
                <div className="text-grey900 text-[14px]">{item.title}:</div>
                <div className="text-[16px] font-bold text-black">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex w-full gap-4">
        <button
          className="bg-primary flex-1 rounded-lg py-4 font-bold text-white"
          onClick={() => navigate('/project')}
        >
          View Project
        </button>
        <button
          className="flex-1 rounded-lg border border-[#4F5E6E] text-[#2B323B]"
          onClick={() => navigate('/')}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}

export default CreatedHybrid
