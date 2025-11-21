import { X } from 'lucide-react'
import Button from '../../../components/button/button'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import { closeTemplateReadyModal } from '../../../redux/slice/modalSlice'

const TemplateReady = () => {
  const text = useSelector((state: RootState) => state.modal.templateText)
  console.log(text)
  const dispatch = useDispatch()

  return (
    <div className="absolute inset-0 bg-black/20">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex w-[40vw] flex-col gap-3 rounded-lg bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="font-bricolage text-[20px] font-bold">
              Template Ready to Use
            </p>
            <X onClick={() => dispatch(closeTemplateReadyModal())} />
          </div>
          <div className="text-grey900 flex font-normal">
            <p>
              You've selected the {' '}
              <button className="font-bold">{text} Project Template</button>.
              This will create an agile project with sprint planning, user
              stories, and iterative development cycles.
            </p>
          </div>
          <div>
            <p className="text-grey900 text-[17px] font-bold">
              What happens next:
            </p>
            <ul className="text-grey900 flex list-disc flex-col gap-2 pl-5">
              <li>Project structure will be created</li>
              <li>Template tasks will be added</li>
              <li>Team roles will be assigned</li>
              <li>Initial sprint will be planned</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="font-inter h-10 w-full font-semibold">
              Start Project
            </Button>
            <button
              className="font-inter font-normal text-[#606060]"
              onClick={() => dispatch(closeTemplateReadyModal())}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateReady
