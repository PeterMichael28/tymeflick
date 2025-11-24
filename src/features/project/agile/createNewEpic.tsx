import DropDown from './ui/dropdown'
import Input from '../../../components/ui/input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Hero from '../../../components/ui/hero'
import Button from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'

const CreateNewEpic = () => {
  const navigate = useNavigate()
  const intialValues = {
    title: '',
    assignedTo: '',
    status: '',
    priority: '',
    sprint: '',
    dueDate: '',
    description: '',
  }
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    assignedTo: Yup.string().required('Assigned To is required'),
    status: Yup.string().optional(),
    priority: Yup.string().optional(),
    sprint: Yup.string().optional(),
    dueDate: Yup.string().optional(),
    description: Yup.string().optional(),
  })
  return (
    <div>
      <Hero title="Projects" description="Manage, Edit and View Projects" />

      <div className="mt-4 flex flex-col gap-3 rounded-lg bg-white p-4">
        <div className="flex items-center gap-2" onClick={() => navigate(-1)}>
          <img src="/icon/Frame 1000008159.svg" alt="Icons" />
          <p className="text-grey900 font-inter font-normal">Back</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-primary flex items-center gap-2 rounded-lg border bg-[#F5F0FA] px-4 py-2">
            <p className="bg-primary size-4 rounded"></p>
            <p className="text-primary text-xs">Epic</p>
          </div>
          <p className="font-bricolage text-lg font-bold">Create New Epic</p>
        </div>
        <Formik
          initialValues={intialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form className="flex flex-col gap-4">
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
            />

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

            <div className="flex justify-end">
               <Button className='h-13 text-sm font-normal font-bricolage w-[10vw]'>Save</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default CreateNewEpic
