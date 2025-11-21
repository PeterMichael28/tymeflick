// routes/appRoutes.ts
import DashBoardIndex from '../features/dashboard'
import CreateProject from '../features/createProject'
import Project from '../features/project'
import AgileIndex from '../features/createProject/agile/agile'
import CreatedAgile from '../features/createProject/agile/createdAgile'
import WaterFallIndex from '../features/createProject/waterfall/waterFall'
import ReviewWaterFall from '../features/createProject/waterfall/reviewWaterFall'
import CreatedWaterfall from '../features/createProject/waterfall/ceatedWaterfall'
import Hybrid from '../features/createProject/hybrid'
import ProjectPreviewHybrid from '../features/createProject/hybrid/projectPreview'
import CreatedHybrid from '../features/createProject/hybrid/createdHybrid'
import ProjectTemplate from '../features/projectTemplate/projectTemplate'
import CreateProjectLayout from '../features/createProject/layout'
import CreateProjectTemplateLayout from '../features/projectTemplate/layout'
import AgileTemplate from '../features/projectTemplate/agileTemplate'
import WaterFallTemplate from '../features/projectTemplate/waterFallTemplate'
import HybridTemplate from '../features/projectTemplate/hybridTemplate'
import ProjectAgileIndex from '../features/project/agile'
import AgileOverview from '../features/project/agile/overview'
import AgileDashboard from '../features/project/agile/dashboard'
import TimetrackerIndex from '../features/timeTracker'
import SubmitWeeklyTimeLogs from '../features/timeTracker/components/screens/submitWeeklyTimelog'
import ViewAllPage from '../features/timeTracker/components/screens/viewAll'
import TeamSubmissions from '../features/timeTracker/components/screens/teamSubmissions'
import ReviewDetails from '../features/timeTracker/components/screens/teamSubmissions/reviewDetails'
import Approve from '../features/timeTracker/components/screens/teamSubmissions/approve'
import Reject from '../features/timeTracker/components/screens/teamSubmissions/reject'
import TeamSubmissionForAdmin from '../features/timeTracker/components/screens/teamSubmissionForAdmin'
import ReviewDetailsForAdmin from '../features/timeTracker/components/screens/teamSubmissionsForAdmin/reviewDetails'
import ForceApproveAdmin from '../features/timeTracker/components/screens/teamSubmissionsForAdmin/forceApprove'
import ForceRejectAdmin from '../features/timeTracker/components/screens/teamSubmissionsForAdmin/forceReject'

export const dashboardRoutes = [
  { path: '', element: <DashBoardIndex /> },
  { path: 'project', element: <Project /> },
  {
    path: 'project/agile',
    element: <ProjectAgileIndex />,
    children: [
      { path: '', element: <AgileOverview /> }, // overview page for agile project
      { path: 'dashboard', element: <AgileDashboard /> }, // dashboard page for agile project
    ],
  },
  {
    path: 'create-project',
    element: <CreateProjectLayout />,
    children: [
      { path: '', element: <CreateProject /> },
      { path: 'agile', element: <AgileIndex /> },
      { path: 'agile/created', element: <CreatedAgile /> },
      { path: 'waterfall', element: <WaterFallIndex /> },
      { path: 'review-waterfall', element: <ReviewWaterFall /> },
      { path: 'created-waterfall', element: <CreatedWaterfall /> },
      { path: 'hybrid', element: <Hybrid /> },
      { path: 'hybrid/preview', element: <ProjectPreviewHybrid /> },
      { path: 'hybrid/created', element: <CreatedHybrid /> },
    ],
  },
  {
    path: 'project-template',
    element: <CreateProjectTemplateLayout />, // layout for project templates page
    children: [
      { path: '', element: <ProjectTemplate /> },
      { path: 'agile', element: <AgileTemplate /> }, // template for agile project
      { path: 'waterfall', element: <WaterFallTemplate /> }, // template for waterfall project
      { path: 'hybrid', element: <HybridTemplate /> }, // template for hybrid project
    ],
  },
  // Time Tracker routes
  { path: 'timeTracker', element: <TimetrackerIndex /> },
  { path: 'submitWeeklyTimelog', element: <SubmitWeeklyTimeLogs /> },
  { path: 'viewAll', element: <ViewAllPage /> },
  { path: 'teamSubmissions', element: <TeamSubmissions /> },
  { path: 'reviewDetails', element: <ReviewDetails /> },
  { path: 'approve', element: <Approve /> },
  { path: 'reject', element: <Reject /> },
  { path: 'teamSubmissionForAdmin', element: <TeamSubmissionForAdmin /> },
  { path: 'reviewDetailsAdmin', element: <ReviewDetailsForAdmin /> },
  { path: 'forceApprove', element: <ForceApproveAdmin /> },
  { path: 'forceReject', element: <ForceRejectAdmin /> },
]
