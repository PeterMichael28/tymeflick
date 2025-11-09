import { Bell } from 'lucide-react'

const Header = () => {
  return (
    <div className="flex h-[104px] w-full items-center justify-between border-b border-[#D2D9DF] p-5">
      <div>
        <p className="font-bricolage text-[32px] font-bold text-[#000000]">
          Good morning, John!
        </p>
        <p className="font-bricolage text-[16px] font-normal text-[#000000]">
          Here's your productivity overview for today.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Bell size={24} />
        <div className="flex rounded-full border border-[#8898AA] p-2 px-4">
          <img src="/deleteForProduction/Avatars.svg" alt="Image" />
          <div>
            <p className="text-[14px] font-medium">John Doe</p>
            <p className="text-[12px]">User</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
