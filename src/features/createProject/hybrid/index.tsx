import IndexChecker from '../ui/checker/indexChecker'
import Input from '../ui/input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DropDown from '../ui/dropdown'
import { ChevronDown } from 'lucide-react'
import { Calendar } from 'lucide-react'
import PhaseManagement from './phaseManagement'
import { useState } from 'react'
import AgileCeremonies from './ui/agileCeremonies'
import Feature from './ui/feature'
import Story from './ui/story'
import Task from './ui/task'
import { useNavigate } from 'react-router-dom'

const Hybrid = () => {
  const [tab, setCurrentTab] = useState(0)
  const navigate = useNavigate()
  const steps = [
    'Select Template',
    'Configure Setup',
    'Preview Structure',
    'Confirm',
  ]
  const stepList = ['Step 1', 'Step 2', 'Step 3', 'Step 4']
  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required('Project Name is required'),
    client: Yup.string().required('Client Name is required'),
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
            Hybrid Project Setup
          </p>
          <p className="text-[14px] font-normal text-[#8898AA]">
            Plan first, execute iteratively
          </p>
        </div>

        <Formik
          initialValues={{
            projectName: '',
            client: '',
            projectManager: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Simulate form submission
            console.log('Form submitted:', values)
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Input
                label="Project Name"
                name="projectName"
                type="text"
                placeholder="Enter Project Name"
              />
              <Input
                label="Client Name"
                name="client"
                type="text"
                placeholder="Enter Client Name"
              />
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

        <div className="bg-[#F9F9F9] p-4">
          <div className="flex justify-between">
            <p className="font-bricolage text-[16px] font-bold">
              Waterfall Planning - Phase Management
            </p>
            <ChevronDown />
          </div>
          <div className="mt-3 flex justify-between gap-3 rounded-md bg-white">
            <span className="flex w-full flex-col gap-2">
              <label
                htmlFor=""
                className="font-inter font-normal text-[#101928]"
              >
                Planning Start Date
              </label>
              <div className="flex w-full justify-between rounded-md border border-[#D0D5DD] p-1.5">
                <button className="font-bricolage font-normal text-[#2B323B]">
                  23/06/2025
                </button>
                <Calendar />
              </div>
            </span>
            <span className="flex w-full flex-col gap-2">
              <label
                htmlFor=""
                className="font-inter font-normal text-[#101928]"
              >
                Planning End Date
              </label>
              <div className="flex w-full justify-between rounded-md border border-[#D0D5DD] p-1.5">
                <button className="font-bricolage font-normal text-[#2B323B]">
                  23/06/2025
                </button>
                <Calendar />
              </div>
            </span>
          </div>

          <PhaseManagement />
        </div>
        {tab === 0 && (
          <AgileCeremonies
            onPrev={() => setCurrentTab(0)}
            onNext={() => setCurrentTab(1)}
          />
        )}
        {tab === 1 && (
          <Feature
            onPrev={() => setCurrentTab(1)}
            onNext={() => setCurrentTab(2)}
          />
        )}
        {tab === 2 && (
          <Story
            onPrev={() => setCurrentTab(2)}
            onNext={() => setCurrentTab(3)}
          />
        )}
        {tab === 4 && (
          <Task
            onPrev={() => setCurrentTab(3)}
            onNext={() => setCurrentTab(4)}
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
            className="bg-primary flex-1 cursor-pointer rounded-lg py-4 font-bold text-white"
            onClick={() => navigate('/create-project/hybrid/preview')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hybrid
