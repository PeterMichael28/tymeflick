import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeUploadTimeLogModal } from '../../../../redux/slice/modalSlice'
import { openReviewTimeLogModal } from '../../../../redux/slice/modalSlice'

const UploadTimeLog = () => {
  const dispatch = useDispatch()
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => setIsDragging(false)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles(droppedFiles)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    setFiles(selectedFiles)
  }

  const handleClose = () => {
    dispatch(closeUploadTimeLogModal())
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="flex w-[500px] max-w-[90%] flex-col gap-5 rounded-lg bg-white p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="font-bricolage text-[26px] font-medium">
            {files.length ? 'Uploaded Time Log' : 'Upload Time Log'}
          </p>
          <button
            onClick={handleClose}
            className="text-2xl text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* If Files Are Uploaded */}
        {files.length > 0 ? (
          <div className="z-50 flex flex-col gap-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="border-primary z-50 flex items-center justify-between rounded-lg border bg-[#F5F0FA] p-2"
              >
                <div
                  className="flex items-center gap-2"
                  onClick={() => {
                    dispatch(openReviewTimeLogModal(file))
                    dispatch(closeUploadTimeLogModal())
                  }}
                >
                  {file.type === 'pdf' ? (
                    <img
                      src="icon/file type.svg"
                      alt="Icon "
                      className="size-5"
                    />
                  ) : (
                    <img
                      src="/icon/csv_9496460.png"
                      alt="Icon "
                      className="size-5"
                    />
                  )}
                  <div>
                    <p className="font-bold text-[#475367]">{file.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-[#98A2B3]">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                      <p className="text-xs text-[#98A2B3]">
                        {file.type || 'Unknown'}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setFiles((prev) => prev.filter((_, i) => i !== index))
                  }
                  className="cursor-pointer"
                >
                  <img src="/icon/bin.svg" alt="Cancel Button" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          // Upload Box
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed px-6 py-10 transition-all duration-300 ${
              isDragging ? 'border-[#1FC16B] bg-[#E9FFF2]' : 'border-[#D0D5DD]'
            }`}
          >
            <img
              src="/icon/file upload states.svg"
              alt="Upload Icon"
              className="h-10 w-10"
            />

            <label
              htmlFor="file-upload"
              className="flex cursor-pointer items-center gap-1 text-sm"
            >
              <p className="font-bold text-[#475367] underline">
                Click to upload
              </p>
              <p className="text-[#404C59]">or drag and drop</p>
            </label>

            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".csv"
              multiple
              onChange={handleFileChange}
            />

            <p className="text-xs text-[#98A2B3]">CSV or PDF (max. 20mb)</p>
          </div>
        )}

        <p className="text-grey900 text-[14px] leading-relaxed">
          Required columns: <span className="font-semibold">start_time</span>,{' '}
          <span className="font-semibold">end_time</span>,{' '}
          <span className="font-semibold">description</span>,{' '}
          <span className="font-semibold">project</span>,{' '}
          <span className="font-semibold">billable</span>
        </p>
      </div>
    </div>
  )
}

export default UploadTimeLog
