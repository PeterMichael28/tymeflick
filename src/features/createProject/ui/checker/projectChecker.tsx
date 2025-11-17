import type { FC } from "react";

interface Props {
    label:string;
    onCheck:boolean
}

const ProjectChecker:FC<Props> = ({label, onCheck}) => {
    console.log(onCheck)
  return (
    <div className="w-full flex gap-4  border border-[#D0D5DD] p-2 rounded-md bg-[#FAF9FB]">
        <input type="checkbox" className=" size-4 accent-primary checked:text-white " />
        <label className='text-grey900 text-[14px] font-bricolage font-normal '>{label}</label>
    </div>
  )
}

export default ProjectChecker
