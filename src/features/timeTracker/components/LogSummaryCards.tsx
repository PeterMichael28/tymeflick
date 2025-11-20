export default function LogSummaryCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-purple-100 p-4 rounded-lg">
        <p className="text-purple-700 font-bold text-xl">6h 30m</p>
        <p className="text-purple-700 text-sm">Total Today</p>
      </div>

      <div className="bg-green-100 p-4 rounded-lg">
        <p className="text-green-800 font-bold text-xl">5h 30m</p>
        <p className="text-green-800 text-sm">Billable</p>
      </div>
    </div>
  );
}
