import { Calendar, User, Clock } from 'lucide-react'
const list = [
  {
    title: 'Website Redesign',
    status: 'Active',
    dueDate: 'Due Dec 15, 2024',
    user: 'Sarah Wilson',
    loggedTime: '142h logged',
    progress: 50,
    todoList: [
      { title: 'To Do', number: 5, color: '#0B54FF' },
      { title: 'In Progress', number: 4, color: '#FFCE55' },
      { title: 'Blocked', number: 3, color: '#D00416' },
      { title: 'Done', number: 3, color: '#1FC16B' },
    ],
  },
  {
    title: 'Mobile App Launch',
    status: 'Active',
    dueDate: 'Due Jan 10, 2025',
    user: 'Michael Brown',
    loggedTime: '98h logged',
    progress: 30,
    todoList: [
      { title: 'To Do', number: 6, color: '#0B54FF' },
      { title: 'In Progress', number: 2, color: '#FFCE55' },
      { title: 'Blocked', number: 1, color: '#D00416' },
      { title: 'Done', number: 2, color: '#1FC16B' },
    ],
  },
  {
    title: 'Marketing Campaign',
    status: 'Active',
    dueDate: 'Due Nov 30, 2024',
    user: 'Emily Clark',
    loggedTime: '65h logged',
    progress: 70,
    todoList: [
      { title: 'To Do', number: 2, color: '#0B54FF' },
      { title: 'In Progress', number: 3, color: '#FFCE55' },
      { title: 'Blocked', number: 0, color: '#D00416' },
      { title: 'Done', number: 5, color: '#1FC16B' },
    ],
  },
  {
    title: 'Backend API Development',
    status: 'Active',
    dueDate: 'Due Dec 20, 2024',
    user: 'James Lee',
    loggedTime: '120h logged',
    progress: 45,
    todoList: [
      { title: 'To Do', number: 4, color: '#0B54FF' },
      { title: 'In Progress', number: 5, color: '#FFCE55' },
      { title: 'Blocked', number: 2, color: '#D00416' },
      { title: 'Done', number: 3, color: '#1FC16B' },
    ],
  },
  {
    title: 'Customer Portal Update',
    status: 'Completed',
    dueDate: 'Due Jan 5, 2025',
    user: 'Olivia Martinez',
    loggedTime: '40h logged',
    progress: 25,
    todoList: [
      { title: 'To Do', number: 5, color: '#0B54FF' },
      { title: 'In Progress', number: 1, color: '#FFCE55' },
      { title: 'Blocked', number: 1, color: '#D00416' },
      { title: 'Done', number: 0, color: '#1FC16B' },
    ],
  },
  {
    title: 'SEO Optimization',
    status: 'Completed',
    dueDate: 'Completed Nov 20, 2024',
    user: 'William Johnson',
    loggedTime: '55h logged',
    progress: 100,
    todoList: [
      { title: 'To Do', number: 0, color: '#0B54FF' },
      { title: 'In Progress', number: 0, color: '#FFCE55' },
      { title: 'Blocked', number: 0, color: '#D00416' },
      { title: 'Done', number: 10, color: '#1FC16B' },
    ],
  },
]

const Task = () => {
  return (
    <div className="mt-4 w-full rounded-lg bg-white p-4">
      <div className="hide-scrollbar flex max-h-[1115px] flex-col gap-4 overflow-y-scroll">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-lg border-[0.7px] border-[#F2F0F5] p-4"
          >
            <div className="flex justify-between">
              <p className="font-bricolage text-[18px] font-bold text-[#0B0D0F]">
                {item.title}
              </p>
              <p
                className={`font-bricolage rounded-full px-4 py-2 font-normal ${
                  item.status === 'Active'
                    ? 'bg-[#1FC16B1A] text-[#036732]'
                    : item.status === 'Pending'
                      ? 'bg-[#FFD4001A] text-[#FFCE55]'
                      : item.status === 'Completed'
                        ? 'bg-[#CCDBFF80] text-[#0B54FF]'
                        : 'bg-gray-200 text-gray-600'
                }`}
              >
                {item.status}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex items-center gap-2 text-sm text-[#0B0D0F]">
                <Calendar size={14} />
                <p>{item.dueDate}</p>
              </span>
              <span className="flex items-center gap-2 text-sm text-[#0B0D0F]">
                <User size={14} />
                <p>{item.user}</p>
              </span>
              <span className="flex items-center gap-2 text-sm text-[#0B0D0F]">
                <Clock size={14} />
                <p>{item.loggedTime}</p>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-[#0B0D0F]">Progress</p>
                <p className="text-sm font-medium text-[#0B0D0F]">
                  {item.progress}%
                </p>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#F2F0F5]">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
            <div className="mt-2 flex justify-between gap-6">
              {item.todoList.map((todo, todoIndex) => (
                <div
                  key={todoIndex}
                  className="flex h-[100px] w-full flex-col items-center justify-center gap-2 rounded-lg bg-[#FAFAFA]"
                  style={{ borderLeft: `4px solid ${todo.color}` }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <p className="font-inter text-[14px] text-[#333333]">
                      {todo.title}
                    </p>
                    <p className="text-[24px] font-bold text-[#333333]">
                      {todo.number}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Task
