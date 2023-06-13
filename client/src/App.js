import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import all components */

import Login from "./Components/Forms/LoginScreen/Login";
import Dashboard from "./Components/Dashboard/DashboardScreen/Dashboard";
import UserDetails from "./Components/Dashboard/UserDetailsScreen/UserDetails";
import Welcome from "./Components/Welcome-Splash/Welcome";
import RegisterForm1 from "./Components/Forms/RegisterLoanAppScreen/RegisterForm1";
import RegisterForm2 from "./Components/Forms/RegisterLoanAppScreen/RegisterForm2";
import LoanOffers from "./Components/Loans/LoanOffers";


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
    path: "/dashboard/welcome/registerform1",
    element: <RegisterForm1 />,
  },
  {
    path: "/dashboard/welcome/registerform1/registerform2",
    element: <RegisterForm2 />,
  },
  {
    path: "/dashboard/welcome/registerform1/registerform2/viewloanoffers",
    element: <LoanOffers/>,
  },
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
