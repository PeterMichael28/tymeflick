import { useState } from "react";
import Hero from "../../components/ui/hero";

export default function NotificationsPage() {
    const icons = {
        timer: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="3" fill="#FFB600" fill-opacity="0.1" />
                <path d="M20 16.5C20 15.9477 19.5523 15.5 19 15.5C18.4477 15.5 18 15.9477 18 16.5V21.5C18 22.0523 18.4477 22.5 19 22.5H22C22.5523 22.5 23 22.0523 23 21.5C23 20.9477 22.5523 20.5 22 20.5H20V16.5Z" fill="#FFB600" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z" fill="#FFB600" />
            </svg>
        ),
        check: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="3" fill="#1FC16B" fill-opacity="0.1" />
                <path d="M23.6754 18.7375C24.0827 18.3644 24.1105 17.7319 23.7375 17.3246C23.3644 16.9173 22.7319 16.8895 22.3246 17.2625L18.6325 20.644L17.6754 19.7674C17.2681 19.3944 16.6356 19.4221 16.2626 19.8294C15.8895 20.2367 15.9173 20.8693 16.3246 21.2423L17.9571 22.7374C18.3393 23.0875 18.9257 23.0875 19.3079 22.7374L23.6754 18.7375Z" fill="#036732" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z" fill="#036732" />
            </svg>
        ),
        task: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="3" fill="#CCDBFF" fill-opacity="0.3" />
                <path d="M23.6754 18.7375C24.0827 18.3644 24.1105 17.7319 23.7375 17.3246C23.3644 16.9173 22.7319 16.8895 22.3246 17.2625L18.6325 20.644L17.6754 19.7674C17.2681 19.3944 16.6356 19.4221 16.2626 19.8294C15.8895 20.2367 15.9173 20.8693 16.3246 21.2423L17.9571 22.7374C18.3393 23.0875 18.9257 23.0875 19.3079 22.7374L23.6754 18.7375Z" fill="#4CA30D" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z" fill="#4CA30D" />
            </svg>
        ),
    };

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Timer Still Running",
            message: "Your timer has been running for 4 hours. Did you forget to stop it?",
            time: "30 minutes ago",
            icon: icons.timer,
            actions: [
                { label: "Stop Timer", color: "bg-[#D0041633] text-[#78000B] hover:bg-red-200" },
                { label: "Pause", color: "bg-[#1FC16B33] text-[#036732] hover:bg-green-200" },
            ],
        },
        {
            id: 2,
            title: "Time Tracking Reminder",
            message: "You haven't logged any time today. Don't forget to track your work!",
            time: "2 hours ago",
            icon: icons.check,
            actions: [
                { label: "Log Time Now", color: "bg-[#1FC16B1A] text-[#036732] hover:bg-green-200" },
            ],
        },
        {
            id: 3,
            title: "New Task Assigned",
            message: 'Sofia assigned you "Homepage Wireframes" in ACME Website project',
            time: "1 day ago",
            icon: icons.task,
            actions: [
                { label: "View Task", color: "bg-[#CCDBFF4D] text-[#4CA30D] hover:bg-blue-200" },
            ],
        },
    ]);

    const dismissNotification = (id: number) =>
        setNotifications((prev) => prev.filter((n) => n.id !== id));

    const markAllAsRead = () => setNotifications([]);

    return (
        <div className="min-h-screen bg-none flex justify-center">
            <div className="w-full bg-none rounded-lg space-y-3">
                {/* Hero Section */}
                <div>
                    <Hero title="Notifications" description="Never miss an important update" />
                </div>

                {/* Header */}
                <div className="flex justify-between items-center mb-5 bg-white p-4 rounded-lg shadow-sm">
                    <h1 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.23668 1C9.23668 0.447715 8.78897 0 8.23668 0C7.68439 0 7.23668 0.447715 7.23668 1V1.57087C3.84456 2.05593 1.23668 4.97223 1.23668 8.4989L1.23668 12.4993C1.23668 12.4993 1.23669 12.4991 1.23668 12.4993C1.23658 12.5012 1.2359 12.5146 1.23157 12.5409C1.22636 12.5724 1.21712 12.6152 1.20186 12.6703C1.17094 12.782 1.12171 12.9211 1.05295 13.0855C0.915086 13.4151 0.720725 13.7947 0.505769 14.1776C0.101623 14.8975 -0.102092 15.7554 0.0508464 16.5712C0.21213 17.4316 0.765921 18.1819 1.71174 18.542C2.55665 18.8637 3.68131 19.1579 5.16654 19.333C5.20188 19.3637 5.24367 19.3987 5.29167 19.4371C5.44196 19.5574 5.65668 19.7132 5.92804 19.8682C6.46661 20.176 7.2629 20.5 8.23668 20.5C9.21046 20.5 10.0068 20.176 10.5453 19.8682C10.8167 19.7132 11.0314 19.5574 11.1817 19.4371C11.2297 19.3987 11.2715 19.3637 11.3068 19.333C12.792 19.1579 13.9167 18.8637 14.7616 18.542C15.7074 18.1819 16.2612 17.4316 16.4225 16.5712C16.5755 15.7554 16.3717 14.8975 15.9676 14.1776C15.7526 13.7947 15.5583 13.4151 15.4204 13.0855C15.3516 12.9211 15.3024 12.782 15.2715 12.6703C15.2562 12.6152 15.247 12.5724 15.2418 12.5409C15.2375 12.5146 15.2368 12.5015 15.2367 12.4996C15.2367 12.4994 15.2367 12.4996 15.2367 12.4996L15.2367 12.4911V8.49938C15.2367 4.9728 12.6289 2.05601 9.23668 1.57088V1ZM3.23668 8.4989C3.23668 5.73772 5.47502 3.5 8.23668 3.5C10.9982 3.5 13.2367 5.73809 13.2367 8.49938V12.5C13.2367 12.9629 13.4101 13.4623 13.5753 13.8571C13.7547 14.2861 13.9897 14.74 14.2236 15.1566C14.451 15.5616 14.5052 15.9444 14.4568 16.2027C14.4167 16.4166 14.3098 16.574 14.0499 16.6729C12.9751 17.0822 11.1606 17.5 8.23668 17.5C5.31275 17.5 3.49828 17.0822 2.42343 16.6729C2.16357 16.574 2.05669 16.4166 2.0166 16.2027C1.96817 15.9444 2.02239 15.5616 2.24977 15.1566C2.48361 14.74 2.71871 14.2861 2.8981 13.8571C3.06323 13.4623 3.23668 12.9629 3.23668 12.5V8.4989Z" fill="black" />
                        </svg>

                        Notifications
                    </h1>
                    {notifications.length > 0 && (
                        <button
                            onClick={markAllAsRead}
                            className="text-sm font-medium text-green-600 hover:text-green-700 cursor-pointer"
                        >
                            Mark all as read
                        </button>
                    )}
                </div>

                {/* Notification List */}
                <div className="space-y-4">
                    {notifications.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            🎉 No new notifications
                        </div>
                    ) : (
                        notifications.map((n) => (
                            <div
                                key={n.id}
                                className="flex flex-col sm:flex-row sm:items-start 
                                justify-between border border-gray-200 rounded-md p-4 hover:shadow-sm transition
                                bg-white p-4 rounded-lg"
                            >
                                <div className="flex items-start gap-2">
                                    <div className="mb-2">{n.icon}</div>
                                    <div>
                                        <h2 className="text-gray-900 font-semibold text-md">{n.title}</h2>
                                        <p className="text-gray-600 text-md mt-1">{n.message}</p>
                                        <p className="text-gray-400 text-sm mt-2">{n.time}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mt-3 sm:mt-0">
                                    {n.actions.map((a, i) => (
                                        <button
                                            key={i}
                                            className={`px-3 py-1.5 text-lg cursor-pointer font-medium rounded-md ${a.color}`}
                                        >
                                            {a.label}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => dismissNotification(n.id)}
                                        className="ml-1 text-gray-400 hover:text-gray-600 text-2xl leading-none cursor-pointer"
                                    >
                                        x
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
