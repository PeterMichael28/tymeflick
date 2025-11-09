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
import Dashboard from './page/dashboard'
import SignUp from './page/signUp'
import CreateIndividualAccount from './features/signUp/individualAccount/createIndividualAccount'
import GlobalModal from './layout/globalModal'
import CreateIndividualPassword from './features/signUp/individualAccount/createPassword'
import ConfirmIndividualEmail from './features/signUp/individualAccount/confirmEmail'
import WelcomePage from './features/signUp/individualAccount/welcomePage'
import CreateSmallBusinessAccount from './features/signUp/smallBusiness/createSmallBusinessAccount'
import CreateAdminAccount from './features/signUp/smallBusiness/createAdminAccount'
import CreateSmallBusinessPassword from './features/signUp/smallBusiness/createPassword'
import ConfirmSmallBusinessEmail from './features/signUp/smallBusiness/confirmEmail'
import CreateMediumBusinessAccount from './features/signUp/mediumBussiness/createAccount'
import CreateAdminMeduminBusinessAccount from './features/signUp/mediumBussiness/createAdminAccount'
import CreateMediumBusinessPassword from './features/signUp/mediumBussiness/createPassword'
import ConfirmMediumBusinessEmail from './features/signUp/mediumBussiness/confirmEmail'
import CreateEnterpriseAccount from './features/signUp/enterpriseAccount/createAccount'
import CreateContactPersonaccount from './features/signUp/enterpriseAccount/createContactPersonaccount'
import SpecificRequirement from './features/signUp/enterpriseAccount/specificRequirement'
import DashBoardIndex from './features/dashboard'

const App = () => {
  return (
    <Router>
      <GlobalModal />
      <Routes>
        <Route element={<Login />} path="/login">
          <Route index element={<Index />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="check-email" element={<CheckEmail />} />
          <Route path="create-password" element={<CreatePassword />} />
          <Route path="password-update" element={<PasswordUpdate />} />
        </Route>
        <Route element={<SignUp />} path="/signup">
          <Route path="individual">
            <Route
              path="create-account"
              element={<CreateIndividualAccount />}
            />
            <Route
              path="create-password"
              element={<CreateIndividualPassword />}
            />
            <Route path="confirm-email" element={<ConfirmIndividualEmail />} />
            <Route path="welcome-email" element={<WelcomePage />} />
          </Route>
          <Route path="small-business">
            <Route
              path="create-account"
              element={<CreateSmallBusinessAccount />}
            />
            <Route
              path="create-admin-account"
              element={<CreateAdminAccount />}
            />
            <Route
              path="create-password"
              element={<CreateSmallBusinessPassword />}
            />
            <Route
              path="confirm-email"
              element={<ConfirmSmallBusinessEmail />}
            />
          </Route>

          <Route path="medium-business">
            <Route
              path="create-account"
              element={<CreateMediumBusinessAccount />}
            />
            <Route
              path="create-admin-account"
              element={<CreateAdminMeduminBusinessAccount />}
            />
            <Route
              path="create-password"
              element={<CreateMediumBusinessPassword />}
            />
            <Route
              path="confirm-email"
              element={<ConfirmMediumBusinessEmail />}
            />
          </Route>
          <Route path="enterprise">
            <Route
              path="create-account"
              element={<CreateEnterpriseAccount />}
            />
            <Route
              path="create-contact-person-account"
              element={<CreateContactPersonaccount />}
            />
            <Route
              path="specific-requirements"
              element={<SpecificRequirement />}
            />
          </Route>
        </Route>
        <Route path="/" element={<Dashboard />}>
          <Route element={<DashBoardIndex />} index />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
