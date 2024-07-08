import { Typography } from "@mui/material";
import React from "react";
import { faq1, faq2 } from "../../assets";

const FaqTitle = () => {
  return (
    <div className="w-full faq-title  py-20">
      <div
        className="grid items-center gap-y-6 mx-auto  aos-init aos-animate "
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div>
          <img src={faq1} alt="image title page faq" className="mx-auto" />
        </div>
        <Typography variant="h3" className="text-center">
          FAQ
        </Typography>
        <div>
          <img src={faq2} alt="image title page faq" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default FaqTitle;
