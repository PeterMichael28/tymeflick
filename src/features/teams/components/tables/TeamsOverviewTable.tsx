'use client'

import { useNavigate } from 'react-router-dom'

const teams = [
  {
    id: 'DT',
    color: 'bg-blue-600',
    name: 'Development Team',
    description: 'Frontend and Backend developers',
    manager: 'Bassey Bassey',
    members: 8,
    projects: 3,
    hours: '320h',
  },
  {
    id: 'DT',
    color: 'bg-green-500',
    name: 'Design Team',
    description: 'UI/UX designers and creative team',
    manager: 'Sofia Ckucks',
    members: 5,
    projects: 2,
    hours: '180h',
  },
  {
    id: 'DT',
    color: 'bg-lime-500',
    name: 'Marketing Team',
    description: 'Digital marketing and content creation',
    manager: 'Sarah Johnson',
    members: 5,
    projects: 2,
    hours: '180h',
  },
]

export default function TeamsOverviewTable() {
  const navigate = useNavigate()

  const handleViewClick = () => {
    navigate('/teams/teamSummary')
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-white shadow-xs">
      <table className="font-inter min-w-full border-collapse text-center text-sm">
        <thead className="border-b border-gray-200 bg-[#F3F3F3] text-xs tracking-wide text-gray-600 uppercase">
          <tr>
            <th className="p-3 text-center font-semibold">TEAMS</th>
            <th className="p-3 text-center font-semibold">MANAGER</th>
            <th className="p-3 text-center font-semibold">MEMBER</th>
            <th className="p-3 text-center font-semibold">ACTIVE PROJECTS</th>
            <th className="p-3 text-center font-semibold">TOTAL HOURS</th>
            <th className="p-3 text-center font-semibold">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 text-gray-800 transition hover:bg-gray-50"
              onClick={() => handleViewClick()}
            >
              {/* TEAM INFO */}
              <td className="p-3">
                <div className="flex items-center justify-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-md font-semibold text-white ${team.color}`}
                  >
                    {team.id}
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-gray-900">{team.name}</p>
                    <p className="text-xs text-gray-500">{team.description}</p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-center">{team.manager}</td>
              <td className="p-3 text-center">{team.members}</td>
              <td className="p-3 text-center">{team.projects}</td>
              <td className="p-3 text-center">{team.hours}</td>

              <td className="p-3 text-center">
                <button
                  onClick={() => handleViewClick()}
                  className="cursor-pointer bg-primary rounded-md px-4 py-1 text-sm font-medium text-white transition hover:bg-[#5bb13e]"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
