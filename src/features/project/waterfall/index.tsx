import { NavLink, Outlet } from 'react-router-dom'
import Hero from '../../../components/ui/hero'
import { useNavigate } from 'react-router-dom'

const list = [
  {
    image: '/icon/button-icon.png',
    active: '/icon/agileButton.svg',
    text: 'Overview',
    path: '',
    end: true,
  },
  {
    image: '/icon/phase.svg',
    active: '/icon/phaseActive.svg',
    text: 'Phases',
    path: 'phase',
  },
  // {
  //   image: '/icon/sprint.svg',
  //   active: '/icon/sprintActive.svg',
  //   text: 'Sprint Boards',
  //   path: 'sprint-board',
  // },
 
  {
    image: '/icon/grant.svg',
    active: '/icon/grantActive.svg',
    text: 'Gantt Chart',
    path: 'grant-chart',
  },
   {
    image: '/icon/document.svg',
    active: '/icon/documentActive.svg',
    text: 'Documents',
    path: 'document',
  },
  {
    image: '/icon/timeLogs.svg',
    active: '/icon/timeLogActive.svg',
    text: 'Time Logs',
    path: 'time-log',
  },
  {
    image: '/icon/person.svg',
    active: '/icon/personActive.svg',
    text: 'Team Member',
    path: 'team-member',
  },
]

const ProjectWaterfallIndex = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Hero title="Projects" description="Manage, Edit and View Projects" />
      <div className="mt-4 flex flex-col gap-4 rounded-lg bg-white p-4">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              src="/icon/Frame 1000008159.svg"
              alt="Icon"
              className="size-9 cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <div>
              <p className="font-bricolage text-[20px] font-medium">
                ACME Website Redesign
              </p>
              <p className="text-[14px] font-normal text-[#2B323B]">
                Complete redesign of the company website with modern UI/UX
                principles and responsive design.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] p-4">
              <p className="font-inter text-sm font-bold text-[#4A4A4A]">
                Start Date
              </p>
              <p className="font-inter text-sm font-normal text-[#4A4A4A]">
                01/06/2025
              </p>
            </div>
            <div className="flex gap-2 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] p-4">
              <p className="font-inter text-sm font-bold text-[#4A4A4A]">
                End Date
              </p>
              <p className="font-inter text-sm font-normal text-[#4A4A4A]">
                02/06/2025
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-b border-[#E5E7EB]">
          {list.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              end={item.end}
              className="relative"
            >
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3 p-3 text-[16px] font-normal ${
                    isActive ? 'text-primary' : 'text-[#8898AA]'
                  }`}
                >
                  <img
                    src={isActive ? item.active : item.image}
                    alt={item.text}
                    className="size-5"
                  />
                  <p>{item.text}</p>

                  {/* underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full transition-all duration-300 ${
                      isActive ? 'bg-primary' : 'bg-transparent'
                    }`}
                  />
                </div>
              )}
            </NavLink>
          ))}
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ProjectWaterfallIndex
