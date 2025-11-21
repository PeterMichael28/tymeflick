import type { FC } from 'react'

interface Props {
  title: string
  image: string
  description: string
  buttomText: string
  progress?: boolean
}

const DashboardDiv: FC<Props> = ({
  title,
  image,
  description,
  buttomText,
  progress,
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-md border-[0.5px] border-[#D2D9DF] p-4">
      <div className="flex justify-between">
        <h1 className="text-sm font-medium">{title}</h1>
        <img src={image} alt="Dashboard Icon" />
      </div>
      {progress ? (
        <div>
          <p className="font-bricolage text-[20px] font-bold text-[#1FC16B]">
            {description}
          </p>
          <div className="mt-2 h-1 w-full rounded-full bg-gray-200">
            {/* Actual progress */}
            <div
              className="h-full rounded-full bg-[#1FC16B]"
              style={{ width: '65%' }}
            ></div>
          </div>
        </div>
      ) : (
        <div>
          <p className="font-bricolage text-[20px] font-bold text-[#1FC16B]">
            {description}
          </p>
          <button className="text-xs font-medium">{buttomText}</button>
        </div>
      )}
    </div>
  )
}

export default DashboardDiv
