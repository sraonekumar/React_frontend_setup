import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Redirect from "./Redirect";
import SignIn from "./SignIn";
import SignInSide from "./SignInSide";
import PersistentDrawerLeft from "./Dashboard";

const router = [
  {
    path: "/",
    element: <SignInSide />,
  },
  {
    path: "/dashboard",
    element: <PersistentDrawerLeft />,
  },
  {
    path: "/signin",
    element: <SignInSide />,
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
