import ToggleSwitch from '../../components/ui/togglebutton'
import Button from '../../components/button/button'

const TimeTracking = () => {
  const list = [
    {
      header: 'Auto-start timer',
      descripition: 'Automatically start timer when you begin working',
    },
    {
      header: 'Idle detection',
      descripition: 'Pause timer when inactive for more than 5 minutes',
    },
    {
      header: 'Round time entries',
      descripition: 'Round time to nearest 15 minutes',
    },
  ]
  return (
    <div>
      <p className="font-bricolage mt-4 text-lg font-medium">
        Time Tracking Settings
      </p>
      <p className="font-bricolage text-base font-normal">
        Configure how you track and log your time
      </p>

      <div className="font-bricolage mt-4 space-y-3">
        {list.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <span>
              <p className="font-medium">{item.header}</p>
              <p className="text-sm font-normal">{item.descripition}</p>
            </span>
            <ToggleSwitch />
          </div>
        ))}
      </div>

      <Button className="font-inter mt-4 h-11 font-medium">
        Save Settings
      </Button>
    </div>
  )
}

export default TimeTracking
