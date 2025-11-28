import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'

const divList = [
  {
    number: '8',
    title: 'Team Members',
    color: '#3B7C0F',
    bgColor: '#AD85D626',
  },
  {
    number: '3',
    title: 'Active Projects',
    color: '#075F30',
    bgColor: '#1FC16B1A',
  },
  {
    number: '320h',
    title: 'Total Hours',
    color: '#5F005B',
    bgColor: '#FFCCFF66',
  },
  {
    number: 'Sarah Johnson',
    title: 'Manager',
    color: '#AD4B00',
    bgColor: '#FFDB431A',
  },
]

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
const TeamMember = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-3">
      <Button
        className="h-[50px] w-[15vw] text-sm"
        onClick={() => navigate('/invite-team-member')}
      >
        Invite user to project
      </Button>

      <div className="grid grid-cols-2 gap-4">
        {divList.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bgColor, color: item.color }}
            className="rounded-md"
          >
            <div style={{ padding: '10px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                {item.number}
              </div>
              <div>{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="font-bricolage text-lg font-bold">Team Members</p>
        <img src="/image/user-group.svg" alt="Icon" />
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

            <div className="flex gap-4">
              <p
                className={`px-4 py-2 ${item.role === 'Manager' ? 'rounded-full bg-[#CCDBFF] text-xs text-[#0B54FF]' : 'rounded-full bg-[#F2F0F5] text-xs text-[#4A4A4A]'}`}
              >
                {item.role}
              </p>
              <p
                className={`px-3 py-2 text-xs ${item.active ? 'rounded-full bg-[#1FC16B1A] text-[#036732]' : 'rounded-full bg-red-500/20 text-red-500'}`}
              >
                {item.active ? 'Active' : 'Inactive'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMember
