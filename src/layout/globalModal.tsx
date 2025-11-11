import { useSelector } from 'react-redux'
import { type RootState } from '../redux/store'
import CreateAccount from '../features/login/modal/createAccount'
import SuccessModal from '../features/signUp/enterpriseAccount/ui/successModal'
import UploadTimeLog from '../features/dashboard/components/modal/uploadTimeLog'
import TimeLogPreview from '../features/dashboard/components/modal/timeLogPreview'
import UploadFailed from '../features/dashboard/components/modal/uploadFailed'
import UploadSuccessful from '../features/dashboard/components/modal/uploadSuccessful'

const GlobalModal = () => {
  const {
    createAccountModal,
    enterPriceSuccessModal,
    uploadTimeLogModal,
    reviewTimeLogModal,
    uploadFailedModal,
    uploadSuccessModal,
  } = useSelector((state: RootState) => state.modal)

  if (createAccountModal) {
    return <CreateAccount />
  }
  if (enterPriceSuccessModal) {
    return <SuccessModal />
  }
  if (uploadTimeLogModal) {
    return <UploadTimeLog />
  }
  if (reviewTimeLogModal) {
    return <TimeLogPreview />
  }
  if (uploadFailedModal) {
    return <UploadFailed />
  }
  if (uploadSuccessModal) {
    return <UploadSuccessful />
  }

  return null
}

export default GlobalModal
