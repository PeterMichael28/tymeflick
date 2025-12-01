import { ChevronUp } from 'lucide-react'
import { useState } from 'react'

const phaseList = [
  {
    title: 'Requirements',
    start: 'June 1, 2023',
    end: 'June 15, 2023',
    deliverables: 'Requirements Document',
    progress: 60,
    status: 'Completed',
    task: [
      {
        title: 'Gather Functional & Non-Functional Requirements',
        description:
          'Meet with stakeholders to identify all features, constraints, and system expectations.',
        assignedto: 'Courage',
        duration: '3 days',
      },
      {
        title: 'Create Use Case Diagrams',
        description: 'Develop high-level use cases and system interactions.',
        assignedto: 'Success',
        duration: '2 days',
      },
    ],
  },

  {
    title: 'Design',
    start: 'June 16, 2023',
    end: 'July 5, 2023',
    deliverables: 'System Design Document & UI Mockups',
    progress: 45,
    status: 'In Progress',
    task: [
      {
        title: 'Create High-Fidelity UI Mockups',
        description:
          'Design full mockups for dashboard, authentication, and customer portal.',
        assignedto: 'Success',
        duration: '4 days',
      },
      {
        title: 'Database Schema Design',
        description:
          'Design relational DB schema with 12+ interconnected tables.',
        assignedto: 'Courage',
        duration: '2 days',
      },
    ],
  },

  {
    title: 'Implementation',
    start: 'July 6, 2023',
    end: 'September 10, 2023',
    deliverables: 'Working Application Codebase',
    progress: 75,
    status: 'Pending',
    task: [
      {
        title: 'Build Authentication Module',
        description:
          'Implement JWT authentication, role-based access control, and refresh token logic.',
        assignedto: 'Courage',
        duration: '1 week',
      },
      {
        title: 'Develop Customer Dashboard',
        description:
          'Implement main dashboard logic and integrate backend APIs.',
        assignedto: 'Chisom',
        duration: '6 days',
      },
    ],
  },

  {
    title: 'Testing',
    start: 'September 11, 2023',
    end: 'October 1, 2023',
    deliverables: 'QA Report & Bug Fix Log',
    progress: 30,
    status: 'Completed',
    task: [
      {
        title: 'Write Unit Tests',
        description:
          'Create unit tests for backend modules using Jest and Supertest.',
        assignedto: 'Divine',
        duration: '5 days',
      },
      {
        title: 'UI/UX Testing',
        description: 'Review responsiveness and usability across devices.',
        assignedto: 'Success',
        duration: '3 days',
      },
    ],
  },

  {
    title: 'Deployment',
    start: 'October 2, 2023',
    end: 'October 12, 2023',
    deliverables: 'Live Production System',
    progress: 10,
    status: 'Completed',
    task: [
      {
        title: 'Set Up Production Server',
        description:
          'Prepare environment variables, database hosting, and load balancers.',
        assignedto: 'Courage',
        duration: '2 days',
      },
      {
        title: 'Deploy Frontend & Backend',
        description: 'Deploy the full application to cloud hosting.',
        assignedto: 'Chisom',
        duration: '1 day',
      },
    ],
  },
]

const Phase = () => {
  const [openPhases, setOpenPhases] = useState<Record<number, boolean>>({})

  const togglePhase = (index: number) => {
    setOpenPhases((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div>
      <div className="font-bricolage rounded-lg bg-[#F9F9F9] p-4">
        <p className="text-lg font-bold">Project Phases</p>

        <div className="mt-4 flex flex-col gap-4">
          {phaseList.map((task, index) => {
            const isOpen = openPhases[index]
            return (
              <div
                key={index}
                className={`flex flex-col gap-4 rounded-lg border-l-4 bg-white p-4 ${task.status === 'Completed' ? 'border-[#1FC16B]' : task.status === 'In Progress' ? 'border-[#FFB600]' : 'border-[#66C61C]'} `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="text-base font-bold">Phase {index + 1}:</p>
                    <p className="text- w-[380px] rounded-md border border-[#D0D5DD] px-4 py-2 font-bold">
                      {task.title}
                    </p>
                    <p
                      className={`font-bricolage rounded-md border px-5 py-2 text-sm font-normal ${task.status === 'Completed' ? 'border-[#1FC16B] bg-[#1FC16B1A] text-[#1FC16B]' : task.status === 'In Progress' ? 'border-[#FFB600] bg-[#FFDB431A] text-[#D04804]' : 'border-[#2B323B] bg-[#F2F0F5] text-[#2B323B]'}`}
                    >
                      {task.status}
                    </p>
                  </div>
                  <button onClick={() => togglePhase(index)}>
                    <ChevronUp
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex justify-between">
                  <span className="font-bricolage flex gap-1.5 text-sm">
                    <p className="font-bold">Start:</p>
                    <p className="text-[#2B323B]">{task.start}</p>
                  </span>
                  <span className="font-bricolage flex gap-1.5 text-sm">
                    <p className="font-bold">End:</p>
                    <p className="text-[#2B323B]">{task.end}</p>
                  </span>
                  <span className="font-bricolage flex gap-1.5 text-sm">
                    <p className="font-bold">Deliverables:</p>
                    <p className="text-[#2B323B]">{task.deliverables}</p>
                  </span>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium">
                    <p>Progess</p>
                    <p>{task.progress}%</p>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full ${task.status === 'Completed' ? 'bg-[#1FC16B]' : task.status === 'In Progress' ? 'bg-[#FFB600]' : 'bg-[#8898AA]'}`}
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                </div>

                {task.status !== 'Pending' && (
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-grey900 text-base font-normal">
                        Task ({task.task.length})
                      </p>
                      <button className="bg-primary flex gap-2 rounded-md p-2 text-sm text-white">
                        <img src="/icon/AddCross.svg" alt="Icon" />
                        <p>Add Task</p>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="flex flex-col gap-3">
                        {task.task.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 rounded-md bg-[#F9F9F9] p-3"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-3 rounded-md border border-[#FF8800] bg-[#FFDB431A] px-2 py-1 text-sm text-[#FF8800]">
                                <p className="size-3.5 bg-[#FF8800]"></p>
                                <p>Task</p>
                              </span>
                              <p className="font-bricolage font-bold text-[#2B323B]">
                                {item.title}
                              </p>
                            </div>
                            <p className="text-xs text-[#8898AA]">
                              {item.description}
                            </p>
                            <div className="flex gap-2">
                              <span className="flex gap-0.5 text-xs text-[#8898AA]">
                                <p>Assigned to</p>
                                <p>{item.assignedto}</p>
                              </span>
                              <span className="flex gap-0.5 text-xs text-[#8898AA]">
                                <p>Duration</p>
                                <p>{item.duration}</p>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {task.status === 'Pending' && (
                  <p>Cannot start until Design phase is completed</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Phase
