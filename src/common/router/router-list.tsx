import HomePage from '@features/login/Login';
import Dashboard from '@features/dashboard/Dashboard';
import User from '@features/user/User';
import Fasyankes from '@features/fasyankes/Fasyankes';
import ReportYear from '@features/report-year/ReportYear';
import { createBrowserRouter } from "react-router-dom";
import ReportSemester from '@features/report-semester/ReportSemester';

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "fasyankes",
    element: <Fasyankes />,
  },
  {
    path: "laporan-tahunan",
    element: <ReportYear />,
  },
  {
    path: "laporan-semester",
    element: <ReportSemester />,
  },
]);

export default routerList;