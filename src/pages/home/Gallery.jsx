import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Masonry from "@mui/lab/Masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
} from "../../assets";
const Gallery = () => {
  const [active, setActive] = useState(1);
  const [filterD, setFilterD] = useState([]);
  const [open, setOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState({});

  const galleryData = [
    {
      id: 1,
      category: "photoshop",
      src: gallery1,
    },
    {
      id: 2,
      category: "ai",
      src: gallery2,
    },
    {
      id: 3,
      category: "photoshop",
      src: gallery3,
    },
    {
      id: 4,
      category: "photoshop",
      src: gallery4,
    },
    {
      id: 5,
      category: "ai",
      src: gallery5,
    },
    {
      id: 6,
      category: "Design",
      src: gallery6,
    },
    {
      id: 7,
      category: "Design",
      src: gallery7,
    },
    {
      id: 8,
      category: "Design",
      src: gallery8,
    },
    {
      id: 9,
      category: "ai",
      src: gallery9,
    },
  ];

  useEffect(() => {
    function filterData() {
      switch (active) {
        case 1:
          setFilterD(galleryData);
          break;
        case 2:
          setFilterD(galleryData.filter((d) => d.category === "photoshop"));
          break;
        case 3:
          setFilterD(galleryData.filter((d) => d.category === "Design"));
          break;
        case 4:
          setFilterD(galleryData.filter((d) => d.category === "ai"));
          break;

        default:
          setFilterD(galleryData);
          break;
      }
    }
    filterData();
  }, [active]);

  return (
    <>
      <div className="w-full flex justify-center flex-col gap-5 text-center mt-40">
        <Typography variant="caption" color="primary" data-aos="fade-up"
          data-aos-duration="600" className="aos-init aos-animate ">
          HUGE GALLARY
        </Typography>
        <Typography variant="h3" data-aos="fade-up"
          data-aos-duration="600" className='aos-init aos-animate '>AI-Powered Design</Typography>

        <div
          className="flex justify-center gap-2  w-[50%] mx-auto pb-5 aos-init aos-animate "
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Button
            disableRipple
            onClick={() => setActive(1)}
            sx={{
              borderBottom: "1px solid #00FCC6",
              px: "10px",
              borderRadius: 0,
              color: active == 1 ? "#00FCC6" : "grey",
              borderBottom:
                active == 1 ? "1px solid #00FCC6" : "0px solid #00FCC6",
              fontSize: "3vmin",
            }}
          >
            Art Direction
          </Button>
          <Button
            disableRipple
            onClick={() => setActive(2)}
            sx={{
              px: "10px",
              borderBottom: "1px solid #00FCC6",
              borderRadius: 0,
              color: active == 2 ? "#00FCC6" : "grey",
              borderBottom:
                active == 2 ? "1px solid #00FCC6" : "0px solid #00FCC6",
              fontSize: "3vmin",
            }}
          >
            Photoshop
          </Button>
          <Button
            disableRipple
            onClick={() => setActive(3)}
            sx={{
              px: "10px",
              borderBottom: "1px solid #00FCC6",
              borderRadius: 0,
              color: active == 3 ? "#00FCC6" : "grey",
              borderBottom:
                active == 3 ? "1px solid #00FCC6" : "0px solid #00FCC6",
              fontSize: "3vmin",
            }}
          >
            Design
          </Button>
          <Button
            disableRipple
            onClick={() => setActive(4)}
            sx={{
              px: "10px",
              borderBottom: "1px solid #00FCC6",
              borderRadius: 0,
              color: active == 4 ? "#00FCC6" : "grey",
              borderBottom:
                active == 4 ? "1px solid #00FCC6" : "0px solid #00FCC6",
              fontSize: "3vmin",
            }}
          >
            Ai
          </Button>
        </div>
        <Box className="  px-14" sx={{ width: "100%", minHeight: 393 }}>
          <Masonry
            columns={{
              xl: 4,
              lg: 4,
              md: 4,
              sm: 2,
              xs: 1,
            }}
            spacing={2}
          >
            {filterD.map((item, index) => (
              <Box
                key={index}
                onClick={(index) => {
                  setOpen(true);
                  setImgIndex({ src: item.src });
                }}
                className='cursor-pointer'
              >
                <img
                  id={`myImage${index}`}
                  src={item.src}
                  alt={item.category}
                />
              </Box>
            ))}
          </Masonry>
        </Box>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[imgIndex]}
        />
      </div>
    </>
  );
};

export default Gallery;
