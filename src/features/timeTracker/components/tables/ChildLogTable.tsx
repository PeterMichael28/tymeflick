"use client";

interface ChildLogTableProps {
  entries: {
    projectName?: string;
    client?: string;
    billingStatus: string;
    timeLog: string;
    timeRange: string;
  }[];
}

export default function ChildLogTable({ entries }: ChildLogTableProps) {
  return (
    <table className="w-full border-collapse font-inter text-sm text-gray-800">
      <tbody>
        {entries.map((entry, i) => (
          <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
            <td className="p-3 text-gray-700 w-[20%]">{entry.projectName}</td>
            <td className="p-3 text-gray-700 w-[20%]">{entry.client}</td>
            <td className="p-3 text-gray-700 w-[20%]">{entry.billingStatus}</td>
            <td className="p-3 text-gray-600 w-[20%]">{entry.timeLog}</td>
            <td className="p-3 text-gray-600 w-[20%]">{entry.timeRange}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
