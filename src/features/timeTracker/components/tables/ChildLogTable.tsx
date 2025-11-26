'use client'

interface ChildLogTableProps {
  entries: {
    projectName?: string
    client?: string
    billingStatus: string
    timeLog: string
    timeRange: string
  }[]
}

export default function ChildLogTable({ entries }: ChildLogTableProps) {
  return (
    <table className="font-inter w-full border-collapse text-sm text-gray-800">
      <tbody>
        {entries.map((entry, i) => (
          <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
            <td className="w-[20%] p-3 text-gray-700">{entry.projectName}</td>
            <td className="w-[20%] p-3 text-gray-700">{entry.client}</td>
            <td className="w-[20%] p-3 text-gray-700">{entry.billingStatus}</td>
            <td className="w-[20%] p-3 text-gray-600">{entry.timeLog}</td>
            <td className="w-[20%] p-3 text-gray-600">{entry.timeRange}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
