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

// helpers
const assignees = ['John Doe', 'Jane Smith', 'Mark Lee', 'Emily Davis', 'James King']
const statuses = ['To-Do', 'In Progress', 'Completed']
const priorities = ['Low', 'Medium', 'High']
const sprints = ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4']

const randomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]
const randomDate = (start = 2025, end = 2026) =>
  `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}/${
    Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0')
  }/${Math.floor(Math.random() * (end - start) + start)}`

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
