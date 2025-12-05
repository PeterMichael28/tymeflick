export default function Profile() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Profile Settings</h2>
      <p className="text-sm text-gray-600">
        Manage your personal information and preferences
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium text-gray-800">
            Full Name <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            defaultValue="Bassey Bassey"
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>

        <div>
          <p className="font-medium text-gray-800">
            Email Address <span className="text-red-500">*</span>
          </p>
          <input
            type="email"
            defaultValue="Bassey.Bassey@company.com"
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>

        <div>
          <p className="font-medium text-gray-800">Role</p>
          <select className="w-full border rounded-md p-2 mt-1">
            <option>Admin</option>
            <option>Manager</option>
            <option>Member</option>
          </select>
        </div>

        <div>
          <p className="font-medium text-gray-800">Timezone</p>
          <select className="w-full border rounded-md p-2 mt-1">
            <option>UTC-8 (Pacific)</option>
            <option>UTC-5 (Eastern)</option>
          </select>
        </div>

        <div>
          <p className="font-medium text-gray-800">Language</p>
          <select className="w-full border rounded-md p-2 mt-1">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
}
