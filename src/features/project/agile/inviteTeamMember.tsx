import { useState } from 'react'
import Hero from '../../../components/ui/hero'
import Button from '../../../components/button/button'
import { useDispatch } from 'react-redux'
import { openInvitationSentModal } from '../../../redux/slice/modalSlice'
import { useNavigate } from 'react-router-dom'

const InviteTeamMember = () => {
  const [emails, setEmails] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addEmails = (value: string) => {
    const newEmails = value
      .split(',')
      .map((email) => email.trim())
      .filter((email) => email.length > 0)

    if (newEmails.length > 0) {
      setEmails((prev) => [...prev, ...newEmails])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addEmails(inputValue)
      setInputValue('')
    }
  }

  const removeEmail = (emailToRemove: string) => {
    setEmails(emails.filter((e) => e !== emailToRemove))
  }

  return (
    <div className="flex flex-col gap-4">
      <Hero title="Projects" description="Manage, Edit and View Projects" />

      <div className="flex justify-between rounded-lg bg-white p-4">
        <div className="flex gap-3">
          <img
            src="/icon/Frame 1000008159.svg"
            alt="Icon"
            className="size-9 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <div>
            <p className="font-bricolage text-[20px] font-medium">
              ACME Website Redesign
            </p>
            <p className="text-[14px] font-normal text-[#2B323B]">
              Complete redesign of the company website with modern UI/UX
              principles and responsive design.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] p-3">
            <p className="font-inter text-xs font-bold text-[#4A4A4A]">
              Start Date
            </p>
            <p className="font-inter text-xs font-normal text-[#4A4A4A]">
              01/06/2025
            </p>
          </div>
          <div className="flex gap-2 rounded-md border-[0.5px] border-[#D2D9DF] bg-[#FAF9FB] p-3">
            <p className="font-inter text-xs font-bold text-[#4A4A4A]">
              End Date
            </p>
            <p className="font-inter text-xs font-normal text-[#4A4A4A]">
              02/06/2025
            </p>
          </div>
        </div>
      </div>

      {/* INVITE BOX */}
      <div className="flex flex-col gap-3 rounded-lg bg-white p-4">
        <p className="font-bricolage text-xl font-bold">Invite Team Members</p>

        <span className="font-bricolage flex text-lg text-[#2B323B]">
          <p>Add people to </p>
          <p className="font-bold">”Sprint Title”</p>
        </span>

        <div className="flex flex-col gap-2">
          {/* MULTI EMAIL INPUT */}
          <span className="flex flex-col gap-2">
            <label
              htmlFor="Email"
              className="font-bricolage font-normal text-[#101928]"
            >
              Email Addresses
            </label>

            <div className="flex flex-wrap gap-2 rounded-lg border border-[#D0D5DD] p-2">
              {emails.map((email, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-[#B6E3FF] bg-[#F0F9FF] px-3 py-1 text-sm text-[#026AA2]"
                >
                  {email}
                  <button
                    onClick={() => removeEmail(email)}
                    className="font-bold text-[#026AA2] hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}

              <input
                type="text"
                id="Email"
                value={inputValue}
                placeholder="Enter email addresses separated by commas"
                className="flex-1 p-2 outline-none"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={(e) => {
                  addEmails(e.target.value)
                  setInputValue('')
                }}
              />
            </div>

            <p className="text-sm text-[#8898AA]">
              Separate multiple emails with commas or press Enter
            </p>
          </span>

          {/* MESSAGE */}
          <span className="flex flex-col gap-2">
            <label className="font-bricolage font-normal text-[#101928]">
              Personal Message (Optional)
            </label>
            <textarea
              placeholder="Hi I’d like you to join my project."
              className="resize-none rounded-lg border border-[#D0D5DD] p-3"
            ></textarea>
          </span>
        </div>

        <div className="mt-2 flex justify-end gap-4">
          <button className="h-[60px] rounded-md bg-[#F2F0F5] px-9 font-medium">
            Cancel
          </button>
          <Button
            type="submit"
            className="h-[60px] font-medium"
            onClick={() => dispatch(openInvitationSentModal())}
          >
            Send Invite
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InviteTeamMember
