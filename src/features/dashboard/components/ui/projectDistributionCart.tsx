import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts'
import type { FC } from 'react'

type ChartProps = {
  data: { name: string; value: number }[]
  colors?: string[]
}

const ProjectDistributionChart: FC<ChartProps> = ({
  data,
  colors = ['#F54E00', '#FFD400', '#00C628'],
}) => {
  return (
    <div>
      <div className="relative h-52 w-full">
        {' '}
        {/* parent relative */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60} // donut effect
              paddingAngle={0}
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="font-bricolage mt-4 flex w-full flex-col gap-2">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-xs font-medium text-[#404C59]">
                {entry.name}
              </span>
            </div>
            <span className="text-xs font-semibold text-[#404C59]">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectDistributionChart
