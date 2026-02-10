import type { ClientProject } from '../queries'

interface ClientActiveProjectsTableProps {
  projects: ClientProject[]
  clientName: string
}

/**
 * Table displaying client's active projects
 * Receives projects as prop from parent
 */
export default function ClientActiveProjectsTable({
  projects,
  clientName,
}: ClientActiveProjectsTableProps) {
  // Format minutes to hours and minutes
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  // Format last activity date
  const formatLastActivity = (dateStr?: string) => {
    if (!dateStr) {
      return 'No activity'
    }
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return 'Today'
    }
    if (diffDays === 1) {
      return 'Yesterday'
    }
    if (diffDays < 7) {
      return `${diffDays} days ago`
    }
    return date.toLocaleDateString()
  }

  if (projects.length === 0) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <p className="text-gray-500">No projects found for {clientName}</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg bg-white p-4 shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-[#F3F3F3] text-gray-600">
          <tr>
            <th className="px-3 py-2 text-left">Project</th>
            <th className="px-3 py-2 text-center">Status</th>
            <th className="px-3 py-2 text-center">Time Tracked</th>
            <th className="px-3 py-2 text-center">Last Activity</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr
              key={p.id}
              className="border-t border-gray-100 transition hover:bg-gray-50"
            >
              <td className="px-3 py-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      p.status === 'ACTIVE' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  />
                  <span className="font-medium text-gray-800">{p.name}</span>
                </div>
              </td>

              <td className="px-3 py-3 text-center">
                <span
                  className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                    p.status === 'ACTIVE'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {p.status}
                </span>
              </td>

              <td className="px-3 py-3 text-center text-gray-700">
                {formatTime(p.totalTrackedMinutes)}
              </td>
              <td className="px-3 py-3 text-center text-gray-700">
                {formatLastActivity(p.lastActivityAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
