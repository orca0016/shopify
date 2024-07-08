import { useGSAP } from "@gsap/react";
import { Button, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { ArrowForwardRounded, CheckBoxOutlined } from "@mui/icons-material";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import {
  about,
  aboutEagle,
  aboutSmall,
  card1,
  card2,
  card3,
  card4,
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
} from "../../assets";

const CarouselAbout = () => {
  return (
    <>
      <div className="carousel-section text-center min-h-[100vh ] flex flex-col items-center pb-32 ">
        <div className="flex  flex-col items-center el1">
          <Typography
            variant="h6"
            color="primary"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className=" aos-init aos-animate "
          >
            what we do
          </Typography>
          <Typography
            variant="h2"
            className="sm:w-[66%] w-[100%] tracking-tight   aos-init aos-animate "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            fontSize={{
              xl: "3rem",
              lg: "3rem",
              md: "3rem",
              sm: 20,
              xs: 25,
            }}
          >
            Unleash the Potential of Al Development Tools Crafted with
            Brilliance, Style,
            <br className="br-home" /> Quality, and Creativity
          </Typography>
        </div>
        <div
          className=" h-[330px] w-full mt-9  aos-init aos-animate "
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper py-6"
          >
            <SwiperSlide>
              <div>
                <img src={slider1} alt="slider1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider2} alt="slider2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider3} alt="slider3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider4} alt="slider4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider5} alt="slider5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider1} alt="slider1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider2} alt="slider2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider3} alt="slider3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider4} alt="slider4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slider5} alt="slider5" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-center max-sm:mt-6 mt-36">
          <Typography
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            color={"primary"}
            variant="caption"
            className=" aos-init aos-animate "
          >
            HUGE COLLECTION
          </Typography>
          <Typography
            variant="h3"
            data-aos="fade-up"
            className=" aos-init aos-animate "
            data-aos-anchor-placement="bottom-bottom"
          >
            AI-Powered Design
          </Typography>
        </div>
        <div className="parent div-card-carousel p-4  px-32">
          <div
            className="card-carousel  aos-init aos-animate "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img src={card1} alt="cards" />
            <Typography variant="subtitle1">Intelligent</Typography>
            <Typography variant="subtitle2" color="grey">
              Adipiscing elit, sed do eiusmod labore dolore magna aliqua.
            </Typography>
            <ArrowForwardRounded />
          </div>

          <div
            className="card-carousel  aos-init aos-animate "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img src={card2} alt="cards" />
            <Typography variant="subtitle1">Visualization</Typography>
            <Typography variant="subtitle2" color="grey">
              Adipiscing elit, sed do eiusmod labore dolore magna aliqua.
            </Typography>
            <ArrowForwardRounded />
          </div>

          <div
            className="card-carousel  aos-init aos-animate "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img src={card3} alt="cards" />
            <Typography variant="subtitle1">Creativity</Typography>
            <Typography variant="subtitle2" color="grey">
              Adipiscing elit, sed do eiusmod labore dolore magna aliqua.
            </Typography>
            <ArrowForwardRounded />
          </div>

          <div
            className="card-carousel  aos-init aos-animate "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img src={card4} alt="cards" />
            <Typography variant="subtitle1">Flexible</Typography>
            <Typography variant="subtitle2" color="grey">
              Adipiscing elit, sed do eiusmod labore dolore magna aliqua.
            </Typography>
            <ArrowForwardRounded />
          </div>
        </div>
        <div className="about-us-section about-section-resp div-card-carousel flex  mt-28 w-full px-32">
          <div className="flex justify-left  relative">
            <img
              className="w-[80%] float-left  aos-init aos-animate "
              src={aboutEagle}
              alt="about us section "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            />
            <img
              src={aboutSmall}
              alt="about small img"
              className="about-small-img  aos-init aos-animate"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            />
          </div>
          <div className="flex justify-center max-sm:text-center max-md:text-center max-lg:text-center text-left flex-col gap-1">
            <Typography
              variant="body1"
              color="primary"
              className=" aos-init aos-animate "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              VISUAL GRAPHICS
            </Typography>
            <Typography
              variant="h3"
              className=" aos-init aos-animate "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              Enabling Visual AI For Everyone
            </Typography>
            <Typography
              variant="subtitle1"
              color="grey"
              className=" aos-init aos-animate "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              Our Tools Simplify And Accelerate Workflows, Foster Creativity,
              And Enable Others To Create New Products.
            </Typography>
            <div>
              <ul
                className="list-none list-eagle  aos-init aos-animate"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <li>
                  <CheckBoxOutlined color="primary" className="mr-[6px]" />
                  Seamless integration
                </li>
                <li>
                  <CheckBoxOutlined color="primary" className="mr-[6px]" />
                  Analyze the chats and improvize
                </li>
                <li>
                  <CheckBoxOutlined color="primary" className="mr-[6px]" />
                  Custom-trained on your data
                </li>
                <li>
                  <CheckBoxOutlined color="primary" className="mr-[6px]" />
                  Flexible branding options
                </li>
              </ul>
            </div>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: {
                  md: "50%",
                  sm: "45%",
                  xs: "100%",
                },
                marginX: {
                  lg: 0,
                  md: "0",
                  sm: "auto",
                  xs: "auto",
                },
                borderRadius: "7px",
              }}
              size="large"
              className="mt-6 aos-init aos-animate "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              about use
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselAbout;
