import { useState } from 'react'

const PhaseManagement = () => {
  const [phases, setPhases] = useState([{ id: 1, tasks: [{ id: 1 }] }])

  const addPhase = () => {
    setPhases([...phases, { id: Date.now(), tasks: [{ id: 1 }] }])
  }

  const removePhase = (id: number) => {
    if (id === 1) return
    setPhases(phases.filter((p) => p.id !== id))
  }

  const addTask = (phaseId: number) => {
    setPhases(
      phases.map((phase) =>
        phase.id === phaseId
          ? { ...phase, tasks: [...phase.tasks, { id: Date.now() }] }
          : phase
      )
    )
  }

  const removeTask = (phaseId: number, taskId: number) => {
    if (taskId === 1) return

    setPhases(
      phases.map((phase) =>
        phase.id === phaseId
          ? { ...phase, tasks: phase.tasks.filter((t) => t.id !== taskId) }
          : phase
      )
    )
  }

  return (
    <div className="rounded-lg bg-[#F9F9F9] p-4">
      <p className="font-bricolage text-[17px] font-bold text-[#2B323B]">
        Phase Management
      </p>

      {phases.map((phase, _) => (
        <div key={phase.id} className="mt-4 rounded-lg bg-white p-4">
          <div className="border-primary flex justify-between rounded-lg border bg-[#F5F0FA] p-4">
            {/* LEFT SIDE: Label */}
            <p className="text-grey900 font-inter text-[18px] font-bold">
              Phase name:
            </p>

            {/* RIGHT SIDE: Tasks */}
            <div className="flex w-[80%] flex-col gap-3 text-white">
              {phase.tasks.map((task, i) => (
                <div key={task.id} className="flex w-full gap-3">
                  <input
                    type="text"
                    placeholder={`Phase ${i + 1}`}
                    className="border-primary flex-2 rounded-lg border bg-white p-2"
                  />

                  <input
                    type="text"
                    placeholder="weeks"
                    className="border-primary flex-1 rounded-lg border bg-white p-2"
                  />

                  {task.id !== 1 && (
                    <button
                      onClick={() => removeTask(phase.id, task.id)}
                      className="rounded-lg bg-[#D00416] px-4 py-2"
                    >
                      X
                    </button>
                  )}
                </div>
              ))}

              {/* ADD TASK BUTTON (your exact original style) */}
              <button
                className="bg-primary flex w-full items-center justify-center gap-4 rounded-lg py-2 text-white"
                onClick={() => addTask(phase.id)}
              >
                <img src="/icon/AddCross.svg" alt="Icon" />
                Add Task
              </button>
            </div>
          </div>

          {/* REMOVE PHASE BUTTON (floats under each box) */}
          {phase.id !== 1 && (
            <button
              onClick={() => removePhase(phase.id)}
              className="mt-2 rounded-lg bg-[#D00416] px-3 py-1 text-white"
            >
              Remove Phase
            </button>
          )}
        </div>
      ))}

      {/* ADD PHASE BUTTON — your original bottom button */}
      <button
        onClick={addPhase}
        className="bg-primary font-inter mt-4 flex items-center gap-2 rounded-md px-3 py-2 text-[12px] font-semibold text-white"
      >
        <img src="/icon/AddCross.svg" alt="Icon" />
        Add Phase
      </button>
    </div>
  )
}

export default PhaseManagement
