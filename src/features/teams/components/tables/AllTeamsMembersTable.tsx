'use client'

import { useState, useRef, useEffect } from 'react'
import { MoreVertical } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface Member {
  user: string
  email: string
  role: string
  roleColor: string
  team: string
  status: string
  statusColor: string
  totalTime: string
  lastLogin: string
}

const members: Member[] = [
  {
    user: 'Bassey Bassey',
    email: 'Bassey@Seamflex.Com',
    role: 'Manager',
    roleColor: 'bg-blue-100 text-blue-600',
    team: 'Development Team',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-600',
    totalTime: '10h',
    lastLogin: '2024-06-04 09:30',
  },
  {
    user: 'Sarah Johnson',
    email: 'John.Doe@Company.Com',
    role: 'Manager',
    roleColor: 'bg-blue-100 text-blue-600',
    team: 'Marketing Team',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-600',
    totalTime: '130h',
    lastLogin: '2024-06-04 09:30',
  },
  {
    user: 'Sarah Johnson',
    email: 'John.Doe@Company.Com',
    role: 'User',
    roleColor: 'bg-gray-100 text-gray-600',
    team: 'Marketing Team',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-600',
    totalTime: '130h',
    lastLogin: '2024-06-04 09:30',
  },
  {
    user: 'Sarah Johnson',
    email: 'John.Doe@Company.Com',
    role: 'Manager',
    roleColor: 'bg-blue-100 text-blue-600',
    team: 'Marketing Team',
    status: 'Inactive',
    statusColor: 'bg-red-100 text-red-600',
    totalTime: '130h',
    lastLogin: '2024-06-04 09:30',
  },
  {
    user: 'Sarah Johnson',
    email: 'John.Doe@Company.Com',
    role: 'Admin',
    roleColor: 'bg-red-100 text-red-600',
    team: 'Marketing Team',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-600',
    totalTime: '130h',
    lastLogin: '2024-06-04 09:30',
  },
]

export default function AllTeamsMembersTable() {
  const [activeRow, setActiveRow] = useState<number | null>(null)
  const [dropdownPosition, setDropdownPosition] = useState<'up' | 'down'>(
    'down'
  )
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([])
  const navigate = useNavigate()

  const toggleDropdown = (index: number) => {
    if (activeRow === index) {
      setActiveRow(null)
    } else {
      setActiveRow(index)
      const rowElement = rowRefs.current[index]
      if (rowElement) {
        const rect = rowElement.getBoundingClientRect()
        const spaceBelow = window.innerHeight - rect.bottom
        setDropdownPosition(spaceBelow < 180 ? 'up' : 'down') // 180px = dropdown height
      }
    }
  }

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveRow(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-white shadow-xs">
      <table className="font-inter min-w-full border-collapse text-center text-sm">
        <thead className="border-b border-gray-200 bg-[#F3F3F3] text-xs tracking-wide text-gray-600 uppercase">
          <tr>
            <th className="p-3 text-center font-semibold">USER</th>
            <th className="p-3 text-center font-semibold">ROLE</th>
            <th className="p-3 text-center font-semibold">TEAM</th>
            <th className="p-3 text-center font-semibold">STATUS</th>
            <th className="p-3 text-center font-semibold">TOTAL TIME</th>
            <th className="p-3 text-center font-semibold">LAST LOGIN</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member, index) => (
            <tr
              key={index}
              ref={(el: HTMLTableRowElement | null) => {
                rowRefs.current[index] = el
              }}
              className="relative border-b border-gray-100 text-gray-800 transition hover:bg-gray-50"
            >
              <td className="p-3 text-center">
                <div>
                  <p className="font-medium">{member.user}</p>
                  <p className="text-xs text-gray-500">{member.email}</p>
                </div>
              </td>

              <td className="p-3 text-center">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${member.roleColor}`}
                >
                  {member.role}
                </span>
              </td>

              <td className="p-3 text-center">{member.team}</td>

              <td className="p-3 text-center">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${member.statusColor}`}
                >
                  {member.status}
                </span>
              </td>

              <td className="p-3 text-center">{member.totalTime}</td>
              <td className="flex items-center justify-center gap-2 p-3 text-center">
                {member.lastLogin}
                <MoreVertical
                  className="h-5 w-5 cursor-pointer text-gray-600"
                  onClick={() => toggleDropdown(index)}
                />

                {/* Dropdown Modal — stays in viewport */}
                {activeRow === index && (
                  <>
                    {/* Slight blur overlay */}
                    <div
                      className="backdrop-blur-2xs fixed inset-0 z-10 bg-black/20"
                      onClick={() => setActiveRow(null)}
                    ></div>

                    {/* Menu */}
                    <div
                      className={`absolute right-6 ${
                        dropdownPosition === 'up' ? 'bottom-8' : 'top-8'
                      } z-20 w-36 rounded-lg border border-gray-200 bg-white shadow-lg`}
                    >
                      <ul className="divide-y divide-gray-100 text-sm text-gray-700">
                        <li
                          className="cursor-pointer px-4 py-2 hover:bg-gray-50"
                          onClick={() => navigate('/teams/viewUser')}
                        >
                          View
                        </li>
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-50">
                          Edit
                        </li>
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-50">
                          Suspend
                        </li>
                        <li className="cursor-pointer px-4 py-2 text-red-600 hover:bg-red-50">
                          Delete
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
