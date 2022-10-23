import HomePage from '../../features/login/Login';
import Dashboard from '../../features/dashboard/Dashboard';
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
]);

export default routerList;