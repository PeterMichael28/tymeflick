'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts'
import { useNavigate } from 'react-router-dom'
import Hero from '../../../../../components/ui/hero'
import { Calendar, Search } from 'lucide-react'
import DropDown from '../../../../../features/project/ui/dropDown'
import { ClockIcon, RevenueIcon, ActivityIcon, ComparisonIcon } from '../../ui/TimeTrackerIcons'

const data = [
  { day: '01 May', total: 40, billable: 30 },
  { day: '05 May', total: 150, billable: 120 },
  { day: '10 May', total: 240, billable: 180 },
  { day: '15 May', total: 300, billable: 250 },
  { day: '20 May', total: 180, billable: 150 },
  { day: '25 May', total: 360, billable: 290 },
  { day: '30 May', total: 420, billable: 300 },
]

const billableData = [
  { name: 'Billable Hours', value: 300 },
  { name: 'Non Billable Hours', value: 120 },
]

const teamPerformance = [
  { name: 'Sofia', value: 180, color: '#3B82F6' },   // Blue
  { name: 'Success', value: 336, color: '#10B981' }, // Green
  { name: 'Isaiah', value: 280, color: '#FACC15' },  // Yellow
  { name: 'Victor', value: 400, color: '#22C55E' },  // Bright Green
  { name: 'Courage', value: 360, color: '#EF4444' }, // Red
]

const COLORS = ['#3b82f6', '#22c55e']

export default function OverallPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <Hero
        title="Insigh Mesh"
        description="Insight Mesh Time Log"
      />

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between rounded-md bg-[#F3F3F3] p-3 gap-3">
          {/* Left */}
          <h2 className="text-md font-semibold text-gray-800">Filter</h2>

          {/* Right Controls */}
          <div className="flex items-center gap-3 flex-wrap justify-end">
            {/* Search */}
            <div className="relative rounded-md bg-white">
              <input
                type="text"
                placeholder="Search"
                className="w-48 rounded-md border border-gray-300 px-3 py-2 pl-2 text-sm focus:ring-1 focus:ring-green-500 focus:outline-none"
              />
              <Search className="absolute top-2.5 right-2 h-4 w-4 text-gray-400" />
            </div>

            {/* Date Picker */}
            <div className="relative flex w-60 items-center justify-between rounded-md border border-gray-200 bg-white p-1">
              <input
                type="text"
                value="Mon Jun 02 2025 - Mon Jun 02 2025"
                readOnly
                className="w-full bg-transparent px-3 py-2 text-xs text-gray-800 focus:outline-none"
              />
              <Calendar className="mr-3 h-4 w-4 text-gray-800" />
            </div>

            {/* Dropdown */}
            <DropDown
              options={['Sprint 1', 'Sprint 2', 'Sprint 3']}
              value="Project Sprint"
              onChange={console.log}
              placeholder="Filter"
              className="w-40"
            />
          </div>
        </div>


        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 bg-[#F3EDF9] text-[#66C61C]"
              onClick={() => navigate('/overall/')}
            >
              Overall
            </button>
            <button
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => navigate('/yourTimelogHistory/')}
            >
              Your Time Log History
            </button>
            <button
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => navigate('/otherMemberLogs/')}
            >
              Other Member Logs
            </button>
            <button
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => navigate('/revenue/')}
            >
              Revenue
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Hours Worked', value: '420', change: '+12%', icon: <ClockIcon /> },
          { label: 'Billable Hours', value: '300h', change: '+12%', icon: <ActivityIcon /> },
          { label: 'Total Revenue', value: '$15,000', change: '+12%', icon: <RevenueIcon /> },
          { label: 'Avg Hours per Day', value: '7.5', change: '+12%', icon: <ComparisonIcon /> },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg bg-white p-4 shadow-sm"
          >
            <div className="mb-4 text-green-600">
              {stat.icon}
            </div>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-semibold text-gray-800">
                {stat.value}
              </p>
              <span className="text-sm font-medium text-green-600">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between bg-[#F3F3F3] p-3 rounded-md">
          <h2 className="font-semibold text-gray-700">
            Hours Logged Over Time
          </h2>
          <DropDown
            options={['Daily', 'Weekly', 'Monthly']}
            value="Daily"
            onChange={console.log}
            placeholder="Filter"
            className="w-40"
          />
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorBillable" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <CartesianGrid strokeDasharray="3 3" className="text-gray-200" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#22c55e"
                fill="url(#colorTotal)"
                name="Total Hours"
              />
              <Area
                type="monotone"
                dataKey="billable"
                stroke="#3b82f6"
                fill="url(#colorBillable)"
                name="Billable Hours"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Lower Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Pie Chart */}
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h2 className="mb-3 font-semibold text-gray-700">
            Billable Distribution
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={billableData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  innerRadius={60}
                  label
                >
                  {billableData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h2 className="mb-3 font-semibold text-gray-700">Team Performance</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
