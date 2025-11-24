import Hero from "../../../components/ui/hero"
import { useNavigate } from "react-router-dom"
import Input from '../../../components/ui/input'
import { Formik, Form, Field, type FieldProps } from 'formik'
import * as Yup from 'yup'
import Button from '../../../components/button/button'
import DropDown from './ui/dropdown'

const NewSprint = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Hero title="Projects" description="Manage, Edit and View Projects" />

      <div className="mt-4 flex flex-col gap-3 rounded-lg bg-white p-4">
        <div className="flex items-center gap-2" onClick={() => navigate(-1)}>
          <img src="/icon/Frame 1000008159.svg" alt="Icons" />
          <p className="text-grey900 font-inter font-normal">Back</p>
        </div>

        <p className="font-bricolage text-lg font-bold">New Sprint Planning</p>

        <Formik
          initialValues={{
            sprintname: "",
            sprintDuration: "",
            customSprintDuration: "",
            sprintStart: "",
            sprintEnd: "",
            sprintGoal: "",
          }}

          validationSchema={Yup.object({
            sprintname: Yup.string().required("Sprint Name is required"),
            sprintDuration: Yup.string().required("Select a duration"),
            customSprintDuration: Yup.string().optional(),
            sprintStart: Yup.string().required("Start Date is required"),
            sprintEnd: Yup.string().required("End Date is required"),
            sprintGoal: Yup.string().required("Objective is required"),
          })}

          onSubmit={(values) => {
            console.log(values)
            navigate("/add-work-item")
          }}
        >
          {({ values }) => (
            <Form className="flex flex-col gap-4">
              <Input
                label="Sprint Name"
                name="sprintname"
                type="text"
                height="small"
                isRequired
              />

              {/* Sprint Duration */}
              <div className="flex justify-between items-center gap-4">
                <div className="flex flex-col gap-5 flex-1">
                  <p className="text-grey900 font-bricolage text-[16px]">
                    Sprint Duration
                  </p>

                  <Field name="sprintDuration">
                    {({ field }: FieldProps) => (
                      <div className="flex justify-between">

                        {/** 1 WEEK */}
                        <span className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="sprintDuration"
                            value="1"
                            checked={field.value === "1"}
                            onChange={field.onChange}
                            className="accent-primary"
                          />
                          <p>1 week</p>
                        </span>

                        {/** 2 WEEKS */}
                        <span className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="sprintDuration"
                            value="2"
                            checked={field.value === "2"}
                            onChange={field.onChange}
                            className="accent-primary"
                          />
                          <p>2 weeks</p>
                        </span>

                        {/** 3 WEEKS */}
                        <span className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="sprintDuration"
                            value="3"
                            checked={field.value === "3"}
                            onChange={field.onChange}
                            className="accent-primary"
                          />
                          <p>3 weeks</p>
                        </span>

                        {/** CUSTOM */}
                        <span className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="sprintDuration"
                            value="custom"
                            checked={field.value === "custom"}
                            onChange={field.onChange}
                            className="accent-primary"
                          />
                          <p>Custom</p>
                        </span>
                      </div>
                    )}
                  </Field>
                </div>

                {/* Custom Duration */}
                <div className="flex-1">
                  <Input
                    label="Custom Sprint Duration"
                    name="customSprintDuration"
                    type="text"
                    height="small"
                    disabled={values.sprintDuration !== "custom"}
                  />
                </div>
              </div>

              {/* Dates */}
              <Input label="Start Date" name="sprintStart" type="date" height="small" />
              <Input label="End Date" name="sprintEnd" type="date" height="small" />

              {/* Objective */}
              <Input
                label="Objective"
                name="sprintGoal"
                type="text"
                height="large"
              />

              {/* Team */}
              <DropDown
                placeholder="Click to select"
                label="Team Assignment"
                value=""
                onChange={() => console.log()}
                options={[]}
              />

              {/* Submit */}
              <div className="flex justify-end">
                <Button className="h-14" type="submit">
                  Next
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default NewSprint
