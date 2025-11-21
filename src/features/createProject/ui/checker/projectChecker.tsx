import type { FC } from 'react'

interface Props {
  label: string
  onCheck: boolean
}

const ProjectChecker: FC<Props> = ({ label, onCheck }) => {
  console.log(onCheck)
  return (
    <div className="flex w-full gap-4 rounded-md border border-[#D0D5DD] bg-[#FAF9FB] p-2">
      <input
        type="checkbox"
        className="accent-primary size-4 checked:text-white"
      />
      <label className="text-grey900 font-bricolage text-[14px] font-normal">
        {label}
      </label>
    </div>
  )
}

export default ProjectChecker
