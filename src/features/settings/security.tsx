import DropDown from '../project/ui/dropDown'
import Button from '../../components/button/button'

const Security = () => {
  return (
    <div className="space-y-3 pt-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Security Settings</p>
        <p className="text-gray-600">
          Manage your account security and privacy
        </p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Current Password
        </label>
        <input
          type="text"
          placeholder="Enter Current Password"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          New Password
        </label>
        <input
          type="text"
          placeholder="Enter New Password"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">
          Confirm New Password
        </label>
        <input
          type="text"
          placeholder="Confirm New Password"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="flex items-center justify-between">
        <span>
          <p className="text-sm font-medium text-gray-700">Session Timeout</p>
          <p className="text-xs font-normal text-[#2B323B]">
            Automatically log out after inactivity
          </p>
        </span>
        <DropDown
          options={['30 minutes', '1 hour', '4 hour', 'Never']}
          onChange={() => console}
          value=""
          placeholder="30 min"
        />
      </div>
      <Button className="h-13 font-medium">Update Password</Button>
    </div>
  )
}

export default Security
