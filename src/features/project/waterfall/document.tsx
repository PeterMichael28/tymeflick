import Button from '../../../components/button/button'
import { Download } from 'lucide-react'

const Document = () => {
  return (
    <div>
      <div className="rounded-lg bg-[#F9F9F9] p-4">
        <div className="flex items-center justify-between">
          <p className="font-bricolage text-lg font-bold text-[#2B323B]">
            Project Documents
          </p>
          <Button className="h-11 text-sm">
            <img src="/icon/AddCross.svg" alt="" />
            <p>Upload Document</p>
          </Button>
        </div>

        <div className="border-primary mt-4 flex justify-between rounded-lg border-l-4 bg-white p-4">
          <div className="font-bricolage flex w-full gap-3">
            <img src="/icon/file type.svg" alt="File" />
            <span>
              <p className="font-bold text-[#2B323B]">
                Software Requirements Specification(SRS)
              </p>
              <p className="font-normal text-[#8898AA]">
                Uploaded June 15,2025. 23 MB
              </p>
            </span>
          </div>
          <div className="flex w-full justify-end">
            <Button className="h-13 text-sm">
              <Download />
              <p>Download Document</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Document
