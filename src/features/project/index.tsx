import Hero from '../../components/ui/hero'
import ProjectEmptyState from './projectEmptyState'

const Project = () => {
  return (
    <div>
      <Hero title="Projects" description="Manage, Edit and View Projects" />

      <div className="mt-5 flex min-h-[calc(75vh-80px)] items-center justify-center rounded-lg bg-white">
        <ProjectEmptyState />
      </div>
    </div>
  )
}

export default Project
