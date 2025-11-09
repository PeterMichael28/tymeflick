import { useDispatch } from 'react-redux'
import { closeCreateAccountModal } from '../../../redux/slice/modalSlice'
import { useNavigate } from 'react-router-dom'
const list = [
  {
    image: '/icon/user-circle.svg',
    title: 'Individual Account',
    description: 'Solo users managing personal time',
    link: '/signup/individual/create-account',
  },
  {
    image: '/icon/Frame 1618869169.svg',
    title: 'Small Business Account',
    description: 'Micro-teams or freelancers',
    link: '/signup/small-business/create-account',
  },
  {
    image: '/icon/Frame 1618869169 (1).svg',
    title: 'Medium Business Account',
    description: 'Growing teams needing role-based access',
    link: '/signup/medium-business/create-account',
  },
  {
    image: '/icon/Frame 1618869169 (1).svg',
    title: 'Enterprise Account',
    description: 'Large organizations with advanced needs',
    link: '/signup/enterprise/create-account',
  },
]

const CreateAccount = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-7 md:w-[45vw]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-neutral600 font-bricolage md:text-[38px]">
            Create Your Tymelfick Account
          </p>
          <p className="text-neutral400 font-normal md:text-[20px]">
            Choose the right account type for your needs
          </p>
        </div>
        <div className="grid w-full gap-3 md:grid-cols-2">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex w-full cursor-pointer items-start gap-2 rounded-lg bg-[#F9F9F9] p-5"
              onClick={() => {
                dispatch(closeCreateAccountModal())
                if (item.link) navigate(item.link)
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-7 w-5 object-contain"
              />
              <div>
                <p className="text-neutral400 font-bricolage text-[14px] font-medium">
                  {item.title}
                </p>
                <p className="text-neutral400 font-bricolage text-[12px] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="text-neutral600 rounded-lg bg-[#F9F9F9] px-8 py-[21px] font-semibold md:px-16">
            Back
          </button>
          <button className="bg-primary rounded-lg px-8 py-[21px] font-semibold text-white md:px-12">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
