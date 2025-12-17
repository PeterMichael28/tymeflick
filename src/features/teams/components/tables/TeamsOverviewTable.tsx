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
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] border-b border-gray-200 bg-[#F3F3F3] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-600">
        <div className="text-center">User</div>
        <div className="text-center">Manager</div>
        <div className="text-center">Member</div>
        <div className="text-center">Active Projects</div>
        <div className="text-center">Total Hours</div>
        <div className="text-center">Action</div>
      </div>

      {/* Body */}
      <div className="divide-y divide-gray-100">
        {teams.map((team, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] items-center px-4 py-3 text-sm text-gray-800 transition hover:bg-gray-50"
          >
            {/* TEAMS COLUMN */}
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-md font-semibold text-white ${team.color}`}
              >
                {team.id}
              </div>
              <div>
                <p className="font-medium text-gray-900">{team.name}</p>
                <p className="text-xs text-gray-500">{team.description}</p>
              </div>
            </div>

            {/* MANAGER */}
            <div className="text-center">{team.manager}</div>

            {/* MEMBERS */}
            <div className="text-center">{team.members}</div>

            {/* ACTIVE PROJECTS */}
            <div className="text-center">{team.projects}</div>

            {/* TOTAL HOURS */}
            <div className="text-center">{team.hours}</div>

            {/* ACTION BUTTON */}
            <div className="text-center">
              <button
                onClick={handleViewClick}
                className="cursor-pointer rounded-md bg-primary px-4 py-1 text-sm font-medium text-white transition hover:bg-primary/90"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
