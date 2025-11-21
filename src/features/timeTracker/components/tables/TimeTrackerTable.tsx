"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import ChildLogTable from "../ChildLogTable";

const logs = [
  {
    projectName: "TymeFlick",
    client: "EnvyRide",
    status: "Billable",
    totalLog: "32h",
    totalTime: "12:00am - 05:00pm",
    expanded: false,
    children: [
      {
        projectName: "TymeFlick",
        client: "EnvyRide",
        billingStatus: "Billable",
        timeLog: "00:15:45",
        timeRange: "12:00am - 01:00am",
      },
      {
        projectName: "TymeFlick",
        client: "EnvyRide",
        billingStatus: "Billable",
        timeLog: "00:45:10",
        timeRange: "01:00am - 03:00am",
      },
      {
        projectName: "TymeFlick",
        client: "EnvyRide",
        billingStatus: "Billable",
        timeLog: "01:05:32",
        timeRange: "03:00am - 06:00am",
      },
      {
        projectName: "TymeFlick",
        client: "EnvyRide",
        billingStatus: "Billable",
        timeLog: "00:25:20",
        timeRange: "06:00am - 07:00am",
      },
    ],
  },
  {
    projectName: "Insight Mesh",
    client: "Seamflex",
    status: "Billable",
    totalLog: "40h",
    totalTime: "12:00am - 05:00pm",
    expanded: false,
    children: [
      {
        projectName: "Insight Mesh",
        client: "Seamflex",
        billingStatus: "Billable",
        timeLog: "00:20:15",
        timeRange: "12:00am - 01:00am",
      },
      {
        projectName: "Insight Mesh",
        client: "Seamflex",
        billingStatus: "Billable",
        timeLog: "00:35:40",
        timeRange: "01:00am - 03:00am",
      },
      {
        projectName: "Insight Mesh",
        client: "Seamflex",
        billingStatus: "Billable",
        timeLog: "00:45:50",
        timeRange: "03:00am - 06:00am",
      },
      {
        projectName: "Insight Mesh",
        client: "Seamflex",
        billingStatus: "Billable",
        timeLog: "00:15:05",
        timeRange: "06:00am - 07:00am",
      },
    ],
  },
];

export default function TimeTrackerTable() {
  const [rows, setRows] = useState(logs);
  const [selected, setSelected] = useState<number | null>(null);

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
  };

  return (
    <div className="overflow-x-auto w-full rounded-lg border border-gray-200">
      <table className="min-w-full border-collapse font-inter">
        <thead className="bg-gray-50 text-xs text-gray-600 border-b border-gray-200">
          <tr>
            <th className="p-3 text-left"></th>
            <th className="p-3 text-left font-semibold">PROJECT NAME</th>
            <th className="p-3 text-left font-semibold">CLIENT</th>
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

                <td className="p-3 font-medium">{row.projectName}</td>
                <td className="p-3">{row.client}</td>
                <td className="p-3">{row.status}</td>
                <td className="p-3">{row.totalLog}</td>
                <td className="p-3">{row.totalTime}</td>

                <td className="p-3 text-right">
                  {selected === index ? (
                    <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer" />
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
                  <td colSpan={6} className="p-0">
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
