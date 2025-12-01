import Hero from '../../components/ui/hero'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import DropDown from './ui/dropDown'
import Table from '../../components/ui/table'
import type { Column } from '../../components/ui/table'

const Project = () => {
  const listData = [
    {
      project: 'ACME Website Redesign',
      client: 'ACME Corp',
      status: 'Active',
      progress: '45.5h 20m',
      lastActivity: '2 days ago',
      type: 'agile',
    },
    {
      project: 'React Native App',
      client: 'ABC Corp',
      status: 'On Hold',
      progress: '60h 30m',
      lastActivity: '3 days ago',
      type: 'waterfall',
    },
    {
      project: 'Web Application',
      client: 'XYZ Corp',
      status: 'Active',
      progress: '35h 45m',
      lastActivity: '5 days ago',
      type: 'agile',
    },
    {
      project: 'Mobile App',
      client: 'DEF Corp',
      status: 'In Progress',
      progress: '20h 10m',
      lastActivity: '1 week ago',
      type: 'hybrid',
    },
    {
      project: 'E-commerce Website',
      client: 'GHI Corp',
      status: 'Completed',
      progress: '50h 30m',
      lastActivity: '4 weeks ago',
      type: 'waterfall',
    },
    {
      project: 'AI Application',
      client: 'JKL Corp',
      status: 'Active',
      progress: '70h 45m',
      lastActivity: '2 weeks ago',
      type: 'hybrid',
    },
  ]

  const navigate = useNavigate()

  const columns: Column<(typeof listData)[0]>[] = [
    {
      header: 'PROJECT',
      accessor: 'project',
      render: (value, _) => {
        return (
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#66C61C]"></span>
            <p className="text-grey900 font-inter font-bold">{value}</p>
          </div>
        )
      },
    },

    {
      header: 'CLIENT',
      accessor: 'client',
      render: (value, _) => {
        return (
          <p className="max-w-fit min-w-[100px] rounded-full bg-[#F2F0F5] px-4 py-2 text-xs whitespace-nowrap">
            {value}
          </p>
        )
      },
    },

    {
      header: 'STATUS',
      accessor: 'status',
      render: (value, _) => {
        const statusStyles: Record<string, string> = {
          Active: 'bg-[#1FC16B1A] text-[#067138]',
          'In Progress': 'bg-[#FFDB431A] text-[#C68D00]',
          'On Hold': 'bg-[#CCDBFF] text-[#002C92]',
          Completed: 'bg-[#F2F0F5] text-[#0B0D0F]',
        }

        const colorClass = statusStyles[value] || 'bg-gray-100 text-gray-500'

        return (
          <div
            className={`${colorClass} max-w-fit min-w-[100px] rounded-full px-4 py-2 text-xs font-normal whitespace-nowrap`}
          >
            {value}
          </div>
        )
      },
    },

    {
      header: 'PROGRESS',
      accessor: 'progress',
    },
    {
      header: 'LAST ACTIVITY',
      accessor: 'lastActivity',
    },
    {
      header: 'ACTION',
      accessor: 'project',
      render: (_, row) => {
        return (
          <div className="flex gap-2">
            <button
              className="bg-primary rounded-md px-3 py-2 text-sm text-white"
              onClick={() => {
                if (row.type === 'agile') {
                  navigate('/project/agile')
                } else if (row.type === 'waterfall') {
                  navigate('/project/waterfall')
                } else {
                  navigate('/project/hybrid')
                }
              }}
            >
              View
            </button>
          </div>
        )
      },
    },
  ]

  return (
    <div>
      <Hero title="Projects" description="Manage, Edit and View Projects" />

      <div className="mt-4 flex flex-col gap-4 rounded-lg bg-white p-4">
        <button
          className="bg-primary flex w-[134px] items-center gap-2 rounded-lg px-3 py-2 text-sm text-white"
          onClick={() => navigate('/create-project')}
        >
          <img src="/icon/button-icon.svg" alt="Add Icon" />
          New Project
        </button>

        <div className="flex items-center justify-between rounded-lg bg-[#F3F3F3] p-2">
          <p>All Project</p>

          <div className="flex w-[65%] items-center gap-2">
            <div className="flex h-10 w-full rounded-md border border-[#D9D9D9] bg-white px-4 py-3">
              <input type="text" placeholder="Search" />
              <Search size={15} className="ml-3" />
            </div>

            <DropDown
              options={[
                'All',
                'ACME Corp',
                'Tech innovations llc',
                'ShopEase Ltd',
                'Fintech Solutions',
              ]}
              value="All clients"
              onChange={console.log}
              placeholder="Filter"
              className="w-full"
            />
            <DropDown
              options={[
                'All',
                'Agile Project',
                'Waterfall Project',
                'Hybrid Project',
              ]}
              value="Project Type"
              onChange={console.log}
              placeholder="Filter"
              className="w-full"
            />
            <DropDown
              options={['All', 'Active', 'Archived']}
              value="All status"
              onChange={console.log}
              placeholder="Filter"
              className="w-full"
            />
          </div>
        </div>

        <Table
          columns={columns}
          data={listData}
          gridTemplate="2fr 0.9fr 1fr 1fr 1fr 0.5fr"
          onRowClick={(row) => {
            if (row.type === 'agile') {
              navigate('/project/agile')
            } else if (row.type === 'waterfall') {
              navigate('/project/waterfall')
            } else {
              navigate('/project/hybrid')
            }
          }}
        />
      </div>
    </div>
  )
}

export default Project
