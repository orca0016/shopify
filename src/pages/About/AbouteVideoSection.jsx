import { PlayCircleOutlineRounded } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ParallaxText from "../../components/ParallaxText";

const AbouteVideoSection = () => {
  const cover = useRef(0);
  const changeElementStyle = () => {
    const element = cover.current;

    if (element) {
      element.style.zIndex = "2";
    }
  };

  return (
    <>
      <div className="w-full ">
        <div
          className="iframe-container aos-init aos-animate "
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div
            className="iframe-cover cursor-pointer flex justify-center items-center"
            onClick={changeElementStyle}
          >
            <PlayCircleOutlineRounded sx={{ fontSize: "80px" }} />
          </div>
          <iframe
            ref={cover}
            className="iframe"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Hgg7M3kSqyE?si=Uxezt5597c4PXP0E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div
        className="p-10 pb-20 aos-init aos-animate "
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <section>
          <ParallaxText baseVelocity={-5}>with us forward to up </ParallaxText>
          <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
        </section>
      </div>
    </>
  );
};

export default AbouteVideoSection;
