import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Redirect from "./Redirect";
import SignIn from "./SignIn";
import Dashboard from "../Pages/Dashboard";
import ResponsiveSignIn from "./ResponsiveSignIn";

const router = [
  {
    path: "/",
    element: <Redirect />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/re-signin",
    element: <ResponsiveSignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <div>No page found..!</div>,
  },
];

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route) => {
          return (
            <Route path={route.path} element={route.element} key={route.path} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
