'use client'

import { useState } from 'react'

interface LogEntry {
  description: string
  teamMember: string
  duration: string
  entryDate: string
  startTime: string
  stopTime: string
}

const logs: LogEntry[] = [
  {
    description: 'Updating UI Screen',
    teamMember: 'Sofia James',
    duration: '0:34:54',
    entryDate: '06/05/2025',
    startTime: '12:09 AM',
    stopTime: '12:39 AM',
  },
  {
    description: 'Design Review Meeting',
    teamMember: 'John Doe',
    duration: '1:15:20',
    entryDate: '06/06/2025',
    startTime: '09:30 AM',
    stopTime: '10:00 AM',
  },
  {
    description: 'User Testing Session',
    teamMember: 'Emily Green',
    duration: '2:45:15',
    entryDate: '06/07/2025',
    startTime: '02:00 PM',
    stopTime: '04:45 PM',
  },
  {
    description: 'Feature Brainstorming',
    teamMember: 'Michael Lee',
    duration: '1:20:30',
    entryDate: '06/08/2025',
    startTime: '11:00 AM',
    stopTime: '12:20 PM',
  },
  {
    description: 'Prototype Feedback',
    teamMember: 'Lisa White',
    duration: '0:50:45',
    entryDate: '06/09/2025',
    startTime: '03:15 PM',
    stopTime: '04:06 PM',
  },
  {
    description: 'Finalizing Designs',
    teamMember: 'Chris Black',
    duration: '0:40:10',
    entryDate: '06/10/2025',
    startTime: '08:30 AM',
    stopTime: '09:10 AM',
  },
  {
    description: 'Sprint Planning',
    teamMember: 'Anna Brown',
    duration: '1:05:25',
    entryDate: '06/11/2025',
    startTime: '01:00 PM',
    stopTime: '02:05 PM',
  },
  {
    description: 'Client Presentation',
    teamMember: 'David Smith',
    duration: '1:30:40',
    entryDate: '06/12/2025',
    startTime: '10:00 AM',
    stopTime: '11:30 AM',
  },
  {
    description: 'Bug Fixing Session',
    teamMember: 'Sarah Johnson',
    duration: '1:10:55',
    entryDate: '06/13/2025',
    startTime: '04:00 PM',
    stopTime: '05:10 PM',
  },
  {
    description: 'Style Guide Update',
    teamMember: 'Ben Wilson',
    duration: '0:25:30',
    entryDate: '06/14/2025',
    startTime: '12:15 PM',
    stopTime: '12:40 PM',
  },
  {
    description: 'Design Handoff',
    teamMember: 'Olivia Martin',
    duration: '0:55:05',
    entryDate: '06/15/2025',
    startTime: '09:45 AM',
    stopTime: '10:40 AM',
  },
  {
    description: 'Website Launch Planning',
    teamMember: 'James Taylor',
    duration: '2:30:20',
    entryDate: '06/16/2025',
    startTime: '01:30 PM',
    stopTime: '04:00 PM',
  },
  {
    description: 'A/B Testing Results',
    teamMember: 'Linda Hall',
    duration: '1:25:15',
    entryDate: '06/17/2025',
    startTime: '11:15 AM',
    stopTime: '12:40 PM',
  },
  {
    description: 'Market Research Review',
    teamMember: 'Kevin Young',
    duration: '1:50:40',
    entryDate: '06/18/2025',
    startTime: '02:30 PM',
    stopTime: '04:20 PM',
  },
]

export default function OtherMemberLogsTable() {
  const [selected, setSelected] = useState<number | null>(null)

  const toggleCheckbox = (index: number) => {
    setSelected((prev) => (prev === index ? null : index))
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
      <table className="font-inter min-w-full border-collapse">
        <thead className="border-b border-gray-200 bg-gray-50 text-xs text-gray-600">
          <tr>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left font-semibold">DESCRIPTION</th>
            <th className="p-3 text-left font-semibold">TEAM MEMBER</th>
            <th className="p-3 text-left font-semibold">DURATION</th>
            <th className="p-3 text-left font-semibold">ENTRY DATE</th>
            <th className="p-3 text-left font-semibold">START TIME</th>
            <th className="p-3 text-left font-semibold">STOP TIME</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 text-sm text-gray-800 hover:bg-gray-50"
            >
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selected === index}
                  onChange={() => toggleCheckbox(index)}
                  className="h-4 w-4 cursor-pointer border-gray-400 accent-[#70C94C]"
                />
              </td>
              <td className="max-w-[180px] truncate p-3">{row.description}</td>
              <td className="p-3">{row.teamMember}</td>
              <td className="p-3">{row.duration}</td>
              <td className="p-3">{row.entryDate}</td>
              <td className="p-3">{row.startTime}</td>
              <td className="p-3">{row.stopTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
