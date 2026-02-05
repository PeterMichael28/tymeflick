import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import Dashboard from './page/dashboard'
import AuthCallback from './page/AuthCallback'
import GlobalModal from './layout/globalModal'
import ProtectedRoute from './components/ProtectedRoute'

import { dashboardRoutes } from './router/dashboard.route'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalModal />
        <Toaster position="top-right" richColors closeButton />
        <Routes>
          {/* AUTH CALLBACK - Public route for code exchange */}
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* PROTECTED DASHBOARD */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
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
    </QueryClientProvider>
  )
}

export default App
