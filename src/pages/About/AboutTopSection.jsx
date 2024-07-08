import React from "react";
import { aboutFox } from "../../assets";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CarouselAbout from "./CarouselAbout";

const AboutTopSection = () => {
  return (
    <>
      <div className="background-about-gradient w-full   ">
        <div className="top-section ">
          <div className="flex fox-resp-title flex-col justify-center text-left p-6 gap-3">
            <Typography variant="button" color="primary">
              about us
            </Typography>
            <Typography variant="h3">
              Architecting the Digital Future
            </Typography>
            <Typography variant="caption" color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: {
                  md: "40%",
                  sm: "100%",
                  xs: "100%",
                },
                padding: "10px",
                marginX: {
                  sm: "0",
                  md: "0",
                  xs: "auto",
                },
              }}
            >
              Get started
            </Button>
          </div>
          <div className="relative fox-resp ">
            <img src={aboutFox} alt="fox title" className="ml-auto" />
            <div className="gradient-number-about">
              <Typography variant="button">People</Typography>
              <Typography variant="h3">100+</Typography>
              <Typography variant="button">Best Reviews</Typography>
            </div>
          </div>
        </div>
        <CarouselAbout />
      </div>
    </>
  );
};

export default AboutTopSection;
