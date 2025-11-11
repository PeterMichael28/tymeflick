

const recentList = [
    {
        title: "Design new landing page",
        project: "Website Redesign",
        time: "2h 30m ago",
        isBillable: true,
        date: "2024-06-10"
    },
    {   
        title: "Client Meeting",
        project: "Project Alpha",
        time: "1h 15m ago",
        isBillable: false,
        date: "2024-06-09"
    },
    {
        title: "Code Review",
        project: "Backend Refactor",
        time: "45m ago",
        isBillable: true,
        date: "2024-06-08"
    }
]

const RecentTime = () => {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg">
        <div className="flex justify-between ">
             <p className="font-bold text-[16px] font-bricolage">Recent Time Entries</p>
             <p className="font-bold text-[16px] font-bricolage text-primary">View All Projects</p>
        </div>
        <div className="flex flex-col gap-4 mt-2">
            {recentList.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-[#D2D9DF] pb-4">
                     <div>
                        <p className="text-[14px] font-semibold font-bricolage">{item.title}</p>
                        <div className="flex text-xs gap-1">
                            <p>{item.project} .</p>
                            <p> {item.date} .</p>
                           { item.isBillable && <span className="text-[#1FC16B]">Billable</span> }
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
