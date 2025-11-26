"use client";

import { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Member {
  user: string;
  email: string;
  role: string;
  roleColor: string;
  team: string;
  status: string;
  statusColor: string;
  totalTime: string;
  lastLogin: string;
}

const members: Member[] = [
  {
    user: "Bassey Bassey",
    email: "Bassey@Seamflex.Com",
    role: "Manager",
    roleColor: "bg-blue-100 text-blue-600",
    team: "Development Team",
    status: "Active",
    statusColor: "bg-green-100 text-green-600",
    totalTime: "10h",
    lastLogin: "2024-06-04 09:30",
  },
  {
    user: "Sarah Johnson",
    email: "John.Doe@Company.Com",
    role: "Manager",
    roleColor: "bg-blue-100 text-blue-600",
    team: "Marketing Team",
    status: "Active",
    statusColor: "bg-green-100 text-green-600",
    totalTime: "130h",
    lastLogin: "2024-06-04 09:30",
  },
  {
    user: "Sarah Johnson",
    email: "John.Doe@Company.Com",
    role: "User",
    roleColor: "bg-gray-100 text-gray-600",
    team: "Marketing Team",
    status: "Active",
    statusColor: "bg-green-100 text-green-600",
    totalTime: "130h",
    lastLogin: "2024-06-04 09:30",
  },
  {
    user: "Sarah Johnson",
    email: "John.Doe@Company.Com",
    role: "Manager",
    roleColor: "bg-blue-100 text-blue-600",
    team: "Marketing Team",
    status: "Inactive",
    statusColor: "bg-red-100 text-red-600",
    totalTime: "130h",
    lastLogin: "2024-06-04 09:30",
  },
  {
    user: "Sarah Johnson",
    email: "John.Doe@Company.Com",
    role: "Admin",
    roleColor: "bg-red-100 text-red-600",
    team: "Marketing Team",
    status: "Active",
    statusColor: "bg-green-100 text-green-600",
    totalTime: "130h",
    lastLogin: "2024-06-04 09:30",
  },
];

export default function AllTeamsMembersTable() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<"up" | "down">("down");
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);
  const navigate = useNavigate();

  const toggleDropdown = (index: number) => {
    if (activeRow === index) {
      setActiveRow(null);
    } else {
      setActiveRow(index);
      const rowElement = rowRefs.current[index];
      if (rowElement) {
        const rect = rowElement.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        setDropdownPosition(spaceBelow < 180 ? "up" : "down"); // 180px = dropdown height
      }
    }
  };

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveRow(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="overflow-x-auto w-full rounded-lg bg-white shadow-xs">
      <table className="min-w-full border-collapse font-inter text-sm">
        <thead className="bg-gray-50 text-xs text-gray-600 border-b border-gray-200 uppercase tracking-wide">
          <tr>
            <th className="p-3 text-left font-semibold">USER</th>
            <th className="p-3 text-left font-semibold">ROLE</th>
            <th className="p-3 text-left font-semibold">TEAM</th>
            <th className="p-3 text-left font-semibold">STATUS</th>
            <th className="p-3 text-left font-semibold">TOTAL TIME</th>
            <th className="p-3 text-left font-semibold">LAST LOGIN</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member, index) => (
            <tr
              key={index}
              ref={(el: HTMLTableRowElement | null) => {
                rowRefs.current[index] = el;
              }}
              className="border-b border-gray-100 hover:bg-gray-50 transition text-gray-800 relative"
            >
              <td className="p-3">
                <div>
                  <p className="font-medium">{member.user}</p>
                  <p className="text-xs text-gray-500">{member.email}</p>
                </div>
              </td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${member.roleColor}`}
                >
                  {member.role}
                </span>
              </td>

              <td className="p-3">{member.team}</td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${member.statusColor}`}
                >
                  {member.status}
                </span>
              </td>

              <td className="p-3">{member.totalTime}</td>
              <td className="p-3 flex justify-between items-center">
                {member.lastLogin}
                <MoreVertical
                  className="w-5 h-5 text-gray-600 cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                />

                {/* Dropdown Modal — stays in viewport */}
                {activeRow === index && (
                  <>
                    {/* Slight blur overlay */}
                    <div
                      className="fixed inset-0 bg-black/20 backdrop-blur-2xs z-10"
                      onClick={() => setActiveRow(null)}
                    ></div>

                    {/* Menu */}
                    <div
                      className={`absolute right-6 ${
                        dropdownPosition === "up" ? "bottom-8" : "top-8"
                      } bg-white border border-gray-200 rounded-lg shadow-lg w-36 z-20`}
                    >
                      <ul className="text-sm text-gray-700 divide-y divide-gray-100">
                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                          onClick={() => navigate('/teams/viewUser')}>
                          View
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                          Edit
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                          Suspend
                        </li>
                        <li className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                          Delete
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
