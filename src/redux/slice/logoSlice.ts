import { createSlice,  type PayloadAction } from '@reduxjs/toolkit'

interface LogoState {
  fileUrl: string | null
}

const initialState: LogoState = {
  fileUrl: null,
}

const logoSlice = createSlice({
  name: 'logo',
  initialState,
  reducers: {
    setLogo: (state, action: PayloadAction<string>) => {
      state.fileUrl = action.payload
    },
    removeLogo: (state) => {
      state.fileUrl = null
    },
  },
})

export const { setLogo, removeLogo } = logoSlice.actions
export default logoSlice.reducer
