"use client";

import { Plus } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between w-full mt-6 px-2 py-2">
      {/* Previous Button */}
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition">
        <Plus className="w-4 h-4 rotate-180" />
        <span>Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2 text-sm text-gray-500 justify-center flex-grow">
        <button className="hover:text-gray-900">1</button>
        <button className="hover:text-gray-900">2</button>
        <button className="border border-green-500 text-green-600 px-2 py-1 rounded-md">
          3
        </button>
        <span className="text-gray-400">...</span>
        <button className="hover:text-gray-900">10</button>
        <button className="hover:text-gray-900">11</button>
        <button className="hover:text-gray-900">12</button>
      </div>

      {/* Next Button */}
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition">
        <span>Next</span>
        <Plus className="w-4 h-4" />
      </button>
    </div>

  );
}
