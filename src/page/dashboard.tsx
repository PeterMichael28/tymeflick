import { Suspense } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { PanelLeftClose } from 'lucide-react'
import { PanelRightClose } from 'lucide-react'
import { useState } from 'react'
import Header from '../components/ui/header'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [showPanel, setShowPanel] = useState(true)
  const navigate = useNavigate()
  const dashboardList = [
    {
      title: 'Dashboard',
      image: '/icon/Category 1 (1).svg',
      activeImage: '/icon/Category 1.svg',
      path: '/',
      end: true,
    },
    {
      title: 'Time Tracker',
      image: '/icon/alarm-clock.svg',
      activeImage: '/icon/alarm-clock-active.svg',
      path: '/timeTracker',
    },
    {
      title: 'Projects',
      image: '/icon/folder.svg',
      activeImage: '/icon/folderActive.svg',
      path: '/project',
    },
    {
      title: 'Project Template',
      image: '/icon/folder.svg',
      activeImage: '/icon/folderActive.svg',
      path: '/project-template',
    },
    {
      title: 'Clients',
      image: '/icon/users-active.svg',
      activeImage: '/icon/users.svg',
      path: '/clients',
    },
    {
      title: 'Teams',
      image: '/icon/user-group.svg',
      activeImage: '/icon/user-groupActive.svg',
      path: '/teams',
    },
    {
      title: 'Reports',
      image: '/icon/bar-chart-v.svg',
      activeImage: '/icon/bar-chart-v-active.svg',
      path: '/reports',
    },
    {
      title: 'Notifications',
      image: '/icon/bell.svg',
      activeImage: '/icon/bellActive.svg',
      path: '/notifications',
    },
    {
      title: 'Settings',
      image: '/icon/settings.svg',
      activeImage: '/icon/settings.svg',
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
            {showPanel && <img src="/icon/Group (4).svg" alt="Icon" />}
            <button>
              {showPanel ? (
                <PanelLeftClose onClick={() => setShowPanel(false)} />
              ) : (
                <PanelRightClose onClick={() => setShowPanel(true)} />
              )}
            </button>
          </div>
          <aside className="flex flex-col gap-5">
            {dashboardList.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                end={item.end}
                className={({ isActive }) =>
                  `font-bricolage flex items-center gap-3 rounded-[10px] text-[14px] transition-all duration-200 ${
                    isActive
                      ? 'text-primary border-r-2 bg-[#F5F0FA]'
                      : 'text-[#2B323B]'
                  } ${showPanel ? 'px-4 py-3' : 'justifycenter px-2 py-3'}`
                }
              >
                {({ isActive }: { isActive: boolean }) => (
                  <div className="flex gap-3">
                    <img
                      src={isActive ? item.activeImage : item.image}
                      alt={item.title}
                      className="size-5"
                    />
                    {showPanel && <span>{item.title}</span>}
                  </div>
                )}
              </NavLink>
            ))}
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

      <main className="w-full">
        <Header />

        <div className="h-full overflow-y-scroll bg-[#f2f2f2] p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
