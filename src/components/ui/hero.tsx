import type { FC } from 'react'

interface Heroprop {
  title: string
  description?: string
  isDashboard?: boolean
}

const Hero: FC<Heroprop> = ({ title, description, isDashboard }) => {
  // Function to get start and end of the current week
  const getWeekRange = () => {
    const now = new Date()
    const first = now.getDate() - now.getDay() + 1 // Monday as first day
    const last = first + 6 // Sunday as last day
    const start = new Date(now.setDate(first))
    const end = new Date(now.setDate(last))
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`
  }

  const weekRange = getWeekRange()

  return (
    <div className="w-full rounded-lg bg-white p-4">
      <div className="flex justify-between rounded-md bg-[#F3F3F3]">
        <div className="flex w-[50%] flex-col gap-5 px-4 py-2">
          <p className="font-inter text-[24px] font-medium">{title}</p>
          {description && <p>{description}</p>}
          {isDashboard && (
            <span className="flex w-[320px] justify-between gap-4 rounded-lg border border-[#D2D9DF] bg-white px-3 py-2">
              <p className="text-[14px] font-normal text-[#2B323B]">
                {weekRange}
              </p>
              <img src="/icon/calender.svg" alt="Calender" />
            </span>
          )}
        </div>
        <img
          src="/image/Mask group (1).png"
          alt="Hero Image"
          className="w-[50%]"
        />
      </div>
    </div>
  )
}

export default Hero
