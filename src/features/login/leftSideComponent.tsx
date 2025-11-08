const featureList1 = [
  'Track every second, effortlessly',
  'Know where your time goes',
  'Organized projects, clean reports',
  'Stay focused with active timer ',
]

const featureList2 = [
  'Smarter reminders, zero guilt',
  'Instant insights for smarter work',
  'Powerful reports, ready to export',
  'Plan projects and track progress',
]

const LeftSideComponent = () => {
  return (
    <div className="bg-primary flex w-full flex-col justify-center gap-4 p-14">
      <div>
        <h1 className="font-roboto text-[50px] font-medium text-white">
          TymeFlick
        </h1>
        <p className="font-inter text-[20px] font-normal text-white">
          Take Control of Your Time. Bill Smarter. Work Better.
        </p>
      </div>
      <img src="/image/Image Container.png" alt="Image" className="w-full" />

      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          {featureList1.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 font-medium text-white"
            >
              <p>•</p>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {featureList2.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 font-medium text-white"
            >
              <p>•</p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftSideComponent
