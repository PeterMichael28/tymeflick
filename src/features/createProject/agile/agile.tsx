import IndexChecker from '../ui/checker/indexChecker'
import Input from '../ui/input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DropDown from '../ui/dropdown'
import ProjectChecker from '../ui/checker/projectChecker'
import { useState } from 'react'
import Feature from './ui/feature'
import Story from './ui/story'
import Task from './ui/task'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  projectName: '',
  client: '',
  sprintDuration: '',
  sprintCount: '',
  startDate: '',
  projectManager: '',
}
const validationSchema = Yup.object().shape({
  projectName: Yup.string().required('Project Name is required'),
  client: Yup.string().required('Client is required'),
  sprintDuration: Yup.string().required('Sprint Duration is required'),
  sprintCount: Yup.string().required('Sprint Count is required'),
  startDate: Yup.string().required('Start Date is required'),
  projectManager: Yup.string().required('Project Manager is required'),
})

const AgileIndex = () => {
  const navigate = useNavigate()
  const steps = ['Select Template', 'Configure Setup', 'Confirm']
  const stepList = ['Step 1', 'Step 2', 'Step 3']
  const [tab, setCurrentTab] = useState(0)
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
            Agile Project Setup – Iterative & Sprint-Based
          </p>
          <p className="text-[14px] font-normal text-[#8898AA]">
            Configure your iterative, sprint-based project
          </p>
        </div>
        <p className="font-bricolage text-[15px] font-bold">
          Basic Information
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
            // submit form
          }}
        >
          <Form className="grid grid-cols-2 gap-4">
            <Input label="Project Name" name="projectName" />
            <DropDown
              label="Client"
              options={[]}
              onChange={() => console.log}
              placeholder="TechCorp Inc."
              value=""
              className="w-full"
            />
            <DropDown
              label="Sprint Durations"
              options={['1 Weeks', '2 Weeks']}
              onChange={() => console.log}
              placeholder="2 Weeks"
              value=""
              className="w-full"
            />
            <Input label="Sprint Count" name="sprintCount" />
            <Input label="Start Date" name="startDate" type="date" />
            <DropDown
              label="Project Manager"
              options={[]}
              onChange={() => console.log}
              placeholder="John Doe"
              value=""
              className="w-full"
            />
          </Form>
        </Formik>

        <div className="mt-3">
          <p className="font-bricolage text-[15px] font-bold">
            Agile Ceremonies
          </p>
          <p className="text-[14px] font-normal text-[#8898AA]">
            {' '}
            Automatically generate Agile rituals and meetings
          </p>
          <div className="mt-3 flex justify-between gap-4">
            <ProjectChecker label="Daily Standup" onCheck={false} />
            <ProjectChecker label="Sprint Planning" onCheck={false} />
            <ProjectChecker label="Sprint Review" onCheck={false} />
            <ProjectChecker label="Sprint Retrospective" onCheck={false} />
          </div>
        </div>
        {tab === 0 && (
          <Feature
            onPrev={() => setCurrentTab(0)}
            onNext={() => setCurrentTab(1)}
          />
        )}
        {tab === 1 && (
          <Story
            onPrev={() => setCurrentTab(1)}
            onNext={() => setCurrentTab(2)}
          />
        )}
        {tab === 2 && (
          <Task
            onPrev={() => setCurrentTab(1)}
            onNext={() => setCurrentTab(2)}
          />
        )}

        <div className="mt-7 flex justify-between gap-5">
          <button
            className="font-bricolage flex-1 cursor-pointer font-bold text-[#404C59]"
            onClick={() => navigate('/create-project')}
          >
            Previous
          </button>
          <button
            className="bg-primary flex-1 rounded-lg py-4 font-bold text-white"
            onClick={() => navigate('/create-project/agile/created')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgileIndex
