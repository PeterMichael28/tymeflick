import DropDown from './ui/dropdown'
import Input from '../../../components/ui/input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Hero from '../../../components/ui/hero'
import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'

const CreateNewTask = () => {
  const navigate = useNavigate()
  const intialValues = {
    title: '',
    assignedTo: '',
    status: '',
    priority: '',
    sprint: '',
    dueDate: '',
    description: '',
    acceptanceCriteria: '',
  }
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    assignedTo: Yup.string().required('Assigned To is required'),
    status: Yup.string().optional(),
    priority: Yup.string().optional(),
    sprint: Yup.string().optional(),
    dueDate: Yup.string().optional(),
    description: Yup.string().optional(),
    acceptanceCriteria: Yup.string().optional(),
  })
  return (
    <div>
      <Hero title="Projects" description="Manage, Edit and View Projects" />

      <div className="mt-4 flex flex-col gap-3 rounded-lg bg-white p-4">
        <div className="flex items-center gap-2" onClick={() => navigate(-1)}>
          <img src="/icon/Frame 1000008159.svg" alt="Icons" />
          <p className="text-grey900 font-inter font-normal">Back</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-[#FF8800] bg-[#FFDB431A] px-4 py-2">
              <p className="size-4 rounded bg-[#FF8800]"></p>
              <p className="text-xs text-[#FF8800]">Task</p>
            </div>
            <p className="font-bricolage text-lg font-bold">Create Task</p>
          </div>
          <p className="font-bricolage text-sm font-normal text-[#4F5E6E]">
            Connected to: User Story #1 - Browse products on mobile device
          </p>
        </div>

        <DropDown
          label="Connect to User Story"
          options={[
            {
              label: 'Epic 1 - E-commerce Platform Enhancement',
              value: 'epic1',
            },
            { label: 'Epic 2 - User Experience Enhancement', value: 'epic2' },
            { label: 'Epic 3 - Product Roadmap', value: 'epic3' },
          ]}
          value={intialValues.sprint}
          onChange={(e) => console.log(e)}
          placeholder="E-Commerce Platform Enhancement "
        />

        <Formik
          initialValues={intialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
            navigate('/create-project/agile/created')
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex gap-3">
              <Input
                type="text"
                label="Title"
                name="title"
                placeholder="Enter Title"
                isRequired
                height="small"
              />
              <DropDown
                placeholder="Select assignee"
                label="Assigned To"
                isRequired
                onChange={() => console.log()}
                value=""
                options={['User 1', 'User 2', 'User 3']}
                className="w-full"
              />
            </div>

            <div className="flex w-full gap-4">
              <DropDown
                placeholder="Select status"
                label="Status"
                onChange={() => console.log()}
                value=""
                options={['To Do', 'In Progress', 'Done']}
                className="w-full"
              />
              <DropDown
                placeholder="Select priority"
                label="Priority"
                onChange={() => console.log()}
                value=""
                options={['Low', 'Medium', 'High']}
                className="w-full"
              />
              <DropDown
                placeholder="Select sprint"
                label="Sprint"
                onChange={() => console.log()}
                value=""
                options={['Sprint 1', 'Sprint 2', 'Sprint 3']}
                className="w-full"
              />
            </div>
            <Input
              type="date"
              label="Due Date"
              name="dueDate"
              placeholder="Enter Due Date"
              height="small"
            />
            <Input
              type="text"
              label="Description"
              name="description"
              placeholder="Enter Description"
              height="large"
            />
            <Input
              type="text"
              label="Acceptance Criteria"
              name="acceptanceCriteria"
              placeholder="Enter Acceptance Criteria"
              height="large"
            />

            <div className="flex justify-end">
              <Button className="font-bricolage h-13 w-[10vw] text-sm font-normal">
                Save
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default CreateNewTask
