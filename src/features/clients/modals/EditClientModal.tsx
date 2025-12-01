import { useDispatch } from 'react-redux'
import { closeEditClientModal } from '../../../redux/slice/modalSlice'
import { X } from 'lucide-react'

export default function EditClientModal() {
  const dispatch = useDispatch()

  return (
    <div className="backdrop-blur-2xs fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Edit Client</h2>
          <button onClick={() => dispatch(closeEditClientModal())}>
            <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value="ACME Corporation"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              value="(555) 123-4567"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value="contact@acme.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <button
            type="button"
            className="bg-primary w-full rounded-md py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => dispatch(closeEditClientModal())}
            className="w-full rounded-md py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}
