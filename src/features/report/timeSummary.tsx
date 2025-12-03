import { ChevronDown } from 'lucide-react'
import Chart from '../dashboard/components/ui/chart'
import Div from '../dashboard/components/ui/div'

const list = [
  {
    title: "Today's Hours",
    imageUrl: '/icon/clock.svg',
    number: '6h 30m',
    description: 'Billable: 6h 30m',
    isHourly: true,
    isWeekly: false,
    weeklypercentage: 0,
  },
  {
    title: 'This Week',
    imageUrl: '/icon/dashboardIcon2.svg',
    number: '42h 5m',
    description: '+12% vs last week',
    isHourly: false,
    isWeekly: true,
    weeklypercentage: 70,
  },
  {
    title: 'Active Projects',
    imageUrl: '/icon/dashboardIcon3.svg',
    number: '2',
    description: '2 due this week',
    isHourly: true,
    isWeekly: false,
    weeklypercentage: 0,
  },
  {
    title: 'Billable Revenue',
    imageUrl: '/icon/dashboardIcon4.svg',
    number: '$3,250',
    description: 'This month',
    isHourly: false,
    isWeekly: false,
    weeklypercentage: 0,
    isBillable: true,
  },
  {
    title: 'Tasks Completed',
    imageUrl: '/icon/dashboardIcon5.svg',
    number: '2',
    description: 'out of 3 total tasks',
    isHourly: false,
    isWeekly: false,
    weeklypercentage: 0,
  },
  {
    title: 'Avg Daily Hours',
    imageUrl: '/icon/alarm-clock-active.svg',
    number: '7h 20min',
    description: 'last 7 days',
    isHourly: false,
    isWeekly: false,
    weeklypercentage: 0,
  },
  {
    title: 'Time Entries',
    imageUrl: '/icon/dashboardIcon7.svg',
    number: '4',
    description: 'this week',
    isHourly: false,
    isWeekly: false,
    weeklypercentage: 0,
  },
]

const workThiWeekChartData = [
  { name: 'Mon', value: 8 },
  { name: 'Tue', value: 7 },
  { name: 'Wed', value: 9 },
  { name: 'Thu', value: 6 },
  { name: 'Fri', value: 8 },
  { name: 'Sat', value: 4 },
  { name: 'Sun', value: 0 },
]
const workThisMonthChartData = [
  { name: 'Week 1', value: 40 },
  { name: 'Week 2', value: 35 },
  { name: 'Week 3', value: 45 },
  { name: 'Week 4', value: 30 },
]

const avgWorkPerWeek = [
  { name: 'Week 1', value: 7 },
  { name: 'Week 2', value: 8 },
  { name: 'Week 3', value: 9 },
  { name: 'Week 4', value: 10 },
]

const weekDropdownOptions = ['This Week', 'Last Week', 'Last 7 Days']
const monthDropdownOptions = ['This Month', 'Last Month', 'Last 30 Days']
const avgPerWeekDropdownOptions = [
  'Last 4 Weeks',
  'Last 8 Weeks',
  'Last 12 Weeks',
]

const TimeSummary = () => {
  return (
    <div className="mt-4 w-full rounded-lg bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="font-bricolage text-[18px] font-bold text-black">
          Time Summary
        </p>
        <div className="flex gap-4">
          <span className="flex cursor-pointer items-center gap-1 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] p-2.5">
            <p className="font-bricolage text-[12px] font-medium text-[#8898AA]">
              Last 7 Days
            </p>
            <ChevronDown size={16} />
          </span>
        </div>
      </div>
      <div className="mt-5 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {list.map((item, index) => (
          <Div
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            number={item.number}
            description={item.description}
            isHourly={item.isHourly}
            isWeekly={item.isWeekly}
            weeklypercentage={item.weeklypercentage}
            isBillable={item.isBillable}
          />
        ))}
        <Chart
          data={workThiWeekChartData}
          title="Work This Week"
          dropdownOptions={weekDropdownOptions}
          value="This Week"
          onChange={(value) => {
            console.log(value)
          }}
        />
        <Chart
          data={workThisMonthChartData}
          title="Work This Month"
          dropdownOptions={monthDropdownOptions}
          value="This Month"
          onChange={(value) => {
            console.log(value)
          }}
        />
        <Chart
          data={avgWorkPerWeek}
          title="Avg Work Per Week"
          dropdownOptions={avgPerWeekDropdownOptions}
          value="Last 4 Weeks"
          onChange={(value) => {
            console.log(value)
          }}
        />
      </div>
    </div>
  )
}

export default TimeSummary
