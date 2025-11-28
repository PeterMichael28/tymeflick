'use client'

export default function WeeklyTimeLogTable() {
  const entries = [
    {
      date: '02/06/2025',
      project: 'Insight Mesh',
      client: 'Seamflex',
      description: 'UI Design Work',
      hours: '3h',
      billable: true,
      rate: '$30/Hr',
    },
    {
      date: '02/06/2025',
      project: 'TymeFlick',
      client: 'Seamflex',
      description: 'Frontend Development',
      hours: '2h',
      billable: true,
      rate: '$30/Hr',
    },
    {
      date: '04/06/2025',
      project: 'Insight Mesh',
      client: 'Seamflex',
      description: 'Backend API Integration',
      hours: '4h',
      billable: true,
      rate: '$30/Hr',
    },
    {
      date: '05/06/2025',
      project: 'Data Analytics',
      client: 'DataSync',
      description: 'Report Analysis',
      hours: '5h',
      billable: true,
      rate: '$40/Hr',
    },
    {
      date: '05/06/2025',
      project: 'User Experience',
      client: 'ProtoDesign',
      description: 'Wireframe Development',
      hours: '6h',
      billable: true,
      rate: '$50/Hr',
    },
    {
      date: '06/06/2025',
      project: 'Marketing Strategy',
      client: 'BrandBoost',
      description: 'SEO Optimization',
      hours: '3h',
      billable: false,
      rate: '$0/Hr',
    },
    {
      date: '06/06/2025',
      project: 'Customer Support',
      client: 'HelpDesk Pro',
      description: 'User Training',
      hours: '2h',
      billable: true,
      rate: '$25/Hr',
    },
    {
      date: '07/06/2025',
      project: 'Software Development',
      client: 'CodeCraft',
      description: 'Feature Implementation',
      hours: '8h',
      billable: true,
      rate: '$55/Hr',
    },
    {
      date: '07/06/2025',
      project: 'Project Management',
      client: 'TaskMaster',
      description: 'Sprint Planning',
      hours: '7h',
      billable: true,
      rate: '$45/Hr',
    },
  ]

  return (
    <div className="rounded-lg bg-white">
      <table className="font-inter min-w-full border-collapse">
        <thead className="border-b border-gray-200 bg-[#F3F3F3] text-xs text-gray-600">
          <tr>
            <th className="p-3 text-center font-semibold">DATE</th>
            <th className="p-3 text-center font-semibold">PROJECT</th>
            <th className="p-3 text-center font-semibold">CLIENT</th>
            <th className="p-3 text-center font-semibold">DESCRIPTION</th>
            <th className="p-3 text-center font-semibold">HOURS</th>
            <th className="p-3 text-center font-semibold">BILLABLE</th>
            <th className="p-3 text-center font-semibold">RATE</th>
          </tr>
        </thead>

        <tbody>
          {entries.map((entry, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 text-sm text-gray-800 hover:bg-gray-50"
            >
              <td className="p-3 text-center">{entry.date}</td>
              <td className="p-3 text-center">{entry.project}</td>
              <td className="p-3 text-center">{entry.client}</td>
              <td className="p-3 text-center">{entry.description}</td>
              <td className="p-3 text-center">{entry.hours}</td>
              <td className="p-3 text-center">
                {entry.billable ? (
                  <span className="rounded border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    Billable
                  </span>
                ) : (
                  <span className="rounded border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    Non-Billable
                  </span>
                )}
              </td>
              <td className="p-3">{entry.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
