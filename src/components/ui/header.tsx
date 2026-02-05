import { Bell } from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectUser, selectProfile } from '../../redux/slice/authSlice'

const Header = () => {
  const user = useSelector(selectUser)
  const profile = useSelector(selectProfile)

  return (
    <div className="flex h-[104px] w-full items-center justify-between border-b border-[#D2D9DF] p-5">
      <div>
        <p className="font-bricolage text-[32px] font-bold text-[#000000]">
          Good morning, {user?.firstName || 'User'}!
        </p>
        <p className="font-bricolage text-[16px] font-normal text-[#000000]">
          Here's your productivity overview for today.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Bell size={24} />
        <div className="flex items-center gap-3 rounded-full border border-[#8898AA] p-2 px-4">
          <img
            src={user?.avatar || '/deleteForProduction/Avatars.svg'}
            alt="User Avatar"
            className="size-10 rounded-full object-cover"
          />
          <div>
            <p className="text-[14px] font-medium">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-[12px] capitalize">
              {profile?.accountType?.replace('_', ' ') || 'User'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
