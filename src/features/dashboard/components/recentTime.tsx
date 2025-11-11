const recentList = [
  {
    title: 'Design new landing page',
    project: 'Website Redesign',
    time: '2h 30m ago',
    isBillable: true,
    date: '2024-06-10',
  },
  {
    title: 'Client Meeting',
    project: 'Project Alpha',
    time: '1h 15m ago',
    isBillable: false,
    date: '2024-06-09',
  },
  {
    title: 'Code Review',
    project: 'Backend Refactor',
    time: '45m ago',
    isBillable: true,
    date: '2024-06-08',
  },
]

const RecentTime = () => {
  return (
    <div className="mt-4 rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <p className="font-bricolage text-[16px] font-bold">
          Recent Time Entries
        </p>
        <p className="font-bricolage text-primary text-[16px] font-bold">
          View All Projects
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-4">
        {recentList.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-[#D2D9DF] pb-4"
          >
            <div>
              <p className="font-bricolage text-[14px] font-semibold">
                {item.title}
              </p>
              <div className="flex gap-1 text-xs">
                <p>{item.project} .</p>
                <p> {item.date} .</p>
                {item.isBillable && (
                  <span className="text-[#1FC16B]">Billable</span>
                )}
              </div>
            </div>
            <p className="text-sm">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTime
