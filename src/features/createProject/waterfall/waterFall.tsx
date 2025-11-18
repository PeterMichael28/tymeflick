import IndexChecker from '../ui/checker/indexChecker'
import Input from '../ui/input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DropDown from '../ui/dropdown'
import ProjectChecker from '../ui/checker/projectChecker'
import PhaseManagement from './phaseManagement'
import { useNavigate } from 'react-router-dom'

const WaterFallIndex = () => {
  const steps = [
    'Select Template',
    'Configure Setup',
    'Preview Structure',
    'Confirm',
  ]
  const stepList = ['Step 1', 'Step 2', 'Step 3', 'Step 4']
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required('Project Name is required'),
    client: Yup.string().required('Client Name is required'),
    startDate: Yup.date().required('Start Date is required'),
    endDate: Yup.date().required('End Date is required'),
    projectManger: Yup.string().required('Project Manager Name is required'),
  })

  return (
    <div>
      <div className="mb-32 flex h-full flex-col gap-4 overflow-y-scroll rounded-lg bg-white p-5">
        <div className="w-full">
          <div className="flex justify-between">
            {stepList.map((step, index) => (
              <div key={index} className="mb-2">
                <div className="text-neutral200 text-[10px] font-bold">
                  {step}
                </div>
              </div>
            ))}
          </div>
          <IndexChecker steps={steps} currentStep={2} />
        </div>
        <div>
          <p className="font-inter text-[18px] font-bold">
            Waterfall Project Setup
          </p>
          <p className="text-[14px] font-normal text-[#8898AA]">
            Configure your phase-driven, linear project
          </p>
        </div>
        <Formik
          initialValues={{
            projectName: '',
            client: '',
            startDate: '',
            endDate: '',
            projectManager: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // your form submission logic here
            console.log(values)
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Project Name" name="projectName" type="text" />
              <Input label="Client Name" name="client" type="text" />
              <Input label="Start Date" name="startDate" type="date" />
              <Input label="End Date" name="endDate" type="date" />
            </div>
            <DropDown
              label="Project Manager"
              placeholder="projectManager"
              options={[
                { value: '3 months', label: '3 months' },
                { value: '6 months', label: '6 months' },
                { value: '9 months', label: '9 months' },
                { value: '12 months', label: '12 months' },
              ]}
              onChange={() => console.log()}
              value=""
            />
          </Form>
        </Formik>

        <div className="mt-3">
          <p className="font-bricolage text-[15px] font-bold">
            Project Settings
          </p>
          <p className="text-[14px] font-normal text-[#8898AA]">
            {' '}
            Automatically generate Agile rituals and meetings
          </p>
          <div className="mt-3 flex justify-between gap-4">
            <ProjectChecker label="Add milestone checkpoints" onCheck={false} />
            <ProjectChecker label="Add document deliverables" onCheck={false} />
            <ProjectChecker label="Add sign-off steps" onCheck={false} />
          </div>
        </div>

        <PhaseManagement />

        <div className="mt-7 flex justify-between gap-5">
          <button className="font-bricolage flex-1 font-bold text-[#404C59] cursor-pointer"
           onClick={() => navigate('/create-project')}
          >
            Previous
          </button>
          <button
            className="bg-primary flex-1 rounded-lg py-4 font-bold text-white cursor-pointer"
            onClick={() => navigate('/create-project/review-waterfall')}
          >
            Next
          </button>
        </div>

        {/* Your component implementation */}
      </div>
    </div>
  )
}

export default WaterFallIndex
