"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import {
  closeAddTimeManualEntryModal,
  // openSaveEntrySuccessModal
} from "../../../../redux/slice/modalSlice";
import Button from "../../../../components/button/button";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";

const AddManualEntryModal = () => {
  const dispatch = useDispatch();

  const entry = useSelector(
    (state: RootState) => state.modal.selectedManualTimeEntry
  );

  const [formData, setFormData] = useState({
    date: entry?.date || "",
    startTime: entry?.startTime || "",
    endTime: entry?.endTime || "",
    description: entry?.description || "",
    client: entry?.client || "",
    project: entry?.project || "",
    billable: entry?.billable ?? true,
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveEntry = () => {
    console.log("Manual Entry Saved:", formData);
    dispatch(closeAddTimeManualEntryModal());
    // dispatch(openSaveEntrySuccessModal());
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center overflow-y-auto">
      <div className="bg-white w-[420px] md:w-[480px] p-6 rounded-xl flex flex-col gap-5">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold font-bricolage uppercase">
            ADD MANUAL ENTRY
          </p>
          <p
            className="cursor-pointer text-xl"
            onClick={() => dispatch(closeAddTimeManualEntryModal())}
          >
            ✕
          </p>
        </div>

        {/* Date */}
        <div>
          <label className="text-sm font-medium">Date</label>
          <div className="relative mt-1">
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>
        </div>

        {/* Start & End Time */}
        <div className="grid grid-cols-2 gap-3">
          {["startTime", "endTime"].map((field) => (
            <div key={field}>
              <label className="text-sm font-medium">
                {field === "startTime" ? "Start Time" : "End Time"}
              </label>
              <div className="relative mt-1">
                <input
                  type="time"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={(formData as any)[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Duration */}
        <div>
          <label className="text-sm font-medium">Duration</label>
          <input
            disabled
            value="Auto Calculated based on inputted time"
            className="w-full px-3 py-2 border rounded-lg text-gray-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            placeholder="What did you work on?"
            className="w-full px-3 py-2 border rounded-lg resize-none"
            value={formData.description}
            onChange={(e) =>
              handleChange("description", e.target.value)
            }
          />
        </div>

        {/* Client */}
        <div>
          <label className="text-sm font-medium">Client</label>
          <select
            className="w-full px-3 py-2 border rounded-lg"
            onChange={(e) => handleChange("client", e.target.value)}
          >
            <option>Select Client</option>
          </select>
        </div>

        {/* Project */}
        <div>
          <label className="text-sm font-medium">Project</label>
          <select
            className="w-full px-3 py-2 border rounded-lg"
            onChange={(e) => handleChange("project", e.target.value)}
          >
            <option>Select Project</option>
          </select>
        </div>

        {/* Billable */}
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={formData.billable}
            onChange={(e) => handleChange("billable", e.target.checked)}
            className="accent-[#4CAF50]"
          />
          Billable
          <span className="text-gray-700">$30/hour</span>
        </label>

        {/* ACTION BUTTONS */}
        <Button
          className="h-[48px] w-full"
          onClick={handleSaveEntry}
        >
          Save Entry
        </Button>

        <button
          className="text-gray-500 w-full py-2 rounded-lg hover:bg-gray-100"
          onClick={() => dispatch(closeAddTimeManualEntryModal())}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddManualEntryModal;
