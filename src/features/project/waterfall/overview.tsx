import { ArrowRight } from 'lucide-react'
import LoaderAnimation from '../../../components/button/loaderAnimation'

const WaterFallOverview = () => {
  return (
    <div className="font-bricolage flex flex-col gap-4">
      <div className="mt-3 flex w-full items-center gap-4 text-white">
        {/* Requirements */}
        <button className="w-full rounded-md bg-[#1FC16B] px-6 py-4 font-bold">
          Requirements
        </button>

        <ArrowRight className="size-5 shrink-0 text-black" />

        {/* Design */}
        <button className="w-full rounded-md bg-[#1FC16B] px-6 py-4 font-bold">
          Design
        </button>

        <ArrowRight className="size-5 shrink-0 text-black" />

        {/* Implementation */}
        <button className="w-full rounded-md bg-[#FFCE55] px-6 py-4 font-bold text-black">
          Implementation
        </button>

        <ArrowRight className="size-5 shrink-0 text-black" />

        {/* Testing */}
        <button className="w-full rounded-md bg-[#F8F8F8] px-6 py-4 font-bold text-black">
          Testing
        </button>

        <ArrowRight className="size-5 shrink-0 text-black" />

        {/* Deployment */}
        <button className="w-full rounded-md bg-[#F8F8F8] px-6 py-4 font-bold text-black">
          Deployment
        </button>
      </div>

      <div className="mt-5 flex justify-between gap-5">
        <div className="flex flex-col justify-between bg-[#F8F8F8] p-4">
          <span>
            <p className="font-bold text-black">Project Information</p>
            <p className="font-normal">Description</p>
          </span>
          <p className="font-normal">
            Migrate legacy systems to modern cloud infrastructure following
            strict waterfall phases.
          </p>
          <div className="flex gap-6">
            <span>
              <p className="font-bold text-black">Start Date</p>
              <p className="font-normal">01/03/2025</p>
            </span>
            <span>
              <p className="font-bold text-black">Deadline</p>
              <p className="font-normal">01/03/2025</p>
            </span>
          </div>
        </div>

        <div className="flex-1 rounded-lg border-3 border-dashed border-[#3370FF] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="-mt-3 rounded-full bg-[#F8F8F8EE]">
                <LoaderAnimation />
              </span>
              <p className="font-bricolage mt- font-bold">Project Stats</p>
            </div>
            <div className="flex gap-2 rounded-full bg-[#F8F8F8] p-2">
              <img src="/image/clock.svg" alt="Icon" />
              <p className="font-normal">2 weeks left</p>
            </div>
          </div>
          <p className="font-bricolage mt-4 font-bold">Team Memeber</p>
          <div className="mt-4 flex items-center">
            <img
              className="-ml-4 h-14 w-14 first:ml-0"
              src="/deleteForProduction/image1.svg"
              alt="Icon"
            />
            <img
              className="-ml-4 h-14 w-14"
              src="/deleteForProduction/image2.svg"
              alt="Icon"
            />
            <img
              className="-ml-4 h-14 w-14"
              src="/deleteForProduction/image3.svg"
              alt="Icon"
            />
            <img
              className="-ml-4 h-14 w-14"
              src="/deleteForProduction/image4.svg"
              alt="Icon"
            />

            <div className="-ml-3 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-[#3370FF]">
              <img src="/icon/plus.svg" alt="Plus" className="h-8 w-8" />
            </div>
          </div>

          <div>
            <div className="mt-4 flex justify-between">
              <p className="font-inter text-[14px] font-medium">Progress</p>
              <p className="font-inter text-[14px] font-medium">65%</p>
            </div>

            {/* Progress bar background */}
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              {/* Actual progress */}
              <div
                className="h-full rounded-full bg-[#0B54FF]"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="mt-4 flex justify-between">
              <p className="font-inter text-[14px] font-medium">Time Budget</p>
              <p className="font-inter text-[14px] font-medium">
                180h / 400h used
              </p>
            </div>
            {/* Progress bar background */}
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              {/* Actual progress */}
              <div
                className="h-full rounded-full bg-[#FFB600]"
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-[#FFB6001A] p-5">
        <p className="font-bold text-[#FF5100]">Waterfall Structure</p>
        <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 text-[#FF5100]">
          <li>Sequential phases with clear dependencies</li>
          <li>Formal sign-offs and milestone reviews</li>
          <li>Comprehensive documentation at each phase</li>
          <li>Fixed scope and timeline</li>
        </ul>
      </div>
    </div>
  )
}

export default WaterFallOverview
