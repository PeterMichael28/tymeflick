import { useState } from 'react'
import { X } from 'lucide-react'
import Button from '../../../../components/button/button'
import { useDispatch } from 'react-redux'
import { closeEditSprintRetrospectiveModal } from '../../../../redux/slice/modalSlice'

type RetroSection = 'wentWell' | 'improve' | 'rootCause' | 'actionItems'

const EditSprintRetrospective = () => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeEditSprintRetrospectiveModal())
  }
  const [data, setData] = useState<Record<RetroSection, string[]>>({
    wentWell: [
      'Good team communication',
      'Stories completed on time',
      'Clear acceptance criteria',
    ],
    improve: [
      'Better communication',
      'More accurate estimations',
      'Clearer task ownership',
    ],
    rootCause: ['Unclear requirements', 'Poor planning led to delays'],
    actionItems: [
      'Use planning poker for estimation',
      'Set code review SLA',
      'Earlier design reviews',
    ],
  })

  const handleEdit = (section: RetroSection, index: number, value: string) => {
    const updated = [...data[section]]
    updated[index] = value

    setData({
      ...data,
      [section]: updated,
    })
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="flex w-[90%] max-w-4xl flex-col gap-4 rounded-lg bg-white p-5">
        <div className="flex items-center justify-between">
          <p className="font-bricolage text-lg font-bold text-[#404C59]">
            Edit Sprint 1 Retrospective
          </p>
          <X className="cursor-pointer text-2xl text-black" />
        </div>

        <div className="mt-4 grid grid-cols-4 gap-5">
          {/* Went Well */}
          <EditableList
            title="What Went Well"
            color="#1FC16B"
            section="wentWell"
            data={data}
            onEdit={handleEdit}
          />

          {/* Improve */}
          <EditableList
            title="What Could Improve"
            color="#FF8400"
            section="improve"
            data={data}
            onEdit={handleEdit}
          />

          {/* Root Cause */}
          <EditableList
            title="Root Cause Insights"
            color="#FF8400"
            section="rootCause"
            data={data}
            onEdit={handleEdit}
          />

          {/* Action Items */}
          <EditableList
            title="Action Items"
            color="#D00416"
            section="actionItems"
            data={data}
            onEdit={handleEdit}
          />
        </div>

        <div className="mt-4 flex w-full flex-col">
          <Button className="h-13" onClick={handleClose}>
            Save Edit
          </Button>
          <button
            className="font-bricolage h-13 text-lg font-bold text-[#404C59]"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditSprintRetrospective

/* ---------------- REUSABLE EDITABLE LIST COMPONENT ---------------- */

const EditableList = ({
  title,
  color,
  section,
  data,
  onEdit,
}: {
  title: string
  color: string
  section: RetroSection
  data: Record<RetroSection, string[]>
  onEdit: (section: RetroSection, index: number, value: string) => void
}) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="font-inter text-[16px] font-semibold" style={{ color }}>
        {title}
      </p>

      <div className="w-full rounded-lg border border-[#D2D9DF] p-4">
        <ul className="ml-3 list-disc space-y-2 text-xs text-[#4F5E6E]">
          {data[section].map((item, index) => (
            <li
              key={index}
              contentEditable
              suppressContentEditableWarning
              className="cursor-text rounded px-1 outline-none hover:bg-gray-100"
              onBlur={(e) =>
                onEdit(section, index, e.currentTarget.innerText.trim())
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  ;(e.currentTarget as HTMLElement).blur()
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
