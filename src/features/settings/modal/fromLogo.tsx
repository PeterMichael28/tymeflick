import { useState, useRef } from 'react'
import { Plus } from 'lucide-react'
import Button from '../../../components/button/button'
import { closeThemeCustomizerModal } from '../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'
import { setLogo } from '../../../redux/slice/logoSlice'

const FormLogo = () => {
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const droppedFile = e.dataTransfer.files?.[0]
    if (!droppedFile) return

    if (!['image/png', 'image/svg+xml'].includes(droppedFile.type)) {
      alert('Only PNG or SVG allowed')
      return
    }

    setFile(droppedFile)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const openFilePicker = () => {
    inputRef.current?.click()
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)
  }

  return (
    <div>
      <div className="font-bricolage flex flex-col gap-10 rounded-lg p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <span>
          <p className="text-base font-medium">Upload Logo</p>
          <p className="text-sm text-[#717182]">
            Upload your logo to pick your brand color
          </p>
        </span>

        {/* Upload Box */}
        <div
          className={`flex h-[140px] w-full items-center justify-center rounded-lg border border-dashed p-4 transition ${
            dragActive
              ? 'border-[#2B323B] bg-[#F5F5F6]'
              : 'border-[#D2D9DF] bg-white'
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={openFilePicker}
        >
          <input
            type="file"
            accept="image/png, image/svg+xml"
            ref={inputRef}
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* Default UI */}
          {!file && (
            <div className="flex flex-col items-center justify-center">
              <div className="flex size-11 items-center justify-center rounded-full bg-[#ECECF0]">
                <Plus className="text-[#717182]" />
              </div>
              <p className="font-inter mt-2 text-sm text-[#717182]">
                Drag & drop logo or Browse
              </p>
              <p className="font-inter text-sm text-[#717182]">
                PNG/SVG, max 2MB
              </p>
            </div>
          )}

          {/* Uploaded File UI */}
          {file && (
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium text-[#2B323B]">{file.name}</p>
              <p className="mt-1 text-xs text-[#717182]">
                Uploaded successfully
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <button
          className="w-full font-normal text-[#606060]"
          onClick={() => dispatch(closeThemeCustomizerModal())}
        >
          Cancel
        </button>
        <Button className="h-12 w-full"
          onClick={() => {
    if (file) {
      const fileUrl = URL.createObjectURL(file)
      dispatch(setLogo(fileUrl))  // Save logo to Redux
      dispatch(closeThemeCustomizerModal())
    }
  }}
        >Apply</Button>
      </div>
    </div>
  )
}

export default FormLogo
