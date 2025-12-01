import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../../../../../components/ui/input'
import { closeEditStoryModal } from '../../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'
import DropDown from '../../ui/dropdown'

const StoryPlanning = () => {
  const dispatch = useDispatch()
  const handleCloseModal = () => dispatch(closeEditStoryModal())
  const intialValues = {
    title: '',
    startDate: '',
    endDate: '',
    featureAttchedto: '',
  }
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    startDate: Yup.date().optional(),
    endDate: Yup.date().optional(),
    featureAttchedto: Yup.string().optional(),
  })
  return (
    <div>
      <Formik
        initialValues={intialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log()}
      >
        <Form className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Input
              label="User Story Title"
              name="title"
              type="text"
              placeholder="Enter Title"
              height="small"
              isRequired
            />
            <DropDown
              label="Epic Attached to"
              options={[]}
              onChange={() => console}
              value=""
              placeholder="#1 E-commerce Platform Enhancement"
              className="w-full"
            />
          </div>
          <div className="flex gap-3">
            <Input
              label="Start Date"
              name="startDate"
              type="date"
              placeholder="Enter Start Date"
              height="small"
            />
            <Input
              label="End Date"
              name="endDate"
              type="date"
              placeholder="Enter End Date"
              height="small"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-grey900 font-bricolage flex gap-2 text-[16px] font-normal">
              Epic Progress
            </p>
            <div className="flex flex-col gap-1 rounded-lg bg-[#FAF9FB] p-2">
              <span className="font-bricolage flex gap-1 text-xs font-normal">
                <p>Created:</p>
                <p>January 15, 2025</p>
              </span>
              <span className="font-bricolage flex gap-1 text-xs font-normal">
                <p>Updated: </p>
                <p>January 15, 2025</p>
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-[#66C61C] py-3 text-sm font-bold text-white"
            onClick={handleCloseModal}
          >
            Save and Continue
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default StoryPlanning
