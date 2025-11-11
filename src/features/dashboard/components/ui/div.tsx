import { type FC } from 'react'
interface DivProps {
  title: string
  number: string
  description: string
  isHourly: boolean
  isWeekly: boolean
  imageUrl: string
  weeklypercentage: number
  isBillable?: boolean
}

const Div: FC<DivProps> = ({
  title,
  number,
  description,
  isHourly,
  isWeekly,
  imageUrl,
  weeklypercentage,
  isBillable,
}) => {
  return (
    <div className="flex flex-col justifycenter rounded-md border border-[#F2F0F5] p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-inter text-[14px] text-[#0B0D0F]">{title}</p>
        <img src={imageUrl} alt={title} />
      </div>
      <p className="font-bricolage font-bold text-[#464E5F]">{number}</p>
      <p className="mt-3 text-[12px] text-[#036732]">{description}</p>
      {isHourly && (
        <div className="mt-6 flex gap-2">
          <img src="/icon/Button.svg" alt="Icon" />
          <p className="font-bricolage text-[12px] text-[#606060]">
            +8% from yesterday
          </p>
        </div>
      )}
      {isWeekly && (
        <div className="w-full max-w-md rounded-2xl mt-5">
          <div className="h-1 w-full overflow-hidden rounded-full bg-gray-700">
            <div
              className="h-1 bg-green-500 transition-all duration-500 ease-in-out rounded-full"
              style={{ width: `${weeklypercentage}%` }}
            />
          </div>
          <p className="mt-2  text-xs text-[#606060] ">
            +{weeklypercentage}% of 50h weekly goal
          </p>
        </div>
      )}
        {isBillable && (    
            < p className="font-bricolage text-[12px] text-[#606060] mt-6">Rate: $75/hr •43.3h billable</p>
        )}
    </div>
  )
}

export default Div
