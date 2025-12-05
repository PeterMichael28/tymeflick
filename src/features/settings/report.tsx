import DropDown from '../createProject/ui/dropdown'
import ToggleSwitch from '../../components/ui/togglebutton'
import Button from '../../components/button/button'

const Report = () => {
  const list = [
    {
      header: 'Include billable breakdown',
      descripition: 'Show billable vs non-billable hours in reports',
    },
    {
      header: 'Auto-email reports',
      descripition: 'Automatically send reports to my email',
    },
  ]
  return (
    <div className="space-y-3 pt-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Report Settings</p>
        <p className="text-gray-600">
          Configure report generation and export preferences
        </p>
      </div>

      <DropDown
        label="Default Report Format"
        options={[]}
        onChange={() => console}
        value=""
        placeholder="Pdf"
      />
      <DropDown
        label="Report Frequency"
        options={[]}
        onChange={() => console}
        value=""
        placeholder="Weekly"
      />

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
      <Button className="h-13 font-medium">Save Settings</Button>
    </div>
  )
}
export default Report
