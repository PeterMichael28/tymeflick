"use client";


export default function WeeklyTimeLogTable() {
  const entries = [
    {
      date: "02/06/2025",
      project: "Insight Mesh",
      client: "Seamflex",
      description: "UI Design Work",
      hours: "3h",
      billable: true,
      rate: "$30/Hr",
    },
    {
      date: "02/06/2025",
      project: "TymeFlick",
      client: "Seamflex",
      description: "Frontend Development",
      hours: "2h",
      billable: true,
      rate: "$30/Hr",
    },
    {
      date: "04/06/2025",
      project: "Insight Mesh",
      client: "Seamflex",
      description: "Backend API Integration",
      hours: "4h",
      billable: true,
      rate: "$30/Hr",
    },
    {
      date: "05/06/2025",
      project: "Data Analytics",
      client: "DataSync",
      description: "Report Analysis",
      hours: "5h",
      billable: true,
      rate: "$40/Hr",
    },
    {
      date: "05/06/2025",
      project: "User Experience",
      client: "ProtoDesign",
      description: "Wireframe Development",
      hours: "6h",
      billable: true,
      rate: "$50/Hr",
    },
    {
      date: "06/06/2025",
      project: "Marketing Strategy",
      client: "BrandBoost",
      description: "SEO Optimization",
      hours: "3h",
      billable: false,
      rate: "$0/Hr",
    },
    {
      date: "06/06/2025",
      project: "Customer Support",
      client: "HelpDesk Pro",
      description: "User Training",
      hours: "2h",
      billable: true,
      rate: "$25/Hr",
    },
    {
      date: "07/06/2025",
      project: "Software Development",
      client: "CodeCraft",
      description: "Feature Implementation",
      hours: "8h",
      billable: true,
      rate: "$55/Hr",
    },
    {
      date: "07/06/2025",
      project: "Project Management",
      client: "TaskMaster",
      description: "Sprint Planning",
      hours: "7h",
      billable: true,
      rate: "$45/Hr",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full border-collapse font-inter">
        <thead className="bg-gray-50 text-xs text-gray-600 border-b border-gray-200">
          <tr>
            <th className="p-3 text-left font-semibold">DATE</th>
            <th className="p-3 text-left font-semibold">PROJECT</th>
            <th className="p-3 text-left font-semibold">CLIENT</th>
            <th className="p-3 text-left font-semibold">DESCRIPTION</th>
            <th className="p-3 text-left font-semibold">HOURS</th>
            <th className="p-3 text-left font-semibold">BILLABLE</th>
            <th className="p-3 text-left font-semibold">RATE</th>
          </tr>
        </thead>

        <tbody>
          {entries.map((entry, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 hover:bg-gray-50 text-sm text-gray-800"
            >
              <td className="p-3">{entry.date}</td>
              <td className="p-3">{entry.project}</td>
              <td className="p-3">{entry.client}</td>
              <td className="p-3">{entry.description}</td>
              <td className="p-3">{entry.hours}</td>
              <td className="p-3">
                {entry.billable ? (
                  <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded border border-green-100">
                    Billable
                  </span>
                ) : (
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1 rounded border border-gray-200">
                    Non-Billable
                  </span>
                )}
              </td>
              <td className="p-3">{entry.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>      
    </div>
  );
}
