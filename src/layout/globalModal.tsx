import { useSelector } from 'react-redux'
import { type RootState } from '../redux/store'
import CreateAccount from '../features/login/modal/createAccount'
import SuccessModal from '../features/signUp/enterpriseAccount/ui/successModal'

const GlobalModal = () => {
  const { createAccountModal, enterPriceSuccessModal } = useSelector(
    (state: RootState) => state.modal
  )

  if (createAccountModal) {
    return <CreateAccount />
  }
  if (enterPriceSuccessModal) {
    return <SuccessModal />
  }

  return null
}

export default GlobalModal
