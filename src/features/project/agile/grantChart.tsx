import { useState } from 'react'
import { ResizableBox } from 'react-resizable'
import { grantData } from '../../../utils/deleteForProduction'
import 'react-resizable/css/styles.css'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const GrantChart = () => {
  const [sidebarWidth, setSidebarWidth] = useState(320)
  const [openTask, setOpenTask] = useState<string[]>(
    grantData.map((_, index) => `${index}`)
  )

  const toggleTask = (id: string) => {
    setOpenTask((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )
  }

  const getMonthRange = (monthIndex: number) => {
    const start = new Date(
      `2025-${(monthIndex + 1).toString().padStart(2, '0')}-01`
    )
    const end = new Date(start.getFullYear(), start.getMonth() + 1, 0)
    return { start, end }
  }

  // Task bar renderers remain the same
  const renderTaskBar = (
    taskStart: Date,
    taskEnd: Date,
    status: string,
    title: string
  ) => {
    const statusColors: Record<string, string> = {
      Completed: '#4CAF50',
      'In Progress': '#FFC107',
      Pending: '#B0BEC5',
    }
    const color = statusColors[status] || '#2196F3'
    return months.map((_, monthIndex) => {
      const { start: monthStart, end: monthEnd } = getMonthRange(monthIndex)
      const overlapStart = taskStart > monthStart ? taskStart : monthStart
      const overlapEnd = taskEnd < monthEnd ? taskEnd : monthEnd
      const daysInMonth =
        (monthEnd.getTime() - monthStart.getTime()) / (1000 * 60 * 60 * 24) + 1
      const taskDays =
        (overlapEnd.getTime() - overlapStart.getTime()) /
          (1000 * 60 * 60 * 24) +
        1
      if (taskDays <= 0)
        return <div key={monthIndex} className="h-10 w-[20vw]"></div>
      const offsetDays =
        (overlapStart.getTime() - monthStart.getTime()) / (1000 * 60 * 60 * 24)
      const leftPercent = (offsetDays / daysInMonth) * 100
      const widthPercent = (taskDays / daysInMonth) * 100

      return (
        <div
          key={monthIndex}
          className="border-primary relative w-[20vw] border-r"
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 truncate rounded-full px-2 py-2 text-xs text-white"
            style={{
              left: `${leftPercent}%`,
              width: `${widthPercent}%`,
              backgroundColor: color,
            }}
          >
            {title}
          </div>
        </div>
      )
    })
  }

  const renderMainTaskBar = (taskStart: Date, taskEnd: Date, title: string) => {
    const timelineStart = new Date('2025-01-01')
    const timelineEnd = new Date('2025-12-31')
    const totalDays =
      (timelineEnd.getTime() - timelineStart.getTime()) /
        (1000 * 60 * 60 * 24) +
      1
    const offsetDays =
      (taskStart.getTime() - timelineStart.getTime()) / (1000 * 60 * 60 * 24)
    const taskDays =
      (taskEnd.getTime() - taskStart.getTime()) / (1000 * 60 * 60 * 24) + 1
    const leftPercent = (offsetDays / totalDays) * 100
    const widthPercent = (taskDays / totalDays) * 100

    return (
      <div className="relative h-10 w-full">
        <div
          className="bg-primary absolute top-1/2 flex h-8 -translate-y-1/2 items-center justify-center rounded-full font-bold text-white"
          style={{ left: `${leftPercent}%`, width: `${widthPercent}%` }}
        >
          {title}
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full bg-[#F5F0FA]">
      {/* Sidebar with react-resizable */}
      <ResizableBox
        width={sidebarWidth}
        height={Infinity}
        axis="x"
        minConstraints={[200, Infinity]}
        maxConstraints={[600, Infinity]}
        onResizeStop={(_, data) => setSidebarWidth(data.size.width)}
        handle={
          <span className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-gray-300" />
        }
      >
        <div className="border-primary h-full border-r bg-white">
          <p className="border-primary border p-3 text-lg font-bold">
            All Tasks/Item
          </p>
          <p className="border-primary border p-3 text-lg font-bold">
            Task Name
          </p>

          {grantData.map((grant, grantIndex) => {
            const id = `${grantIndex}`
            const isOpen = openTask.includes(id)
            return (
              <div key={id}>
                <div
                  className="border-primary flex cursor-pointer items-center gap-3 border px-4 py-2 font-bold"
                  onClick={() => toggleTask(id)}
                >
                  <img
                    src="/image/Icon.svg"
                    alt="Icon"
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                  <p className="truncate">{grant.title}</p>
                </div>
                {isOpen &&
                  grant.task.map((subTask, i) => (
                    <div
                      key={i}
                      className="border-primary flex items-center gap-3 border-t border-r border-l px-4 py-2 pl-12 font-bold"
                    >
                      <input type="radio" />
                      <p className="truncate">{subTask.title}</p>
                    </div>
                  ))}
              </div>
            )
          })}
        </div>
      </ResizableBox>

      {/* Gantt Chart */}
      <div className="flex-1 overflow-x-auto">
        <div className="w-[240vw]">
          {/* Month headers */}
          <div className="relative flex">
            {months.map((month, index) => (
              <div key={index} className="relative flex w-[20vw] flex-col">
                <p className="p-2 text-center text-sm font-bold">{month}</p>
                <div className="border-primary flex border-t">
                  {['W1', 'W2', 'W3', 'W4'].map((w, i) => (
                    <div
                      key={i}
                      className="border-primary flex-1 border-r p-2 text-center text-xs last:border-r-0"
                    >
                      {w}
                    </div>
                  ))}
                </div>
                <div className="border-primary pointer-events-none absolute top-0 right-0 h-[calc(80%+720px)] border-r" />
              </div>
            ))}
          </div>

          {/* Task rows */}
          <div className="flex flex-col bg-white">
            {grantData.map((grant, grantIndex) => {
              const taskStart = new Date(grant.startDate)
              const taskEnd = new Date(grant.endDate)
              const isOpen = openTask.includes(`${grantIndex}`)
              return (
                <div key={grantIndex} className="flex flex-col first:mt-10">
                  <div className="flex">
                    {renderMainTaskBar(taskStart, taskEnd, grant.title)}
                  </div>
                  {isOpen &&
                    grant.task.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex h-10">
                        {renderTaskBar(
                          new Date(task.startDate),
                          new Date(task.endDate),
                          task.status,
                          task.title
                        )}
                      </div>
                    ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrantChart
