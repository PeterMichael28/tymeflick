import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom'
import Login from './page/login'
import Index from './features/login/Index'
import ResetPassword from './features/login/resetPassword'
import CheckEmail from './features/login/checkEmail'
import CreatePassword from './features/login/createPassword'
import PasswordUpdate from './features/login/passwordUpdate'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login">
          <Route index element={<Index />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="check-email" element={<CheckEmail />} />
          <Route path="create-password" element={<CreatePassword />} />
          <Route path='password-update' element={<PasswordUpdate/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
