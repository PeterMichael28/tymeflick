const RecentTime = () => {
  const list = [
    {
      date: 'Jan 31, 2025',
      project: 'Website Redesign',
      'task Description': 'Implement responsive navigation menu',
      duration: '21h 30m',
      billable: true,
    },
    {
      date: 'Feb 02, 2025',
      project: 'Mobile App Development',
      taskDescription: 'Develop user authentication flow',
      duration: '18h 45m',
      billable: true,
    },
    {
      date: 'Feb 05, 2025',
      project: 'Internal Dashboard',
      taskDescription: 'Create interactive charts for analytics',
      duration: '15h 20m',
      billable: false,
    },
    {
      date: 'Feb 08, 2025',
      project: 'Website Redesign',
      'task Description': 'Optimize images and improve page speed',
      duration: '10h 50m',
      billable: true,
    },
    {
      date: 'Feb 10, 2025',
      project: 'Marketing Campaign',
      'task Description': 'Set up automated email workflows',
      duration: '12h 15m',
      billable: false,
    },
  ]

  return (
    <div className="font-bricolage space-y-5 rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <p className="font-bold">Recent Time Entries</p>
        <p className="font-normal text-[#0B0D0F]">Last 10 Entries</p>
      </div>

      {/* Table Header */}
      <div className="grid w-full grid-cols-[1fr_1fr_2fr_1fr_0.5fr] bg-[#F3F3F3] p-3 font-semibold text-[#0B0D0F] capitalize">
        {Object.keys(list[0]).map((key) => (
          <p key={key}>{key}</p>
        ))}
      </div>

      {/* Table Rows */}
      <div>
        {list.map((item, index) => (
          <div
            key={index}
            className="grid w-full grid-cols-[1fr_1fr_2fr_1fr_0.6fr] space-y-5 border-b border-[#F2F2F2] font-normal capitalize"
          >
            {Object.entries(item).map(([key, value], i) => {
              const isBillable = key.toLowerCase() === 'billable'
              return (
                <p
                  key={i}
                  className={`font-bricolage p-2 font-normal ${
                    isBillable
                      ? value
                        ? 'h-[4vh] w-[4vw] rounded-md bg-[#1FC16B1A] px-2 py-1.5 text-center text-xs font-bold text-green-600'
                        : 'h-[4vh] w-[8vw] rounded-md bg-[#F565651A] px-2 py-1.5 text-center text-xs font-bold text-red-500'
                      : ''
                  }`}
                >
                  {isBillable
                    ? value
                      ? 'Billable'
                      : 'Non-billable'
                    : value.toString()}
                </p>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTime
