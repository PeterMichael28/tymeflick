'use client'
import { ArrowLeft } from 'lucide-react'
import ClientActiveProjectsTable from '../tables/ClientActiveProjectsTable'
import { Search } from 'lucide-react'

export default function ViewClientDetails() {
  return (
    <div className="min-h-screen bg-none text-gray-800">
      {/* ===== Header ===== */}
      <div className="mb-6 flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
        <ArrowLeft className="h-5 w-5 cursor-pointer text-gray-700" />
        <h1 className="text-lg font-semibold">Clients – ACME Corporation</h1>
      </div>

      {/* ===== Client Details Card ===== */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        {/* Top Section */}
        <div className="mb-6 flex justify-between">
          <div className="flex items-start gap-4">
            <img
              src="/public/icon/clientIcons/acmeSVG.svg"
              alt="Client Logo"
              className="h-20 w-20 rounded-md border border-gray-200 object-contain"
            />
            <div>
              <p className="font-medium text-gray-700">Client Logo/Photo</p>
              <p className="text-xs text-gray-400">PNG/JPEG | 5 MB max</p>
            </div>
          </div>

          <button className="rounded-md p-2 hover:bg-gray-100">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.5961 1.00994C17.2495 -0.336647 15.0662 -0.336648 13.7196 1.00994L5.19416 9.53541C4.58217 10.1474 4.18518 10.9414 4.06279 11.7981L3.81573 13.5275C3.62717 14.8475 4.75854 15.9788 6.07847 15.7903L7.80784 15.5432C8.66463 15.4208 9.4586 15.0238 10.0706 14.4118L18.5961 5.88637C19.9426 4.53978 19.9426 2.35653 18.5961 1.00994ZM15.3433 2.25046C15.907 1.8662 16.6818 1.92409 17.1818 2.42415C17.6819 2.92422 17.7398 3.699 17.3555 4.26268L15.3433 2.25046ZM13.9112 3.64678L15.9592 5.69479L8.65637 12.9976C8.35038 13.3036 7.95339 13.5021 7.525 13.5633L5.79563 13.8104L6.04269 12.081C6.10388 11.6526 6.30238 11.2556 6.60837 10.9496L13.9112 3.64678Z"
                fill="#D2D9DF"
              />
              <path
                d="M4 0.0999545C1.79086 0.0999545 0 1.89082 0 4.09995V16.1C0 18.3091 1.79086 20.1 4 20.1H16C18.2091 20.1 20 18.3091 20 16.1V10.1C20 9.54767 19.5523 9.09995 19 9.09995C18.4477 9.09995 18 9.54767 18 10.1V16.1C18 17.2045 17.1046 18.1 16 18.1H4C2.89543 18.1 2 17.2045 2 16.1V4.09995C2 2.99539 2.89543 2.09995 4 2.09995H6.68421C7.2365 2.09995 7.68421 1.65224 7.68421 1.09995C7.68421 0.54767 7.2365 0.0999545 6.68421 0.0999545H4Z"
                fill="#D2D9DF"
              />
            </svg>
          </button>
        </div>

        {/* Inputs */}
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="ACME Corporations"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              defaultValue="(555) 123-4567"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              defaultValue="contact@acme.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Website</label>
            <input
              type="text"
              defaultValue="https://Client.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">About</label>
          <textarea
            defaultValue="ACME Corporation is on a mission to redefine the future of technology. Our team of engineers, designers, and dreamers is building intelligent systems that transform how people connect, work, and live—pushing boundaries every step of the way."
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>

      {/* ===== Active Projects ===== */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between rounded-md bg-[#F3F3F3] px-4 py-2">
          <p className="text-sm font-medium text-gray-700">
            ACME Corporation Active Projects
          </p>
          <div className="relative rounded-md bg-white">
            <input
              type="text"
              placeholder="Search"
              className="w-48 rounded-md border border-gray-300 px-3 py-2 pl-2 text-sm focus:ring-1 focus:ring-green-500 focus:outline-none"
            />
            <Search className="absolute top-2.5 right-2 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <ClientActiveProjectsTable />
      </div>
    </div>
  )
}
