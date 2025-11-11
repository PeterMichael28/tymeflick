import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

import DropDown from './dropDown'
import type { FC } from 'react'

type ChartProps = {
  data: { name: string; value: number }[]
  title: string
  dropdownOptions: string[]
  value: string
  onChange: (value: string) => void
}

const Chart: FC<ChartProps> = ({
  data,
  title,
  dropdownOptions,
  value,
  onChange,
}) => {
  return (
    <div className="border border-[#F2F0F5] p-3 rounded-md w-full">
      {/* Title and dropdown */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] text-[#1E1B39] font-bold">{title}</p>
        <DropDown
          options={dropdownOptions}
          onChange={(value) => onChange(value)}
          value={value}
          placeholder="Select Range"
        />
      </div>

      {/* Chart */}
      <div className="w-full h-[120px] -ml-10"> {/* 👈 slight negative margin to align with title */}
        <ResponsiveContainer width="110%" height="100%">
          <LineChart
  data={data}
  margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} />
  <YAxis tick={{ fontSize: 10 }} axisLine={false} />
  <Tooltip contentStyle={{ fontSize: 10 }} />

 <defs>
  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#EBE0F5" />
    <stop offset="50%" stopColor="#E0D1F0" />
    <stop offset="100%" stopColor="#EBE0F5"  />
  </linearGradient>
</defs>

<Area
  type="monotone"
  dataKey="value"
  stroke="none"
  fill="url(#colorValue)"
/>

  <Line
    type="monotone"
    dataKey="value"
    stroke="#9966CC"
    strokeWidth={2}
    dot={false}
    isAnimationActive={true}
  />
</LineChart>

        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
