
import ProjectTemplateCard from '../createProject/ui/projectTemplateCard'

const ProjectTemplate = () => {
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
    },
  ]
  return (
    <div className='bg-white p-4 rounded-lg'>
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
  )
}

export default ProjectTemplate
