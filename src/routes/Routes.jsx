import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import LoginPage from "../pages/Login/LoginPage";
import HistoryOfTheInstitution from "../pages/OrganizationInformation/HistoryOfTheInstitution";
import AimsAndObjectives from "../pages/OrganizationInformation/AimsAndObjectives";
import LocationMap from "../pages/OrganizationInformation/LocationMap";
import ChairmanMessage from "../pages/Administration/ChairmanMessage";
import HeadTeacherMessage from "../pages/Administration/HeadTeacherMessage";
import FacultyInformation from "../pages/Administration/FacultyInformation";
import EmployeeInformation from "../pages/Administration/EmployeeInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "history-of-the-institution",
        element: <HistoryOfTheInstitution />,
      },
      {
        path: "aims-and-objectives",
        element: <AimsAndObjectives />,
      },
      {
        path: "location-map",
        element: <LocationMap />,
      },
      {
        path: "chairman-Message",
        element: <ChairmanMessage />,
      },
      {
        path: "head-teacher-message",
        element: <HeadTeacherMessage />,
      },
      {
        path: "faculty-information",
        element: <FacultyInformation />,
      },
      {
        path: "employee-information",
        element: <EmployeeInformation />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;