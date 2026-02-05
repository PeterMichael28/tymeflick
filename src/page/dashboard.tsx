import { Suspense } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { PanelLeftClose, PanelRightClose, Lock } from 'lucide-react'
import { useState } from 'react'
import Header from '../components/ui/header'
import { useLocation } from 'react-router-dom'
import ActiveCategory from '../../svgComponent/Category 1'
import AlarmClockActive from '../../svgComponent/alarm-clock-active'
import FolderActive from '../../svgComponent/folderActive'
import UserActive from '../../svgComponent/users'
import UserGroupActive from '../../svgComponent/user-groupActive'
import BellActive from '../../svgComponent/bellActive'
import SettingsActive from '../../svgComponent/settingsActive'
import BarActive from '../../svgComponent/bar-chart-v-active'
import { useSelector } from 'react-redux'
import { type RootState } from '../redux/store'
import { useLogout } from '../hooks/authQuery'
import {
  useSubscriptionAccess,
  type FeatureKey,
} from '../hooks/useSubscriptionAccess'

interface DashboardItem {
  title: string
  image: string
  activeImage: React.ComponentType<{ className?: string }>
  path: string
  end?: boolean
  requiredFeature?: FeatureKey
}

const Dashboard = () => {
  const logout = useLogout()
  const uploadedLogo = useSelector((state: RootState) => state.logo.fileUrl)
  const [showPanel, setShowPanel] = useState(true)
  const location = useLocation()
  const { hasAccess } = useSubscriptionAccess()

  const dashboardList: DashboardItem[] = [
    {
      title: 'Dashboard',
      image: '/icon/Category 1 (1).svg',
      activeImage: ActiveCategory,
      path: '/',
      end: true,
    },
    {
      title: 'Time Tracker',
      image: '/icon/alarm-clock.svg',
      activeImage: AlarmClockActive,
      path: '/timeTracker',
    },
    {
      title: 'Projects',
      image: '/icon/folder.svg',
      activeImage: FolderActive,
      path: '/project',
    },
    {
      title: 'Project Template',
      image: '/icon/folder.svg',
      activeImage: FolderActive,
      path: '/project-template',
    },
    {
      title: 'Clients',
      image: '/icon/users-active.svg',
      activeImage: UserActive,
      path: '/clients',
      requiredFeature: 'clients',
    },
    {
      title: 'Teams',
      image: '/icon/user-group.svg',
      activeImage: UserGroupActive,
      path: '/teams',
      requiredFeature: 'teams',
    },
    {
      title: 'Reports',
      image: '/icon/bar-chart-v.svg',
      activeImage: BarActive,
      path: '/reports',
    },
    {
      title: 'Notifications',
      image: '/icon/bell.svg',
      activeImage: BellActive,
      path: '/notifications',
    },
    {
      title: 'Settings',
      image: '/icon/settings.svg',
      activeImage: SettingsActive,
      path: '/settings',
    },
  ]

  /**
   * Check if a sidebar item is locked
   */
  const isItemLocked = (item: DashboardItem): boolean => {
    return item.requiredFeature ? !hasAccess(item.requiredFeature) : false
  }

  return (
    <div className="flex h-full overflow-hidden">
      <div
        className={`flex flex-col justify-between border-r border-[#D2D9DF] p-4 transition-all duration-300 ${showPanel ? 'w-[17vw]' : 'w-[5vw] items-center'}`}
      >
        <div className="flex flex-col gap-7">
          <div className="flex items-center justify-between">
            {showPanel && (
              <div className="flex">
                <img
                  src={uploadedLogo || '/icon/SeamSuiteLogo.svg'}
                  alt="Icon"
                  className="size-10"
                />
              </div>
            )}
            <button>
              {showPanel ? (
                <PanelLeftClose onClick={() => setShowPanel(false)} />
              ) : (
                <PanelRightClose onClick={() => setShowPanel(true)} />
              )}
            </button>
          </div>
          <aside className="flex flex-col gap-5">
            {dashboardList.map((item, index) => {
              const isCreateProject = location.pathname === '/create-project'
              const isProjectTemplate = item.path === '/project-template'
              const locked = isItemLocked(item)

              return (
                <NavLink
                  to={item.path}
                  key={index}
                  end={item.end}
                  className={({ isActive }) => {
                    const activeState =
                      isActive || (isProjectTemplate && isCreateProject)

                    return `font-bricolage flex items-center gap-3 rounded-[10px] text-[14px] transition-all duration-200 ${
                      activeState
                        ? 'text-primary bg-primary/10 border-r-2'
                        : locked
                          ? 'text-[#9ca3af]'
                          : 'text-[#2B323B]'
                    } ${showPanel ? 'px-4 py-3' : 'justifycenter px-2 py-3'}`
                  }}
                >
                  {({ isActive }) => {
                    const activeState =
                      isActive || (isProjectTemplate && isCreateProject)

                    return (
                      <div className="flex w-full items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          {activeState ? (
                            <item.activeImage className="text-primary size-5" />
                          ) : (
                            <img
                              src={item.image}
                              className={`size-5 ${locked ? 'opacity-50' : ''}`}
                            />
                          )}
                          {showPanel && (
                            <span className={locked ? 'opacity-60' : ''}>
                              {item.title}
                            </span>
                          )}
                        </div>
                        {showPanel && locked && (
                          <Lock className="size-4 text-[#9ca3af]" />
                        )}
                      </div>
                    )
                  }}
                </NavLink>
              )
            })}
          </aside>
        </div>
        <div
          className="hover:text-primary font-bricolage ml-4 flex cursor-pointer items-center gap-3 text-[14px]"
          onClick={() => logout.mutate()}
        >
          <img src="/icon/sign-out.svg" alt="" className="size-5" />
          {showPanel && <p>Log out</p>}
        </div>
      </div>

      <main className="flex h-screen w-full flex-col overflow-hidden">
        <Header />

        <div className="w-full flex-1 overflow-y-auto bg-[#f2f2f2] p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
