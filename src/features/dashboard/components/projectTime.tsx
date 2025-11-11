import BillableChart from './ui/billableChart'
import { Calendar } from 'lucide-react'
import { MoveRight } from 'lucide-react'

const ProjectTime = () => {
  const data = [
    { name: 'Billable', value: 75 },
    { name: 'Non-Billable', value: 25 },
  ]

  const project = [
    { name: 'Project Alpha', hours: '15h', color: '#9966CC', percent: 80 },
    { name: 'Project Beta', hours: '10h', color: '#D00416', percent: 60 },
    { name: 'Project Gamma', hours: '8h', color: '#1FC16B', percent: 40 },
    { name: 'Project Gamma', hours: '8h', color: '#DF6400', percent: 20 },
  ]

  return (
    <div className="mt-4 flex justify-between gap-5">
      {/* Billable vs Non-Billable */}
      <div className="flex-1 rounded-lg bg-white p-4">
        <div className="flex justify-between">
          <p>Billable vs Non-Billable</p>
          <span className="flex cursor-pointer items-center gap-2 rounded-md border border-[#D2D9DF] bg-[#FAF9FB] p-2">
            <p className="text-xs text-[#2B323B]">This Week</p>
            <Calendar size={12} />
          </span>
        </div>
        <BillableChart data={data} colors={['#1FC16B', '#D9D9D9']} />
      </div>

      {/* Top Projects */}
      <div className="flex flex-2 flex-col gap-2 rounded-lg bg-white p-4">
        <div className="flex justify-between">
          <p className="font-bricolage text-[18px] font-bold">
            Top Projects This Week
          </p>
          <img src="/icon/folderOutline.svg" alt="Folder Icon" />
        </div>

        <div className="mt-2 flex flex-col gap-4">
          {project.map((proj, index) => (
            <div key={`${proj.name}-${index}`}>
              <div className="mb-1 flex justify-between">
                <p className="text-[14px] font-medium">{proj.name}</p>
                <p>{proj.hours}</p>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#F2F0F5]">
                <div
                  className="h-2 rounded-full transition-all duration-700 ease-in-out"
                  style={{
                    width: `${proj.percent}%`,
                    backgroundColor: proj.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-primary mt-4 flex cursor-pointer items-center gap-2 font-semibold">
          <p>View All Projects</p>
          <MoveRight size={16} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default ProjectTime
