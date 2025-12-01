type ItemRow = {
  itemType: string
  title: string
  'Assigned To'?: string
  status?: string
  Priority?: string
  Sprint?: string
  DueDate?: string
  Features?: ItemRow[]
  Stories?: ItemRow[]
  Tasks?: ItemRow[]
  [k: string]: any
}

export type TaskType = {
  id: string
  title: string
  description: string
  priority: 'High' | 'Low' | 'Medium'
  status: 'Todo' | 'In Progress' | 'Done' | string
  date: string
}
// helpers
const assignees = [
  'John Doe',
  'Jane Smith',
  'Mark Lee',
  'Emily Davis',
  'James King',
]
const statuses = ['To-Do', 'In Progress', 'Completed']
const priorities = ['Low', 'Medium', 'High']
const sprints = ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4']

const randomItem = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)]
const randomDate = (start = 2025, end = 2026) =>
  `${Math.floor(Math.random() * 12 + 1)
    .toString()
    .padStart(2, '0')}/${Math.floor(Math.random() * 28 + 1)
    .toString()
    .padStart(2, '0')}/${Math.floor(Math.random() * (end - start) + start)}`

// generate tasks
const generateTasks = (count = 2): ItemRow[] =>
  Array.from({ length: count }).map((_, i) => ({
    itemType: 'Task',
    title: `Task ${i + 1}`,
    'Assigned To': randomItem(assignees),
    status: randomItem(statuses),
    Priority: randomItem(priorities),
    Sprint: randomItem(sprints),
    DueDate: randomDate(),
  }))

// generate stories
const generateStories = (count = 2): ItemRow[] =>
  Array.from({ length: count }).map((_, i) => ({
    itemType: 'Story',
    title: `Story ${i + 1}`,
    'Assigned To': randomItem(assignees),
    status: randomItem(statuses),
    Priority: randomItem(priorities),
    Sprint: randomItem(sprints),
    DueDate: randomDate(),
    Tasks: generateTasks(Math.floor(Math.random() * 3) + 1),
  }))

// generate features
const generateFeatures = (count = 2): ItemRow[] =>
  Array.from({ length: count }).map((_, i) => ({
    itemType: 'Feature',
    title: `Feature ${i + 1}`,
    'Assigned To': randomItem(assignees),
    status: randomItem(statuses),
    Priority: randomItem(priorities),
    Sprint: randomItem(sprints),
    DueDate: randomDate(),
    Stories: generateStories(Math.floor(Math.random() * 3) + 1),
  }))

// generate 50 epics
const tableData: ItemRow[] = Array.from({ length: 50 }).map((_, i) => ({
  itemType: 'Epic',
  title: `Epic ${i + 1}`,
  'Assigned To': randomItem(assignees),
  status: randomItem(statuses),
  Priority: randomItem(priorities),
  Sprint: randomItem(sprints),
  DueDate: randomDate(),
  Features: generateFeatures(Math.floor(Math.random() * 3) + 1),
}))

export default tableData

