'use client'

import { Plus } from 'lucide-react'

export default function Pagination() {
  return (
    <div className="mt-6 flex w-full items-center justify-between px-2 py-2">
      {/* Previous Button */}
      <button className="flex items-center gap-1 rounded-md border border-gray-300 px-4 py-2 text-gray-600 transition hover:bg-gray-50">
        <Plus className="h-4 w-4 rotate-180" />
        <span>Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex flex-grow items-center justify-center gap-2 text-sm text-gray-500">
        <button className="hover:text-gray-900">1</button>
        <button className="hover:text-gray-900">2</button>
        <button className="text-primary rounded-md border border-green-500 px-2 py-1">
          3
        </button>
        <span className="text-gray-400">...</span>
        <button className="hover:text-gray-900">10</button>
        <button className="hover:text-gray-900">11</button>
        <button className="hover:text-gray-900">12</button>
      </div>

      {/* Next Button */}
      <button className="flex items-center gap-1 rounded-md border border-gray-300 px-4 py-2 text-gray-600 transition hover:bg-gray-50">
        <span>Next</span>
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
