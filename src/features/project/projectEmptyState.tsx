import { useNavigate } from 'react-router-dom'
const ProjectEmptyState = () => {
  const navigate = useNavigate()

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      {/* Background image */}
      <img src="/image/image 8.png" alt="Background" className="w-[350px]" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <img src="/icon/image 7.svg" alt="Icon" className="w-[60px]" />

        <p className="text-sm text-[#4C4C4C]">No project found</p>

        <button
          className="bg-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white"
          onClick={() => navigate('/create-project')}
        >
          <img src="/icon/button-icon.svg" alt="Add Icon" />
          New project
        </button>
      </div>
    </div>
  )
}

export default ProjectEmptyState
