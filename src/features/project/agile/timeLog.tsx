import { ArrowDownToLine } from 'lucide-react'
import { Search } from 'lucide-react'
import DropDown from '../ui/dropDown'
import Table, { type Column } from '../../../components/ui/table'

const tableData = [
  {
    date: '2025-01-01',
    user: 'Courage Nduka',
    task: 'UI Design',
    hours: 3,
    billable: true,
    description: 'Designed the landing page structure',
  },
  {
    date: '2025-01-02',
    user: 'Ada Obi',
    task: 'API Integration',
    hours: 5,
    billable: false,
    description: 'Integrated the payment API for checkout',
  },
  {
    date: '2025-01-03',
    user: 'John Musa',
    task: 'Bug Fixing',
    hours: 2.5,
    billable: true,
    description: 'Fixed issues with login session handling',
  },
  {
    date: '2025-01-04',
    user: 'Courage Nduka',
    task: 'Backend Logic',
    hours: 4,
    billable: true,
    description: 'Implemented new CRUD endpoints for tasks',
  },
  {
    date: '2025-01-05',
    user: 'Grace Chinedu',
    task: 'Testing',
    hours: 3.5,
    billable: false,
    description: 'Performed end-to-end tests for the dashboard',
  },
]

const TimeLog = () => {
  const columns: Column<any>[] = [
    { header: 'Date', accessor: 'date' },
    { header: 'User', accessor: 'user' },
    { header: 'Task', accessor: 'task' },
    {
      header: 'Hours',
      accessor: 'hours',
      render: (value, _) => <span>{value}h</span>,
    },

    {
      header: 'Billable',
      accessor: 'billable',
      render: (value, _) => (
        <span
          className={`rounded-md px-2 py-1 text-xs font-semibold ${
            value ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {value ? 'Yes' : 'No'}
        </span>
      ),
    },

    { header: 'Description', accessor: 'description' },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="font-bricolage text-lg font-bold">Time Log</h1>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 rounded-md bg-[#F2F0F5] px-3 py-2 text-xs font-medium">
            <ArrowDownToLine size={18} />
            Export Csv
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md bg-[#F2F0F5] px-3 py-2 text-xs font-medium">
            <ArrowDownToLine size={18} />
            Export PDF
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-[#F3F3F3] p-2">
        <p>All Project</p>

        <div className="flex w-[45%] items-center gap-2">
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
        data={tableData}
        gridTemplate="1fr 2fr 2fr 1fr 1fr 2fr"
      />
    </div>
  )
}

export default TimeLog
