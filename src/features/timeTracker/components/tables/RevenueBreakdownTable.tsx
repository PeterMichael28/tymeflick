'use client'

interface RevenueEntry {
  user: string
  hours: string
  rate: string
  revenue: string
}

const revenueData: RevenueEntry[] = [
  { user: 'Sarah Chen', hours: '8.5h', rate: '$120/hr', revenue: '$1,020' },
  { user: 'Mike Johnson', hours: '10h', rate: '$130/hr', revenue: '$1,300' },
  { user: 'Sarah Lee', hours: '15h', rate: '$120/hr', revenue: '$1,800' },
  { user: 'Tom Brown', hours: '8h', rate: '$150/hr', revenue: '$1,200' },
  { user: 'Emily Davis', hours: '20h', rate: '$110/hr', revenue: '$2,200' },
  { user: 'James Smith', hours: '12h', rate: '$140/hr', revenue: '$1,680' },
  { user: 'Jessica Wang', hours: '5h', rate: '$160/hr', revenue: '$800' },
  { user: 'David Johnson', hours: '18h', rate: '$115/hr', revenue: '$2,070' },
  { user: 'Linda Taylor', hours: '22h', rate: '$125/hr', revenue: '$2,750' },
  { user: 'Brian Clark', hours: '9h', rate: '$135/hr', revenue: '$1,215' },
  { user: 'Rachel Adams', hours: '14h', rate: '$145/hr', revenue: '$2,030' },
]

export default function RevenueBreakdownTable() {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
      <table className="font-inter min-w-full border-collapse">
        <thead className="border-b border-gray-200 bg-gray-50 text-xs text-gray-600">
          <tr>
            <th className="p-3 text-left font-semibold">USER</th>
            <th className="p-3 text-left font-semibold">HOURS</th>
            <th className="p-3 text-left font-semibold">RATE</th>
            <th className="p-3 text-left font-semibold">REVENUE</th>
          </tr>
        </thead>

        <tbody>
          {revenueData.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 text-sm text-gray-800 hover:bg-gray-50"
            >
              <td className="p-3 font-medium">{row.user}</td>
              <td className="p-3">{row.hours}</td>
              <td className="p-3">{row.rate}</td>
              <td className="p-3">{row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
