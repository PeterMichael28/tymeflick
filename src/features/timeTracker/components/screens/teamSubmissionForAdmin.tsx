'use client'

import { useNavigate } from 'react-router-dom'
import { Search, Unlock, ArrowLeft } from 'lucide-react'
import Hero from '../../../../components/ui/hero'
import DropDown from '../../../project/ui/dropDown'
import {
  ReviewDetailsButton,
  ApproveButton,
  RejectButton,
} from '../ui/TeamSubmissionButtons'

const TeamSubmissionForAdmin = () => {
  const navigate = useNavigate()

  return (
    <div className="font-inter space-y-8 p-2">
      <div className="min-h-6 space-y-5 rounded-lg">
        <Hero title="" description="" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
        <div className="flex w-full items-center justify-between rounded-md bg-[#F3F3F3] p-3">
          {/* Go Back Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/timeTracker')}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-white hover:bg-gray-50 transition cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <h1 className="text-base font-medium text-gray-800">Go back</h1>
          </div>

          {/* Search and Filter Section */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="flex h-10 w-64 items-center rounded-md border border-[#D9D9D9] bg-white px-3">
              <input
                type="text"
                placeholder="Search"
                className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <Search size={15} className="ml-2 text-gray-500" />
            </div>

            {/* Status Dropdown */}
            <DropDown
              options={['All', 'Active', 'Archived']}
              value="All Status"
              onChange={console.log}
              placeholder="Filter"
              className="w-32"
            />
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="rounded-lg border border-[#99B7FF] bg-blue-50 p-4 text-left">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.25"
              width="39.5"
              height="39.5"
              rx="9.75"
              fill="white"
            />
            <rect
              x="0.25"
              y="0.25"
              width="39.5"
              height="39.5"
              rx="9.75"
              stroke="#D2D9DF"
              stroke-width="0.5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29ZM20 16.5C20 15.9477 19.5523 15.5 19 15.5C18.4477 15.5 18 15.9477 18 16.5V21.5C18 22.0523 18.4477 22.5 19 22.5H22C22.5523 22.5 23 22.0523 23 21.5C23 20.9477 22.5523 20.5 22 20.5H20V16.5Z"
              fill="#3370FF"
            />
          </svg>

          <p className="text-sm font-medium text-blue-600">Pending Review</p>
          <p className="mt-1 text-2xl font-bold text-blue-700">1</p>
        </div>

        <div className="rounded-lg border border-[#1FC16B] bg-green-50 p-4 text-left">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.25"
              width="39.5"
              height="39.5"
              rx="9.75"
              fill="white"
            />
            <rect
              x="0.25"
              y="0.25"
              width="39.5"
              height="39.5"
              rx="9.75"
              stroke="#D2D9DF"
              stroke-width="0.5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29ZM23.6754 18.7375C24.0827 18.3644 24.1105 17.7319 23.7375 17.3246C23.3644 16.9173 22.7319 16.8895 22.3246 17.2625L18.6325 20.644L17.6754 19.7674C17.2681 19.3944 16.6356 19.4221 16.2626 19.8294C15.8895 20.2367 15.9173 20.8693 16.3246 21.2423L17.9571 22.7374C18.3393 23.0875 18.9257 23.0875 19.3079 22.7374L23.6754 18.7375Z"
              fill="#1FC16B"
            />
          </svg>

          <p className="text-sm font-medium text-green-600">Approved</p>
          <p className="mt-1 text-2xl font-bold text-green-700">2</p>
        </div>

        <div className="rounded-lg border border-[#D00416] bg-red-50 p-4 text-left">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.25"
              width="39.5"
              height="39.5"
              rx="9.75"
              fill="white"
            />
            <rect
              x="0.25"
              y="0.25"
              width="39.5"
              height="39.5"
              rx="9.75"
              stroke="#D2D9DF"
              stroke-width="0.5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29ZM23.6754 18.7375C24.0827 18.3644 24.1105 17.7319 23.7375 17.3246C23.3644 16.9173 22.7319 16.8895 22.3246 17.2625L18.6325 20.644L17.6754 19.7674C17.2681 19.3944 16.6356 19.4221 16.2626 19.8294C15.8895 20.2367 15.9173 20.8693 16.3246 21.2423L17.9571 22.7374C18.3393 23.0875 18.9257 23.0875 19.3079 22.7374L23.6754 18.7375Z"
              fill="#D00416"
            />
          </svg>

          <p className="text-sm font-medium text-red-600">Rejected</p>
          <p className="mt-1 text-2xl font-bold text-red-700">1</p>
        </div>

        <div className="rounded-lg border border-[#2B323B] bg-gray-50 p-4 text-left">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.25"
              width="39.5"
              height="39.5"
              rx="9.75"
              fill="white"
            />
            <rect
              x="0.25"
              y="0.25"
              width="39.5"
              height="39.5"
              rx="9.75"
              stroke="#D2D9DF"
              stroke-width="0.5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 26.812V13C12 11.3431 13.3431 10 15 10H25C26.6569 10 28 11.3431 28 13V26.812C28 28.7361 25.9751 29.9876 24.2541 29.1271C24.0852 29.0426 23.9076 28.9769 23.7244 28.9311L20.7276 28.1819C20.2499 28.0625 19.7501 28.0625 19.2724 28.1819L16.2756 28.9311C16.0924 28.9769 15.9148 29.0426 15.7459 29.1271C14.0249 29.9876 12 28.7361 12 26.812ZM16 14C15.4477 14 15 14.4477 15 15C15 15.5523 15.4477 16 16 16H24C24.5523 16 25 15.5523 25 15C25 14.4477 24.5523 14 24 14H16ZM15 20C15 19.4477 15.4477 19 16 19H24C24.5523 19 25 19.4477 25 20C25 20.5523 24.5523 21 24 21H16C15.4477 21 15 20.5523 15 20ZM16 24C15.4477 24 15 24.4477 15 25C15 25.5523 15.4477 26 16 26H18.6667C19.219 26 19.6667 25.5523 19.6667 25C19.6667 24.4477 19.219 24 18.6667 24H16ZM21.3333 24C20.781 24 20.3333 24.4477 20.3333 25C20.3333 25.5523 20.781 26 21.3333 26H24C24.5523 26 25 25.5523 25 25C25 24.4477 24.5523 24 24 24H21.3333Z"
              fill="#404C59"
            />
          </svg>

          <p className="text-sm font-medium text-gray-600">Total Submission</p>
          <p className="mt-1 text-2xl font-bold text-gray-700">4</p>
        </div>
      </div>

      {/* Submission Management */}
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <div className="rounded-lg bg-[#F9F9F9] p-6 shadow-sm">
          <h3 className="mb-2 font-semibold text-gray-800">
            Submission Management
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Click on any row to view detailed submission information and
            activity logs
          </p>

          <div className="space-y-5">
            {/* Card 1 */}
            <div className="rounded-lg border-l-4 border-blue-400 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">Sarah Bello</h4>
                <span className="rounded-full border border-blue-300 px-3 py-1 text-sm text-blue-600">
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
              <p className="mb-3 text-sm text-gray-700">
                <strong>Total Hours:</strong> 31.5 hrs
              </p>
              <div className="flex flex-wrap gap-3">
                <ReviewDetailsButton
                  onClick={() => navigate('/reviewDetailsAdmin')}
                />
                <button className="flex items-center gap-1 rounded-md border border-yellow-400 bg-[#FFB6001A] px-3 py-1 text-sm text-yellow-600 hover:bg-yellow-50">
                  <Unlock className="h-4 w-4" /> Unlock
                </button>
                <ApproveButton
                  onClick={() => navigate('/forceApprove')}
                  isAdmin
                />
                <RejectButton
                  onClick={() => navigate('/forceReject')}
                  isAdmin
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border-l-4 border-green-500 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">David</h4>
                <span className="rounded-full border border-green-300 px-3 py-1 text-sm text-green-600">
                  Approved
                </span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Week:</strong> June 17–23
              </p>
              <p className="text-sm text-gray-700">
                <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
              </p>
              <p className="mb-3 text-sm text-gray-700">
                <strong>Total Hours:</strong> 40 hrs
              </p>
              <div className="flex gap-3">
                <ReviewDetailsButton
                  onClick={() => navigate('/reviewDetailsAdmin')}
                />
                <RejectButton
                  onClick={() => navigate('/forceReject')}
                  isAdmin
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border-l-4 border-red-500 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">Issiah</h4>
                <span className="rounded-full border border-red-300 px-3 py-1 text-sm text-red-600">
                  Rejected
                </span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Week:</strong> June 17–23
              </p>
              <p className="text-sm text-gray-700">
                <strong>Submitted:</strong> Jun 23, 2025, 04:45 PM
              </p>
              <p className="mb-2 text-sm text-gray-700">
                <strong>Total Hours:</strong> 40 hrs
              </p>
              <p className="mb-3 text-sm font-medium text-red-600">
                Reason: Missing hours on Thursday and incomplete task
                descriptions
              </p>
              <ReviewDetailsButton
                onClick={() => navigate('/reviewDetailsAdmin')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSubmissionForAdmin
