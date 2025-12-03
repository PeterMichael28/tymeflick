import Hero from "../../components/ui/hero"
import { useState } from "react"
import TimeTracking from "./timeTracking"
import Profile from "./profile"
import Notification from "./notification"

const SettingIndex = () => {
  const [tab, setTab] = useState(0)

  const list = [
    { text: 'Time Trackings', icon: '/icon/settings/clock.svg', iconActive: '/icon/settings/clockActive.svg' },
    { text: 'Profile', icon: '/icon/settings/icon.svg', iconActive: '/icon/settings/PersonActive.svg' },
    { text: 'Notification', icon: '/icon/settings/bell.svg', iconActive: '/icon/settings/bellActive.svg' },
    { text: 'Team Management', icon: '/icon/user-group.svg', iconActive: '/icon/user-groupActive.svg' },
    { text: 'Report', icon: '/icon/bar-chart-v.svg', iconActive: '/icon/bar-chart-v-active.svg' },
    { text: 'Intergration', icon: '/icon/settings/link.svg', iconActive: '/icon/settings/linkActive.svg' },
    { text: 'Security', icon: '/icon/settings/shield-tick.svg', iconActive: '/icon/settings/shield-tickActive.svg' },
    { text: 'Brand & Theme', icon: '/icon/settings/pencil-edit.svg', iconActive: '/icon/settings/pencil-editActive.svg' }
  ]

  return (
    <div>
      <Hero title="Settings" description="Manage your preferences and customize your experience." />

     <div className="flex flex-col gap-3 bg-white mt-4 p-4 rounded-lg">
          <div className="flex gap-3 bg-white mt-4">
        {list.map((item, index) => {
          const isActive = tab === index
          return (
            <div
              key={index}
              className={`flex  items-center gap-3 px-2  rounded-lg cursor-pointer w-full border font-bricolage ${
                isActive ? 'bg-[#F3FEE7] border-primary ' : 'border-[#4F5E6E]  '
              }`}
              onClick={() => setTab(index)}
            >
              <img
                src={isActive ? item.iconActive : item.icon}
                alt={item.text}
                className="w-5 h-5"
              />
              <p className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-[#606060]'}`}>
                {item.text}
              </p>
            </div>
          )
        })}
      </div>
      { tab === 0 && <TimeTracking/>}
      { tab === 1 && <Profile/>}
      { tab === 2 && <Notification/>}
     </div>
    </div>
  )
}

export default SettingIndex
