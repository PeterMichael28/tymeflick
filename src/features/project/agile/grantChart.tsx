// import React, { useMemo, useState } from "react";

// /**
//  * Simple Gantt chart (no external deps).
//  *
//  * Props:
//  *  - tasks: [{ id, name, start: "YYYY-MM-DD", end: "YYYY-MM-DD", status }]
//  *  - dayWidth: number (px width per day)
//  *
//  * Usage:
//  *  <GrantChart tasks={myTasks} dayWidth={36} />
//  */

// const sampleTasks = [
//   { id: "1", name: "Design Homepage", start: "2025-06-01", end: "2025-06-05", status: "In Progress" },
//   { id: "2", name: "API - Auth", start: "2025-06-03", end: "2025-06-12", status: "Todo" },
//   { id: "3", name: "User Dashboard", start: "2025-06-08", end: "2025-06-20", status: "In Progress" },
//   { id: "4", name: "QA & Testing", start: "2025-06-18", end: "2025-06-23", status: "Todo" },
//   { id: "5", name: "Deploy", start: "2025-06-24", end: "2025-06-25", status: "Done" },
// ];

// const statusColors = {
//   "Todo": "bg-blue-500/80",
//   "In Progress": "bg-yellow-500/80",
//   "Done": "bg-green-500/80",
//   "Stall": "bg-red-500/80",
//   default: "bg-gray-400/60",
// };

// function parseDateISO(s) {
//   // parse YYYY-MM-DD into Date (UTC safe)
//   const [y, m, d] = s.split("-").map(Number);
//   return new Date(y, m - 1, d);
// }

// function daysBetween(a, b) {
//   const msPerDay = 1000 * 60 * 60 * 24;
//   // floor to avoid DST issues
//   return Math.round((b.setHours(0,0,0,0) - a.setHours(0,0,0,0)) / msPerDay);
// }

// function addDays(d, n) {
//   const r = new Date(d);
//   r.setDate(r.getDate() + n);
//   return r;
// }

// function formatDateShort(d) {
//   return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
// }

// export default function GrantChart({ tasks = sampleTasks, dayWidth = 36 }) {
//   const [view, setView] = useState("day"); // 'day' or 'week'

//   // compute chart start/end (pad 2 days on each side)
//   const { chartStart, chartEnd, totalDays } = useMemo(() => {
//     if (!tasks || tasks.length === 0) {
//       const today = new Date();
//       return { chartStart: addDays(today, -3), chartEnd: addDays(today, 3), totalDays: 6 };
//     }

//     let min = parseDateISO(tasks[0].start);
//     let max = parseDateISO(tasks[0].end);

//     tasks.forEach(t => {
//       const s = parseDateISO(t.start);
//       const e = parseDateISO(t.end);
//       if (s < min) min = s;
//       if (e > max) max = e;
//     });

//     // padding
//     min = addDays(min, -2);
//     max = addDays(max, 2);

//     const days = daysBetween(new Date(min), new Date(max)) + 1;
//     return { chartStart: min, chartEnd: max, totalDays: days };
//   }, [tasks]);

//   // if view is 'week', compress dayWidth by 7 and compute week widths
//   const effectiveDayWidth = view === "day" ? dayWidth : Math.max(24, Math.floor(dayWidth * 0.4));

//   // generate header dates
//   const headerDates = useMemo(() => {
//     const arr = [];
//     for (let i = 0; i < totalDays; i++) {
//       arr.push(addDays(new Date(chartStart), i));
//     }
//     return arr;
//   }, [chartStart, totalDays]);

//   // helper: compute left and width in px for a task
//   function getTaskStyle(task) {
//     const s = parseDateISO(task.start);
//     const e = parseDateISO(task.end);
//     const offset = daysBetween(new Date(chartStart), new Date(s));
//     const widthDays = daysBetween(new Date(s), new Date(e)) + 1;
//     return {
//       left: offset * effectiveDayWidth,
//       width: Math.max(8, widthDays * effectiveDayWidth),
//     };
//   }

//   return (
//     <div className="w-full border rounded-lg bg-white p-4">
//       {/* Controls */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-3">
//           <h3 className="font-semibold">Gantt Chart</h3>
//           <div className="text-xs text-gray-500">({formatDateShort(new Date(chartStart))} — {formatDateShort(new Date(chartEnd))})</div>
//         </div>

//         <div className="flex items-center gap-2 text-xs">
//           <button
//             onClick={() => setView("day")}
//             className={`px-2 py-1 rounded ${view === "day" ? "bg-slate-200" : "hover:bg-slate-50"}`}
//           >
//             Day
//           </button>
//           <button
//             onClick={() => setView("week")}
//             className={`px-2 py-1 rounded ${view === "week" ? "bg-slate-200" : "hover:bg-slate-50"}`}
//           >
//             Week
//           </button>
//         </div>
//       </div>

//       {/* Chart area */}
//       <div className="overflow-auto border rounded">
//         <div style={{ minWidth: Math.max(600, totalDays * effectiveDayWidth) }} className="relative">
//           {/* Header */}
//           <div className="flex items-center border-b bg-slate-50">
//             <div style={{ width: 240 }} className="shrink-0 p-2 text-sm font-medium">Tasks</div>
//             <div className="flex" style={{ width: totalDays * effectiveDayWidth }}>
//               {headerDates.map((d, idx) => (
//                 <div
//                   key={idx}
//                   style={{ width: effectiveDayWidth }}
//                   className="text-xs text-center border-l border-slate-100 p-1"
//                 >
//                   {view === "day" ? d.getDate() : `W${getWeekNumber(d)}`}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Rows */}
//           <div>
//             {tasks.map((task, idx) => {
//               const { left, width } = getTaskStyle(task);
//               return (
//                 <div key={task.id} className="flex items-center border-b" style={{ minHeight: 56 }}>
//                   {/* Task label */}
//                   <div style={{ width: 240 }} className="shrink-0 p-2 text-sm">
//                     <div className="font-medium">{task.name}</div>
//                     <div className="text-xs text-gray-500">{task.start} → {task.end}</div>
//                   </div>

//                   {/* Timeline row */}
//                   <div className="relative" style={{ width: totalDays * effectiveDayWidth }}>
//                     {/* grid background stripes (optional) */}
//                     <div className="absolute inset-0 flex">
//                       {headerDates.map((_, i) => (
//                         <div key={i} style={{ width: effectiveDayWidth }} className={i % 2 ? "bg-white" : "bg-slate-50"} />
//                       ))}
//                     </div>

//                     {/* task bar */}
//                     <div
//                       title={`${task.name} (${task.start} → ${task.end})`}
//                       style={{ left, width }}
//                       className={`absolute top-3 h-8 rounded flex items-center px-2 text-xs text-white ${statusColors[task.status] || statusColors.default} shadow`}
//                     >
//                       <span className="truncate">{task.name}</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* helpers */
// function getWeekNumber(d) {
//   // simple week number (1-53) using ISO week date
//   const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
//   const dayNum = date.getUTCDay() || 7;
//   date.setUTCDate(date.getUTCDate() + 4 - dayNum);
//   const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
//   const weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
//   return weekNo;
// }
