import { Suspense } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { PanelLeftClose } from 'lucide-react'
import { PanelRightClose } from 'lucide-react'
import { useState } from 'react'
import Header from '../components/ui/header'
import { useNavigate } from 'react-router-dom'
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

const Dashboard = () => {
  const uploadedLogo = useSelector((state: RootState) => state.logo.fileUrl)
  const [showPanel, setShowPanel] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const dashboardList = [
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
    },
    {
      title: 'Teams',
      image: '/icon/user-group.svg',
      activeImage: UserGroupActive,
      path: '/teams',
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

  return (
    <div className="flex h-full overflow-hidden">
      <div
        className={`flex flex-col justify-between border-r border-[#D2D9DF] p-4 transition-all duration-300 ${showPanel ? 'w-[17vw]' : 'w-[5vw] items-center'}`}
      >
        <div className="flex flex-col gap-7">
          <div className="flex items-center justify-between">
            {showPanel && <div className='flex'>
              <img  src={uploadedLogo || '/icon/SeamSuiteLogo.svg'} alt="Icon" className='size-10' />
              </div> 
              }
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
                        ? 'text-primary border-r-2 bg-primary/10'
                        : 'text-[#2B323B]'
                    } ${showPanel ? 'px-4 py-3' : 'justifycenter px-2 py-3'}`
                  }}
                >
                  {({ isActive }) => {
                    const activeState =
                      isActive || (isProjectTemplate && isCreateProject)

                    return (
                      <div className="flex gap-3">
                        {activeState ? (
                          <item.activeImage className="text-primary size-5" />
                        ) : (
                          <img src={item.image} className="size-5" />
                        )}
                        {showPanel && <span>{item.title}</span>}
                      </div>
                    )
                  }}
                </NavLink>
              )
            })}
          </aside>
        </div>
        <div
          className="font-bricolage ml-4 flex items-center gap-3 text-[14px]"
          onClick={() => navigate('/login')}
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
