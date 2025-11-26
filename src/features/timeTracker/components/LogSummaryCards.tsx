export default function LogSummaryCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg bg-purple-100 p-4">
        <p className="text-xl font-bold text-purple-700">6h 30m</p>
        <p className="text-sm text-purple-700">Total Today</p>
      </div>

      <div className="rounded-lg bg-green-100 p-4">
        <p className="text-xl font-bold text-green-800">5h 30m</p>
        <p className="text-sm text-green-800">Billable</p>
      </div>
    </div>
  )
}
