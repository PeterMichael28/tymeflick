import { Download, ChevronDown } from 'lucide-react'
import Div from '../../../features/dashboard/components/ui/div'
import Chart from "../../../features/dashboard/components/ui/chart"
import { useDispatch } from 'react-redux'
import { openUploadTimeLogModal } from '../../../redux/slice/modalSlice'

const summaryCards = [
  {
    title: "Today's Hours",
    imageUrl: '/icon/clock.svg',
    number: '2h 30m',
    description: '',
    isHourly: false,
    isWeekly: false,
    weeklypercentage: 0,
  },
  {
    title: 'Total Cost',
    imageUrl: '/icon/clock.svg',
    number: '$3000',
    description: '',
    isHourly: false,
    isWeekly: false,
    weeklypercentage: 0,
  },
  {
    title: 'This Week',
    imageUrl: '/icon/dashboardIcon2.svg',
    number: '42h 5m',
    description: '',
    isHourly: false,
    isWeekly: true,
    weeklypercentage: 85,
  },
]

const workThisMonthData = [
  { name: 'Mon', value: 8 },
  { name: 'Tue', value: 2 },
  { name: 'Wed', value: 4 },
  { name: 'Thu', value: 3 },
  { name: 'Fri', value: 7 },
  { name: 'Sat', value: 5 },
  { name: 'Sun', value: 4 },
]

const avgPerWeekData = [
  { name: 'Week 1', value: 7 },
  { name: 'Week 2', value: 3 },
  { name: 'Week 3', value: 5 },
  { name: 'Week 4', value: 7 },
]

const monthDropdownOptions = ['May', 'June', 'July']
const avgDropdownOptions = ['This Week', 'Last Week', 'Last 4 Weeks']

const CompanyTimeSummary = () => {
  const dispatch = useDispatch()

  return (
    <div className="mt-4 w-full rounded-lg bg-white p-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-bricolage text-[18px] font-bold text-black">
          ACME Corporation Time Summary
        </p>
        <div className="flex gap-4">
          <span className="flex cursor-pointer items-center gap-1 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] px-3 py-2">
            <p className="font-bricolage text-[12px] font-medium text-[#8898AA]">
              Last 7 Days
            </p>
            <ChevronDown size={16} />
          </span>

          <span
            className="flex cursor-pointer items-center gap-1 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-white"
            onClick={() => dispatch(openUploadTimeLogModal())}
          >
            <Download size={16} />
            <p>Export</p>
          </span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mt-5 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {summaryCards.map((item, index) => (
          <Div
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            number={item.number}
            description={item.description}
            isHourly={item.isHourly}
            isWeekly={item.isWeekly}
            weeklypercentage={item.weeklypercentage}
          />
        ))}

        <Chart
          data={workThisMonthData}
          title="Work this Month"
          dropdownOptions={monthDropdownOptions}
          value="May"
          onChange={(value) => console.log(value)}
        />

        <Chart
          data={avgPerWeekData}
          title="Average per week"
          dropdownOptions={avgDropdownOptions}
          value="This Week"
          onChange={(value) => console.log(value)}
        />
      </div>
    </div>
  )
}

export default CompanyTimeSummary
