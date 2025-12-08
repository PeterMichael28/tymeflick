export default function Report() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Report Settings</h2>
      <p className="text-sm text-gray-600">
        Configure report generation and export preferences
      </p>

      <div>
        <p className="font-medium text-gray-800">Default Report Format</p>
        <select className="w-full border rounded-md p-2 mt-1">
          <option>PDF</option>
          <option>Excel</option>
        </select>
      </div>

      <div>
        <p className="font-medium text-gray-800">Report Frequency</p>
        <select className="w-full border rounded-md p-2 mt-1">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {[
        ["Include billable breakdown", "Show billable vs non-billable hours in reports"],
        ["Auto-email reports", "Automatically send reports to my email"],
      ].map(([label, desc], i) => (
        <label key={i} className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-800">{label}</p>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
          <input type="checkbox" className="accent-green-500" defaultChecked={i === 0} />
        </label>
      ))}
    </div>
  );
}
