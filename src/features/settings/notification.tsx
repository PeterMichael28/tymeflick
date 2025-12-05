import ToggleSwitch from '../../components/ui/togglebutton'
import DropDown from '../createProject/ui/dropdown'
import Button from '../../components/button/button'

const Notification = () => {
  const list = [
    {
      header: 'Daily time log reminder',
      descripition: "Remind me to log time if I haven't by 5 PM",
    },
    {
      header: 'Weekly summary',
      descripition: 'Send weekly time tracking summary every Friday',
    },
    {
      header: 'Project deadline alerts',
      descripition: 'Notify me 3 days before project deadlines',
    },
  ]
  return (
    <div className="space-y-3 pt-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Notification Preferences</p>
        <p className="text-gray-600">
          Choose when and how you receive notifications
        </p>
      </div>

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

      <DropDown
        label="Notification Method"
        placeholder="Email + in-app"
        onChange={() => console}
        options={['Email + In-App', 'Email Only', 'In-App Only', 'None']}
        value=""
      />

      <Button className="h-13 font-medium">Save Settings</Button>
    </div>
  )
}

export default Notification
