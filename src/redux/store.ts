import { configureStore } from '@reduxjs/toolkit'
import emailReducer from './slice/emailSlice'
import modalSliceReducer from './slice/modalSlice'
import logoSliceReducer from './slice/logoSlice'
import authReducer from './slice/authSlice'

export const store = configureStore({
  reducer: {
    email: emailReducer,
    modal: modalSliceReducer,
    logo: logoSliceReducer,
    auth: authReducer,
  },
})

// Type helpers for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
