import { useState } from 'react'

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handleToggle}
        className={`flex h-6 w-12 items-center rounded-full p-1 duration-300 ${
          isOn ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`h-4 w-4 transform rounded-full bg-white shadow-md duration-300 ${
            isOn ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
      {/* <span className="text-sm text-gray-600">{isOn ? "On" : "Off"}</span> */}
    </div>
  )
}

export default ToggleSwitch
