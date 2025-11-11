

const snapList = [
    {
        image:'/deleteForProduction/image (4).png', time:'9:00am'
    },
    {
        image:'/deleteForProduction/image (5).png', time:'10:00am'
    },
    {
        image:'/deleteForProduction/image (6).png', time:'11:00am'
    },
    {
        image:'/deleteForProduction/image (4).png', time:'9:00am'
    },
    {
        image:'/deleteForProduction/image (5).png', time:'10:00am'
    },
    {
        image:'/deleteForProduction/image (6).png', time:'11:00am'
    },
   
]

const Snaps = () => {
  return (
    <div className="mt-4 bg-white p-4 rounded-lg">
      <div className="flex justify-between mb-4">
        <p className="font-bold text-[16px] font-bricolage">Recent Snapshots</p>
        <p className="font-bold text-[16px] font-bricolage text-primary">See All</p>
      </div>
      <div className="flex gap-3">
        {snapList.map((item, index) => (
          <div key={index} className="relative w-full h-full rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={`snap-${index}`}
              className="w-full h-full object-cover"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold px-2 py-1 rounded bg-[#FB3748] rounded-full ">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Snaps
