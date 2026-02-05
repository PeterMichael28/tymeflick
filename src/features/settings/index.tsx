import Hero from '../../components/ui/hero'
import { useState } from 'react'
import { Lock } from 'lucide-react'
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
import {
  useSubscriptionAccess,
  type FeatureKey,
} from '../../hooks/useSubscriptionAccess'
import { LockedFeature } from '../../components/access/LockedFeature'

interface SettingsTab {
  text: string
  icon: string
  iconActive: React.ComponentType<{ className?: string }>
  requiredFeature?: FeatureKey
}

const SettingIndex = () => {
  const [tab, setTab] = useState(0)
  const { hasAccess, getRequiredTier } = useSubscriptionAccess()

  const list: SettingsTab[] = [
    {
      text: 'Time Trackings',
      icon: '/icon/settings/clock.svg',
      iconActive: ClockActive,
    },
    {
      text: 'Profile',
      icon: '/icon/settings/icon.svg',
      iconActive: PersonActive,
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
      requiredFeature: 'teamManagement',
    },
    {
      text: 'Report',
      icon: '/icon/bar-chart-v.svg',
      iconActive: BarChartActive,
    },
    {
      text: 'Integration',
      icon: '/icon/settings/link.svg',
      iconActive: LinkActive,
      requiredFeature: 'integrations',
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
      requiredFeature: 'brandTheme',
    },
  ]

  /**
   * Check if a tab is locked based on required feature
   */
  const isTabLocked = (item: SettingsTab): boolean => {
    return item.requiredFeature ? !hasAccess(item.requiredFeature) : false
  }

  /**
   * Render tab content with access control
   */
  const renderTabContent = (): React.ReactNode => {
    const currentTab = list[tab]

    // Check if tab requires feature access
    if (currentTab.requiredFeature && !hasAccess(currentTab.requiredFeature)) {
      return (
        <LockedFeature
          feature={currentTab.requiredFeature}
          requiredTier={getRequiredTier(currentTab.requiredFeature)}
        />
      )
    }

    // Render tab content
    switch (tab) {
      case 0:
        return <TimeTracking />
      case 1:
        return <Profile />
      case 2:
        return <Notification />
      case 3:
        return <TeamManagement />
      case 4:
        return <Report />
      case 5:
        return <Integration />
      case 6:
        return <Security />
      case 7:
        return <BrandTheme />
      default:
        return null
    }
  }

  return (
    <div>
      <Hero
        title="Settings"
        description="Manage your preferences and customize your experience."
      />

      <div className="mt-4 flex flex-col gap-3 rounded-lg bg-white p-4">
        <div className="mt-4 flex flex-wrap gap-3 bg-white">
          {list.map((item, index) => {
            const isActive = tab === index
            const locked = isTabLocked(item)
            return (
              <div
                key={index}
                className={`font-bricolage flex cursor-pointer items-center gap-3 rounded-lg border px-2.5 py-2 ${
                  isActive
                    ? 'border-primary bg-primary/10'
                    : locked
                      ? 'border-[#d1d5db] bg-[#f9fafb]'
                      : 'border-[#4F5E6E]'
                }`}
                onClick={() => setTab(index)}
              >
                {isActive ? (
                  <item.iconActive className="text-primary size-5" />
                ) : (
                  <img
                    src={item.icon}
                    className={`size-5 ${locked ? 'opacity-50' : ''}`}
                  />
                )}
                <p
                  className={`text-sm font-medium ${
                    isActive
                      ? 'text-primary'
                      : locked
                        ? 'text-[#9ca3af]'
                        : 'text-[#4F5E6E]'
                  }`}
                >
                  {item.text}
                </p>
                {locked && <Lock className="size-4 text-[#9ca3af]" />}
              </div>
            )
          })}
        </div>
        {renderTabContent()}
      </div>
    </div>
  )
}

export default SettingIndex
