import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  description: string
  text: string
  list: string[]
  viewDetailsLink: string
  useTemplateLink: string
}
const ProjectTemplateCard: FC<Props> = ({
  title,
  description,
  text,
  list,
  viewDetailsLink,
  useTemplateLink,
}) => {
  const navigate = useNavigate()
  return (
    <div className="border-t-primary flex w-full flex-col gap-3 rounded-md border-[0.6px] border-t-2 border-[#F2F0F5] p-4 shadow">
      <h2 className="text-[22px] font-bold text-[#606060]">{title}</h2>
      <p className="bg-primary800 text-primary font-inter w-20 rounded-md px-2 py-2 text-center text-sm font-medium">
        {text}
      </p>
      <p className="h-[8vh] text-sm font-normal text-[#606060]">
        {description}
      </p>

      <ul className="flex h-[15vh] flex-col gap-2">
        {list.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {/* Dot */}
            <span
              className={`h-1 w-1 shrink-0 rounded-full ${
                index < list.length ? 'bg-[#606060]' : 'bg-gray-300'
              }`}
            />
            {/* Text */}
            <span className="text-xs text-[#606060]">{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between gap-2">
        <button className="bg-primary font-inter w-full rounded-md px-3 py-1 text-center text-sm text-white">
          View Details
        </button>
        <button
          className="border-primary font-inter text-primary w-full rounded-md border px-3 py-1 text-center text-sm"
          onClick={() => navigate(useTemplateLink)}
        >
          Use Template
        </button>
      </div>
    </div>
  )
}

export default ProjectTemplateCard
