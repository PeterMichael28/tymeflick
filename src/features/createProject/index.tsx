import IndexChecker from './ui/checker/indexChecker'
import ProjectTemplateCard from './ui/projectTemplateCard'

const CreateProject = () => {
  const steps = ['Select Template', 'Configure Setup', 'Confirm']
  const stepList = ['Step 1', 'Step 2', 'Step 3']

  const projectTemplates = [
    {
      title: 'Agile Project Template',
      text: 'AGILE',
      description:
        'Iterative delivery and flexibility with sprint-based development. Perfect for software development and dynamic projects.',
      list: [
        'Sprint Planning & Retrospectives',
        'User Stories & Epics',
        'Daily Stand-ups',
        'Flexible Scheduling',
      ],
      useTemplateLink: '/create-project/agile',
      viewDetailsLink: '/project-template/agile',
    },
    {
      title: 'Waterfall Project Template',
      text: 'Waterfall',
      description:
        'Linear and sequential approach for well-defined projects with clear requirements and deliverables.',
      list: [
        'Sequential Phases',
        'Fixed Milestones',
        'Documentation Focus',
        'Sign-off Checkpoints',
        'Structured Planning',
      ],
      useTemplateLink: '/create-project/waterfall',
      viewDetailsLink: '/project-template/waterfall',
    },
    {
      title: 'Hybrid Project Template',
      text: 'Hybrid',
      description:
        'Best of both worlds - Waterfall planning with Agile execution. Ideal for enterprise and transformation projects..',
      list: [
        'Structured Planning Phase',
        'Agile Execution Cycles',
        'Change Control',
        'Clear Handoffs',
        'Flexible Delivery',
      ],
      useTemplateLink: '/create-project/hybrid',
      viewDetailsLink: '/project-template/hybrid',
    },
  ]

  return (
    <div className="flex h-screen w-full flex-col gap-3 overflow-y-scroll">
      <div className="flex min-h-[calc(90vh-80px)] flex-col gap-2 rounded-lg bg-white p-5 pt-5">
        <div className="w-full">
          <div className="flex justify-between">
            {stepList.map((step, index) => (
              <div key={index} className="mb-2">
                <div className="text-neutral200 text-[10px] font-bold">
                  {step}
                </div>
              </div>
            ))}
          </div>
          <IndexChecker steps={steps} currentStep={1} />
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-inter text-[24px] font-bold">
              Choose Your Project Template{' '}
            </p>
            <p className="text-neutral200 text-[16px] font-normal">
              Select the methodology that best fits your project needs
            </p>
          </div>
          <div className="flex justify-between gap-5">
            {projectTemplates.map((template, index) => (
              <ProjectTemplateCard
                key={index}
                title={template.title}
                text={template.text}
                description={template.description}
                list={template.list}
                viewDetailsLink="#"
                useTemplateLink={template.useTemplateLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProject
