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

  editTimeEntryModal: boolean
  selectedTimeEntry: TimeEntryPayload | null

  addTimeManualEntryModal: boolean
  selectedManualTimeEntry: TimeEntryPayload | null

  submissionSentModal: boolean
  submissionApprovedModal: boolean
  submissionRejectedModal: boolean

  // ✅ NEW — Approval & Rejection Notes Modals
  approvalNotesModal: boolean
  rejectionNotesModal: boolean
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
  selectedTimeEntry: null,

  addTimeManualEntryModal: false,
  selectedManualTimeEntry: null,

  submissionSentModal: false,
  submissionApprovedModal: false,
  submissionRejectedModal: false,

  // ✅ Defaults for new modals
  approvalNotesModal: false,
  rejectionNotesModal: false,
  templateReadyModal: false,
  templateText: '',
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openCreateAccountModal: (state) => {
      state.createAccountModal = true
    },
    closeCreateAccountModal: (state) => {
      state.createAccountModal = false
    },
    openEnterPriceSuccessModal: (state) => {
      state.enterPriceSuccessModal = true
    },
    closeEnterPriceSuccessModal: (state) => {
      state.enterPriceSuccessModal = false
    },
    openUploadTimeLogModal: (state) => {
      state.uploadTimeLogModal = true
    },
    closeUploadTimeLogModal: (state) => {
      state.uploadTimeLogModal = false
    },
    openReviewTimeLogModal: (state, action: PayloadAction<File | null>) => {
      state.reviewTimeLogModal = true
      state.selectedFile = action.payload
    },
    closeReviewTimeLogModal: (state) => {
      state.reviewTimeLogModal = false
      state.selectedFile = null
    },
    openUploadSuccessModal: (state) => {
      state.uploadSuccessModal = true
    },
    closeUploadSuccessModal: (state) => {
      state.uploadSuccessModal = false
    },
    openUploadFailedModal: (state) => {
      state.uploadFailedModal = true
    },
    closeUploadFailedModal: (state) => {
      state.uploadFailedModal = false
    },
    openEditTimeEntryModal: (state, action: PayloadAction<TimeEntryPayload | null>) => {
      state.editTimeEntryModal = true
      state.selectedTimeEntry = action.payload
    },
    closeEditTimeEntryModal: (state) => {
      state.editTimeEntryModal = false
      state.selectedTimeEntry = null
    },
    openAddTimeManualEntryModal: (state, action: PayloadAction<TimeEntryPayload | null>) => {
      state.addTimeManualEntryModal = true
      state.selectedManualTimeEntry = action.payload
    },
    closeAddTimeManualEntryModal: (state) => {
      state.addTimeManualEntryModal = false
      state.selectedManualTimeEntry = null
    },
    openSubmissionSentModal: (state) => {
      state.submissionSentModal = true
    },
    closeSubmissionSentModal: (state) => {
      state.submissionSentModal = false
    },
    openSubmissionApprovedModal: (state) => {
      state.submissionApprovedModal = true
    },
    closeSubmissionApprovedModal: (state) => {
      state.submissionApprovedModal = false
    },
    openSubmissionRejectedModal: (state) => {
      state.submissionRejectedModal = true
    },
    closeSubmissionRejectedModal: (state) => {
      state.submissionRejectedModal = false
    },

    // ✅ NEW — Approval Notes Modal
    openApprovalNotesModal: (state) => {
      state.approvalNotesModal = true
    },
    closeApprovalNotesModal: (state) => {
      state.approvalNotesModal = false
    },

    // ✅ NEW — Rejection Notes Modal
    openRejectionNotesModal: (state) => {
      state.rejectionNotesModal = true
    },
    closeRejectionNotesModal: (state) => {
      state.rejectionNotesModal = false
    },
    openTemplateReadyModal: (state, action: PayloadAction<any>) => {
      state.templateReadyModal = true
      state.templateText = action.payload.templateText || ''
    },
    closeTemplateReadyModal: (state) => {
      state.templateReadyModal = false
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
  // ✅ NEW EXPORTS
  openApprovalNotesModal,
  closeApprovalNotesModal,
  openRejectionNotesModal,
  closeRejectionNotesModal,
  openTemplateReadyModal,
  closeTemplateReadyModal,
} = modalSlice.actions

export default modalSlice.reducer
