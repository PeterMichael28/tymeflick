import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ModalSlice {
  createAccountModal: boolean
  enterPriceSuccessModal: boolean
}

const initialState: ModalSlice = {
  createAccountModal: false,
  enterPriceSuccessModal: false,
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
  },
})

export const {
  openCreateAccountModal,
  closeCreateAccountModal,
  openEnterPriceSuccessModal,
  closeEnterPriceSuccessModal,
} = modalSlice.actions

export default modalSlice.reducer
