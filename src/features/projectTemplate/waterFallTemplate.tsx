import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/button'
import { useDispatch } from 'react-redux'
import { openTemplateReadyModal } from '../../redux/slice/modalSlice'

const WaterFallTemplate = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const list = [
    {
      title: 'Project Manager',
      description:
        'Overall project coordination, timeline management, stakeholder communication',
    },
    {
      title: 'Business Analyst',
      description: 'Requirements gathering, documentation, process analysis',
    },
    {
      title: 'Developers',
      description: 'System implementation following approved designs',
    },
    {
      title: 'QA/Testers',
      description: 'Test planning, execution, defect management',
    },
  ]

  const list2 = [
    {
      title: 'Sprint Planning',
      description: 'Define sprint goals, select backlog items, estimate effort',
    },
    {
      title: 'Development',
      description: 'Daily stand-ups, feature development, code reviews',
    },
    {
      title: 'Sprint Review',
      description: 'Demo completed features, gather stakeholder feedback',
    },
    {
      title: 'Retrospective',
      description: 'Team reflection, process improvements, action items',
    },
  ]
  return (
    <div className="flex min-h-[calc(150vh-80px)] flex-col gap-4 overflow-y-scroll rounded-lg bg-white p-4">
      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-4">
          <img
            src="/icon/Frame 1000008159.svg"
            alt="Icon"
            onClick={() => navigate(-1)}
          />
          <p className="text-[20px] font-medium text-black">
            Waterfall Project Template
          </p>
        </span>
        <p className="font-inter text-[16px] font-normal text-[#2B323B]">
          Sequential phases with clear milestones and deliverables
        </p>
      </div>

      <div className="font-inter flex flex-col gap-4 text-[18px]">
        <p className="font-medium">Project Phases</p>
        <div className="relative flex w-full items-center justify-between">
          {/* Background connecting line */}
          <div className="bg-primary absolute top-1/2 right-0 left-0 z-0 h-px -translate-y-1/2 transform" />

          {[
            'Requirements',
            'Design',
            'Implementation',
            'Testing',
            'Deployment',
            'Maintenance',
          ].map((phase, index) => (
            <div
              key={index}
              className="z-10 rounded-full bg-[#F5F0FA] px-4 py-2"
            >
              <p className="text-primary text-[16px] font-medium">{phase}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[18px] font-medium"> Team Roles</p>
        <div className="grid w-[75%] grid-cols-2 gap-3">
          {list.map((role, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-lg bg-[#F3F3F7] p-4"
            >
              <p className="font-bold text-[#4A4A4A]">{role.title}</p>
              <p className="text-sm font-normal text-[#4A4A4A]">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {list2.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-lg border-l-4 border-[#001CD5] p-3"
          >
            <p className="font-inter text-[16px] font-bold text-[#4A4A4A]">
              {item.title}
            </p>
            <p className="font-inter text-[14px] font-normal text-[#4A4A4A]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <Button
        className="mt-5 h-[63px] w-full"
        onClick={() =>
          dispatch(openTemplateReadyModal({ templateText: 'Waterfall' }))
        }
      >
        Use Waterfall Template
      </Button>
    </div>
  )
}

export default WaterFallTemplate
