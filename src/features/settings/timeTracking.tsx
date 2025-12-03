import ToggleSwitch from "../../components/ui/togglebutton"
import Button from "../../components/button/button"

const TimeTracking = () => {
    const list = [
        {header:'Auto-start timer', descripition:'Automatically start timer when you begin working'},
        {header:'Idle detection', descripition:'Pause timer when inactive for more than 5 minutes'},
        {header:'Round time entries',  descripition:'Round time to nearest 15 minutes' }
    ]
  return (
    <div>
         <p className="font-medium mt-4 text-lg font-bricolage">Time Tracking Settings</p>
         <p className="font-normal  text-base font-bricolage">Configure how you track and log your time</p>

         <div className="mt-4 space-y-3 font-bricolage">
            {list.map((item, index) => (
                <div className="flex items-center justify-between" key={index}>
                     <span>
                          <p className="font-medium ">{item.header}</p>
                          <p className="font-normal text-sm">{item.descripition}</p>
                     </span>
                     <ToggleSwitch/>
                </div>
            ))}
         </div>

         <Button className="mt-4 h-11 font-medium font-inter ">
            Save Settings
         </Button>


    </div>
  )
}

export default TimeTracking
