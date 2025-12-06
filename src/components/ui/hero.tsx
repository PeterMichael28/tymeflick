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
    <div className="w-full rounded-lg bg-white p-4 h-[17vh]">
      <div className="relative flex rounded-md bg-[#F3F3F3] h-full">
        {/* Image on the right */}
       <div className="relative h-full flex justify-end w-full text-primary">
        {/* The image */}
        <img
          src="/image/Mask group (3).png"
          alt="Image"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bgprimary/30 flex items-center justify-center">
        </div>
      </div>


        {/* Overlay text content */}
        <div className="absolute top-0 left-0 flex w-[70%] flex-col px-4 py-6 z-30">
          <p className="font-inter text-[24px] font-medium text-black">{title}</p>
          {description && <p className="text-[14px] text-black">{description}</p>}
          {isDashboard && (
            <span className="flex w-[320px] justify-between gap-4 rounded-lg border border-[#D2D9DF] bg-white px-3 py-2 mt-2">
              <p className="text-[14px] font-normal text-[#2B323B]">
                {weekRange}
              </p>
              <img src="/icon/calender.svg" alt="Calender" />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
