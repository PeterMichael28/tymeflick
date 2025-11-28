import { useDispatch } from "react-redux";
import { closeAddClientModal } from "../../../redux/slice/modalSlice";
import { X } from "lucide-react";
import DropDown from "../../dashboard/components/ui/dropDown";

export default function AddClientModal() {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-2xs">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Add New Client</h2>
          <button onClick={() => dispatch(closeAddClientModal())}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Add Image Section (from Figma highlight) */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[149px] h-[141px] flex items-center justify-center rounded-md border border-dashed border-green-400 bg-green-100/20">
            <img
              src="/icon/AddCross.svg"
              alt="Add Image"
              className="w-6 h-6 text-green-500"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Client Logo/Photo</p>
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
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Contact@client.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Website</label>
            <input
              type="text"
              placeholder="https://client.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

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

          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              placeholder="Additional notes about the client"
              rows={3}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full rounded-md bg-primary py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Add Client
          </button>

          <button
            type="button"
            onClick={() => dispatch(closeAddClientModal())}
            className="w-full rounded-md py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
