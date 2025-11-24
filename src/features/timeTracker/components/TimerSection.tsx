"use client";

import { useState } from "react";
import { Play, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DropDown from "../../project/ui/dropDown";
import Input from "../../createProject/ui/input";
import { Formik, Form } from 'formik'

export default function TimerSection() {
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-8 w-full">

      {/* Header Row */}
      <div className="flex items-center gap-2">
        <Clock size={18} strokeWidth={1.75} className="text-gray-800" />
        <span className="font-bricolage font-medium text-sm text-gray-900">
          Start Session
        </span>
      </div>

      {/* 🔹 NEW TOP RIGHT BUTTONS */}
      <div className="flex justify-end gap-3">
        {/* Admin Submissions */}
        <button className="flex items-center gap-2 border border-[#66CC33] text-[#66CC33] bg-white px-4 py-2 rounded-md text-xs font-medium hover:bg-[#E9F9E4]"
          onClick={() => navigate("/teamSubmissionForAdmin")}
        >
          <Users size={14} />
          Team Submissions (for admin)
        </button>

        {/* Member Submissions */}
        <button className="flex items-center gap-2 border border-[#66CC33] text-[#66CC33] bg-white px-4 py-2 rounded-md text-xs font-medium hover:bg-[#E9F9E4]"
          onClick={() => navigate("/teamSubmissions")}
        >
          <Users size={14} />
          Team Submissions
        </button>

        {/* Submit Week Time Log */}
        <button className="flex items-center gap-2 bg-[#66CC33] text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-[#57b028]"
          onClick={() => navigate("/submitWeeklyTimelog")}
        >
          <Clock size={14} />
          Submit Week Time Log
        </button>
      </div>

      

      {/* Timer Display */}
      <div className="flex flex-col items-center w-full">
        <p className="text-[#464E5F] font-semibold tracking-wider font-Epilogue text-[100px] leading-none">
        00:00:00
        </p>

        <span className="mt-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700 font-inter flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#464E5F] inline-block"></span>
          Stopped
        </span>
      </div>

      {/* Fields */}
      <div className="space-y-5 font-inter">
      </div>

      <div>
        <Formik
          initialValues={{  }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="space-y-5">  
            <div>
              <Input label="What are you working on?" name="Task Description" />
            </div>

            <div>              
              <label className="text-[13px] text-black font-medium">Client</label>
              <DropDown
                options={[
                  'All',
                  'ACME Corp',
                  'TechCorp Solutions',
                  'Internal',
                ]}
                value="Click to select"
                onChange={console.log}
                placeholder="Filter"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-[13px] text-black font-medium">Project</label>
              <DropDown
                options={[
                  'All',
                  'Website Redesign',
                  'Budget Analysis',
                  'Team Onboarding',
                  'Code Review',
                ]}
                value="Click to select"
                onChange={console.log}
                placeholder="Filter"
                className="w-full"
              />
            </div>
          </Form>
        </Formik>


      </div>

      {/* Billable */}
      <label className="flex items-center gap-3 cursor-pointer font-inter text-sm text-black">
        <input type="checkbox" className="h-4 w-4 accent-primary" />
        Billable <span className="font-semibold">$30/hour</span>
      </label>

      {/* Start Timer */}
      <button
        className="w-full bg-[#66C61C] transition text-white font-semibold text-sm py-4 rounded-md flex items-center justify-center gap-2 mt-1"
        onClick={() => setIsRunning(!isRunning)}
      >
        <Play className="w-4 h-4" />
        Start Timer
      </button>

    </div>
  );
}
