'use client'

import { useDispatch } from 'react-redux'
import { openAddClientModal } from '../../redux/slice/modalSlice'

import Hero from '../../components/ui/hero'
import ClientsTable from './tables/ClientsTable'
import { Search, Plus, Calendar } from 'lucide-react'

export default function ClientsPage() {
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen w-full space-y-8 overflow-y-scroll">
      {/* Page Header */}
      <Hero
        title="Clients"
        description="All your clients, perfectly organized and just a tap away"
      />

      {/* Teams Overview Section */}
      <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        {/* Header Controls */}
        <div className="flex flex-col justify-between gap-4 rounded-md bg-[#F3F3F3] p-3 md:flex-row md:items-center">
          {/* Left */}
          <h2 className="text-md font-semibold text-gray-800">All Clients</h2>

          {/* Right Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative rounded-md bg-white">
              <input
                type="text"
                placeholder="Search"
                className="w-48 rounded-md border border-gray-300 px-3 py-2 pl-2 text-sm focus:ring-1 focus:ring-green-500 focus:outline-none"
              />
              <Search className="absolute top-2.5 right-2 h-4 w-4 text-gray-400" />
            </div>

            {/* Date Picker */}
            <div className="relative flex w-60 items-center justify-between rounded-md border border-gray-200 bg-white p-1">
              <input
                type="text"
                value="Mon Jun 02 2025 - Mon Jun 02 2025"
                readOnly
                className="w-full bg-transparent px-3 py-2 text-xs text-gray-800 focus:outline-none"
              />
              <Calendar className="mr-3 h-4 w-4 text-gray-800" />
            </div>

            {/* Add Team Button */}
            <button
              onClick={() => dispatch(openAddClientModal())}
              className="bg-primary flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5bb13e]"
            >
              <Plus className="h-4 w-4" />
              New Client
            </button>
          </div>
        </div>
        {/* Clients Table */}
        <ClientsTable />
      </div>
    </div>
  )
}
