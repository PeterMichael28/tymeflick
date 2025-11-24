import Button from '../../components/button/button'
import { useDispatch } from 'react-redux'
import { openTemplateReadyModal } from '../../redux/slice/modalSlice'
import { useNavigate } from 'react-router-dom'
const AgileTemplate = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const list = [
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
    <div className="overflow-y-scroll rounded-lg bg-white p-4">
      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-4">
          <img
            src="/icon/Frame 1000008159.svg"
            alt="Icon"
            onClick={() => navigate(-1)}
          />
          <p className="text-[20px] font-medium text-black">
            Agile Project Template
          </p>
        </span>
        <p className="font-inter text-[16px] font-normal text-[#2B323B]">
          Iterative delivery with 2-week sprints and continuous improvement
        </p>
      </div>
      <div className="mt-4">
        <p className="font-inter text-[20px] font-medium">
          Structure & Sprints
        </p>
        <div className="grid w-[75%] grid-cols-2 gap-3">
          <div className="flex flex-col gap-3 rounded-md bg-[#AD85D626] p-4">
            <p className="text-[16px] font-bold text-[#3B7C0F]">
              Sprint Planning
            </p>
            <p className="text-[14px] font-normal text-[#3B7C0F]">
              Define sprint goals, select backlog items, estimate effort
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-md bg-[#E9F9F0] p-4">
            <p className="text-[16px] font-bold text-[#3B7C0F]">Development</p>
            <p className="text-[14px] font-normal text-[#3B7C0F]">
              Daily stand-ups, feature development, code reviews
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-md bg-[#FFEBFF] p-4">
            <p className="text-[16px] font-bold text-[#5F005B]">
              Sprint Review
            </p>
            <p className="text-[14px] font-normal text-[#5F005B]">
              Demo completed features, gather stakeholder feedback
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-md bg-[#FFFBEC] p-4">
            <p className="text-[16px] font-bold text-[#AD4B00]">
              Retrospective
            </p>
            <p className="text-[14px] font-normal text-[#AD4B00]">
              Team reflection, process improvements, action items
            </p>
          </div>
        </div>
      </div>
      <p className="font-inter mt-3 text-[20px] font-medium">
        Key Template Tasks
      </p>
      <div className="mt-4 flex flex-col gap-4">
        {list.map((item, index) => (
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
        className="mt-5 w-full"
        onClick={() =>
          dispatch(openTemplateReadyModal({ templateText: 'Agile' }))
        }
      >
        Use Agile Template
      </Button>
    </div>
  )
}

export default AgileTemplate
