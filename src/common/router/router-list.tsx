import HomePage from '@features/login/Login';
import Dashboard from '@features/dashboard/Dashboard';
import User from '@features/user/User';
import { createBrowserRouter } from "react-router-dom";

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
]);

export default routerList;