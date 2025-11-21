"use client";

import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, Unlock } from "lucide-react";

const TeamSubmissionForAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-8 font-inter">
      {/* Go Back */}
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 w-full">
        <ArrowLeft className="w-5 h-5 text-gray-700" />
        <span className="font-medium text-gray-800">Go back</span>
        <div className="ml-auto flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-3 py-1 text-sm w-40"
          />
          <select className="border rounded-md px-2 py-1 text-sm text-gray-700">
            <option>All Status</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* System Statistics */}
      <div>
        <h2 className="font-semibold mb-3 text-gray-800">System Statistics</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
            <p className="text-blue-600 text-sm font-medium">Audit Log Entries</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">10</h2>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-center">
            <p className="text-green-600 text-sm font-medium">Approved</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">2</h2>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-center">
            <p className="text-red-600 text-sm font-medium">Rejected</p>
            <h2 className="text-3xl font-bold text-red-600 mt-2">1</h2>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-center">
            <p className="text-gray-700 text-sm font-medium">Total Submission</p>
            <h2 className="text-3xl font-bold text-gray-700 mt-2">4</h2>
          </div>
        </div>
      </div>

      {/* Submission Management */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="font-semibold text-gray-800 mb-2">Submission Management</h3>
        <p className="text-sm text-gray-600 mb-4">
          Click on any row to view detailed submission information and activity logs
        </p>

        <div className="space-y-5">
          {/* Card 1 */}
          <div className="border-l-4 border-blue-400 bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800">Sarah Bello</h4>
              <span className="text-sm text-blue-600 border border-blue-300 px-3 py-1 rounded-full">
                Submitted
              </span>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Manager:</strong> Mr Bassey
            </p>
            <p className="text-sm text-gray-700">
              <strong>Week:</strong> June 1, 2025
            </p>
            <p className="text-sm text-gray-700">
              <strong>Submitted:</strong> Jun 30, 2025, 05:30 PM
            </p>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Total Hours:</strong> 31.5 hrs
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="text-blue-600 border border-blue-300 hover:bg-blue-50 px-3 py-1 rounded-md text-sm"
              onClick={() => navigate("/reviewDetailsAdmin")}
              >
                Review Details
              </button>
              <button className="text-yellow-600 border border-yellow-400 hover:bg-yellow-50 px-3 py-1 rounded-md text-sm flex items-center gap-1">
                <Unlock className="w-4 h-4" /> Unlock
              </button>
              <button
                onClick={() => navigate("/forceApprove")}
                className="text-green-600 border border-green-400 hover:bg-green-50 px-3 py-1 rounded-md text-sm flex items-center gap-1"
              >
                <CheckCircle2 className="w-4 h-4" /> Force Approve
              </button>
              <button
                onClick={() => navigate("/forceReject")}
                className="text-red-600 border border-red-400 hover:bg-red-50 px-3 py-1 rounded-md text-sm flex items-center gap-1"
              >
                <XCircle className="w-4 h-4" /> Force Reject
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-l-4 border-green-500 bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800">David</h4>
              <span className="text-sm text-green-600 border border-green-300 px-3 py-1 rounded-full">
                Approved
              </span>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Week:</strong> June 17–23
            </p>
            <p className="text-sm text-gray-700">
              <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
            </p>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Total Hours:</strong> 40 hrs
            </p>
            <div className="flex gap-3">
              <button className="text-blue-600 border border-blue-300 hover:bg-blue-50 px-3 py-1 rounded-md text-sm"
              onClick={() => navigate("/reviewDetailsAdmin")}>
                Review Details
              </button>
              <button
                onClick={() => navigate("/forceReject")}
                className="text-red-600 border border-red-400 hover:bg-red-50 px-3 py-1 rounded-md text-sm flex items-center gap-1"
              >
                <XCircle className="w-4 h-4" /> Force Reject
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-l-4 border-red-500 bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800">Issiah</h4>
              <span className="text-sm text-red-600 border border-red-300 px-3 py-1 rounded-full">
                Rejected
              </span>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Week:</strong> June 17–23
            </p>
            <p className="text-sm text-gray-700">
              <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Total Hours:</strong> 40 hrs
            </p>
            <p className="text-sm text-red-600 font-medium mb-3">
              Reason: Missing hours on Thursday and incomplete task descriptions
            </p>
            <button className="text-blue-600 border border-blue-300 hover:bg-blue-50 px-3 py-1 rounded-md text-sm"
              onClick={() => navigate("/reviewDetailsAdmin")}>
              Review Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSubmissionForAdmin;
