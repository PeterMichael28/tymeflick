import LeftSideComponent from '../features/login/leftSideComponent'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

const SignUp = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side */}
      <div className="hidden flex-1 p-4 md:flex">
        <LeftSideComponent />
      </div>
      {/* Right side */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-8">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/image/Background Vectors.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form area (content stays above) */}
        <div className="relative z-10 w-full p-5">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default SignUp
