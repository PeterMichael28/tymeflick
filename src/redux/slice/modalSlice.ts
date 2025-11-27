import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface TimeEntryPayload {
  id?: string | number
  date?: string
  startTime?: string
  endTime?: string
  description?: string
  billable?: boolean
  client?: string
  project?: string
}

interface ModalSlice {
  createAccountModal: boolean
  enterPriceSuccessModal: boolean
  uploadTimeLogModal: boolean
  reviewTimeLogModal: boolean
  selectedFile: File | null
  uploadSuccessModal: boolean
  uploadFailedModal: boolean
  templateReadyModal: boolean
  templateText: string
  invitationSentModal: boolean

  editTimeEntryModal: boolean
  addTimeManualEntryModal: boolean
  selectedManualTimeEntry: TimeEntryPayload | null
  submissionSentModal: boolean
  submissionApprovedModal: boolean
  submissionRejectedModal: boolean
  approvalNotesModal: boolean
  rejectionNotesModal: boolean
  deleteTimeEntryModal: boolean

  // ✅ New modals
  createTeamModal: boolean
  addUserModal: boolean
  editUserModal: boolean // ✅ Added

  agileSprintModal: boolean
  agileSprintSuccessModal: boolean
  editSprintRetrospectiveModal: boolean

  editEpicModal: boolean
  editFeatureModal: boolean
  editStoryModal: boolean
  editTaskModal: boolean
}

const initialState: ModalSlice = {
  createAccountModal: false,
  enterPriceSuccessModal: false,
  uploadTimeLogModal: false,
  reviewTimeLogModal: false,
  selectedFile: null,
  uploadSuccessModal: false,
  uploadFailedModal: false,
  editTimeEntryModal: false,
  addTimeManualEntryModal: false,
  selectedManualTimeEntry: null,
  submissionSentModal: false,
  submissionApprovedModal: false,
  submissionRejectedModal: false,
  approvalNotesModal: false,
  rejectionNotesModal: false,
  deleteTimeEntryModal: false,
  templateReadyModal: false,
  templateText: '',

  // ✅ new
  createTeamModal: false,
  addUserModal: false,
  editUserModal: false, // ✅ Added
  agileSprintModal: false,
  agileSprintSuccessModal: false,
  editSprintRetrospectiveModal: false,
  invitationSentModal: false,
  editEpicModal: false,
  editFeatureModal: false,
  editStoryModal: false,
  editTaskModal: false,
  
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openCreateAccountModal: (state) => { state.createAccountModal = true },
    closeCreateAccountModal: (state) => { state.createAccountModal = false },

    openEnterPriceSuccessModal: (state) => { state.enterPriceSuccessModal = true },
    closeEnterPriceSuccessModal: (state) => { state.enterPriceSuccessModal = false },

    openUploadTimeLogModal: (state) => { state.uploadTimeLogModal = true },
    closeUploadTimeLogModal: (state) => { state.uploadTimeLogModal = false },

    openReviewTimeLogModal: (state, action: PayloadAction<File | null>) => {
      state.reviewTimeLogModal = true
      state.selectedFile = action.payload
    },
    closeReviewTimeLogModal: (state) => {
      state.reviewTimeLogModal = false
      state.selectedFile = null
    },

    openUploadSuccessModal: (state) => { state.uploadSuccessModal = true },
    closeUploadSuccessModal: (state) => { state.uploadSuccessModal = false },

    openUploadFailedModal: (state) => { state.uploadFailedModal = true },
    closeUploadFailedModal: (state) => { state.uploadFailedModal = false },

    openEditTimeEntryModal: (state) => { state.editTimeEntryModal = true },
    closeEditTimeEntryModal: (state) => { state.editTimeEntryModal = false },

    openAddTimeManualEntryModal: (
      state,
      action: PayloadAction<TimeEntryPayload | null>
    ) => {
      state.addTimeManualEntryModal = true
      state.selectedManualTimeEntry = action.payload
    },
    closeAddTimeManualEntryModal: (state) => {
      state.addTimeManualEntryModal = false
      state.selectedManualTimeEntry = null
    },

    openSubmissionSentModal: (state) => { state.submissionSentModal = true },
    closeSubmissionSentModal: (state) => { state.submissionSentModal = false },

    openSubmissionApprovedModal: (state) => { state.submissionApprovedModal = true },
    closeSubmissionApprovedModal: (state) => { state.submissionApprovedModal = false },

    openSubmissionRejectedModal: (state) => { state.submissionRejectedModal = true },
    closeSubmissionRejectedModal: (state) => { state.submissionRejectedModal = false },

    openApprovalNotesModal: (state) => { state.approvalNotesModal = true },
    closeApprovalNotesModal: (state) => { state.approvalNotesModal = false },

    openRejectionNotesModal: (state) => { state.rejectionNotesModal = true },
    closeRejectionNotesModal: (state) => { state.rejectionNotesModal = false },

    openDeleteTimeEntryModal: (state) => { state.deleteTimeEntryModal = true },
    closeDeleteTimeEntryModal: (state) => { state.deleteTimeEntryModal = false },

    openTemplateReadyModal: (state, action: PayloadAction<any>) => {
      state.templateReadyModal = true
      state.templateText = action.payload.templateText || ''
    },
    closeTemplateReadyModal: (state) => { state.templateReadyModal = false },

    // ✅ Create Team Modal
    openCreateTeamModal: (state) => { state.createTeamModal = true },
    closeCreateTeamModal: (state) => { state.createTeamModal = false },

    // ✅ Add User Modal
    openAddUserModal: (state) => { state.addUserModal = true },
    closeAddUserModal: (state) => { state.addUserModal = false },

    // ✅ Edit User Modal
    openEditUserModal: (state) => { state.editUserModal = true },
    closeEditUserModal: (state) => { state.editUserModal = false },
    openAgileSprintModal: (state) => {
      state.agileSprintModal = true
    },
    closeAgileSprintModal: (state) => {
      state.agileSprintModal = false
    },
    openAgileSprintSuccessModal: (state) => {
      state.agileSprintSuccessModal = true
    },
    closeAgileSprintSuccessModal: (state) => {
      state.agileSprintSuccessModal = false
    },
    openEditSprintRetrospectiveModal: (state) => {
      state.editSprintRetrospectiveModal = true
    },
    closeEditSprintRetrospectiveModal: (state) => {
      state.editSprintRetrospectiveModal = false
    },
    openInvitationSentModal: (state) => {
      state.invitationSentModal = true
    },
    closeInvitationSentModal: (state) => {
      state.invitationSentModal = false
    },
    openEditEpicModal: (state) => {
      state.editEpicModal = true
    },
    closeEditEpicModal: (state) => {
      state.editEpicModal = false
    },
    openEditFeatureModal: (state) => {
      state.editFeatureModal = true
    },
    closeEditFeatureModal: (state) => {
      state.editFeatureModal = false
    },
    openEditStoryModal: (state) => {
      state.editStoryModal = true
    },
    closeEditStoryModal: (state) => {
      state.editStoryModal = false
    },
    openEditTaskModal: (state) => {
      state.editTaskModal = true
    },
    closeEditTaskModal: (state) => {
      state.editTaskModal = false
    },
  },
})

