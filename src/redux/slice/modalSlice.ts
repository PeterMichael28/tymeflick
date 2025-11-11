import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ModalSlice {
  createAccountModal: boolean
  enterPriceSuccessModal: boolean
  uploadTimeLogModal: boolean
  reviewTimeLogModal: boolean
  selectedFile: File | null
  uploadSuccessModal: boolean
  uploadFailedModal: boolean
}

const initialState: ModalSlice = {
  createAccountModal: false,
  enterPriceSuccessModal: false,
  uploadTimeLogModal: false,
  reviewTimeLogModal: false,
  selectedFile: null,
  uploadSuccessModal: false,
  uploadFailedModal: false,
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
} = modalSlice.actions

export default modalSlice.reducer
