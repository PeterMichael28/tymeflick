import { useDispatch } from 'react-redux'
import { closeAddClientModal } from '../../../redux/slice/modalSlice'
import { X } from 'lucide-react'
import DropDown from '../../../features/project/ui/dropDown'

export default function AddClientModal() {
  const dispatch = useDispatch()

  return (
    <div className="backdrop-blur-2xs fixed inset-0 z-50 flex items-center justify-center bg-black/30 max-h-screen overflow-auto p-4">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Add New Client
          </h2>
          <button onClick={() => dispatch(closeAddClientModal())}>
            <X className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
          </button>
        </div>

        {/* Add Image Section (from Figma highlight) */}
        <div className="mb-6 flex items-center gap-3">
          <div className="cursor-pointer flex h-[90px] w-[100px] items-center justify-center rounded-md border border-dashed border-green-400 bg-[#AD85D633]">
            <svg width="15" height="15" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 22.5C17.4632 22.5 22.5 17.4632 22.5 11.25C22.5 5.0368 17.4632 0 11.25 0C5.0368 0 0 5.0368 0 11.25C0 17.4632 5.0368 22.5 11.25 22.5ZM12.5 7.5C12.5 6.80964 11.9404 6.25 11.25 6.25C10.5596 6.25 10 6.80964 10 7.5V10H7.5C6.80964 10 6.25 10.5596 6.25 11.25C6.25 11.9404 6.80964 12.5 7.5 12.5H10V15C10 15.6904 10.5596 16.25 11.25 16.25C11.9404 16.25 12.5 15.6904 12.5 15V12.5H15C15.6904 12.5 16.25 11.9404 16.25 11.25C16.25 10.5596 15.6904 10 15 10H12.5V7.5Z" fill="#66C61C" />
            </svg>

          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">
              Client Logo/Photo
            </p>
            <p className="text-xs text-gray-500">PNG/JPEG | 5mb max</p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter client name"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Contact@client.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              type="text"
              placeholder="https://client.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>



          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client
            </label>
            <DropDown
              options={[
                'All',
                'ACME Corp',
                'Tech innovations llc',
                'ShopEase Ltd',
                'Fintech Solutions',
              ]}
              value="All clients"
              onChange={console.log}
              placeholder="Filter"
              className="w-full text-lg"
            />

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              placeholder="Additional notes about the client"
              rows={3}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="button"
            className="bg-primary w-full rounded-md py-2 text-sm font-semibold text-white hover:bg-green-700 cursor-pointer"
          >
            Add Client
          </button>

          <button
            type="button"
            onClick={() => dispatch(closeAddClientModal())}
            className="w-full rounded-md py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}
