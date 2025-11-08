import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const naviagte = useNavigate()
  return (
    <div className='flex justify-center items-center h-screen gap-4'>
        <p className='text-primary text-3xl'>The Dashboard isnt ready yet please go to the </p>
        <button onClick={() => naviagte('/login')} className='px-14 py-2 border cursor-pointer border-primary rounded-lg text-officeBrow text-lg' >
             login
        </button>
      
    </div>
  )
}

export default Dashboard
