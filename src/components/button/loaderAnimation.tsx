const LoaderAnimation = () => {
  return (
    <div className="relative h-6 w-6">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="animate-spinner absolute top-1/2 left-1/2 h-[28%] w-0.5 origin-bottom rounded-full bg-[#0B54FF]"
          style={{
            transform: `rotate(${i * 30}deg) translate(-50%, -100%)`,
            animationDelay: `${i * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default LoaderAnimation
