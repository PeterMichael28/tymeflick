import Button from '../../components/button/button'
import { openAddUserModal } from '../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'
const TeamManagement = () => {
  const dispatch = useDispatch()
  const teamMember = [
    {
      firstName: 'Bassey',
      lastName: 'Johnson',
      title: 'Project Manager',
      role: 'Manager',
      active: true,
    },
    {
      firstName: 'Sarah',
      lastName: 'Johnson',
      title: 'Frontend and Backend developers',
      role: 'Member',
      active: false,
    },
    {
      firstName: 'Jessica',
      lastName: 'Johnson',
      title: 'Frontend and Backend developers',
      role: 'Manager',
    },
    {
      firstName: 'Jane',
      lastName: 'Johnson',
      title: 'Frontend and Backend developers',
      role: 'Manager',
    },
  ]
  return (
    <div className="space-y-3 pt-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Team Management</p>
        <p className="text-gray-600">Manage team members and permissions</p>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between gap-2">
          <span className="font-bricolage w-full rounded-md bg-[#AD85D626] p-4 text-[#3B7C0F]">
            <p className="text-[24px] font-bold">12</p>
            <p className="text-sm">Total Users</p>
          </span>
          <span className="font-bricolage w-full rounded-md bg-[#1FC16B1A] p-4 text-[#3B7C0F]">
            <p className="text-[24px] font-bold">3</p>
            <p className="text-sm">Managers</p>
          </span>
        </div>
        <div className="font-bricolage w-full rounded-md bg-[#FFCCFF66] p-4 text-[#5F005B]">
          <p className="text-[24px] font-bold">1</p>
          <p className="text-sm">Admins</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {teamMember.map((item, index) => (
          <div className="flex justify-between bg-[#F9F9F9] p-4" key={index}>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-md bg-[#3370FF] text-sm font-bold text-white">
                <p>{item.firstName[0]}</p>
                <p>{item.lastName[0]}</p>
              </span>
              <div>
                <p className="font-bricolage text-sm font-bold text-[#101928]">
                  {item.firstName} {item.lastName}
                </p>
                <p className="text-xs text-[#404C59]">{item.title}</p>
              </div>
            </div>

            <div className="font-bricolage flex gap-4 text-sm font-bold">
              <p className="text-primary">View Profile</p>
              <p className="text-[#D00416]">Deactivate</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Button
          className="mt-3 h-13 font-medium"
          onClick={() => dispatch(openAddUserModal())}
        >
          Invite New User
        </Button>
      </div>
    </div>
  )
}

export default TeamManagement
