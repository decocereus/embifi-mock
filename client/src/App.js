import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import all components */

import Login from "./Components/Forms/LoginScreen/Login";
import Dashboard from "./Components/Dashboard/DashboardScreen/Dashboard";
import UserDetails from "./Components/Dashboard/UserDetailsScreen/UserDetails";
import Register from "./Components/Forms/RegisterLoanAppScreen/RegisterLoanApp";
import Welcome from "./Components/Welcome-Splash/Welcome";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/welcome",
    element: <Welcome/>,
  },
  {
    path: "/dashboard/viewuser",
    element: <UserDetails/>,
  },
  {
    path: "/dashboard/welcome/registerform",
    element: <Register />,
  },
  // {
  //   path: "/dashboard/register/avialableLoans",
  //   element: <div>view available loans route</div>,
  // },
  // {
  //   path: "/dashboard/register/avialableLoans/agreement",
  //   element: <div>view available loans route</div>,
  // },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
