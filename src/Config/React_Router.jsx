import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../Components/Layout";
import { Dashboard } from "../Pages/Dashboard";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      <Route path="dashboard" element={<Dashboard />} />
    </Route>

  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
