import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const router = [
  {
    path: "/",
    element: <div>Home page</div>,
  },
  {
    path: "/users",
    element: <div>Users page</div>,
  },
  {
    path: "/about",
    element: <div>About page</div>,
  },
  {
    path: "*",
    element: <div>No page found..!</div>,
  },
];

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
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
