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
            Waterfall Project Setup
          </p>
          <p className="text-[14px] font-normal text-[#8898AA]">
            Review your sequential phases and milestones
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
