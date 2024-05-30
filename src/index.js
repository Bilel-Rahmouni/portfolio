import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./context";
import Articlewyngo from "./components/Articlewyngo";
import Home from "./components/Home";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/wyngoarticle", element: <Articlewyngo /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);
