'use client'

import { Trash2 } from 'lucide-react'

export default function ClientActiveProjectsTable() {
  const projects = [
    {
      id: 1,
      name: 'ACME Website Redesign',
      client: 'ACME Corp',
      status: 'Active',
      color: 'green',
      progress: '45 h 20 m',
      lastActivity: '2 days ago',
    },
    {
      id: 2,
      name: 'Code Review Process',
      client: 'ACME Corp',
      status: 'Inactive',
      color: 'red',
      progress: '102 h 20 m',
      lastActivity: '3 hours ago',
    },
  ]

  return (
    <div className="overflow-x-auto rounded-lg bg-white p-4 shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-[#F3F3F3] text-gray-600">
          <tr>
            <th className="px-3 py-2 text-center">Project</th>
            <th className="px-3 py-2 text-center">Client</th>
            <th className="px-3 py-2 text-center">Status</th>
            <th className="px-3 py-2 text-center">Progress</th>
            <th className="px-3 py-2 text-center">Last Activity</th>
            <th className="px-3 py-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr
              key={p.id}
              className="border-t border-gray-100 transition hover:bg-gray-50"
            >
              <td className="px-3 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-${p.color}-500`}
                  ></span>
                  <span className="font-medium text-gray-800">{p.name}</span>
                </div>
              </td>

              <td className="px-3 py-2 text-center">
                <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                  {p.client}
                </span>
              </td>

              <td className="px-3 py-2 text-center">
                <span
                  className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                    p.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {p.status}
                </span>
              </td>

              <td className="px-3 py-2 text-center text-gray-700">
                {p.progress}
              </td>
              <td className="px-3 py-2 text-center text-gray-700">
                {p.lastActivity}
              </td>

              <td className="px-3 py-2 text-center">
                <button className="rounded p-1.5 hover:bg-red-50">
                  <Trash2 className="h-4 w-4 text-red-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
