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

import DropDown from '../../../dashboard/components/ui/dropDown'
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
    <div className="w-full rounded-md border border-[#F2F0F5] p-3">
      {/* Title and dropdown */}
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-bold text-[#1E1B39]">{title}</p>
        <DropDown
          options={dropdownOptions}
          onChange={(value) => onChange(value)}
          value={value}
          placeholder="Select Range"
        />
      </div>

      {/* Chart */}
      <div className="-ml-10 h-[70px] w-full">
        {' '}
        {/* 👈 slight negative margin to align with title */}
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
                <stop offset="0%" stopColor="#66C61C" />
                <stop offset="50%" stopColor="#66C61C" />
                <stop offset="100%" stopColor="#66C61C" />
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
              stroke="#66C61C"
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
