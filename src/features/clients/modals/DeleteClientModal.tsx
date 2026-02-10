import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteClientModal } from '../../../redux/slice/modalSlice'
import { ConfirmDeleteModal } from '../../../components/common'
import { useDeleteClient } from '../queries'
import type { RootState } from '../../../redux/store'

/**
 * Delete client confirmation modal
 */
export default function DeleteClientModal() {
  const dispatch = useDispatch()
  const { mutate: deleteClient, isPending } = useDeleteClient()

  // Get selected client from Redux state
  const selectedClient = useSelector(
    (state: RootState) => state.modal.selectedClient
  )

  const handleClose = () => {
    dispatch(closeDeleteClientModal())
  }

  const handleConfirm = () => {
    if (!selectedClient?.id) {
      return
    }

    deleteClient(selectedClient.id, {
      onSuccess: () => {
        handleClose()
      },
    })
  }

  return (
    <ConfirmDeleteModal
      isOpen={true}
      onClose={handleClose}
      onConfirm={handleConfirm}
      title="Delete Client"
      message="Are you sure you want to delete this client? This action cannot be undone and will affect all associated projects."
      confirmText="Delete Client"
      isLoading={isPending}
    />
  )
}
