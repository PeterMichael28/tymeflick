import { useDispatch } from 'react-redux'
import { closeDeleteClientModal } from '../../../redux/slice/modalSlice'
import { AlertCircle } from 'lucide-react'
import { X } from 'lucide-react'

export default function DeleteClientModal() {
  const dispatch = useDispatch()

  return (
    <div className="backdrop-blur-2xs fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Delete Client</h2>
          <button onClick={() => dispatch(closeDeleteClientModal())}>
            <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <div className="items-top mb-4 flex">
          <AlertCircle className="mr-2 h-15 w-15 text-red-600" />
          <p className="mb-6 text-sm text-gray-600">
            Are you sure you want to delete this client? This action cannot be
            undone and will affect all associated projects.
          </p>
        </div>

        <button
          type="button"
          className="w-full rounded-md bg-red-600 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Delete Client
        </button>

        <button
          type="button"
          onClick={() => dispatch(closeDeleteClientModal())}
          className="mt-3 w-full rounded-md py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
