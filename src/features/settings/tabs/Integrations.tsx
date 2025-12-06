export default function Integrations() {
  const integrations = [
    ["Slack Integration", "Receive notifications and updates in Slack"],
    ["Google Calendar", "Sync time entries with calendar events"],
    ["QuickBooks", "Export time data for invoicing"],
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Integrations</h2>
      <p className="text-sm text-gray-600">
        Connect TymeFlick with other tools
      </p>

      {integrations.map(([title, desc]) => (
        <div
          key={title}
          className="flex justify-between items-center py-2 border-b border-gray-100"
        >
          <div>
            <p className="font-medium text-gray-800">{title}</p>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
          <button className="border border-green-400 text-green-600 rounded-md px-4 py-1 hover:bg-green-50">
            Connect
          </button>
        </div>
      ))}
    </div>
  );
}
