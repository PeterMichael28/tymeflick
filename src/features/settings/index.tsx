import Hero from '../../components/ui/hero'
import { useState } from 'react'
import TimeTracking from './timeTracking'
import Profile from './profile'
import Notification from './notification'
import TeamManagement from './teamManagement'
import Report from './report'
import Integration from './integration'
import Security from './security'
import BrandTheme from './brandTheme'
import ClockActive from '../../../svgComponent/clockActive'
import BellActive from '../../../svgComponent/bellActive'
import LinkActive from '../../../svgComponent/linkActive'
import PersonActive from '../../../svgComponent/PersonActive'
import PencilActive from '../../../svgComponent/pencileditActive'
import ShielActive from '../../../svgComponent/shield-tickActive'
import UserGroupActive from '../../../svgComponent/user-groupActive'
import BarChartActive from '../../../svgComponent/bar-chart-v-active'

const SettingIndex = () => {
  const [tab, setTab] = useState(0)

  const list = [
    {
      text: 'Time Trackings',
      icon: '/icon/settings/clock.svg',
      iconActive: ClockActive,
    },
    {
      text: 'Profile',
      icon: '/icon/settings/icon.svg',
      iconActive:PersonActive,
    },
    {
      text: 'Notification',
      icon: '/icon/settings/bell.svg',
      iconActive: BellActive,
    },
    {
      text: 'Team Management',
      icon: '/icon/user-group.svg',
      iconActive: UserGroupActive,
    },
    {
      text: 'Report',
      icon: '/icon/bar-chart-v.svg',
      iconActive: BarChartActive,
    },
    {
      text: 'Intergration',
      icon: '/icon/settings/link.svg',
      iconActive: LinkActive,
    },
    {
      text: 'Security',
      icon: '/icon/settings/shield-tick.svg',
      iconActive: ShielActive,
    },
    {
      text: 'Brand & Theme',
      icon: '/icon/settings/pencil-edit.svg',
      iconActive: PencilActive,
    },
  ]

  return (
    <div>
      <Hero
        title="Settings"
        description="Manage your preferences and customize your experience."
      />

      <div className="mt-4 flex flex-col gap-3 rounded-lg bg-white p-4">
        <div className="mt-4 flex gap-3 bg-white">
          {list.map((item, index) => {
            const isActive = tab === index
            return (
              <div
                key={index}
                className={`font-bricolage wfull flex cursor-pointer items-center gap-3 rounded-lg border px-2.5 py-2 ${
                  isActive ? 'border-primary bg-primary/10' : 'border-[#4F5E6E]'
                }`}
                onClick={() => setTab(index)}
              >
               {isActive ? (
                          <item.iconActive className="text-primary size-5" />
                        ) : (
                          <img src={item.icon} className="size-5" />
                        )}
                <p
                  className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-[#4F5E6E]'}`}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
        {tab === 0 && <TimeTracking />}
        {tab === 1 && <Profile />}
        {tab === 2 && <Notification />}
        {tab === 3 && <TeamManagement />}
        {tab === 4 && <Report />}
        {tab === 5 && <Integration />}
        {tab === 6 && <Security />}
        {tab === 7 && <BrandTheme />}
      </div>
    </div>
  )
}

export default SettingIndex
