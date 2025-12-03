import Hero from '../../components/ui/hero'
import { Clock, Calendar } from 'lucide-react'
import TimeSummary from './timeSummary'
import ProjectTimeBreakdown from './projectTimeBreakdown'
import RecentTime from './recentTime'
import DropDown from '../createProject/ui/dropdown'
import Button from '../../components/button/button'
import FolderIcon from '/icon/folderOutline.svg'

const ReportIndex = () => {
  const project = [
    { name: 'Project Alpha', hours: '15h', color: '#9966CC', percent: 80 },
    { name: 'Project Beta', hours: '10h', color: '#D00416', percent: 60 },
    { name: 'Project Gamma', hours: '8h', color: '#1FC16B', percent: 40 },
    { name: 'Project Gamma', hours: '8h', color: '#DF6400', percent: 20 },
  ]
  const list = [
    { name: 'Most productive day: Tuesday (avg 6.2h)', color: '#1FC16B' },
    { name: 'Longest session: 4h 35m on May 15', color: '#66C61C' },
    { name: 'Most frequent project: ACME Website', color: '#D00416' },
  ]
  return (
    <div className="space-y-5">
      <Hero
        title="Reports & Insights"
        description="Your Hub for Performance Trends and Deep Analytics"
      />

      <div className="space-y-4 rounded-lg bg-white p-4">
        <div className="flex justify-between">
          <span className="font-bricolage flex items-center gap-2">
            <Clock className="size-5 font-bold" />
            <p className="font-bricolage font-bold">Time Summary Report</p>
          </span>
          <span className="flex items-center gap-2 rounded-md border border-[#D2D9DF] bg-[#FAF9FB] p-2 text-xs">
            <p>Mon Jan 02 2025</p>
            <Calendar className="size-5 font-bold" />
          </span>
        </div>
        <div className="flex gap-1 text-xs text-[#2B323B]">
          <p>May 1-30,2025</p>
          <p>John Doe</p>
        </div>

        <div className="mt-4">
          <p className="font-bricolage mb-2 text-lg font-medium">Today's Log</p>
          <div className="grid w-full grid-cols-2 gap-3">
            <div className="flex flex-col gap-3 rounded-md bg-[#AD85D626] p-4">
              <p className="text-[16px] font-bold text-[#3B7C0F]">168.5h</p>
              <p className="text-[14px] font-medium text-[#3B7C0F]">
                Total Hours
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-md bg-[#E9F9F0] p-4">
              <p className="text-[16px] font-bold text-[#3B7C0F]">142.3h</p>
              <p className="text-[14px] font-medium text-[#3B7C0F]">
                Billable (84%)
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-md bg-[#FFEBFF] p-4">
              <p className="text-[16px] font-bold text-[#5F005B]">5.4h</p>
              <p className="text-[14px] font-medium text-[#5F005B]">
                Daily Average
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-md bg-[#FFFBEC] p-4">
              <p className="text-[16px] font-bold text-[#AD4B00]">31</p>
              <p className="text-[14px] font-medium text-[#AD4B00]">
                Working Days
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-2 flex-col gap-2 rounded-lg bg-white">
          <div className="flex justify-between">
            <p className="font-bricolage text-[18px] font-bold">
              Top Projects This Week
            </p>
            <img
              src={FolderIcon}
              alt="Folder Icon"
              className="text-primary h-6 w-6"
            />
          </div>

          <div className="mt-2 flex flex-col gap-4">
            {project.map((proj, index) => (
              <div key={`${proj.name}-${index}`}>
                <div className="mb-1 flex justify-between">
                  <p className="text-[14px] font-medium">{proj.name}</p>
                  <p>{proj.hours}</p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#F2F0F5]">
                  <div
                    className="h-2 rounded-full transition-all duration-700 ease-in-out"
                    style={{
                      width: `${proj.percent}%`,
                      backgroundColor: proj.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p>Productivity Insights</p>
          <div className="mt-3 space-y-2 rounded-lg bg-[#AD85D626] p-4">
            {list.map((item, index) => (
              <div
                key={index}
                className="font-bricolage flex items-center gap-2 text-base font-normal"
              >
                <p
                  className="size-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></p>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <TimeSummary />
      </div>
      <ProjectTimeBreakdown />

      <RecentTime />

      <div>
        <div className="space-y-4 rounded-lg bg-white p-4">
          <p className="font-bold">Report Builder</p>

          <div className="space-y-3">
            <p className="font-normal text-[#101928]">Date Renge</p>
            <div className="flex justify-between gap-3">
              <span className="flex w-full items-center justify-between rounded-md border border-[#D0D5DD] p-3 text-[#101928]">
                <input
                  type="text"
                  placeholder="dd-mm-yy"
                  className="placeholder:text-[#101928]"
                />
                <Calendar className="text-[#101928]" />
              </span>
              <span className="flex w-full items-center justify-between rounded-md border border-[#D0D5DD] p-3 text-[#101928]">
                <input
                  type="text"
                  placeholder="dd-mm-yy"
                  className="placeholder:text-[#101928]"
                />
                <Calendar className="text-[#101928]" />
              </span>
            </div>
          </div>

          <DropDown
            label="Projects"
            onChange={() => console}
            value=""
            options={[]}
            placeholder="Select Projects"
          />
          <Button className="h-12 w-full font-semibold">Generate Report</Button>
        </div>
      </div>
    </div>
  )
}

export default ReportIndex
