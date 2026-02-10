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
import EditSprintRetrospective from '../features/project/agile/modal/editSprintRetrospective'
import ApprovalNotesModal from '../features/timeTracker/components/modals/ApprovalNotesModal'
import RejectionNotesModal from '../features/timeTracker/components/modals/RejectionNotesModal'
import TemplateReady from '../features/projectTemplate/modal/templateReady'
import DeleteTimeEntryModal from '../features/timeTracker/components/modals/DeleteTimeEntry'
import EditTimeEntryModal from '../features/timeTracker/components/modals/EditTimeEntry'
import CreateNewTeamModal from '../features/teams/components/modals/CreateNewTeamModal'
import AddUserModal from '../features/teams/components/modals/AddUserModal'
import EditUserModal from '../features/teams/components/modals/EditUserModal'

// ✅ New Client modals
import ClientModal from '../features/clients/modals/ClientModal'
import DeleteClientModal from '../features/clients/modals/DeleteClientModal'

import InvitationSent from '../features/project/agile/modal/invitationSent'
import EditEpic from '../features/project/agile/modal/epic/EditEpic'
import EditFeature from '../features/project/agile/modal/feature/EditFeature'
import EditStory from '../features/project/agile/modal/story/editStory'
import EditTask from '../features/project/agile/modal/task/editTask'
import ThemeCustomizer from '../features/settings/modal'

const GlobalModal = () => {
  const modal = useSelector((state: RootState) => state.modal)
  const {
    agileSprintModal,
    agileSprintSuccessModal,
    editSprintRetrospectiveModal,
    invitationSentModal,
    editEpicModal,
    editFeatureModal,
    editStoryModal,
    editTaskModal,
    themeCustomizerModal,
  } = useSelector((state: RootState) => state.modal)

  if (modal.createAccountModal) return <CreateAccount />
  if (modal.enterPriceSuccessModal) return <SuccessModal />
  if (modal.uploadTimeLogModal) return <UploadTimeLog />
  if (modal.reviewTimeLogModal) return <TimeLogPreview />
  if (modal.uploadFailedModal) return <UploadFailed />
  if (modal.uploadSuccessModal) return <UploadSuccessful />
  if (modal.addTimeManualEntryModal) return <AddManualEntryModal />
  if (modal.submissionSentModal) return <SubmissionSentModal />
  if (modal.submissionApprovedModal) return <SubmissionApprovedModal />
  if (modal.submissionRejectedModal) return <SubmissionRejectedModal />
  if (modal.approvalNotesModal) return <ApprovalNotesModal />
  if (modal.rejectionNotesModal) return <RejectionNotesModal />
  if (modal.templateReadyModal) return <TemplateReady />
  if (modal.deleteTimeEntryModal) return <DeleteTimeEntryModal />
  if (modal.editTimeEntryModal) return <EditTimeEntryModal />
  if (modal.createTeamModal) return <CreateNewTeamModal />
  if (modal.addUserModal) return <AddUserModal />
  if (modal.editUserModal) return <EditUserModal />

  // ✅ Client modals - using unified ClientModal with mode
  if (modal.addClientModal) return <ClientModal mode="add" />
  if (modal.editClientModal) return <ClientModal mode="edit" />
  if (modal.deleteClientModal) return <DeleteClientModal />

  if (agileSprintModal) return <Review />
  if (agileSprintSuccessModal) return <SprintSaved />
  if (editSprintRetrospectiveModal) return <EditSprintRetrospective />
  if (agileSprintSuccessModal) return <SprintSaved />
  if (editSprintRetrospectiveModal) return <EditSprintRetrospective />
  if (invitationSentModal) return <InvitationSent />
  if (editEpicModal) return <EditEpic />
  if (editFeatureModal) return <EditFeature />
  if (editStoryModal) return <EditStory />
  if (editTaskModal) return <EditTask />
  if (themeCustomizerModal) return <ThemeCustomizer />

  return null
}

export default GlobalModal
