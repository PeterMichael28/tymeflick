import { configureStore } from '@reduxjs/toolkit'
import emailReducer from './slice/emailSlice'

export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
})

// Type helpers for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
