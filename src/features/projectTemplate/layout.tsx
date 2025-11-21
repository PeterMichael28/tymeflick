import { Outlet } from 'react-router-dom'
import Hero from '../../components/ui/hero'

const CreateProjectTemplateLayout = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero
        title="Project Templates"
        description="Create and manage reusable project templates to streamline your workflow and ensure consistency across projects."
      />
      <Outlet />
    </div>
  )
}

export default CreateProjectTemplateLayout
