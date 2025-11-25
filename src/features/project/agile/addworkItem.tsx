import Hero from "../../../components/ui/hero";
import { Search, ChevronDown } from "lucide-react";
import DropDown from "../ui/dropDown";
import { useState } from "react";
import Button from "../../../components/button/button";
import { useNavigate } from "react-router-dom";
import { openAgileSprintModal } from "../../../redux/slice/modalSlice"
import { useDispatch } from "react-redux"

// --- Type Definitions ---
type WorkItem = {
  type: "Epic" | "Feature" | "User story" | "Task";
  title: string;
  deadline: string;
  status: "High" | "Low" | "In Progress" | string;
};

// --- Initial Data ---
const list: WorkItem[] = [
  { type: "Epic", title: "Epic Project", deadline: "Due - 25 June", status: "In Progress" },
  { type: "Feature", title: "Feature Project", deadline: "Due - 28 June", status: "Low" },
  { type: "User story", title: "Bug Project", deadline: "Due - 30 June", status: "High" },
  { type: "Task", title: "Task Project", deadline: "Due - 30 June", status: "In Progress" },
  { type: "Task", title: "Bug Project", deadline: "Due - 30 June", status: "Low" },
  { type: "Feature", title: "Feature Project", deadline: "Due - 28 June", status: "High" },
];

