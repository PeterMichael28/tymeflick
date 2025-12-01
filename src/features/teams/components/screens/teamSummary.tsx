'use client'

import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function TeamSummary() {
  const navigate = useNavigate()
  const members = [
    {
      name: 'Bassey Bassey',
      role: 'Project Manager',
      team: 'Development Team',
      status: 'Active',
      initials: 'BB',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      name: 'Sammy Joseph',
      role: 'Frontend and Backend developers',
      team: 'Development Team',
      status: 'Active',
      initials: 'SJ',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      name: 'Olatunde Success',
      role: 'Frontend and Backend developers',
      team: 'Development Team',
      status: 'Active',
      initials: 'OS',
      color: 'bg-sky-100 text-sky-600',
    },
    {
      name: 'Ijiwole Adedamola',
      role: 'Frontend and Backend developers',
      team: 'Development Team',
      status: 'Active',
      initials: 'IA',
      color: 'bg-blue-100 text-blue-600',
    },
  ]

  return (
    <div className="min-h-screen w-full space-y-6 bg-none">
      {/* Breadcrumb and Title */}
      <div className="space-y-5 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-xl text-gray-600">
          <ArrowLeft
            className="h-5 w-5 cursor-pointer"
            onClick={() => navigate('/teams')}
          />
          <span className="font-medium text-gray-800">
            Teams - Development Team
          </span>
        </div>
        <p className="ml-6 text-lg text-gray-500">
          Frontend and Backend developers
        </p>
      </div>

      {/* Team Summary Section */}
      <div className="w-full space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 5.94772 9.55229 5.5 9 5.5C8.44771 5.5 8 5.94772 8 6.5V11.5C8 12.0523 8.44771 12.5 9 12.5H12C12.5523 12.5 13 12.0523 13 11.5C13 10.9477 12.5523 10.5 12 10.5H10V6.5Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
              fill="black"
            />
          </svg>
          Team Summary
        </h3>

        {/* First Row */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="w-full rounded-lg bg-purple-100 p-4 text-left">
            <p className="text-2xl font-semibold text-green-700">8</p>
            <p className="text-sm text-gray-600">Total Members</p>
          </div>

          <div className="w-full rounded-lg bg-green-100 p-4 text-left">
            <p className="text-2xl font-semibold text-green-800">3</p>
            <p className="text-sm text-gray-600">Active Projects</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="w-full rounded-lg bg-pink-100 p-4 text-left">
            <p className="text-2xl font-semibold text-purple-800">320h</p>
            <p className="text-sm text-gray-600">Total Hours</p>
          </div>

          <div className="w-full rounded-lg bg-yellow-100 p-4 text-left">
            <p className="text-lg font-semibold text-orange-700">
              Sarah Johnson
            </p>
            <p className="text-sm text-gray-600">Manager</p>
          </div>
        </div>

        {/* Team Members Section */}
        <h3 className="text-lg font-bold text-gray-700">Team Members</h3>

        <div className="space-y-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-md border border-gray-100 p-3 transition hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-md font-semibold ${member.color}`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                  {member.team === 'Development Team' ? 'Manager' : 'User'}
                </span>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                  {member.status}
                </span>
                <button className="text-xs font-medium text-green-600 hover:text-green-700">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
