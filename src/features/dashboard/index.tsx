import Hero from '../../components/ui/hero'
import TimeSummary from './components/timeSummary'
import ProjectTime from './components/projectTime'
import Task from './components/task'
import PendingTask from './components/pendingTask'
import RecentTime from './components/recentTime'
import Snaps from './components/snaps'

const DashBoardIndex = () => {
  return (
    <div className='mb-32'>
      <Hero title="Time Insight at a glance" isDashboard />
      <TimeSummary />
      <ProjectTime />
     <div className='flex gap-4'>
         <div className='flex-2'>
             <Task />
         </div>
            <div className='flex-1'>
                <PendingTask />
            </div>
     </div>
     <RecentTime />
     <Snaps />
    </div>
  )
}

export default DashBoardIndex
