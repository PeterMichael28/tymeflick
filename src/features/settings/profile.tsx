import { Formik, Form } from "formik"
import * as Yup from "yup"
import Input from "../../components/ui/input"
import DropDown from "../createProject/ui/dropdown"
import Button from "../../components/button/button"

const Profile = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required"),
    timezone: Yup.string().required("Timezone is required"),
    language: Yup.string().required("Language is required"),
  })

  const initialValues = {
    fullName: "",
    email: "",
    role: "",
    timezone: "",
    language: "",
  }

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form submitted:", values)
  }

  return (
    <div className="pt-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Profile Settings</p>
        <p className="text-gray-600">Manage your personal information and preferences</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="space-y-4">
            <div className="flex gap-3">
                 <Input
              name="fullName"
              label="Full Name"
              isRequired
              height="small"

            />
            <Input
              name="email"
              label="Email Address"
             isRequired
              height="small"
            />
            </div>
           <div className="flex gap-3">
              <DropDown
              label="Role"
              value={values.role}
              onChange={handleChange}
              options={["Admin", "Editor", "Viewer"]}
              placeholder="Admin"
              className="w-full"
            />
            <DropDown
              label="Timezone"
              value={values.timezone}
              onChange={handleChange}
              options={["GMT", "EST", "PST"]}
            placeholder="PST"
             className="w-full"
            />
           </div>
            <DropDown
              label="Language"
              value={values.language}
              onChange={handleChange}
              options={["English", "Spanish", "French"]}
            placeholder="English"
            />

          <div className="flex gap-3 ">
               <Button className="h-13 font-medium ">
                Save Settings
            </Button>
            <button className="bg-[#F2F0F5] px-17 font-medium  text-[#4A4A4A]  h-13 rounded-lg">
                 Reset
            </button>
          </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Profile
