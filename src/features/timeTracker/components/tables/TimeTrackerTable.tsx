// Updated TimeTrackerTable.tsx

'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, MoreVertical } from 'lucide-react'
import { useDispatch } from 'react-redux'
import {
  openEditTimeEntryModal,
  openDeleteTimeEntryModal,
} from '../../../../redux/slice/modalSlice'
import ChildLogTable from './ChildLogTable'
import { useNavigate } from 'react-router-dom'

const logs = [
  {
    projectName: 'TymeFlick',
    client: 'EnvyRide',
    status: 'Billable',
    totalLog: '32h',
    totalTime: '12:00am - 05:00pm',
    expanded: false,
    children: [
      {
        projectName: 'TymeFlick',
        client: 'EnvyRide',
        billingStatus: 'Billable',
        timeLog: '00:15:45',
        timeRange: '12:00am - 01:00am',
      },
      {
        projectName: 'TymeFlick',
        client: 'EnvyRide',
        billingStatus: 'Billable',
        timeLog: '00:45:10',
        timeRange: '01:00am - 03:00am',
      },
      {
        projectName: 'TymeFlick',
        client: 'EnvyRide',
        billingStatus: 'Billable',
        timeLog: '01:05:32',
        timeRange: '03:00am - 06:00am',
      },
      {
        projectName: 'TymeFlick',
        client: 'EnvyRide',
        billingStatus: 'Billable',
        timeLog: '00:25:20',
        timeRange: '06:00am - 07:00am',
      },
    ],
  },
  {
    projectName: 'Insight Mesh',
    client: 'Seamflex',
    status: 'Billable',
    totalLog: '40h',
    totalTime: '12:00am - 05:00pm',
    expanded: false,
    children: [
      {
        projectName: 'Insight Mesh',
        client: 'Seamflex',
        billingStatus: 'Billable',
        timeLog: '00:20:15',
        timeRange: '12:00am - 01:00am',
      },
      {
        projectName: 'Insight Mesh',
        client: 'Seamflex',
        billingStatus: 'Billable',
        timeLog: '00:35:40',
        timeRange: '01:00am - 03:00am',
      },
      {
        projectName: 'Insight Mesh',
        client: 'Seamflex',
        billingStatus: 'Billable',
        timeLog: '00:45:50',
        timeRange: '03:00am - 06:00am',
      },
      {
        projectName: 'Insight Mesh',
        client: 'Seamflex',
        billingStatus: 'Billable',
        timeLog: '00:15:05',
        timeRange: '06:00am - 07:00am',
      },
    ],
  },
]

export default function TimeTrackerTable() {
  const [rows, setRows] = useState(logs)
  const [selected, setSelected] = useState<number | null>(null)
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleRow = (index: number) => {
    setRows((prev) =>
      prev.map((row, i) => ({
        ...row,
        expanded: i === index ? !row.expanded : row.expanded,
      }))
    )
  }

  const toggleCheckbox = (index: number) => {
    setSelected((prev) => (prev === index ? null : index))
    setMenuOpenIndex(null)
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
      <table className="font-inter min-w-full border-collapse">
        <thead className="border-b border-gray-200 bg-gray-50 text-xs text-gray-600">
          <tr>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left font-semibold">PROJECT NAME</th>
            <th className="p-3 text-left font-semibold">CLIENT</th>
            <th className="p-3 text-left font-semibold">BILLING STATUS</th>
            <th className="p-3 text-left font-semibold">TOTAL LOG</th>
            <th className="p-3 text-left font-semibold">TOTAL TIME</th>
            <th className="p-3 text-left font-semibold">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <>
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

                <td
                  className="cursor-pointer p-3 font-medium"
                  onClick={() => navigate('/overall/')}
                >
                  {row.projectName}
                </td>
                <td className="p-3">{row.client}</td>
                <td className="p-3">{row.status}</td>
                <td className="p-3">{row.totalLog}</td>
                <td className="p-3">{row.totalTime}</td>

                <td className="relative p-3 text-right">
                  {selected === index ? (
                    <>
                      <MoreVertical
                        className="h-5 w-5 cursor-pointer text-gray-600"
                        onClick={() =>
                          setMenuOpenIndex(
                            menuOpenIndex === index ? null : index
                          )
                        }
                      />
                      {menuOpenIndex === index && (
                        <div className="absolute top-0 right-8 z-20 w-40 rounded-md border border-gray-200 bg-white shadow-md">
                          <button
                            className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                            onClick={() => {
                              dispatch(openEditTimeEntryModal())
                              setMenuOpenIndex(null)
                            }}
                          >
                            Edit Time Entry
                          </button>
                          <button
                            className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                            onClick={() => {
                              dispatch(openDeleteTimeEntryModal())
                              setMenuOpenIndex(null)
                            }}
                          >
                            Delete Time Entry
                          </button>
                        </div>
                      )}
                    </>
                  ) : row.expanded ? (
                    <ChevronUp
                      className="h-5 w-5 cursor-pointer text-[#70C94C]"
                      onClick={() => toggleRow(index)}
                    />
                  ) : (
                    <ChevronDown
                      className="h-5 w-5 cursor-pointer text-[#70C94C]"
                      onClick={() => toggleRow(index)}
                    />
                  )}
                </td>
              </tr>

              {row.expanded && row.children.length > 0 && (
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td></td>
                  <td colSpan={6} className="p-0">
                    <ChildLogTable entries={row.children} />
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
