'use client';

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
  Bar
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const data = [
  { day: '01 May', total: 40, billable: 30 },
  { day: '05 May', total: 150, billable: 120 },
  { day: '10 May', total: 240, billable: 180 },
  { day: '15 May', total: 300, billable: 250 },
  { day: '20 May', total: 180, billable: 150 },
  { day: '25 May', total: 360, billable: 290 },
  { day: '30 May', total: 420, billable: 300 },
];

const billableData = [
  { name: 'Billable Hours', value: 300 },
  { name: 'Non Billable Hours', value: 120 },
];

const teamPerformance = [
  { name: 'Sofia', value: 180 },
  { name: 'Success', value: 336 },
  { name: 'Isaiah', value: 280 },
  { name: 'Victor', value: 400 },
  { name: 'Courage', value: 360 },
];

const COLORS = ['#3b82f6', '#22c55e'];

export default function OverallPage() {
    const navigate = useNavigate();

    return (
        <div className="p-6 space-y-6">
            {/* Filter Section */}
            <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="flex gap-3 flex-wrap">
                    <button className="px-4 py-2 rounded-md border border-green-500 bg-green-100 text-green-700"
                    onClick={() => navigate('/overall/')}
                    >
                        Overall
                    </button>
                    <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50"
                    onClick={() => navigate('/yourTimelogHistory/')}
                    >
                        Your Time Log History
                    </button>
                    <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50"
                    onClick={() => navigate('/otherMemberLogs/')}
                    >
                        Other Member Logs
                    </button>
                    <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50"
                    onClick={() => navigate('/revenue/')}
                    >
                        Revenue
                    </button>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                <input type="text" placeholder="Search" className="border px-3 py-2 rounded-md" />
                <input type="date" className="border px-3 py-2 rounded-md" />
                <select className="border px-3 py-2 rounded-md">
                    <option>Project Sprint</option>
                    <option>Monthly</option>
                    <option>Weekly</option>
                </select>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                { label: 'Total Hours Worked', value: '420', change: '+12%' },
                { label: 'Billable Hours', value: '300h', change: '+12%' },
                { label: 'Total Revenue', value: '$15,000', change: '+12%' },
                { label: 'Avg Hours per Day', value: '7.5', change: '+12%' },
                ].map((stat) => (
                <div key={stat.label} className="p-4 border rounded-lg shadow-sm bg-white">
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <div className="flex justify-between items-end mt-2">
                    <p className="text-3xl font-semibold text-gray-800">{stat.value}</p>
                    <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                    </div>
                </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="bg-white border rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-700 font-semibold">Hours Logged Over Time</h2>
                <select className="border px-2 py-1 rounded-md text-sm">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                </select>
                </div>

                <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
                    <Area type="monotone" dataKey="total" stroke="#22c55e" fill="url(#colorTotal)" name="Total Hours" />
                    <Area type="monotone" dataKey="billable" stroke="#3b82f6" fill="url(#colorBillable)" name="Billable Hours" />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>

            {/* Lower Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Pie Chart */}
                <div className="bg-white border rounded-lg shadow-sm p-4">
                <h2 className="text-gray-700 font-semibold mb-3">Billable Distribution</h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={billableData} dataKey="value" nameKey="name" outerRadius={100} innerRadius={60} label>
                        {billableData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                    </ResponsiveContainer>
                </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-white border rounded-lg shadow-sm p-4">
                <h2 className="text-gray-700 font-semibold mb-3">Team Performance</h2>
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
    );
}
