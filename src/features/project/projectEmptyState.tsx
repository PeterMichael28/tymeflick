import { useNavigate } from "react-router-dom"
const ProjectEmptyState = () => {
    const navigate = useNavigate()

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">

      {/* Background image */}
      <img src="/image/image 8.png" alt="Background" className="w-[350px]" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">

        <img src="/icon/image 7.svg" alt="Icon" className="w-[60px]" />

        <p className="text-[#4C4C4C] text-sm">No project found</p>

        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm" onClick={() => navigate('/create-project')}>
          <img src="/icon/button-icon.svg" alt="Add Icon" />
          New project
        </button>

      </div>
    </div>
  )
}

export default ProjectEmptyState
