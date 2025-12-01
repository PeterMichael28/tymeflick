'use client'

import { useState } from 'react'
import { Play, Clock, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import DropDown from '../../project/ui/dropDown'
import Input from '../../createProject/ui/input'
import { Formik, Form } from 'formik'

export default function TimerSection() {
  const [isRunning, setIsRunning] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="w-full space-y-8 rounded-lg border border-gray-200 bg-white p-6">
      {/* Header Row */}
      <div className="flex items-center gap-2">
        <Clock size={18} strokeWidth={1.75} className="text-gray-800" />
        <span className="font-bricolage text-sm font-medium text-gray-900">
          Start Session
        </span>
      </div>

      {/* 🔹 NEW TOP RIGHT BUTTONS */}
      <div className="flex justify-end gap-3">
        {/* Admin Submissions */}
        <button
          className="flex cursor-pointer items-center gap-2 rounded-md border border-[#66CC33] bg-white px-4 py-2 text-xs font-medium text-[#66CC33] hover:bg-[#E9F9E4]"
          onClick={() => navigate('/teamSubmissionForAdmin')}
        >
          <Users size={14} />
          Team Submissions (for admin)
        </button>

        {/* Member Submissions */}
        <button
          className="flex cursor-pointer items-center gap-2 rounded-md border border-[#66CC33] bg-white px-4 py-2 text-xs font-medium text-[#66CC33] hover:bg-[#E9F9E4]"
          onClick={() => navigate('/teamSubmissions')}
        >
          <Users size={14} />
          Team Submissions
        </button>

        {/* Submit Week Time Log */}
        <button
          className="flex cursor-pointer items-center gap-2 rounded-md bg-[#66CC33] px-4 py-2 text-xs font-medium text-white hover:bg-[#57b028]"
          onClick={() => navigate('/submitWeeklyTimelog')}
        >
          <Clock size={14} />
          Submit Week Time Log
        </button>
      </div>

      {/* Timer Display */}
      <div className="flex w-full flex-col items-center">
        <p className="font-Epilogue text-[100px] leading-none font-semibold tracking-wider text-[#464E5F]">
          00:00:00
        </p>

        <span className="font-inter mt-2 flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          <span className="inline-block h-2 w-2 rounded-full bg-[#464E5F]"></span>
          Stopped
        </span>
      </div>

      {/* Fields */}
      <div className="font-inter space-y-5"></div>

      <div>
        <Formik
          initialValues={{}}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form className="space-y-5">
            <div>
              <Input label="What are you working on?" name="Task Description" />
            </div>

            <div>
              <label className="text-[13px] font-medium text-black">
                Client
              </label>
              <DropDown
                options={['All', 'ACME Corp', 'TechCorp Solutions', 'Internal']}
                value="Click to select"
                onChange={console.log}
                placeholder="Filter"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-[13px] font-medium text-black">
                Project
              </label>
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
      <label className="font-inter flex cursor-pointer items-center gap-3 text-sm text-black">
        <input type="checkbox" className="accent-primary h-4 w-4" />
        Billable <span className="font-semibold">$30/hour</span>
      </label>

      {/* Start Timer */}
      <button
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-[#66C61C] py-4 text-sm font-semibold text-white transition"
        onClick={() => setIsRunning(!isRunning)}
      >
        <Play className="h-4 w-4" />
        Start Timer
      </button>
    </div>
  )
}
