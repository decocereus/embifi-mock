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
import LoanAgreement from "./Components/Loans/LoanAgreement";
import ApplicationSuccess from "./Components/Result/ApplicationSuccess";
import ApplicationReject from "./Components/Result/ApplicationReject";


/** root routes */
const router = createBrowserRouter([

  {
    path: "/*",
    element: <Login/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/welcome",
    element: <Welcome/>,
  },
  {
    path: "/dashboard/viewuser",
    element: <UserDetails/>,
  },
  {
    path: "/registerform",
    element: <RegisterForm1 />,
  },
  {
    path: "/registerformloanapplication",
    element: <RegisterForm2 />,
  },
  {
    path: "/viewloanoffers",
    element: <LoanOffers/>,
  },
  {
    path: "/agreement",
    element: <LoanAgreement/>,
  },
  {
    path: "/agreement/success",
    element: <ApplicationSuccess/>,
  },
  {
    path: "/agreement/reject",
    element: <ApplicationReject/>,
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
