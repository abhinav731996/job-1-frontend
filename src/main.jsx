import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
// import "bootstrap/dist/css/bootstrap.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/scss/theme.scss";
// import "./assets/scss/theme.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
