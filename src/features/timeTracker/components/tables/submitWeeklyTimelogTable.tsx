"use client";

export default function SubmitWeeklyTimeLogsTable() {
  const timeLogs = [
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
      description: "Database Migration",
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
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#F6F6F6] text-left text-[13px] font-medium text-gray-600">
            <th className="py-3 px-4">DATE</th>
            <th className="py-3 px-4">PROJECT</th>
            <th className="py-3 px-4">CLIENT</th>
            <th className="py-3 px-4">DESCRIPTION</th>
            <th className="py-3 px-4">HOURS</th>
            <th className="py-3 px-4">BILLABLE</th>
            <th className="py-3 px-4">RATE</th>
          </tr>
        </thead>
        <tbody>
          {timeLogs.map((log, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-100 text-[14px] text-gray-800 hover:bg-gray-50 transition"
            >
              <td className="py-3 px-4">{log.date}</td>
              <td className="py-3 px-4">{log.project}</td>
              <td className="py-3 px-4">{log.client}</td>
              <td className="py-3 px-4">{log.description}</td>
              <td className="py-3 px-4">{log.hours}</td>
              <td className="py-3 px-4">
                {log.billable ? (
                  <span className="bg-[#E8F6EE] text-[#2E7D32] text-xs font-medium px-3 py-1 rounded-full">
                    Billable
                  </span>
                ) : (
                  <span className="bg-[#EAF4F5] text-[#256D85] text-xs font-medium px-3 py-1 rounded-full">
                    Non-Billable
                  </span>
                )}
              </td>
              <td className="py-3 px-4">{log.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
