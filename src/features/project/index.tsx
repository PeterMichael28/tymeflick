import Hero from '../../components/ui/hero'
import ProjectEmptyState from './projectEmptyState'

const Project = () => {

  return (
    <div>
      <Hero title="Projects" description="Manage, Edit and View Projects" />

    <div className="min-h-[calc(75vh-80px)] bg-white rounded-lg flex items-center justify-center mt-5">
    <ProjectEmptyState />
</div>

    </div>
  )
}

export default Project
