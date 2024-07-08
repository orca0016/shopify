import { useGSAP } from "@gsap/react";
import { Button, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
  // useGSAP(() => {
  //   const timelineHome = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".home-section",
  //       // markers: true,
  //       start: "top  middle",
  //       end: "80% middle",
  //       toggleActions: "play reverse none none ",
  //     },
  //   });
  //   timelineHome.from(".button-animation", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1,
  //   });
  // }, []);
  return (
    <>
      <div className="home-section bg-[#141414]">
        <div className="w-full justify-center  flex  py-36  flex-col px-28">
          <div>
            <Typography
              variant="h1"
              color="white"
              className="w-[100%] font-bold  leading-3"
              fontSize={{
                xl: 90,
                lg: 90,
                md: 70,
                sm: 45,
                xs: 30,
              }}
            >
              The
              <span className="text-btn-card"> Future</span>
              <br className="br-home" />
              in Al Graphic <br className="br-home" />
              Generator
            </Typography>
          </div>
          <div className="sm:w-[50%] w-[100%] ">
            <Typography
              fontSize={{
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: 20,
                xs: 14,
              }}
              variant="caption"
              sx={{
                px: { xs: "20px", sm: "0px" },
              }}
              color={"#9EA5B7 "}
            >
              An Active OpenAI Token is Essential for Image Generation
            </Typography>
          </div>
          <Button
            sx={{
              width: {
                xl: "150px",
                lg: "150px",
                md: "150px",
                sm: "150px",
                xs: "100px",
              },
              p: "10px",
              fontSize: {
                xs: "10px",
              },
              mt: {
                xs: "10px",
              },
            }}
            variant="contained"
            color="secondary"
            className="button-animation   aos-init aos-animate "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
