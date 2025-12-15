import { configureStore } from '@reduxjs/toolkit'
import emailReducer from './slice/emailSlice'
import modalSliceReducer from './slice/modalSlice'
import logoSliceReducer from './slice/logoSlice'

export const store = configureStore({
  reducer: {
    email: emailReducer,
    modal: modalSliceReducer,
    logo: logoSliceReducer
  },
})

// Type helpers for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
