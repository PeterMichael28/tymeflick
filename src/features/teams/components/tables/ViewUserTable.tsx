'use client'

export default function ViewUserTable() {
  const entries = [
    {
      description: 'Design Review Meeting',
      duration: '1:15:20',
      entryDate: '06/06/2025',
      startTime: '09:30 AM',
      stopTime: '10:00 AM',
    },
    {
      description: 'Sprint Planning',
      duration: '2:30:15',
      entryDate: '06/07/2025',
      startTime: '11:00 AM',
      stopTime: '12:00 PM',
    },
    {
      description: 'User Testing Session',
      duration: '3:45:10',
      entryDate: '06/08/2025',
      startTime: '01:00 PM',
      stopTime: '02:30 PM',
    },
  ]

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-white shadow-sm">
      <table className="min-w-full border-collapse text-left text-sm text-gray-700 table-fixed">
        {/* Header */}
        <thead className="bg-[#F3F3F3] text-gray-600 uppercase text-xs font-semibold tracking-wide">
          <tr className="grid grid-cols-[20px_1fr_1fr_1fr_1fr_1fr]">
            <th className="p-3 text-center"></th>
            <th className="p-3">Description</th>
            <th className="p-3 text-center">Duration</th>
            <th className="p-3 text-center">Entry Date</th>
            <th className="p-3 text-center">Start Time</th>
            <th className="p-3 text-center">Stop Time</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {entries.map((entry, index) => (
            <tr
              key={index}
              className="grid grid-cols-[20px_1fr_1fr_1fr_1fr_1fr] border-t border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="p-3 text-center">
                <input type="checkbox" className="h-4 w-4 cursor-pointer accent-primary" />
              </td>
              <td className="p-3 font-medium text-gray-900">
                {entry.description}
              </td>
              <td className="p-3 text-center">{entry.duration}</td>
              <td className="p-3 text-center">{entry.entryDate}</td>
              <td className="p-3 text-center">{entry.startTime}</td>
              <td className="p-3 text-center">{entry.stopTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
