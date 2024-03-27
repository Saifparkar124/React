import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListSurrah from "./components/ListSurrah.jsx";
import ListAyah from "./components/ListAyah.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListSurrah />,
  },
  {
    path: "surah/:number",
    element: <ListAyah />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
