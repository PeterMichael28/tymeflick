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

  // Already existing Edit Time Entry Modal
  editTimeEntryModal: boolean
  selectedTimeEntry: TimeEntryPayload | null

  // NEW — Add Time Manually Modal
  addTimeManualEntryModal: boolean
  selectedManualTimeEntry: TimeEntryPayload | null

  // ✅ NEW — Submission Sent Modal
  submissionSentModal: boolean
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

  // NEW default
  submissionSentModal: false,
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

    // Existing Edit Modal
    openEditTimeEntryModal: (
      state,
      action: PayloadAction<TimeEntryPayload | null>
    ) => {
      state.editTimeEntryModal = true
      state.selectedTimeEntry = action.payload
    },
    closeEditTimeEntryModal: (state) => {
      state.editTimeEntryModal = false
      state.selectedTimeEntry = null
    },

    // NEW — Add Time Manual Entry
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

    // ✅ NEW — Submission Sent Modal
    openSubmissionSentModal: (state) => {
      state.submissionSentModal = true
    },
    closeSubmissionSentModal: (state) => {
      state.submissionSentModal = false
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
  // ✅ NEW exports
  openSubmissionSentModal,
  closeSubmissionSentModal,
} = modalSlice.actions

export default modalSlice.reducer