export const tasks: TaskType[] = [
  {
    id: '1',
    title: 'Design Homepage',
    description: 'Create hero section, layout, and responsive variants.',
    priority: 'High',
    status: 'In Progress',
    date: '2025-06-01',
  },
  {
    id: '2',
    title: 'Fix Login Bug',
    description: 'Resolve error in user login flow for mobile users.',
    priority: 'Low',
    status: 'Todo',
    date: '2025-06-05',
  },
  {
    id: '3',
    title: 'Plan Sprint',
    description: 'Prepare sprint backlog and set priorities for next cycle.',
    priority: 'Medium',
    status: 'Done',
    date: '2025-06-15',
  },
  {
    id: '4',
    title: 'Database Optimization',
    description: 'Optimize queries and reduce API response time.',
    priority: 'High',
    status: 'Todo',
    date: '2025-06-20',
  },
  {
    id: '5',
    title: 'Create User Dashboard',
    description: 'Add stats, quick actions, and recent activity feed.',
    priority: 'Medium',
    status: 'In Progress',
    date: '2025-06-08',
  },
  {
    id: '6',
    title: 'Update Branding Guide',
    description: 'Include new color palette and typography rules.',
    priority: 'Low',
    status: 'Done',
    date: '2025-05-30',
  },
  {
    id: '7',
    title: 'Implement Notifications',
    description: 'Push + email notifications for critical events.',
    priority: 'High',
    status: 'Todo',
    date: '2025-06-18',
  },
  {
    id: '8',
    title: 'Refactor Auth Module',
    description: 'Clean up tokens, refresh flow, and middleware.',
    priority: 'Medium',
    status: 'In Progress',
    date: '2025-06-12',
  },
  {
    id: '9',
    title: 'Write Unit Tests',
    description: 'Add tests for components and API routes.',
    priority: 'Low',
    status: 'Todo',
    date: '2025-06-22',
  },
  {
    id: '10',
    title: 'Deploy Staging Environment',
    description: 'Set up automatic deploy for dev branch.',
    priority: 'High',
    status: 'Done',
    date: '2025-05-28',
  },
  {
    id: '11',
    title: 'Redesign Profile Page',
    description: 'Add editable fields and improve layout spacing.',
    priority: 'Medium',
    status: 'In Progress',
    date: '2025-06-10',
  },
  {
    id: '12',
    title: 'Add Dark Mode',
    description: 'Create a toggle and adjust theme tokens.',
    priority: 'Low',
    status: 'Todo',
    date: '2025-06-25',
  },
  {
    id: '13',
    title: 'Fix Payment Gateway',
    description: 'Resolve duplicate transactions and timeout issue.',
    priority: 'High',
    status: 'In Progress',
    date: '2025-06-06',
  },
  {
    id: '14',
    title: 'Write API Documentation',
    description: 'Document new endpoints with examples.',
    priority: 'Medium',
    status: 'Done',
    date: '2025-06-01',
  },
  {
    id: '15',
    title: 'Create Onboarding Flow',
    description: 'Design welcome screens and user tips.',
    priority: 'Low',
    status: 'Todo',
    date: '2025-06-14',
  },
]

