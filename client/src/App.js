import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Components/Forms/LoginScreen/Login';

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  // {
  //   path: "/dashboard",
  //   element: <div>dashboard route</div>,
  // },
  // {
  //   path: "/dashboard/register",
  //   element: <div>dashboard register for loan route</div>,
  // },
  // {
  //   path: "/dashboard/register/form",
  //   element: <div>dashboard register for loan form route</div>,
  // },
  // {
  //   path: "/dashboard/register/avialableLoans",
  //   element: <div>view available loans route</div>,
  // },
  // {
  //   path: "/dashboard/register/avialableLoans/agreement",
  //   element: <div>view available loans route</div>,
  // },
  // {
  //   path: "/dashboard/viewUser",
  //   element: <div>dashboard view User route</div>,
  // },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router = {router}> 
      
      </RouterProvider>
    </main>
  );
}
