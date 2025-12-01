'use client'

import { useState } from 'react'
import { ArrowLeft, Mail, Users, MapPin, Calendar } from 'lucide-react'
import { openEditUserModal } from '../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ViewUserPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user] = useState({
    name: 'Bassey Bassey',
    email: 'Bassey.Bassey@company.com',
    team: 'Development Team',
    role: 'Project Manager',
    lastLogin: '2024-06-04 09:00',
    totalHours: 120,
    weekly: 32,
    monthly: 128,
    daily: 6.4,
  })

  return (
    <div className="min-h-screen w-full space-y-8 bg-none p-1">
      {/* Header */}
      <div className="flex items-center justify-between space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2">
          <ArrowLeft
            className="h-5 w-5 cursor-pointer text-gray-600"
            onClick={() => navigate('/teams')}
          />
          <h1 className="text-lg font-semibold text-gray-800">
            Teams - Development Team - {user.name}
          </h1>
        </div>
      </div>

      {/* User Card */}
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-600 text-lg font-bold text-white">
              BB
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600">{user.role}</p>
              <div className="mt-1 flex gap-2">
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                  Manager
                </span>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                  Active
                </span>
              </div>
            </div>
          </div>

          <button
            className="bg-primary flex items-center justify-between gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5bb13e]"
            onClick={() => dispatch(openEditUserModal())}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4967 0.841618C14.3746 -0.280539 12.5552 -0.28054 11.433 0.841618L4.32846 7.94617C3.81848 8.45616 3.48765 9.1178 3.38566 9.83179L3.17978 11.2729C3.02264 12.3729 3.96545 13.3157 5.0654 13.1585L6.50654 12.9527C7.22052 12.8507 7.88216 12.5199 8.39215 12.0099L15.4967 4.90531C16.6189 3.78315 16.6189 1.96377 15.4967 0.841618ZM12.7861 1.87539C13.2558 1.55516 13.9015 1.60341 14.3182 2.02013C14.7349 2.43685 14.7832 3.0825 14.4629 3.55223L12.7861 1.87539ZM11.5927 3.03899L13.2993 4.74565L7.21364 10.8314C6.95865 11.0863 6.62783 11.2518 6.27083 11.3028L4.82969 11.5086L5.03557 10.0675C5.08657 9.7105 5.25198 9.37968 5.50698 9.12468L11.5927 3.03899Z"
                fill="white"
              />
              <path
                d="M3.33333 0.0832954C1.49239 0.0832954 0 1.57568 0 3.41663V13.4166C0 15.2576 1.49238 16.75 3.33333 16.75H13.3333C15.1743 16.75 16.6667 15.2576 16.6667 13.4166V8.41663C16.6667 7.95639 16.2936 7.5833 15.8333 7.5833C15.3731 7.5833 15 7.95639 15 8.41663V13.4166C15 14.3371 14.2538 15.0833 13.3333 15.0833H3.33333C2.41286 15.0833 1.66667 14.3371 1.66667 13.4166V3.41663C1.66667 2.49615 2.41286 1.74996 3.33333 1.74996H5.57018C6.03041 1.74996 6.40351 1.37687 6.40351 0.916629C6.40351 0.456391 6.03041 0.0832954 5.57018 0.0832954H3.33333Z"
                fill="white"
              />
            </svg>
            Edit User
          </button>
        </div>

        {/* User Information */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-md mb-3 flex items-center gap-2 font-semibold text-gray-800">
            <svg
              width="10"
              height="17"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 0C5.23858 0 3 2.23858 3 5C3 7.76142 5.23858 10 8 10C10.7614 10 13 7.76142 13 5C13 2.23858 10.7614 0 8 0ZM5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 21C6.4595 21 4.22982 20.6502 2.55543 19.9174C1.73343 19.5576 0.897452 19.0427 0.411753 18.2974C0.156317 17.9054 -0.00516667 17.4437 0.000126279 16.9282C0.00537077 16.4174 0.173439 15.9281 0.455915 15.4728C1.82532 13.2656 4.62679 11 8 11C11.3732 11 14.1747 13.2656 15.5441 15.4728C15.8266 15.9281 15.9946 16.4174 15.9999 16.9282C16.0052 17.4437 15.8437 17.9054 15.5882 18.2974C15.1025 19.0427 14.2666 19.5576 13.4446 19.9174C11.7702 20.6502 9.5405 21 8 21ZM2.15539 16.5272C2.02372 16.7394 2.00077 16.8757 2.00002 16.9487C1.99932 17.017 2.01686 17.0973 2.08736 17.2055C2.25354 17.4605 2.65707 17.7787 3.35732 18.0852C4.72744 18.6848 6.67324 19 8 19C9.32676 19 11.2726 18.6848 12.6427 18.0852C13.3429 17.7787 13.7465 17.4605 13.9126 17.2055C13.9831 17.0973 14.0007 17.017 14 16.9487C13.9992 16.8757 13.9763 16.7394 13.8446 16.5272C12.7225 14.7185 10.4843 13 8 13C5.51566 13 3.27754 14.7185 2.15539 16.5272Z"
                fill="black"
              />
            </svg>
            User Information
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <div className="flex flex-col items-start">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-900">{user.email}</p>
              </div>
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <div className="flex flex-col items-start">
                <p className="text-sm text-gray-500">Team</p>
                <p className="font-semibold text-gray-900">{user.team}</p>
              </div>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <div className="flex flex-col items-start">
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold text-gray-900">{user.role}</p>
              </div>
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <div className="flex flex-col items-start">
                <p className="text-sm text-gray-500">Last Login</p>
                <p className="font-semibold text-gray-900">{user.lastLogin}</p>
              </div>
            </p>
          </div>
        </div>

        {/* ✅ Activity Summary (Updated Layout) */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-md mb-3 flex items-center gap-2 font-semibold text-gray-800">
            <img src="/icon/clock.svg" alt="Icon" className="text-gray-500" />{' '}
            Activity Summary
          </h3>

          {/* Progress Bar Section */}
          <div className="flex items-center justify-between">
            <p className="mb-1 text-sm text-gray-600">Total Hours Logged</p>

            {/* Hours Value (Right aligned on same line) */}
            <p className="text-sm font-semibold whitespace-nowrap text-gray-800">
              {user.totalHours}h
            </p>
          </div>

          <div className="flex items-center justify-between">
            {/* Progress bar */}
            <div className="mr-3 flex-1">
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${(user.totalHours / 200) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* This Week / This Month / Average Daily aligned horizontally */}
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">This Week:</p>
              <p className="font-semibold">{user.weekly}h</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">This Month:</p>
              <p className="font-semibold">{user.monthly}h</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">Average Daily:</p>
              <p className="font-semibold">{user.daily}h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