export const grantData = [
  {
    title: 'Authentication Design',
    startDate: '2025-01-01',
    endDate: '2025-04-30',
    task: [
      { title: 'Design authentication flow', startDate: '2025-01-01', endDate: '2025-01-31', status: 'In Progress', priority: 'High', completed: 40 },
      { title: 'Implement authentication system', startDate: '2025-02-01', endDate: '2025-02-28', status: 'Completed', priority: 'Medium', completed: 100 },
      { title: 'Test authentication system', startDate: '2025-03-01', endDate: '2025-03-31', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Optimize authentication performance', startDate: '2025-04-01', endDate: '2025-04-30', status: 'Pending', priority: 'High', completed: 0 },
    ],
  },
  {
    title: 'User Management',
    startDate: '2025-04-01',
    endDate: '2025-08-31',
    task: [
      { title: 'Design user management flow', startDate: '2025-04-01', endDate: '2025-04-30', status: 'Pending', priority: 'High', completed: 0 },
      { title: 'Implement user management system', startDate: '2025-05-01', endDate: '2025-05-31', status: 'In Progress', priority: 'Medium', completed: 50 },
      { title: 'Test user management system', startDate: '2025-06-01', endDate: '2025-06-30', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Optimize user management performance', startDate: '2025-07-01', endDate: '2025-07-15', status: 'Pending', priority: 'High', completed: 0 },
      { title: 'Implement user role management', startDate: '2025-07-16', endDate: '2025-07-31', status: 'In Progress', priority: 'High', completed: 70 },
    ],
  },
  {
    title: 'Integration with Third-Party Services',
    startDate: '2025-08-01',
    endDate: '2025-12-31',
    task: [
      { title: 'Design integration flow', startDate: '2025-08-01', endDate: '2025-08-31', status: 'Pending', priority: 'High', completed: 0 },
      { title: 'Implement integration with third-party services', startDate: '2025-09-01', endDate: '2025-09-30', status: 'In Progress', priority: 'Medium', completed: 60 },
      { title: 'Test integration with third-party services', startDate: '2025-10-01', endDate: '2025-10-31', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Optimize integration performance', startDate: '2025-11-01', endDate: '2025-11-15', status: 'In Progress', priority: 'High', completed: 30 },
      { title: 'Implement rate limiting and throttling', startDate: '2025-11-16', endDate: '2025-11-30', status: 'Pending', priority: 'High', completed: 0 },
    ],
  },
  {
    title: 'Payment Gateway Integration',
    startDate: '2025-02-01',
    endDate: '2025-05-31',
    task: [
      { title: 'Design payment flow', startDate: '2025-02-01', endDate: '2025-02-28', status: 'In Progress', priority: 'High', completed: 55 },
      { title: 'Implement payment gateway', startDate: '2025-03-01', endDate: '2025-03-31', status: 'Pending', priority: 'Medium', completed: 0 },
      { title: 'Test payment system', startDate: '2025-04-01', endDate: '2025-04-30', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Secure payment system', startDate: '2025-05-01', endDate: '2025-05-31', status: 'Completed', priority: 'High', completed: 100 },
    ],
  },
  {
    title: 'Notification System',
    startDate: '2025-03-01',
    endDate: '2025-06-30',
    task: [
      { title: 'Design notification flow', startDate: '2025-03-01', endDate: '2025-03-31', status: 'Pending', priority: 'High', completed: 0 },
      { title: 'Implement notification system', startDate: '2025-04-01', endDate: '2025-04-30', status: 'In Progress', priority: 'Medium', completed: 65 },
      { title: 'Test notifications', startDate: '2025-05-01', endDate: '2025-05-31', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Optimize notifications', startDate: '2025-06-01', endDate: '2025-06-30', status: 'Completed', priority: 'High', completed: 100 },
    ],
  },
  {
    title: 'Reporting Module',
    startDate: '2025-05-01',
    endDate: '2025-09-30',
    task: [
      { title: 'Design reporting structure', startDate: '2025-05-01', endDate: '2025-05-31', status: 'In Progress', priority: 'High', completed: 20 },
      { title: 'Implement reporting module', startDate: '2025-06-01', endDate: '2025-06-30', status: 'Pending', priority: 'Medium', completed: 0 },
      { title: 'Test reporting features', startDate: '2025-07-01', endDate: '2025-07-31', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Optimize reports', startDate: '2025-08-01', endDate: '2025-09-30', status: 'Completed', priority: 'High', completed: 100 },
    ],
  },
  {
    title: 'Analytics Dashboard',
    startDate: '2025-06-01',
    endDate: '2025-10-31',
    task: [
      { title: 'Design analytics dashboard', startDate: '2025-06-01', endDate: '2025-06-30', status: 'Pending', priority: 'High', completed: 0 },
      { title: 'Implement analytics widgets', startDate: '2025-07-01', endDate: '2025-07-31', status: 'In Progress', priority: 'Medium', completed: 45 },
      { title: 'Test dashboard', startDate: '2025-08-01', endDate: '2025-08-31', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Optimize dashboard performance', startDate: '2025-09-01', endDate: '2025-10-31', status: 'Completed', priority: 'High', completed: 100 },
    ],
  },
  {
    title: 'Security Enhancements',
    startDate: '2025-07-01',
    endDate: '2025-11-30',
    task: [
      { title: 'Design security plan', startDate: '2025-07-01', endDate: '2025-07-31', status: 'Pending', priority: 'High', completed: 0 },
      { title: 'Implement security measures', startDate: '2025-08-01', endDate: '2025-08-31', status: 'In Progress', priority: 'Medium', completed: 70 },
      { title: 'Test security', startDate: '2025-09-01', endDate: '2025-09-30', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Audit security', startDate: '2025-10-01', endDate: '2025-11-30', status: 'Completed', priority: 'High', completed: 100 },
    ],
  },
  {
    title: 'Mobile App Integration',
    startDate: '2025-08-01',
    endDate: '2025-12-31',
    task: [
      { title: 'Design mobile app flow', startDate: '2025-08-01', endDate: '2025-08-31', status: 'Pending', priority: 'High', completed: 0 },
      { title: 'Implement mobile integration', startDate: '2025-09-01', endDate: '2025-09-30', status: 'In Progress', priority: 'Medium', completed: 50 },
      { title: 'Test mobile features', startDate: '2025-10-01', endDate: '2025-10-31', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Optimize mobile app', startDate: '2025-11-01', endDate: '2025-12-31', status: 'Completed', priority: 'High', completed: 100 },
    ],
  },
  {
    title: 'Deployment & CI/CD',
    startDate: '2025-09-01',
    endDate: '2025-12-31',
    task: [
      { title: 'Set up deployment pipeline', startDate: '2025-09-01', endDate: '2025-09-30', status: 'In Progress', priority: 'High', completed: 35 },
      { title: 'Configure CI/CD', startDate: '2025-10-01', endDate: '2025-10-31', status: 'Pending', priority: 'Medium', completed: 0 },
      { title: 'Test deployment', startDate: '2025-11-01', endDate: '2025-11-30', status: 'Pending', priority: 'Low', completed: 0 },
      { title: 'Optimize deployment process', startDate: '2025-12-01', endDate: '2025-12-31', status: 'Completed', priority: 'High', completed: 100 },
    ],
  },
]


