"use client";

import { useNavigate } from "react-router-dom";

const teams = [
  {
    id: "DT",
    color: "bg-blue-600",
    name: "Development Team",
    description: "Frontend and Backend developers",
    manager: "Bassey Bassey",
    members: 8,
    projects: 3,
    hours: "320h",
  },
  {
    id: "DT",
    color: "bg-green-500",
    name: "Design Team",
    description: "UI/UX designers and creative team",
    manager: "Sofia Ckucks",
    members: 5,
    projects: 2,
    hours: "180h",
  },
  {
    id: "DT",
    color: "bg-lime-500",
    name: "Marketing Team",
    description: "Digital marketing and content creation",
    manager: "Sarah Johnson",
    members: 5,
    projects: 2,
    hours: "180h",
  },
];

export default function TeamsOverviewTable() {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/teams/teamSummary");
  };

  return (
    <div className="overflow-x-auto w-full rounded-lg bg-white shadow-xs">
      <table className="min-w-full border-collapse font-inter text-sm">
        <thead className="bg-gray-50 text-xs text-gray-600 border-b border-gray-200 uppercase tracking-wide">
          <tr>
            <th className="p-3 text-left font-semibold">TEAMS</th>
            <th className="p-3 text-left font-semibold">MANAGER</th>
            <th className="p-3 text-left font-semibold">MEMBER</th>
            <th className="p-3 text-left font-semibold">ACTIVE PROJECTS</th>
            <th className="p-3 text-left font-semibold">TOTAL HOURS</th>
            <th className="p-3 text-left font-semibold">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 hover:bg-gray-50 transition text-gray-800"
            >
              {/* TEAM INFO */}
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-white font-semibold ${team.color}`}
                  >
                    {team.id}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{team.name}</p>
                    <p className="text-xs text-gray-500">{team.description}</p>
                  </div>
                </div>
              </td>

              <td className="p-3">{team.manager}</td>
              <td className="p-3">{team.members}</td>
              <td className="p-3">{team.projects}</td>
              <td className="p-3">{team.hours}</td>

              <td className="p-3">
                <button
                  onClick={() => handleViewClick()}
                  className="bg-primary hover:bg-[#5bb13e] text-white px-4 py-1 rounded-md text-sm font-medium transition"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
