import { ChevronDown } from 'lucide-react'
import Barchart from '../../components/ui/barChart'

const ProjectTimeBreakdown = () => {
  const list = [
    { title: 'Website Redesign', hour: '42.5', description: 'Acme Corp' },
    {
      title: 'Mobile App Development',
      hour: '38.2',
      description: 'TechStart Inc',
    },
    { title: 'E-commerce Platform', hour: '55.0', description: 'ShopEase Ltd' },
    {
      title: 'CRM System Integration',
      hour: '47.3',
      description: 'BizSolutions',
    },
    //   { title: 'Landing Page Optimization', hour: '30.5', description: 'MarketHub' },
    //   { title: 'Social Media Dashboard', hour: '36.8', description: 'Socialize Co' },
    //   { title: 'Inventory Management App', hour: '50.0', description: 'StockTrackers' },
    //   { title: 'Blog Platform Setup', hour: '25.4', description: 'ContentPro' },
    //   { title: 'SEO Audit and Fixes', hour: '28.6', description: 'RankBoosters' },
    //   { title: 'Internal Analytics Dashboard', hour: '44.2', description: 'DataInsight' },
  ]
  const data = [
    { name: 'Website Redesign', value: 42.5 },
    { name: 'Mobile App Development', value: 38.2 },
    { name: 'SEO Optimization', value: 25.7 },
    { name: 'Social Media Campaign', value: 30.4 },
    { name: 'Social Media Campaign', value: 10.4 },
  ]

  return (
    <div className="font-bricolage space-y-3 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="font-bold">Project Time Breakdown</p>
        <span className="flex cursor-pointer items-center gap-1 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] p-2.5">
          <p className="font-bricolage text-[12px] font-medium text-[#8898AA]">
            Last 7 Days
          </p>
          <ChevronDown size={16} />
        </span>
      </div>

      <div className="flex">
        <div className="flex-1 space-y-4">
          {list.map((item, index) => (
            <div
              className="flex items-center justify-between rounded-lg border-l-3 border-[#66C61C] p-4"
              key={index}
            >
              <div>
                <p className="font-bold">{item.title}</p>
                <p>{item.description}</p>
              </div>
              <p className="font-bold">{item.hour}</p>
            </div>
          ))}
        </div>
        <div className="flex-3">
          <Barchart data={data} />
        </div>
      </div>
    </div>
  )
}

export default ProjectTimeBreakdown
