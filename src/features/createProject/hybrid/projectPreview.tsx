import IndexChecker from '../ui/checker/indexChecker'
import { useNavigate } from 'react-router-dom'

const ProjectPreviewHybrid = () => {
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

    const dataList = [
    {
      title: 'Design',
      time: '6 weeks',
      list: [
        { title: 'System Architecture', assigned: 'John Doe' },
        { title: 'Database Design', assigned: 'John Doe' },
        { title: 'Frontend Development', assigned: 'Jane Smith' },
      ],
    },
    {
      title: 'Development',
      time: '8 weeks',
      list: [
        { title: 'User Interface Design', assigned: 'Jane Smith' },
        { title: 'Backend Development', assigned: 'Mike Johnson' },
        { title: 'Deployment', assigned: 'John Doe' },
      ],
    },
    {
      title: 'Testing',
      time: '4 weeks',
      list: [
        { title: 'Integration Testing', assigned: 'Jane Smith' },
        { title: 'User Acceptance Testing', assigned: 'Mike Johnson' },
        { title: 'Performance Testing', assigned: 'Mike Johnson' },
      ],
    },
    {
      title: 'Deployment',
      time: '2 weeks',
      list: [
        { title: 'Deployment Plan', assigned: 'John Doe' },
        { title: 'Production Environment Setup', assigned: 'John Doe' },
        { title: 'Monitoring and Maintenance', assigned: 'John Doe' },
      ],
    },
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
         Hybrid Project Preview
          </p>
          <p className="text-[14px] font-normal text-[#8898AA]">
            Review the project structure combining waterfall planning and agile execution.
          </p>
        </div>

        <div>
          {/* <p>Project Timeline</p> */}

          <div className="flex flex-col gap-4">
            {dataList.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="w-full bg-[#F9F9F9] p-4">
                  <div className="rounded-[20px] border-l-5 border-[#0B54FF] bg-white px-6 py-4">
                    <div className="flex justify-between">
                      <p className="text-grey900 font-inter font-bold">
                        {item.title}
                      </p>
                      <p className="font-bricolage rounded-lg border border-[#0B54FF] bg-[#CCDBFF80] px-2 py-1.5 text-sm text-[#0B54FF]">
                        {item.time}
                      </p>
                    </div>
                    <div className="mt-3 flex justify-between gap-3">
                      {item.list.map((listItem, listIndex) => (
                        <div
                          key={listIndex}
                          className="w-full rounded-md border border-[#D2D9DF] bg-[#F9F9F9] px-4 py-2"
                        >
                          <p className="text-grey900 font-bricolage text-sm font-bold">
                            {listItem.title}
                          </p>
                          <p className="text-grey900 font-bricolage text-xs font-normal">
                            {listItem.assigned}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ml-4 flex items-center gap-3 rounded-[20px] border-l-5 border-[#FFB600] bg-[#FFB6001A] p-5">
                  <img src="/icon/Group (8).svg" alt="Icon" />
                  <div className="flex flex-col gap-3">
                    <p className="text-grey900 font-bricolage text-sm font-bold">
                      Milestone: Design Complete
                    </p>
                    <p className="text-grey900 font-bricolage text-xs font-normal">
                      Phase deliverables reviewed and approved
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex gap-3 items-center mt-3'>
              <p className='text-[#0B54FF] font-bold font-inter text-[16px]'>Handoff</p>
              <div className='border-t-2 w-full border-dashed border-[#0B54FF] '/>
          </div>

          <div className='mt-3'>
             <div className="w-full">
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
          <div className="mt-7 flex justify-between gap-5">
            <button className="font-bricolage flex-1 font-bold text-[#404C59]">
              Previous
            </button>
            <button
              className="bg-primary flex-1 rounded-lg py-4 font-bold text-white"
              onClick={() => navigate('/create-project/hybrid/created')}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectPreviewHybrid
