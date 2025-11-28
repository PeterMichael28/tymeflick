"use client";

import { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import { MailIcon, PhoneIcon } from "../ui/ClientIcons";
import { useNavigate } from "react-router-dom";
import { openEditClientModal, openDeleteClientModal } from "../../../redux/slice/modalSlice";
import { useDispatch } from "react-redux";

interface Client {
    id: number;
    logo: string;
    name: string;
    email: string;
    phone?: string;
    activeProjects: number;
    totalHours: string;
    totalCost: string;
    lastActivity: string;
}

export default function ClientsTable() {
    const [activeRow, setActiveRow] = useState<number | null>(null);
    const [dropdownPosition, setDropdownPosition] = useState<"up" | "down">("down");
    const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clients: Client[] = [
        {
            id: 1,
            logo: "/public/icon/clientIcons/acmeSVG.svg",
            name: "ACME Corporation",
            email: "contact@acme.com",
            phone: "(555) 123-4567",
            activeProjects: 3,
            totalHours: "245.5h",
            totalCost: "$3000",
            lastActivity: "2 days ago",
        },
        {
            id: 2,
            logo: "/public/icon/clientIcons/techcorpSVG.svg",
            name: "TechCorp Solutions",
            email: "hello@techcorp.io",
            phone: "(555) 987-6543",
            activeProjects: 1,
            totalHours: "89.2h",
            totalCost: "$3000",
            lastActivity: "1 week ago",
        },
        {
            id: 3,
            logo: "/public/icon/clientIcons/internalSVG.svg",
            name: "Internal",
            email: "internal@company.com",
            phone: "",
            activeProjects: 5,
            totalHours: "432.1h",
            totalCost: "$3000",
            lastActivity: "1 day ago",
        },
    ];

    const toggleDropdown = (index: number) => {
        if (activeRow === index) {
            setActiveRow(null);
        } else {
            setActiveRow(index);
            const rowElement = rowRefs.current[index];
            if (rowElement) {
                const rect = rowElement.getBoundingClientRect();
                const spaceBelow = window.innerHeight - rect.bottom;
                setDropdownPosition(spaceBelow < 180 ? "up" : "down");
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
        <div className="overflow-x-auto w-full rounded-lg bg-white shadow-xs relative">
            <table className="min-w-full border-collapse font-inter text-sm text-center">
                <tbody>
                    {clients.map((client, index) => (
                        <tr
                            key={client.id}
                            ref={(el: HTMLTableRowElement | null) => {
                                rowRefs.current[index] = el;
                            }}
                            className="border-b border-gray-100 hover:bg-gray-50 transition text-gray-800 relative"
                        >
                            {/* CLIENT DETAILS */}
                            <td className="p-4 text-left">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-15 h-15 rounded-md object-contain"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-900">{client.name}</p>
                                        <p className="flex items-center gap-1 text-gray-500 text-xs">
                                            <MailIcon className="w-4 h-4 mr-1" />
                                            {client.email}
                                        </p>
                                        {client.phone && (
                                            <p className="flex items-center gap-1 text-gray-500 text-xs">
                                                <PhoneIcon className="w-4 h-4 mr-1" />
                                                {client.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </td>

                            {/* ACTIVE PROJECTS */}
                            <td className="p-4 text-center">
                                <p className="font-semibold text-lg text-gray-900">
                                    {client.activeProjects}
                                </p>
                                <p className="text-gray-500 text-xs">Active Projects</p>
                            </td>

                            {/* TOTAL HOURS */}
                            <td className="p-4 text-center">
                                <p className="font-semibold text-gray-900">{client.totalHours}</p>
                                <p className="text-gray-500 text-xs">Total Hours</p>
                            </td>

                            {/* TOTAL COST */}
                            <td className="p-4 text-center">
                                <p className="font-semibold text-gray-900">{client.totalCost}</p>
                                <p className="text-gray-500 text-xs">Total Cost</p>
                            </td>

                            {/* LAST ACTIVITY */}
                            <td className="p-4 text-center whitespace-nowrap">
                                <p className="text-gray-500 text-xs">
                                    Last activity: {client.lastActivity}
                                </p>
                            </td>

                            {/* ACTION MENU COLUMN */}
                            <td className="p-4 text-center relative">
                                <MoreVertical
                                    className="w-5 h-5 text-gray-600 cursor-pointer"
                                    onClick={() => toggleDropdown(index)}
                                />

                                {/* Dropdown Modal (stays within viewport) */}
                                {activeRow === index && (
                                    <>
                                        {/* Blur overlay */}
                                        <div
                                            className="fixed inset-0 bg-black/20 backdrop-blur-2xs z-10"
                                            onClick={() => setActiveRow(null)}
                                        ></div>

                                        {/* Dropdown Menu */}
                                        <div
                                            className={`absolute right-6 ${dropdownPosition === "up" ? "bottom-8" : "top-8"
                                                } bg-white border border-gray-200 rounded-lg shadow-lg w-44 z-20`}
                                        >
                                            <ul className="text-sm text-gray-700 divide-y divide-gray-100">
                                                <li
                                                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => dispatch(openEditClientModal())}
                                                >
                                                    Edit Client
                                                </li>
                                                <li
                                                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => navigate("/clients/viewClientDetails")}
                                                >
                                                    View Client Details
                                                </li>
                                                <li 
                                                    className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
                                                    onClick={() => dispatch(openDeleteClientModal())}
                                                >
                                                    Delete Client
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
