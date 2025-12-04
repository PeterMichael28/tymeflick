const Integration = () => {
  const list = [
    {
      header: 'Slack Integration',
      descripition: 'Receive notifications and updates in Slack',
    },
    {
      header: 'Google Calendar',
      descripition: 'Sync time entries with calendar events',
    },
    { header: 'QuickBooks', descripition: 'Export time data for invoicing' },
  ]
  return (
    <div className="space-y-3 pt-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Integrations</p>
        <p className="text-gray-600">Connect TymeFlick with other tools</p>
      </div>

      <div className="font-bricolage mt-4 space-y-3">
        {list.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <span>
              <p className="font-medium">{item.header}</p>
              <p className="text-sm font-normal">{item.descripition}</p>
            </span>
            <button className="rounded-lg border border-[#D0F8AB] px-6 py-4">
              <p className="text-[#606060]">Connect</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Integration
