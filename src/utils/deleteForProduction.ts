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
  id: string;
  title: string;
  description: string;
  priority: "High" | "Low" | "Medium";
  status: "Todo" | "In Progress" | "Done" | string;
  date: string; 
};
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
    id: "1",
    title: "Design Homepage",
    description: "Create hero section, layout, and responsive variants.",
    priority: "High",
    status: "In Progress",
    date: "2025-06-01",
  },
  {
    id: "2",
    title: "Fix Login Bug",
    description: "Resolve error in user login flow for mobile users.",
    priority: "Low",
    status: "Todo",
    date: "2025-06-05",
  },
  {
    id: "3",
    title: "Plan Sprint",
    description: "Prepare sprint backlog and set priorities for next cycle.",
    priority: "Medium",
    status: "Done",
    date: "2025-06-15",
  },
  {
    id: "4",
    title: "Database Optimization",
    description: "Optimize queries and reduce API response time.",
    priority: "High",
    status: "Todo",
    date: "2025-06-20",
  },
  {
    id: "5",
    title: "Create User Dashboard",
    description: "Add stats, quick actions, and recent activity feed.",
    priority: "Medium",
    status: "In Progress",
    date: "2025-06-08",
  },
  {
    id: "6",
    title: "Update Branding Guide",
    description: "Include new color palette and typography rules.",
    priority: "Low",
    status: "Done",
    date: "2025-05-30",
  },
  {
    id: "7",
    title: "Implement Notifications",
    description: "Push + email notifications for critical events.",
    priority: "High",
    status: "Todo",
    date: "2025-06-18",
  },
  {
    id: "8",
    title: "Refactor Auth Module",
    description: "Clean up tokens, refresh flow, and middleware.",
    priority: "Medium",
    status: "In Progress",
    date: "2025-06-12",
  },
  {
    id: "9",
    title: "Write Unit Tests",
    description: "Add tests for components and API routes.",
    priority: "Low",
    status: "Todo",
    date: "2025-06-22",
  },
  {
    id: "10",
    title: "Deploy Staging Environment",
    description: "Set up automatic deploy for dev branch.",
    priority: "High",
    status: "Done",
    date: "2025-05-28",
  },
  {
    id: "11",
    title: "Redesign Profile Page",
    description: "Add editable fields and improve layout spacing.",
    priority: "Medium",
    status: "In Progress",
    date: "2025-06-10",
  },
  {
    id: "12",
    title: "Add Dark Mode",
    description: "Create a toggle and adjust theme tokens.",
    priority: "Low",
    status: "Todo",
    date: "2025-06-25",
  },
  {
    id: "13",
    title: "Fix Payment Gateway",
    description: "Resolve duplicate transactions and timeout issue.",
    priority: "High",
    status: "In Progress",
    date: "2025-06-06",
  },
  {
    id: "14",
    title: "Write API Documentation",
    description: "Document new endpoints with examples.",
    priority: "Medium",
    status: "Done",
    date: "2025-06-01",
  },
  {
    id: "15",
    title: "Create Onboarding Flow",
    description: "Design welcome screens and user tips.",
    priority: "Low",
    status: "Todo",
    date: "2025-06-14",
  },
];


