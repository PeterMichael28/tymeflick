export default function NotificationSettings() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Time Tracking Settings</h2>
      <p className="text-sm text-gray-600">
        Configure how you track and log your time.
      </p>
      {/* Example content... */}
      <label className="flex items-center gap-2">
        <input type="checkbox" className="accent-green-500" />
        <span className="text-gray-700 text-sm">Auto-start timer</span>
      </label>
    </div>
  );
}
