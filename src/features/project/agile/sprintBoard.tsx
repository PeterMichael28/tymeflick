import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { tasks as initialTasks } from '../../../utils/deleteForProduction'
import type { TaskType } from '../../../utils/deleteForProduction'

const statusColors: Record<string, string> = {
  Todo: 'border-[#8898AA] bg-white',
  'In Progress': 'border-yellow-500 bg-yellow-50',
  Stall: 'border-red-500 bg-red-50',
  Done: 'border-green-500 bg-green-50',
}

const Task = ({ task }: { task: TaskType }) => {
  const [open, setOpen] = useState(true)

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('taskId', task.id)
      }}
      className={`flex cursor-move flex-col gap-4 rounded-lg border p-4 ${statusColors[task.status] || 'border-[#8898AA] bg-white'}`}
    >
      <div className="flex justify-between">
        <p className="text-sm font-semibold">{task.title}</p>
        <button onClick={() => setOpen(!open)}>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              open ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      {open && (
        <>
          <p className="text-sm text-[#4F5E6E]">{task.description}</p>
          <p className="text-sm text-[#4F5E6E]">{task.date}</p>

          <div className="flex items-center gap-2">
            <p className="size-3 rounded-full bg-[#FB3748]"></p>
            <p className="text-xs text-[#FB3748]">{task.priority}</p>
          </div>

          <div
            className={`flex justify-between rounded-lg border border-[#D2D9DF] px-4 py-2 text-xs ${task.status === 'Todo' ? '' : 'bg-white'}`}
          >
            <p>{task.status}</p>
            <ChevronDown size={18} />
          </div>
        </>
      )}
    </div>
  )
}

const SprintBoard = () => {
  const [todo, setTodo] = useState<TaskType[]>(
    initialTasks.filter((t) => t.status === 'Todo')
  )
  const [inProgress, setInProgress] = useState<TaskType[]>(
    initialTasks.filter((t) => t.status === 'In Progress')
  )
  const [stall, setStall] = useState<TaskType[]>(
    initialTasks.filter((t) => t.status === 'Stall')
  )
  const [done, setDone] = useState<TaskType[]>(
    initialTasks.filter((t) => t.status === 'Done')
  )

  // Helper: get list setter by column name
  const columnMap: any = {
    todo: setTodo,
    inProgress: setInProgress,
    stall: setStall,
    done: setDone,
  }

  //   const getColumnItems = (name: string) => {
  //     switch (name) {
  //       case "todo":
  //         return todo;
  //       case "inProgress":
  //         return inProgress;
  //       case "stall":
  //         return stall;
  //       case "done":
  //         return done;
  //       default:
  //         return [];
  //     }
  //   };

  const handleDrop = (e: React.DragEvent, columnName: string) => {
    e.preventDefault()
    const taskId = e.dataTransfer.getData('taskId')

    // Find task in any column
    const allColumns = [todo, inProgress, stall, done]
    let task: TaskType | undefined

    allColumns.forEach((col) => {
      const found = col.find((t) => t.id === taskId)
      if (found) task = found
    })

    if (!task) return

    // Remove from all columns
    columnMap['todo']((prev: TaskType[]) => prev.filter((t) => t.id !== taskId))
    columnMap['inProgress']((prev: TaskType[]) =>
      prev.filter((t) => t.id !== taskId)
    )
    columnMap['stall']((prev: TaskType[]) =>
      prev.filter((t) => t.id !== taskId)
    )
    columnMap['done']((prev: TaskType[]) => prev.filter((t) => t.id !== taskId))

    // Add to target column
    const setter = columnMap[columnName]
    setter((prev: TaskType[]) => [
      ...prev,
      {
        ...task!,
        status:
          columnName === 'todo'
            ? 'Todo'
            : columnName === 'inProgress'
              ? 'In Progress'
              : columnName === 'stall'
                ? 'Stall'
                : 'Done',
      },
    ])
  }

  return (
    <div className="flex gap-4">
      {/* --- Column Component --- */}
      {[
        { title: 'To Do', key: 'todo', items: todo },
        { title: 'In Progress', key: 'inProgress', items: inProgress },
        { title: 'Stall', key: 'stall', items: stall },
        { title: 'Done', key: 'done', items: done },
      ].map((col) => (
        <div
          key={col.key}
          className="h-screen flex-1 rounded-lg bg-[#FAF9FB] p-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, col.key)}
        >
          <div className="flex justify-between border-b border-[#E5E7EB] pb-3">
            <p className="text-sm font-medium">{col.title}</p>
            <p className="flex size-6 items-center justify-center rounded-full bg-black text-xs text-white">
              {col.items.length}
            </p>
          </div>

          <div className="hide-scrollbar mt-4 flex h-[calc(100vh-100px)] flex-col gap-4 overflow-y-auto pr-2">
            {col.items.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SprintBoard
