import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './page/login'
import SignUp from './page/signUp'
import Dashboard from './page/dashboard'
import GlobalModal from './layout/globalModal'

import { loginRoutes } from './router/login.route'
import { signupRoutes } from './router/signup.route'
import { dashboardRoutes } from './router/dashboard.route'

const App = () => {
  return (
    <Router>
      <GlobalModal />
      <Routes>
        {/* LOGIN */}
        <Route path="/login" element={<Login />}>
          {loginRoutes.map((r, i) => (
            <Route key={i} path={r.path} element={r.element} />
          ))}
        </Route>

        {/* SIGNUP */}
        <Route path="/signup" element={<SignUp />}>
          {/* Individual */}
          <Route path="individual">
            {signupRoutes.individual.map((r, i) => (
              <Route key={i} path={r.path} element={r.element} />
            ))}
          </Route>

          {/* Small Business */}
          <Route path="small-business">
            {signupRoutes.small.map((r, i) => (
              <Route key={i} path={r.path} element={r.element} />
            ))}
          </Route>

          {/* Medium Business */}
          <Route path="medium-business">
            {signupRoutes.medium.map((r, i) => (
              <Route key={i} path={r.path} element={r.element} />
            ))}
          </Route>

          {/* Enterprise */}
          <Route path="enterprise">
            {signupRoutes.enterprise.map((r, i) => (
              <Route key={i} path={r.path} element={r.element} />
            ))}
          </Route>
        </Route>

        {/* DASHBOARD */}
        <Route path="/" element={<Dashboard />}>
          {dashboardRoutes.map((r, i) =>
            r.children ? (
             <Route key={i} path={r.path} element={r.element}>
              {r.children.map((c, j) => (
                <Route key={j} path={c.path} element={c.element} />
              ))}
            </Route>

            ) : (
              <Route key={i} path={r.path} element={r.element} />
            )
          )}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
