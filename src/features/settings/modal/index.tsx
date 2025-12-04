import { X } from 'lucide-react'
import { useState } from 'react'
import ColorPicker from './pickColor'

const ThemeCustomizer = () => {
  const [tab, setTab] = useState(0)
  const tabs = ['Pick a Color', 'From Logo']

  return (
    <div className="backdrop-blur-2xs absolute inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-[55vw] rounded-lg bg-white p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span>
            <p className="font-bricolage text-[28px] font-bold">
              Theme Customizer
            </p>
            <p className="font-bricolage text-[18px] font-normal">
              Pick a color or upload your logo. We'll suggest accessible
              palettes.
            </p>
          </span>
          <X className="cursor-pointer" />
        </div>

        <div className="mt-4 flex h-[4vh] w-fit items-center gap-8 rounded-md bg-[#F8F7FA] p-5">
          {tabs.map((item, index) => (
            <p
              key={index}
              onClick={() => setTab(index)}
              className={`cursor-pointer font-medium transition-all ${
                tab === index
                  ? 'bg-white p-1 font-semibold text-[#2B323B]'
                  : 'text-[#8d8d8d]'
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {tab === 0 && (
            <div>
              <ColorPicker />
            </div>
          )}

          {tab === 1 && (
            <div>
              <p className="text-lg font-semibold">Upload Logo section here…</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ThemeCustomizer
