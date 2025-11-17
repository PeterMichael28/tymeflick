import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

type IndexCheckerProps = {
  steps: string[]
  currentStep: number
}

const IndexChecker = ({ steps, currentStep }: IndexCheckerProps) => {
  // Track which steps should animate in
  const [animatedStep, setAnimatedStep] = useState(0)

  useEffect(() => {
    if (currentStep > 0) {
      let step = 0
      const interval = setInterval(() => {
        step += 1
        setAnimatedStep(step)
        if (step >= currentStep) clearInterval(interval)
      }, 800) // 300ms delay between steps
      return () => clearInterval(interval)
    }
  }, [currentStep])

  return (
    <div className="relative w-full">
      {/* Step labels */}
      <div className="absolute -top-6 left-0 flex w-full justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className="font-bricolage flex justify-center text-center text-[12px] font-bold"
          >
            {step}
          </div>
        ))}
      </div>

      {/* Circles + Connector */}
      <div className="relative mt-6 flex items-center justify-between">
        {/* Base gray line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gray-300 z-0" />

        {/* Animated primary progress line */}
        <div
          className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-primary z-0 transition-all duration-500"
          style={{
            width:
              steps.length === 1
                ? '0%'
                : `${(animatedStep / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((_, index) => {
          const isCompleted = index < animatedStep
          const isActive = index === currentStep

          return (
            <div key={index} className="relative z-10 flex items-center">
              {/* White mask */}
              <div className="absolute z-0 h-5 w-5 rounded-full bg-white" />

              {/* Circle */}
              <div
                className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                  isCompleted
                    ? 'bg-primary border-primary scale-110 text-white'
                    : isActive
                      ? 'border-primary text-primary scale-105 animate-pulse'
                      : 'border-gray-400 text-gray-400'
                } `}
              >
                {isCompleted && <Check size={15} />}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IndexChecker
