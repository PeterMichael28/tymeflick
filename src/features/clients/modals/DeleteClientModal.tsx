import { useDispatch } from "react-redux";
import { closeDeleteClientModal } from "../../../redux/slice/modalSlice";
import { AlertCircle } from "lucide-react";
import { X } from "lucide-react";

export default function DeleteClientModal() {
    const dispatch = useDispatch();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-2xs">
            <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Delete Client</h2>
                    <button onClick={() => dispatch(closeDeleteClientModal())}>
                        <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                    </button>
                </div>

                <div className="flex items-top mb-4">
                    <AlertCircle className="w-15 h-15 text-red-600 mr-2" />
                    <p className="text-sm text-gray-600 mb-6">
                        Are you sure you want to delete this client? This action cannot be undone and will affect all associated projects.
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
    );
}
