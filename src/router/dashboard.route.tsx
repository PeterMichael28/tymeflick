// routes/appRoutes.ts
import DashBoardIndex from '../features/dashboard'
import CreateProject from '../features/createProject'
import Project from '../features/project'
import AgileIndex from '../features/createProject/agile/agile'
import CreatedAgile from '../features/createProject/agile/createdAgile'
import WaterFallIndex from '../features/createProject/waterfall/waterFall'
import ReviewWaterFall from '../features/createProject/waterfall/reviewWaterFall'
import CreatedWaterfall from '../features/createProject/waterfall/ceatedWaterfall'

export const dashboardRoutes = [
  { path: '', element: <DashBoardIndex /> },
  { path: 'project', element: <Project /> },
  {
    path: 'create-project',
    children: [
      { path: '', element: <CreateProject /> },
      { path: 'agile', element: <AgileIndex /> },
      { path: 'agile/created', element: <CreatedAgile /> },
      { path: 'waterfall', element: <WaterFallIndex /> },
      { path: 'review-waterfall', element: <ReviewWaterFall /> },
      { path: 'created-waterfall', element: <CreatedWaterfall /> },
    ],
  },
]
