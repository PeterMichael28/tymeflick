import Button from '../../../components/button/button'

const WelcomePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <img src="/icon/checkImage.svg" alt="" />
      <p className="text-officeBrow700 text-[26px] font-bold">
        🎉 Welcome to TymeFlick!
      </p>
      <p className="text-officeBrow700 text-center text-[16px] font-normal">
        Your 7-day free trial has started — enjoy full access to all features,
        no limits
      </p>
      <p className="text-officeBrow700 text-center text-[16px] font-normal">
        After your trial ends, you’ll need to subscribe to continue tracking
        time, managing projects, and exporting reports seamlessly. Start
        tracking your first task now — your productivity journey begins here.
      </p>
      <Button className="w-full">Continue</Button>
    </div>
  )
}

export default WelcomePage