export const {
  openCreateAccountModal,
  closeCreateAccountModal,
  openEnterPriceSuccessModal,
  closeEnterPriceSuccessModal,
  openUploadTimeLogModal,
  closeUploadTimeLogModal,
  openReviewTimeLogModal,
  closeReviewTimeLogModal,
  openUploadSuccessModal,
  closeUploadSuccessModal,
  openUploadFailedModal,
  closeUploadFailedModal,
  openEditTimeEntryModal,
  closeEditTimeEntryModal,
  openAddTimeManualEntryModal,
  closeAddTimeManualEntryModal,
  openSubmissionSentModal,
  closeSubmissionSentModal,
  openSubmissionApprovedModal,
  closeSubmissionApprovedModal,
  openSubmissionRejectedModal,
  closeSubmissionRejectedModal,
  openApprovalNotesModal,
  closeApprovalNotesModal,
  openRejectionNotesModal,
  closeRejectionNotesModal,
  openDeleteTimeEntryModal,
  closeDeleteTimeEntryModal,
  openTemplateReadyModal,
  closeTemplateReadyModal,
  openCreateTeamModal,
  closeCreateTeamModal,
  openAddUserModal,
  closeAddUserModal,
  openEditUserModal,
  closeEditUserModal, // ✅ Added
  openAgileSprintModal,
  closeAgileSprintModal,
  openAgileSprintSuccessModal,
  closeAgileSprintSuccessModal,
  openEditSprintRetrospectiveModal,
  closeEditSprintRetrospectiveModal,
  openInvitationSentModal,
  closeInvitationSentModal,
  openEditEpicModal,
  closeEditEpicModal,
  openEditFeatureModal,
  closeEditFeatureModal,
  openEditStoryModal,
  closeEditStoryModal,
  openEditTaskModal,
  closeEditTaskModal,
} = modalSlice.actions

export default modalSlice.reducer
