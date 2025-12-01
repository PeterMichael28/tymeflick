import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../../../../../components/ui/input'
import { closeEditStoryModal } from '../../../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'

const Details = () => {
  const dispatch = useDispatch()
  const handleCloseModal = () => dispatch(closeEditStoryModal())
  const intialValues = {
    assignedTo: '',
    status: '',
    priority: '',
    sprint: '',
    description: '',
  }
  const validationSchema = Yup.object({
    assignedTo: Yup.string().required('Assigned To is required'),
    status: Yup.string().optional(),
    priority: Yup.string().optional(),
    sprint: Yup.string().optional(),
    description: Yup.string().optional(),
  })
  const comments = [
    {
      name: 'Maria Kim',
      time: '1 hour ago',
      text: 'Making good progress on this task. Should be completed by end of day.',
    },
    {
      name: 'Maria Kim',
      time: '1 hour ago',
      text: 'Making good progress on this task. Should be completed by end of day.',
    },
    {
      name: 'Maria Kim',
      time: '1 hour ago',
      text: 'Making good progress on this task. Should be completed by end of day.',
    },
  ]
  return (
    <div className="hide-scrollbar h-[65vh] overflow-y-scroll">
      <Formik
        initialValues={intialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log()}
      >
        <Form className="flex flex-col gap-2">
          <Input
            label="Assigned To"
            name="assignedTo"
            type="text"
            placeholder="Enter Assigned To"
            height="small"
            isRequired
          />
          <div className="flex gap-3">
            <Input
              label="Status"
              name="status"
              type="text"
              placeholder="Enter Status"
              height="small"
            />
            <Input
              label="Priority"
              name="priority"
              type="text"
              placeholder="Enter Priority"
              height="small"
            />
            <Input
              label="Sprint"
              name="sprint"
              type="text"
              placeholder="Enter Sprint"
              height="small"
            />
          </div>
          <Input
            label="Description"
            name="description"
            type="text"
            placeholder="Enter Description"
            height="medium"
          />

          <div>
            <p className="font-bricolage font-normal text-[#4F5E6E]">
              Acceptance Criteria
            </p>
            <div className="rounded-lg border border-[#D2D9DF] p-4 text-sm text-[#4F5E6E]">
              <p>Mobile esponsiveness</p>
              <ul className="list-disc p-2">
                <li>
                  The product listing page adjusts layout and components to fit
                  various mobile screen sizes (e.g., iPhone, Android devices).
                  Product Grid/List View
                </li>
                <li>
                  Products are displayed in a scrollable grid or list view with
                  thumbnail, title, price, and brief description visible.
                  Tap-to-View Details
                </li>
                <li>
                  Tapping a product opens the product detail page with full
                  information, images, and “Add to Cart” option. Search & Filter
                  Functionality
                </li>
                <li>
                  Users can search for products and apply filters (e.g.,
                  category, price range) from their mobile device.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bricolage font-normal text-[#101928]">Comment</p>
            <div className="flex h-[20vh] flex-col gap-2 overflow-y-scroll">
              {comments.map((items, index) => (
                <div
                  key={index}
                  className="font-bricolage flex flex-col gap-2 rounded-lg bg-[#FAF9FB] p-2"
                >
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold">{items.name}</p>
                    <p className="text-xs">{items.time}</p>
                  </div>
                  <p className="text-sm">{items.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* <p>Add comment</p> */}
            <Input
              label="Add Comment"
              name="comment"
              type="text"
              placeholder="Enter Comment"
              height="medium"
            />
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

export default Details
