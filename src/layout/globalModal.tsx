import { useSelector } from 'react-redux'
import { type RootState } from '../redux/store'
import CreateAccount from '../features/login/modal/createAccount'
import SuccessModal from '../features/signUp/enterpriseAccount/ui/successModal'
import UploadTimeLog from '../features/dashboard/components/modal/uploadTimeLog'
import TimeLogPreview from '../features/dashboard/components/modal/timeLogPreview'
import UploadFailed from '../features/dashboard/components/modal/uploadFailed'
import UploadSuccessful from '../features/dashboard/components/modal/uploadSuccessful'
import AddManualEntryModal from '../features/timeTracker/components/modals/AddManualEntry'
import SubmissionSentModal from '../features/timeTracker/components/modals/SubmissionSent'
import SubmissionApprovedModal from '../features/timeTracker/components/modals/SubmissionApprovedModal'
import SubmissionRejectedModal from '../features/timeTracker/components/modals/SubmissionRejectedModal'
import Review from '../features/project/agile/modal/review'
import SprintSaved from '../features/project/agile/modal/sprintSaved'

// ✅ Existing imports
import ApprovalNotesModal from '../features/timeTracker/components/modals/ApprovalNotesModal'
import RejectionNotesModal from '../features/timeTracker/components/modals/RejectionNotesModal'
import TemplateReady from '../features/projectTemplate/modal/templateReady'

// ✅ New imports
import DeleteTimeEntryModal from '../features/timeTracker/components/modals/DeleteTimeEntry'
import EditTimeEntryModal from '../features/timeTracker/components/modals/EditTimeEntry'

const GlobalModal = () => {
  const {
    createAccountModal,
    enterPriceSuccessModal,
    uploadTimeLogModal,
    reviewTimeLogModal,
    uploadFailedModal,
    uploadSuccessModal,
    addTimeManualEntryModal,
    submissionSentModal,
    submissionApprovedModal,
    submissionRejectedModal,
    approvalNotesModal,
    rejectionNotesModal,
    templateReadyModal,
    deleteTimeEntryModal,
    editTimeEntryModal, // ✅ new
    agileSprintModal,
    agileSprintSuccessModal
  } = useSelector((state: RootState) => state.modal)

  if (createAccountModal) return <CreateAccount />
  if (enterPriceSuccessModal) return <SuccessModal />
  if (uploadTimeLogModal) return <UploadTimeLog />
  if (reviewTimeLogModal) return <TimeLogPreview />
  if (uploadFailedModal) return <UploadFailed />
  if (uploadSuccessModal) return <UploadSuccessful />
  if (addTimeManualEntryModal) return <AddManualEntryModal />
  if (submissionSentModal) return <SubmissionSentModal />
  if (submissionApprovedModal) return <SubmissionApprovedModal />
  if (submissionRejectedModal) return <SubmissionRejectedModal />
  if (approvalNotesModal) return <ApprovalNotesModal />
  if (rejectionNotesModal) return <RejectionNotesModal />
  if (templateReadyModal) return <TemplateReady />
  if (deleteTimeEntryModal) return <DeleteTimeEntryModal />
  if (editTimeEntryModal) return <EditTimeEntryModal /> // ✅ added
  if (agileSprintModal) return <Review />
  if (agileSprintSuccessModal) return <SprintSaved /> // ✅ added

  return null
}

export default GlobalModal
