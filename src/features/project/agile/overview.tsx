import LoaderAnimation from '../../../components/button/loaderAnimation'
import Button from '../../../components/button/button'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const list = [
  {
    title: 'Sprint Planning',
    description: 'Define sprint goals, select backlog items, estimate effort',
  },
  {
    title: 'Sprint Review',
    description: 'Demo completed features, gather stakeholder feedback',
  },
  {
    title: 'Retrospective',
    description: 'Team reflection, process improvements, action items',
  },
  {
    title: 'Development',
    description: 'Daily stand-ups, feature development, code reviews',
  },
]
const spritList = [
  { title: 'Sprint 1', description: 'Planning & Stepup' },
  { title: 'Sprint 2', description: 'Core Features' },
  { title: 'Sprint 3', description: 'Polish & Testing' },
]

const workEntryList = [
  { title: 'Epic', link: '/create-epic' },
  { title: 'Feature', link: '/create-feature' },
  { title: 'User Story', link: '/create-story' },
  { title: 'Task', link: '/create-task' },
]

const AgileOverview = () => {
  const [showDropDown, setShowDropdown] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="mt-3 flex flex-col gap-4">
      <div className="flex gap-5">
        <div ref={dropRef} className="relative">
          <Button
            className="font-bricolage h-10 font-normal text-sm"
            onClick={() => setShowDropdown(!showDropDown)}
          >
            Create Work Entry
          </Button>

          {showDropDown && (
            <div className="absolute left-0 z-50 mt-2 flex w-[15vw] flex-col gap-4 rounded-lg bg-white p-4 shadow-lg">
              {workEntryList.map((item, index) => (
                <button
                  key={index}
                  className="hover:text-primary cursor-pointer p-2 text-left hover:bg-[#F5F0FA]"
                  onClick={() => {
                    setShowDropdown(false)
                    navigate(item.link)
                  }}
                >
                  <p>{item.title}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="font-bricolage border-primary text-primary text-sm h-10 rounded-lg border px-8 py-2 font-normal" onClick={() => navigate('/new-sprint')}>
          Create New Sprint
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-md bg-[#F8F8F8] p-3"
          >
            <h3 className="font-bricolage text-[18px] font-bold">
              {item.title}
            </h3>
            <p className="font-bricolage text-xs">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full gap-4">
        <div className="flex flex-2 flex-col gap-3">
          <div className="rounded-md bg-[#CCDBFF33] p-4">
            <p className="font-bricolage font-bold text-[#0B54FF]">
              Agile Structure
            </p>
            <ul className="flex list-disc flex-col gap-2 p-4 font-normal text-[#0B54FF]">
              <li>Sprint-based iterations (2-week cycles)</li>
              <li>User stories organized by epics</li>
              <li>Daily standups and sprint ceremonies</li>
              <li>Continuous delivery and feedback</li>
            </ul>
          </div>
          <div className="flex justify-between gap-2">
            {spritList.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col gap-2 rounded-md bg-[#F8F8F8] p-3"
              >
                <p className="font-bricolage font-bold">{item.title}</p>
                <p className="font-bricolage text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-lg border-3 border-dashed border-[#3370FF] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="-mt-3 rounded-full bg-[#F8F8F8EE]">
                <LoaderAnimation />
              </span>
              <p className="font-bricolage mt- font-bold">Project Stats</p>
            </div>
            <div className="flex gap-2 rounded-full bg-[#F8F8F8] p-2">
              <img src="/image/clock.svg" alt="Icon" />
              <p className="font-normal">2 weeks left</p>
            </div>
          </div>
          <p className="font-bricolage mt-4 font-bold">Team Memeber</p>
          <div className="mt-4 flex items-center">
            <img
              className="-ml-4 h-14 w-14 first:ml-0"
              src="/deleteForProduction/image1.svg"
              alt="Icon"
            />
            <img
              className="-ml-4 h-14 w-14"
              src="/deleteForProduction/image2.svg"
              alt="Icon"
            />
            <img
              className="-ml-4 h-14 w-14"
              src="/deleteForProduction/image3.svg"
              alt="Icon"
            />
            <img
              className="-ml-4 h-14 w-14"
              src="/deleteForProduction/image4.svg"
              alt="Icon"
            />

            <div className="-ml-3 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-[#3370FF]">
              <img src="/icon/plus.svg" alt="Plus" className="h-8 w-8" />
            </div>
          </div>

          <div>
            <div className="mt-4 flex justify-between">
              <p className="font-inter text-[14px] font-medium">Progress</p>
              <p className="font-inter text-[14px] font-medium">65%</p>
            </div>

            {/* Progress bar background */}
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              {/* Actual progress */}
              <div
                className="h-full rounded-full bg-[#0B54FF]"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="mt-4 flex justify-between">
              <p className="font-inter text-[14px] font-medium">Time Budget</p>
              <p className="font-inter text-[14px] font-medium">
                180h / 400h used
              </p>
            </div>
            {/* Progress bar background */}
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              {/* Actual progress */}
              <div
                className="h-full rounded-full bg-[#FFB600]"
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgileOverview
