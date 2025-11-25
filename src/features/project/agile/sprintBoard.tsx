import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { tasks as initialTasks } from "../../../utils/deleteForProduction";
import  type { TaskType } from "../../../utils/deleteForProduction";

const statusColors: Record<string, string> = {
  "Todo": "border-[#8898AA] bg-white",
  "In Progress": "border-yellow-500 bg-yellow-50",
  "Stall": "border-red-500 bg-red-50",
  "Done": "border-green-500 bg-green-50",
};


const Task = ({ task }: { task: TaskType }) => {
    const [open, setOpen] = useState(true);

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("taskId", task.id);
      }}
      className={`p-4 rounded-lg flex flex-col gap-4 cursor-move border 
    ${statusColors[task.status] || "border-[#8898AA] bg-white"}`}
    >
      <div className="flex justify-between">
        <p className="text-sm font-semibold">{task.title}</p>
        <button onClick={() => setOpen(!open)}>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

      </div>

     {open && (
        <>
          <p className="text-[#4F5E6E] text-sm">{task.description}</p>
      <p className="text-[#4F5E6E] text-sm">{task.date}</p>

      <div className="flex gap-2 items-center">
        <p className="size-3 rounded-full bg-[#FB3748]"></p>
        <p className="text-[#FB3748] text-xs">{task.priority}</p>
      </div>

      <div className={`flex justify-between border border-[#D2D9DF] rounded-lg px-4 py-2 text-xs ${task.status === 'Todo' ? '' : 'bg-white'}`}>
        <p>{task.status}</p>
        <ChevronDown size={18} />
      </div>
        </>
     )

     }
    </div>
  );
};

const SprintBoard = () => {
  const [todo, setTodo] = useState<TaskType[]>(
    initialTasks.filter((t) => t.status === "Todo")
  );
  const [inProgress, setInProgress] = useState<TaskType[]>(
    initialTasks.filter((t) => t.status === "In Progress")
  );
  const [stall, setStall] = useState<TaskType[]>(
    initialTasks.filter((t) => t.status === "Stall")
  );
  const [done, setDone] = useState<TaskType[]>(
    initialTasks.filter((t) => t.status === "Done")
  );

  // Helper: get list setter by column name
  const columnMap: any = {
    todo: setTodo,
    inProgress: setInProgress,
    stall: setStall,
    done: setDone,
  };

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
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");

    // Find task in any column
    const allColumns = [todo, inProgress, stall, done];
    let task: TaskType | undefined;

    allColumns.forEach((col) => {
      const found = col.find((t) => t.id === taskId);
      if (found) task = found;
    });

    if (!task) return;

    // Remove from all columns
    columnMap["todo"]((prev: TaskType[]) =>
      prev.filter((t) => t.id !== taskId)
    );
    columnMap["inProgress"]((prev: TaskType[]) =>
      prev.filter((t) => t.id !== taskId)
    );
    columnMap["stall"]((prev: TaskType[]) =>
      prev.filter((t) => t.id !== taskId)
    );
    columnMap["done"]((prev: TaskType[]) =>
      prev.filter((t) => t.id !== taskId)
    );

    // Add to target column
    const setter = columnMap[columnName];
    setter((prev: TaskType[]) => [
      ...prev,
      { ...task!, status: columnName === "todo" ? "Todo" : columnName === "inProgress" ? "In Progress" : columnName === "stall" ? "Stall" : "Done" },
    ]);
  };

  return (
    <div className="flex gap-4">
      {/* --- Column Component --- */}
      {[
        { title: "To Do", key: "todo", items: todo },
        { title: "In Progress", key: "inProgress", items: inProgress },
        { title: "Stall", key: "stall", items: stall },
        { title: "Done", key: "done", items: done },
      ].map((col) => (
        <div
          key={col.key}
          className="bg-[#FAF9FB] flex-1 rounded-lg p-4 h-screen"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, col.key)}
        >
          <div className="flex justify-between border-b border-[#E5E7EB] pb-3">
            <p className="text-sm font-medium">{col.title}</p>
            <p className="size-6 text-xs bg-black text-white rounded-full flex items-center justify-center">
              {col.items.length}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 overflow-y-auto h-[calc(100vh-100px)] pr-2 hide-scrollbar">
            {col.items.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SprintBoard;
