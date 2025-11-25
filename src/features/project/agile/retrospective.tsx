import Button from '../../../components/button/button'
import { useDispatch } from 'react-redux'
import { openEditSprintRetrospectiveModal } from '../../../redux/slice/modalSlice'

const Retrospective = () => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="flex flex-col rounded-lg border border-[#D2D9DF] p-5">
        <div className="flex items-center justify-between border-b border-[#D2D9DF] pb-5">
          <p className="text-primary font-bricolage text-[18px] font-bold">
            Sprint 1 Retrospective (June 1-14)
          </p>
          <Button
            className="font-inter h-11 text-xs font-semibold"
            onClick={() => dispatch(openEditSprintRetrospectiveModal())}
          >
            <img src="/icon/AddCross.svg" alt="Icons" />
            Edit Retrospectives
          </Button>
        </div>

        <div className="mt-4 flex justify-between gap-5">
          <div className="flex flex-col items-start gap-2">
            <p className="font-inter text-[16px] font-semibold text-[#1FC16B]">
              What Want Well
            </p>
            <ul className="ml-3 list-disc text-xs text-[#4F5E6E]">
              <li>Good team communciation</li>
              <li>Stories completed on time</li>
              <li>Clear acceptance criteria</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="font-inter text-[16px] font-semibold text-[#FF8400]">
              What Could Improve
            </p>
            <ul className="ml-3 list-disc text-xs text-[#4F5E6E]">
              <li>Good team communication</li>
              <li>Stories completed on time</li>
              <li>Clear acceptance criteria</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="font-inter text-[16px] font-semibold text-[#FF8400]">
              Root Cause Insights
            </p>
            <ul className="ml-3 list-disc text-xs text-[#4F5E6E]">
              <li>
                Explored why issues occurred (e.g., unclear requirements, poor
                planning)
              </li>
              <li>Helped uncover patterns or systemic challenges.</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="font-inter text-[16px] font-semibold text-[#D00416]">
              Action Items
            </p>
            <ul className="ml-3 list-disc text-xs text-[#4F5E6E]">
              <li>Use planning poker for estimation</li>
              <li>Set code review SLA</li>
              <li>Earlier design reviews</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-dashed border-[#8898AA] bg-[#FAF9FB] p-6">
        <p className="font-bricolage border-b border-[#D2D9DF] pb-5 text-[18px] font-bold text-[#404C59]">
          Sprint 2 Retrospective (June 15-21)
        </p>
        <div className="mt-4 flex w-full items-center justify-center">
          <p className="font-bricolage font-normal text-[#404C59]">
            Retrospective will be available after sprint completion
          </p>
        </div>
      </div>
    </>
  )
}

export default Retrospective