const AddworkItem = () => {
  const dispatch = useDispatch();
  const [workItems, setWorkItems] = useState<WorkItem[]>(list);
  const [assigned, setAssigned] = useState<WorkItem[]>([]);
  const [dragItem, setDragItem] = useState<WorkItem | null>(null);
  const navigate = useNavigate();


  // --- Drag Start ---
  const handleDragStart = (item: WorkItem) => setDragItem(item);

  // --- Drop Handlers ---
  const handleDropToAssigned = () => {
    if (!dragItem) return;
    setAssigned((prev) => [...prev, dragItem]);
    setWorkItems((prev) => prev.filter((i) => i.title !== dragItem.title));
    setDragItem(null);
  };

  const handleDropToWorkItems = () => {
    if (!dragItem) return;
    setWorkItems((prev) => [...prev, dragItem]);
    setAssigned((prev) => prev.filter((i) => i.title !== dragItem.title));
    setDragItem(null);
  };

  // --- Click Handlers (optional) ---
  const moveToAssigned = (item: WorkItem) => {
    setAssigned((prev) => [...prev, item]);
    setWorkItems((prev) => prev.filter((i) => i.title !== item.title));
  };

  const moveToWorkItems = (item: WorkItem) => {
    setWorkItems((prev) => [...prev, item]);
    setAssigned((prev) => prev.filter((i) => i.title !== item.title));
  };


  return (
    <div>
      {/* Hero */}
      <Hero title="Projects" description="Manage, Edit and View Projects" />

      {/* Project Info */}
      <div className="bg-white flex justify-between p-4 mt-4 rounded-lg">
        <div className="flex gap-4">
          <img src="/icon/Frame 1000008159.svg" alt="Icons" className="size-9" onClick={() => navigate(-1)} />
          <div>
            <p className="text-[20px] font-medium font-bricolage">ACME Website Redesign</p>
            <p className="text-[#2B323B] font-normal font-bricolage">
              Complete redesign of the company website with modern UI/UX principles and responsive design.
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex p-3 bg-[#FAF9FB] rounded-md border-[0.5px] border-[#D2D9DF] text-xs font-bricolage gap-2">
            <p className="font-bold">Start Date:</p>
            <p>01/01/2022</p>
          </div>
          <div className="flex p-3 bg-[#FAF9FB] rounded-md border-[0.5px] border-[#D2D9DF] text-xs font-bricolage gap-2">
            <p className="font-bold">Deadline:</p>
            <p>03/31/2022</p>
          </div>
        </div>
      </div>

      {/* Add Work Items Section */}
      <div className="mt-4 bg-white p-4 rounded-lg ">
        <p className="text-xl font-bricolage font-bold">Add Work Items</p>
        <div className="flex items-center w-[35vw] gap-3 mt-2">
          <span className="flex border border-[#D0D5DD] p-2 rounded-md flex-row-reverse items-center gap-2 w-full">
            <input type="text" placeholder="Search" className="w-full" />
            <Search size={18} className="ml-2 text-[#667185]" />
          </span>
          <DropDown placeholder="All Items" value="" onChange={() => console.log()} options={[]} className="w-[40%]" />
        </div>

          {/* Work Items + Assigned */}
      <div className="flex gap-6 justify-between mt-5">
        {/* Work Items List */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropToWorkItems}
          className="bg-[#FAF9FB] p-2 w-[35vw] rounded-lg min-h-[300px] h-[60vh] overflow-y-scroll hide-scrollbar"
        >
          <div className="flex justify-between border-b pb-2 border-[#E5E7EB]">
            <p className="text-[#2B323B] font-medium text-sm">Work Items</p>
            <p className="bg-black rounded-full text-white size-4 text-center text-xs">{workItems.length}</p>
          </div>
          <div className="mt-3 flex flex-col gap-4">
            {workItems.map((item, index) => (
              <div
                key={index}
                draggable
                onDragStart={() => handleDragStart(item)}
                onClick={() => moveToAssigned(item)}
                className="bg-white p-4 rounded-md font-inter flex flex-col gap-3 cursor-pointer"
              >
                <div
                  className={`flex justify-between ${
                    item.type === "Epic"
                      ? "text-[#66C61C]"
                      : item.type === "Feature"
                      ? "text-[#0B54FF]"
                      : item.type === "User story"
                      ? "text-[#036732]"
                      : "text-[#FF8800]"
                  }`}
                >
                  <p className="text-sm font-semibold">{item.type}</p>
                  <ChevronDown />
                </div>
                <p className="text-[#4F5E6E] font-semibold text-sm">{item.title}</p>
                <p className="text-[#4F5E6E] font-normal text-sm">{item.deadline}</p>
                <span className="text-sm flex items-center gap-2">
                  <p
                    className={`size-2 rounded-full ${
                      item.status === "High"
                        ? "bg-[#FB3748]"
                        : item.status === "Low"
                        ? "bg-[#0B54FF]"
                        : item.status === "In Progress"
                        ? "bg-[#036732]"
                        : "bg-[#FF8800]"
                    }`}
                  />
                  <p
                    className={`${
                      item.status === "High"
                        ? "text-[#FB3748]"
                        : item.status === "Low"
                        ? "text-[#0B54FF]"
                        : item.status === "In Progress"
                        ? "text-[#036732]"
                        : "text-[#FF8800]"
                    }`}
                  >
                    {item.status}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Assigned to Sprint */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropToAssigned}
          className="bg-[#FAF9FB] p-2 w-[60vw] rounded-lg  h-[60vh] overflow-y-scroll hide-scrollbar"
        >
          <div className="flex justify-between border-b pb-2 border-[#E5E7EB]">
            <p className="text-[#2B323B] font-medium text-sm">Assigned to sprint</p>
            <p className="bg-black rounded-full text-white size-4 text-center text-xs">{assigned.length}</p>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {assigned.map((item, index) => (
              <div
                key={index}
                draggable
                onDragStart={() => handleDragStart(item)}
                onClick={() => moveToWorkItems(item)}
                className="bg-white p-4 rounded-md font-inter flex flex-col gap-3 cursor-pointer"
              >
                <div
                  className={`flex justify-between ${
                    item.type === "Epic"
                      ? "text-[#66C61C]"
                      : item.type === "Feature"
                      ? "text-[#0B54FF]"
                      : item.type === "User story"
                      ? "text-[#036732]"
                      : "text-[#FF8800]"
                  }`}
                >
                  <p className="text-sm font-semibold">{item.type}</p>
                  <ChevronDown />
                </div>
                <p className="text-[#4F5E6E] font-semibold text-sm">{item.title}</p>
                <p className="text-[#4F5E6E] font-normal text-sm">{item.deadline}</p>
                <span className="text-sm flex items-center gap-2">
                  <p
                    className={`size-2 rounded-full ${
                      item.status === "High"
                        ? "bg-[#FB3748]"
                        : item.status === "Low"
                        ? "bg-[#0B54FF]"
                        : item.status === "In Progress"
                        ? "bg-[#036732]"
                        : "bg-[#FF8800]"
                    }`}
                  />
                  <p
                    className={`${
                      item.status === "High"
                        ? "text-[#FB3748]"
                        : item.status === "Low"
                        ? "text-[#0B54FF]"
                        : item.status === "In Progress"
                        ? "text-[#036732]"
                        : "text-[#FF8800]"
                    }`}
                  >
                    {item.status}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end gap-4">
        <button className="bg-[#F2F0F5] px-15 rounded-md font-bold font-bricolage">
            Cancel
        </button>
        <Button className="h-13 font-bricolage " onClick={() => dispatch(openAgileSprintModal())}>
            Create Sprint
        </Button>

      </div>

        
      </div>

    
    </div>
  );
};

export default AddworkItem;
