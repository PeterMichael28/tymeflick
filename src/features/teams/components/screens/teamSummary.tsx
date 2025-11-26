"use client";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TeamSummary() {
  const navigate = useNavigate();
  const members = [
    {
      name: "Bassey Bassey",
      role: "Project Manager",
      team: "Development Team",
      status: "Active",
      initials: "BB",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Sammy Joseph",
      role: "Frontend and Backend developers",
      team: "Development Team",
      status: "Active",
      initials: "SJ",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Olatunde Success",
      role: "Frontend and Backend developers",
      team: "Development Team",
      status: "Active",
      initials: "OS",
      color: "bg-sky-100 text-sky-600",
    },
    {
      name: "Ijiwole Adedamola",
      role: "Frontend and Backend developers",
      team: "Development Team",
      status: "Active",
      initials: "IA",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-none space-y-6">
      {/* Breadcrumb and Title */}
      <div className="space-y-5 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 text-xl text-gray-600">
          <ArrowLeft className="w-5 h-5 cursor-pointer" 
          onClick ={() => navigate("/teams")}
          />
          <span className="font-medium text-gray-800">Teams - Development Team</span>
        </div>
        <p className="text-lg text-gray-500 ml-6">
          Frontend and Backend developers
        </p>
      </div>
      

      {/* Team Summary Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6 shadow-sm w-full">
        <h3 className="text-lg font-bold text-gray-700 flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 5.94772 9.55229 5.5 9 5.5C8.44771 5.5 8 5.94772 8 6.5V11.5C8 12.0523 8.44771 12.5 9 12.5H12C12.5523 12.5 13 12.0523 13 11.5C13 10.9477 12.5523 10.5 12 10.5H10V6.5Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
              fill="black"
            />
          </svg>

          Team Summary
        </h3>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="bg-purple-100 rounded-lg p-4 text-left w-full">
            <p className="text-2xl font-semibold text-green-700">8</p>
            <p className="text-sm text-gray-600">Total Members</p>
          </div>

          <div className="bg-green-100 rounded-lg p-4 text-left w-full">
            <p className="text-2xl font-semibold text-green-800">3</p>
            <p className="text-sm text-gray-600">Active Projects</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="bg-pink-100 rounded-lg p-4 text-left w-full">
            <p className="text-2xl font-semibold text-purple-800">320h</p>
            <p className="text-sm text-gray-600">Total Hours</p>
          </div>

          <div className="bg-yellow-100 rounded-lg p-4 text-left w-full">
            <p className="text-lg font-semibold text-orange-700">Sarah Johnson</p>
            <p className="text-sm text-gray-600">Manager</p>
          </div>
        </div>


        {/* Team Members Section */}
        <h3 className="text-lg font-bold text-gray-700">Team Members</h3>

        <div className="space-y-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-100 rounded-md p-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 flex items-center justify-center rounded-md font-semibold ${member.color}`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                  {member.team === "Development Team" ? "Manager" : "User"}
                </span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full font-medium">
                  {member.status}
                </span>
                <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
