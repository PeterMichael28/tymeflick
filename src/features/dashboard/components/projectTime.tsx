import BillableChart from './ui/billableChart'
import { Calendar } from 'lucide-react'
import { MoveRight } from 'lucide-react';


const ProjectTime = () => {
  const data = [
    { name: 'Billable', value: 75 },
    { name: 'Non-Billable', value: 25 },
  ]

  const project = [
    { name: 'Project Alpha', hours: '15h' , color:'#9966CC' ,percent:80 },
    { name: 'Project Beta', hours: '10h', color:'#D00416', percent:60 },
    { name: 'Project Gamma', hours: '8h', color:'#1FC16B', percent:40 },
    { name: 'Project Gamma', hours: '8h', color:'#DF6400', percent:20 },
  ]



  return (
    <div className='flex justify-between gap-5 mt-4'>
      {/* Billable vs Non-Billable */}
      <div className='flex-1 bg-white p-4 rounded-lg'>
        <div className='flex justify-between'>
          <p>Billable vs Non-Billable</p>
          <span className='flex items-center gap-2 bg-[#FAF9FB] border border-[#D2D9DF] p-2 rounded-md cursor-pointer'>
            <p className='text-[#2B323B] text-xs'>This Week</p>
            <Calendar size={12} />
          </span>
        </div>
        <BillableChart data={data} colors={['#1FC16B', '#D9D9D9']} />
      </div>

      {/* Top Projects */}
      <div className='flex-2 bg-white p-4 rounded-lg flex flex-col gap-2'>
        <div className='flex justify-between'>
          <p className='text-[18px] font-bricolage font-bold'>Top Projects This Week</p>
          <img src="/icon/folderOutline.svg" alt="Folder Icon" />
        </div>

       <div className='flex flex-col gap-4 mt-2'>
  {project.map((proj, index) => (
    <div key={`${proj.name}-${index}`}>
      <div className='flex justify-between mb-1'>
        <p className='text-[14px] font-medium'>{proj.name}</p>
        <p>{proj.hours}</p>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#F2F0F5]">
        <div
          className="h-2 transition-all duration-700 ease-in-out rounded-full"
          style={{
            width: `${proj.percent}%`,
            backgroundColor: proj.color,
          }}
        />
      </div>
    </div>
  ))}
</div>


        <div className='flex items-center gap-2 mt-4 text-primary font-semibold cursor-pointer'>
          <p>View All Projects</p>
          <MoveRight size={16} className='cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default ProjectTime
