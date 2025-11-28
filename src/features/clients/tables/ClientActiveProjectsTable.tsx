'use client'

import { Trash2 } from "lucide-react";

export default function ClientActiveProjectsTable() {
    const projects = [
        {
            id: 1,
            name: "ACME Website Redesign",
            client: "ACME Corp",
            status: "Active",
            color: "green",
            progress: "45 h 20 m",
            lastActivity: "2 days ago",
        },
        {
            id: 2,
            name: "Code Review Process",
            client: "ACME Corp",
            status: "Inactive",
            color: "red",
            progress: "102 h 20 m",
            lastActivity: "3 hours ago",
        },
    ];

    return (
        <div className="rounded-lg bg-white p-4 shadow-sm overflow-x-auto">
            <table className="min-w-full text-sm">
                <thead className="bg-[#F3F3F3] text-gray-600">
                    <tr>
                        <th className="text-center py-2 px-3">Project</th>
                        <th className="text-center py-2 px-3">Client</th>
                        <th className="text-center py-2 px-3">Status</th>
                        <th className="text-center py-2 px-3">Progress</th>
                        <th className="text-center py-2 px-3">Last Activity</th>
                        <th className="text-center py-2 px-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {projects.map((p) => (
                        <tr
                            key={p.id}
                            className="border-t border-gray-100 hover:bg-gray-50 transition"
                        >
                            <td className="py-2 px-3 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <span
                                        className={`w-2.5 h-2.5 rounded-full bg-${p.color}-500`}
                                    ></span>
                                    <span className="font-medium text-gray-800">{p.name}</span>
                                </div>
                            </td>


                            <td className="py-2 px-3 text-center">
                                <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                                    {p.client}
                                </span>
                            </td>

                            <td className="py-2 px-3 text-center">
                                <span
                                    className={`rounded-md px-2 py-0.5 text-xs font-medium ${p.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {p.status}
                                </span>
                            </td>

                            <td className="py-2 px-3 text-gray-700 text-center">{p.progress}</td>
                            <td className="py-2 px-3 text-gray-700 text-center">{p.lastActivity}</td>

                            <td className="py-2 px-3 text-center">
                                <button className="p-1.5 rounded hover:bg-red-50">
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
