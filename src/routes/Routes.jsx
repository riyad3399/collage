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
import Notice from "../pages/Academic/Notice";
import PressRelease from "../pages/TenderNotice/PressRelease";
import LiveClass from "../pages/ELearning/liveClass/LiveClass";
import VideoClass from "../pages/ELearning/videoClass/VideoClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // প্রতিষ্ঠানের তথ্য
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
      // প্রশাসন
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
      // একাডেমিক
      {
        path: "notice",
        element: <Notice />,
      },

      //
      {
        path: "press-release",
        element: <PressRelease />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // ই-লার্নিং
  {
    path: "live-class",
    element: <LiveClass />,
  },
  {
    path: "video-class",
    element: <VideoClass />,
  },
]);

export default router;