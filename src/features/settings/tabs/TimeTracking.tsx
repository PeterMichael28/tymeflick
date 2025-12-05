export default function TimeTracking() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Time Tracking Settings</h2>
      <p className="text-sm text-gray-600">
        Configure how you track and log your time
      </p>

      <div>
        <label className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-800">Auto-start timer</p>
            <p className="text-gray-500 text-sm">
              Automatically start timer when you begin working
            </p>
          </div>
          <input type="checkbox" className="toggle accent-green-500" defaultChecked />
        </label>
      </div>

      <div>
        <label className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-800">Idle detection</p>
            <p className="text-gray-500 text-sm">
              Pause timer when inactive for more than 5 minutes
            </p>
          </div>
          <input type="checkbox" className="toggle accent-green-500" />
        </label>
      </div>

      <div>
        <p className="font-medium text-gray-800">Default Project</p>
        <select className="w-full border rounded-md p-2 mt-1 text-sm text-gray-700">
          <option>Select Default Project</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium text-gray-800">Start Time</p>
          <input
            type="time"
            defaultValue="09:00"
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <p className="font-medium text-gray-800">End Time</p>
          <input
            type="time"
            defaultValue="10:30"
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
      </div>

      <div>
        <label className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-800">Round time entries</p>
            <p className="text-gray-500 text-sm">
              Round time to nearest 15 minutes
            </p>
          </div>
          <input type="checkbox" className="toggle accent-green-500" />
        </label>
      </div>
    </div>
  );
}
