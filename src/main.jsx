import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import { MainRoot } from "./layouts/MainRoot.jsx";
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={MainRoot} />
    </MainLayout>
  </React.StrictMode>
);
