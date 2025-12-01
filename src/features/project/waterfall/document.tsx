import Button from "../../../components/button/button"
import { Download } from "lucide-react"

const Document = () => {
  return (
   <div>
      <div className="bg-[#F9F9F9] p-4 rounded-lg">
          <div className="flex justify-between items-center">
              <p className="text-[#2B323B] font-bricolage font-bold text-lg">Project Documents</p>
             <Button className="h-11 text-sm">
                    <img src="/icon/AddCross.svg" alt="" />
                   <p>Upload Document</p>
             </Button>
          </div>

          <div className="flex justify-between bg-white border-l-4 p-4 rounded-lg border-primary mt-4">
              <div className="flex gap-3 font-bricolage w-full">
                  <img src="/icon/file type.svg" alt="File" />
                  <span>
                       <p className="font-bold text-[#2B323B]">Software Requirements Specification(SRS)</p>
                       <p className="text-[#8898AA] font-normal">Uploaded June 15,2025. 23 MB</p>
                  </span>
                  
              </div>
              <div className="w-full justify-end flex">
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