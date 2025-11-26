import ProjectDistributionChart from '../../../features/dashboard/components/ui/projectDistributionCart'

const pendingTaskList = [
  {
    title: 'Fix login authentication bug',
    description: 'Website Redesign',
    time: '2.5h',
  },
  {
    title: 'Design new landing page',
    description: 'Website Redesign',
    time: '3h',
  },
  {
    title: 'Update user profile UI',
    description: 'Mobile App Launch',
    time: '1.5h',
  },
  {
    title: 'Implement push notifications',
    description: 'Mobile App Launch',
    time: '4h',
  },
  {
    title: 'Create social media graphics',
    description: 'Marketing Campaign',
    time: '2h',
  },
]
const upComingDeadlineList = [
  {
    title: 'Website Redesign',
    deadline: 'Due in 3 days',
  },
  {
    title: 'Mobile App Launch',
    deadline: 'Due in 5 days',
  },
  {
    title: 'Marketing Campaign',
    deadline: 'Due in 7 days',
  },
]

const color = ['#D00416', '#DF6400', '#036732']

const data = [
  { name: 'Website Redesign', value: 90 },
  { name: 'Database Migration', value: 70 },
  { name: 'Mobile App Launch', value: 50 },
  { name: 'Marketing Campaign', value: 30 },
  { name: 'Customer Portal Update', value: 10 },
  { name: 'Customer Support', value: 5 },
]
const chartColor = [
  '#0B54FF',
  '#1FC16B',
  '#D00416',
  '#FFB600',
  '#FF00E1',
  '#93AAFD',
]

const PendingTask = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="rounded-lg bg-white p-4">
        <h2 className="font-bricolage mb-4 text-[18px] font-bold">
          Pending Tasks
        </h2>
        <div className="space-y-4">
          {pendingTaskList.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#D2D9DF] pb-3"
            >
              <div>
                <h3
                  style={{ color: color[index % color.length] }}
                  className="font-bricolage text-[14px] font-medium"
                >
                  {task.title}
                </h3>
                <p className="text-sm text-[#0B0D0F]">{task.description}</p>
              </div>
              <span className="rounded-full bg-[#1FC16B1A] px-4 py-2 text-[#036732]">
                {task.time}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-white p-4">
        <h2 className="font-bricolage mb-4 text-[18px] font-bold">
          Upcoming Deadlines
        </h2>
        <div className="space-y-4">
          {upComingDeadlineList.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#D2D9DF] pb-3"
            >
              <div>
                <h3
                  style={{ color: color[index % color.length] }}
                  className="font-bricolage text-[14px] font-medium"
                >
                  {task.title}
                </h3>
                <p className="text-sm text-[#0B0D0F]">{task.deadline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-white p-4">
        <h2 className="font-bricolage mb-4 text-[18px] font-bold">
          Project Time Distribution
        </h2>
        <ProjectDistributionChart data={data} colors={chartColor} />
      </div>
    </div>
  )
}

export default PendingTask
