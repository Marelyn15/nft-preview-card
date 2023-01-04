import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = new createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: "Error 404, not found..."
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
