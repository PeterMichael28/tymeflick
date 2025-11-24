// Updated YourTimeLogHistoryTable.tsx

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import { useDispatch } from "react-redux";
import { openEditTimeEntryModal, openDeleteTimeEntryModal } from "../../../../redux/slice/modalSlice";
import ChildLogTable from "./ChildLogTable";
import { useNavigate } from "react-router-dom";

const logs = [
  {
    projectName: "Insight Mesh",
    status: "Billable",
    totalLog: "40",
    totalTime: "120:05:45",
    expanded: false,
    children: [
      { billingStatus: "Billable", timeLog: "00:15:45", timeRange: "12:00am - 01:00am" },
      { billingStatus: "Billable", timeLog: "00:45:10", timeRange: "01:00am - 03:00am" },
    ],
  },
];

export default function YourTimeLogHistoryTable() {
  const [rows, setRows] = useState(logs);
  const [selected, setSelected] = useState<number | null>(null);
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleRow = (index: number) => {
    setRows((prev) =>
      prev.map((row, i) => ({
        ...row,
        expanded: i === index ? !row.expanded : row.expanded,
      }))
    );
  };

  const toggleCheckbox = (index: number) => {
    setSelected((prev) => (prev === index ? null : index));
    setMenuOpenIndex(null);
  };

  return (
    <div className="overflow-x-auto w-full rounded-lg border border-gray-200">
      <table className="min-w-full border-collapse font-inter">
        <thead className="bg-gray-50 text-xs text-gray-600 border-b border-gray-200">
          <tr>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left font-semibold">PROJECT NAME</th>
            <th className="p-3 text-left font-semibold">BILLING STATUS</th>
            <th className="p-3 text-left font-semibold">TOTAL LOG</th>
            <th className="p-3 text-left font-semibold">TOTAL TIME</th>
            <th className="p-3 text-left font-semibold">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <>
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 text-sm text-gray-800"
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selected === index}
                    onChange={() => toggleCheckbox(index)}
                    className="w-4 h-4 border-gray-400 cursor-pointer accent-[#70C94C]"
                  />
                </td>

                <td
                  className="p-3 font-medium cursor-pointer"
                  onClick={() => navigate('/overall/')}
                >
                  {row.projectName}
                </td>
                <td className="p-3">{row.status}</td>
                <td className="p-3">{row.totalLog}</td>
                <td className="p-3">{row.totalTime}</td>

                <td className="p-3 text-right relative">
                  {selected === index ? (
                    <>
                      <MoreVertical
                        className="w-5 h-5 text-gray-600 cursor-pointer"
                        onClick={() =>
                          setMenuOpenIndex(menuOpenIndex === index ? null : index)
                        }
                      />
                      {menuOpenIndex === index && (
                        <div className="absolute right-8 top-0 bg-white border border-gray-200 rounded-md shadow-md w-40 z-20">
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
                            onClick={() => {
                              dispatch(openEditTimeEntryModal());
                              setMenuOpenIndex(null);
                            }}
                          >
                            Edit Time Entry
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                            onClick={() => {
                              dispatch(openDeleteTimeEntryModal());
                              setMenuOpenIndex(null);
                            }}
                          >
                            Delete Time Entry
                          </button>
                        </div>
                      )}
                    </>
                  ) : row.expanded ? (
                    <ChevronUp
                      className="w-5 h-5 text-[#70C94C] cursor-pointer"
                      onClick={() => toggleRow(index)}
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5 text-[#70C94C] cursor-pointer"
                      onClick={() => toggleRow(index)}
                    />
                  )}
                </td>
              </tr>

              {row.expanded && row.children.length > 0 && (
                <tr className="bg-gray-50 border-t border-gray-100">
                  <td></td>
                  <td colSpan={5} className="p-0">
                    <ChildLogTable entries={row.children} />
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}