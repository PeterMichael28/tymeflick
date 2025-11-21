import { Outlet } from 'react-router-dom'
import Hero from '../../components/ui/hero'

const CreateProjectLayout = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero
        title="Create New Project"
        description="Choose your methodology and configure your project setup"
      />
      <Outlet />
    </div>
  )
}

export default CreateProjectLayout
