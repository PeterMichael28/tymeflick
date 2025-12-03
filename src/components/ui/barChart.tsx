import type { FC } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from 'recharts'

type ChartProps = {
  data: { name: string; value: number }[]
  colors?: string[]
}

const Barchart: FC<ChartProps> = ({
  data,
  colors = ['#667eea', '#24c567', '#ed8936', '#9f7aea', '#f56565'],
}) => {
  return (
    <div>
      {/* Bar Chart */}
      <div className="relative mt-4 h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#404C59' }} />
            <YAxis tick={{ fontSize: 12, fill: '#404C59' }} />
            <Tooltip />
            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Barchart
