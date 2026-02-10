import { Download, ChevronDown } from 'lucide-react'
import Div from '../../../features/dashboard/components/ui/div'
import type { ClientStats, Client } from '../queries'

interface CompanyTimeSummaryProps {
  client: Client
  stats: ClientStats
}

/**
 * Time summary component matching original UI style
 * Receives stats as prop from parent
 */
const CompanyTimeSummary = ({ client, stats }: CompanyTimeSummaryProps) => {
  // Format minutes to hours and minutes
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`
  }

  const summaryCards = [
    {
      title: "Today's Hours",
      imageUrl: '/icon/clock.svg',
      number: `${stats.todayHours}h`,
      description: '',
      isHourly: false,
      isWeekly: false,
      weeklypercentage: 0,
    },
    {
      title: 'Total Cost',
      imageUrl: '/icon/clock.svg',
      number: formatCurrency(stats.totalBillableAmount),
      description: '',
      isHourly: false,
      isWeekly: false,
      weeklypercentage: 0,
    },
    {
      title: 'This Week',
      imageUrl: '/icon/dashboardIcon2.svg',
      number: `${stats.thisWeekHours}h`,
      description: '',
      isHourly: false,
      isWeekly: true,
      weeklypercentage: Math.min((stats.thisWeekHours / 50) * 100, 100),
    },
  ]

  return (
    <div className="w-full rounded-lg bg-white p-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-bricolage text-[18px] font-bold text-black">
          {client.name} Time Summary
        </p>
        <div className="flex gap-4">
          {/* <span className="flex cursor-pointer items-center gap-1 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] px-3 py-2">
            <p className="font-bricolage text-[12px] font-medium text-[#8898AA]">
              Last 7 Days
            </p>
            <ChevronDown size={16} />
          </span> */}

          <span className="bg-primary flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-xs font-semibold text-white">
            <Download size={16} />
            <p>Export</p>
          </span>
        </div>
      </div>

      {/* Content Grid - matching original layout */}
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

        {/* Additional Stats Cards */}
        <div className="flex flex-col rounded-md border border-[#F2F0F5] p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-inter text-[14px] text-[#0B0D0F]">
              Active Projects
            </p>
          </div>
          <p className="font-bricolage font-bold text-[#464E5F]">
            {stats.activeProjects}
          </p>
          <p className="mt-3 text-[12px] text-[#606060]">
            of {stats.totalProjects} total projects
          </p>
        </div>

        <div className="flex flex-col rounded-md border border-[#F2F0F5] p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-inter text-[14px] text-[#0B0D0F]">This Month</p>
          </div>
          <p className="font-bricolage font-bold text-[#464E5F]">
            {stats.thisMonthHours}h
          </p>
          <p className="mt-3 text-[12px] text-[#606060]">
            {formatTime(stats.totalTrackedMinutes)} total
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompanyTimeSummary
