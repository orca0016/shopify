// import { useGSAP } from "@gsap/react";
// import { Button, Typography } from "@mui/material";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

import HomeSection from "./home/HomeSection";
import CarouselSection from "./home/CarouselSection";
import Gallery from "./home/Gallery";
import Plans from "./home/Plans";
import VideoSection from "./home/VideoSection";
import BlogsHome from "./home/BlogsHome";
import "./home/style.css";
import { TextField } from "@mui/material";

const Home = () => {
  return (
    <>
      {/* section-home */}
      <HomeSection />

      {/* carousel-section */}
      <CarouselSection />

      {/* gallery-section */}
      <Gallery />

      {/* plans-section */}
      <Plans />

      {/* video-section */}
      <VideoSection />

      {/* Blogs-section */}
      <BlogsHome />
    </>
  );
};

export default Home;
