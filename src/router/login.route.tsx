// routes/loginRoutes.ts
import Index from '../features/login/Index'
import ResetPassword from '../features/login/resetPassword'
import CheckEmail from '../features/login/checkEmail'
import CreatePassword from '../features/login/createPassword'
import PasswordUpdate from '../features/login/passwordUpdate'

export const loginRoutes = [
  { path: '', element: <Index /> },
  { path: 'reset-password', element: <ResetPassword /> },
  { path: 'check-email', element: <CheckEmail /> },
  { path: 'create-password', element: <CreatePassword /> },
  { path: 'password-update', element: <PasswordUpdate /> },
]
