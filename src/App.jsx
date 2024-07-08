import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  // const toggleFullScreen = () => {
  //   const element = document.getElementById("container-full");
  //   const isFullScreen = document.fullscreenElement;
  //   if (isFullScreen) {
  //     document.exitFullscreen();
  //   } else {
  //     element.requestFullscreen();
  //   }
  // };
  // toggleFullScreen();
  
  //وقتی ادرس صفحه تغییر کرد به صورت خودکار به بالای صفحه برود
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id="container-full ">
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default App;
