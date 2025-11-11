const snapList = [
  {
    image: '/deleteForProduction/image (4).png',
    time: '9:00am',
  },
  {
    image: '/deleteForProduction/image (5).png',
    time: '10:00am',
  },
  {
    image: '/deleteForProduction/image (6).png',
    time: '11:00am',
  },
  {
    image: '/deleteForProduction/image (4).png',
    time: '9:00am',
  },
  {
    image: '/deleteForProduction/image (5).png',
    time: '10:00am',
  },
  {
    image: '/deleteForProduction/image (6).png',
    time: '11:00am',
  },
]

const Snaps = () => {
  return (
    <div className="mt-4 rounded-lg bg-white p-4">
      <div className="mb-4 flex justify-between">
        <p className="font-bricolage text-[16px] font-bold">Recent Snapshots</p>
        <p className="font-bricolage text-primary text-[16px] font-bold">
          See All
        </p>
      </div>
      <div className="flex gap-3">
        {snapList.map((item, index) => (
          <div
            key={index}
            className="relative h-full w-full overflow-hidden rounded-lg"
          >
            <img
              src={item.image}
              alt={`snap-${index}`}
              className="h-full w-full object-cover"
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#FB3748] px-2 py-1 font-bold text-white">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Snaps
