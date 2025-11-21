import DashboardDiv from './ui/dashboardDiv'
import Chart from './ui/chart'
import { Calendar, Search } from 'lucide-react'
import DropDown from '../ui/dropDown'
import AgileAccordionTable, { type Column } from './ui/agileTabel'
import tableData from '../../../utils/deleteForProduction'
const ITEMS_PER_PAGE = 8
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const workThiWeekChartData = [
  { name: 'Mon', value: 8 },
  { name: 'Tue', value: 7 },
  { name: 'Wed', value: 9 },
  { name: 'Thu', value: 6 },
  { name: 'Fri', value: 8 },
  { name: 'Sat', value: 4 },
  { name: 'Sun', value: 0 },
]
const weekDropdownOptions = ['This Week', 'Last Week', 'Last 7 Days']

type ItemRow = {
  itemType: string
  title: string
  'Assigned To'?: string
  status?: string
  Priority?: string
  Sprint?: string
  DueDate?: string
  Features?: ItemRow[]
  Stories?: ItemRow[]
  Tasks?: ItemRow[]
  // allow arbitrary children key names
  [k: string]: any
}

// define columns
const columns: Column<ItemRow>[] = [
  {
    header: 'Item',
    accessor: 'title',
    render: (_, row) => (
      <div
        className={`flex items-center gap-2 rounded-md p-2 ${row.itemType === 'Epic' ? 'border border-[#66C61C] bg-[#F5F0FA] text-[#66C61C]' : row.itemType === 'Feature' ? 'border border-[#0B54FF] bg-[#CCDBFF4D] text-[#0B54FF]' : row.itemType === 'Story' ? 'border border-[#1FC16B] bg-[#1FC16B1A] text-[#1FC16B]' : 'border border-[#FF8800] bg-[#FFDB431A] text-[#FF8800]'}`}
      >
        <span
          className={`size-4 rounded-[5px] ${row.itemType === 'Epic' ? 'bg-[#66C61C]' : row.itemType === 'Feature' ? 'bg-[#0B54FF]' : row.itemType === 'Story' ? 'bg-[#1FC16B]' : 'bg-[#FF8800]'}`}
        />
        <div className="text-sm">{row.itemType}</div>
      </div>
    ),
  },
  { header: 'Title', accessor: 'title' },
  { header: 'Assigned To', accessor: 'Assigned To' },
  {
    header: 'Status',
    accessor: 'status',
    render: (value) => (
      <div
        className={`rounded-full px-3 py-1 text-xs font-medium ${value === 'In Progress' ? 'bg-[#CCDBFF80] text-[#002C92]' : 'bg-[#F2F0F5] text-[#0B0D0F]'}`}
      >
        {value}
      </div>
    ),
  },
  {
    header: 'Priority',
    accessor: 'Priority',
    render: (value) => (
      <div
        className={`rounded-full px-3 py-1 text-xs font-medium ${value === 'High' ? 'bg-[#FB37481A] text-[#D00416]' : value === 'Medium' ? 'bg-[#FFDB431A] text-[#FF8800]' : 'bg-[#F2F0F5] text-[#0B0D0F]'}`}
      >
        {value}
      </div>
    ),
  },
  { header: 'Sprint', accessor: 'Sprint' },
  { header: 'Due', accessor: 'DueDate' },
  {
    header: 'Actions',
    accessor: '',
    render: (value, row) => (
      <button onClick={() => console.log(value, row)}>
        <img src="/icon/Frame 1618869120.svg" alt="Action button" />
      </button>
    ),
  },
]

// helper to return children regardless of which child key they appear under
const getChildren = (row: ItemRow) => {
  // search for recognized keys
  if (row.Features && row.Features.length) return row.Features
  if (row.Stories && row.Stories.length) return row.Stories
  if (row.Tasks && row.Tasks.length) return row.Tasks
  return undefined
}

// simple row id function
const getRowId = (row: ItemRow) => `${row.itemType}-${row.title}`

const AgileDashboard = () => {
      const [currentPage, setCurrentPage] = useState(0)
      const pageCount = Math.ceil(tableData.length / ITEMS_PER_PAGE)
      const currentData = tableData.slice(
            currentPage * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        )
  return (
    <div className="min-h-[calc(160vh-80px)]">
      <div className="flex gap-4">
        <button className="flex items-center justify-center gap-2 rounded-md bg-[#66C61C] px-3 py-2 text-sm text-white">
          <img src="/icon/AddCross.svg" alt="Cross Icon" className="size-3" />
          <p>Create New Epic</p>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-md bg-[#0B54FF] px-3 py-2 text-sm text-white">
          <img src="/icon/AddCross.svg" alt="Cross Icon" className="size-3" />
          <p>Create New Feature</p>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-md bg-[#1FC16B] px-3 py-2 text-sm text-white">
          <img src="/icon/AddCross.svg" alt="Cross Icon" className="size-3" />
          <p>Create New Story</p>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-md bg-[#FF8800] px-3 py-2 text-sm text-white">
          <img src="/icon/AddCross.svg" alt="Cross Icon" className="size-3" />
          <p>Create New Task</p>
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <p className="font-bricolage font-bold">Project summary</p>
        <div className="grid grid-cols-4 gap-4">
          <DashboardDiv
            title="Remaining Days in Sprint"
            image="/icon/agileDashboard1.svg"
            description="12Days"
            buttomText="12 days, 3 weeks remaining"
          />
          <DashboardDiv
            title="Sprint Progress"
            image="/icon/agileDashboard2.svg"
            description="42h 5m"
            buttomText="60%"
            progress={true}
          />
          <div className="flex flex-col gap-2 rounded-md border-[0.5px] border-[#D2D9DF] p-4">
            <div className="flex justify-between">
              <div className="flex gap-4 text-sm font-medium">
                <p>Manual</p>
                <p>Vs.</p>
                <p> Tracked Time</p>
              </div>
              <img src="/icon/agileDashboard2.svg" alt="Icon" />
            </div>
            <div className="flex gap-4">
              <div>
                <p className="font-bricolage text-[20px] font-bold text-[#1FC16B]">
                  21h
                </p>
                <p className="text-xs font-medium">Tracked Time</p>
              </div>
              <div>
                <p className="font-bricolage text-[20px] font-bold text-[#1FC16B]">
                  21h
                </p>
                <p className="text-xs font-medium">Manual Time</p>
              </div>
            </div>
          </div>
          <DashboardDiv
            title="Billable Revenue"
            image="/icon/agileDashboard3.svg"
            description="$3,250"
            buttomText="This month"
          />
          <DashboardDiv
            title="Tasks Completed"
            image="/icon/agileDashboard4.svg"
            description="102"
            buttomText="out of 3 total tasks"
          />
          <DashboardDiv
            title="Avg Daily Hours"
            image="/icon/agileDashboard5.svg"
            description="7h 20min"
            buttomText="last 7 days"
          />

          <Chart
            data={workThiWeekChartData}
            title="Work This Week"
            dropdownOptions={weekDropdownOptions}
            value="This Week"
            onChange={(value) => {
              console.log(value)
            }}
          />
          <div className="flex flex-col gap-4 rounded-md border-[0.5px] border-[#D2D9DF] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Billable vs Non-Billable</p>
              <div className="flex items-center gap-2 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] p-2 text-xs">
                <p>This week</p>
                <Calendar className="size-2.5" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-[#404C59]">
                <div className="flex items-center gap-3">
                  <p className="h-2 w-2 rounded-full bg-[#1FC16B]"></p>
                  <p>Billable Hours</p>
                </div>
                <p>29.75h (70%)</p>
              </div>
              <div className="flex justify-between text-xs text-[#404C59]">
                <div className="flex items-center gap-3">
                  <p className="h-2 w-2 rounded-full bg-[#404C59]"></p>
                  <p>Non-Billable Hours</p>
                </div>
                <p>12.75h (30%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

   <div className='bg-[#F9F9F9] p-4 mt-4 rounded-lg'>
        <div className=" flex items-center justify-between rounded-lg bg-[#F3F3F3] p-2">
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
      <div className="mt-4 bg-white">
        <AgileAccordionTable
          columns={columns}
          data={currentData}
          gridTemplate="1.5fr 1fr 1fr 0.8fr 0.7fr 0.8fr 0.6fr 0.5fr"
          getChildren={getChildren}
          getRowId={getRowId}
          indentPx={24}
        />

         {pageCount > 1 && (
        <div className="flex justify-end mt-4 bg-white">
          <ReactPaginate
            previousLabel={'← Previous'}
            nextLabel={'Next →'}
            pageCount={pageCount}
            onPageChange={(selected) => setCurrentPage(selected.selected)}
            containerClassName="flex items-center justify-between w-full max-w-full"
            pageClassName="px-3 py-1  rounded cursor-pointer"
            previousClassName="px-3 py-1 text-[#757575] rounded cursor-pointer flex-1 font-normal text-sm"
            nextClassName="px-3 py-1 text-[#757575]  rounded cursor-pointer flex-1 text-end font-normal text-sm"
            activeClassName="bg-primary text-white"
          />
        </div>
      )}
      </div>
   </div>
    </div>
  )
}

export default AgileDashboard
