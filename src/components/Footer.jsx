import { Typography } from "@mui/material";
import {
  FacebookRounded,
  Telegram,
  LinkedIn,
  Instagram,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <div className="w-full footer-style bg-dark-card  justify-center flex flex-wrap  gap-10 p-20 px-32">
        <div className="card-footer">
          <Typography variant="h4" className="mb-20">
            AiMentor
          </Typography>
          <Typography variant="caption">
            Copyright © 2023 AiMentor. <br /> All Rights Reserved.
          </Typography>
          <br />
          <Typography variant="caption"> </Typography>
          <br />
          <Typography variant="caption">Social Media</Typography>
          <br />
          <Typography
            color="grey"
            variant="caption"
            className="flex justify-between"
          >
            <FacebookRounded />
            <Telegram />
            <LinkedIn />
            <Instagram />
          </Typography>
        </div>

        <div className="card-footer">
          <Typography variant="h4" className="mb-12">
            About
          </Typography>
          <Typography variant="caption">About Company</Typography>
          <br />
          <Typography variant="caption">Our Solutions</Typography>
          <br />
          <Typography variant="caption">Our Best Services</Typography>
          <br />
          <Typography variant="caption">Professional Team</Typography>
        </div>

        <div className="card-footer">
          <Typography variant="h4" className="mb-20">
            Address
          </Typography>
          <Typography variant="caption">
            <LocationOn color="primary" /> 551 Swanston Street, Melbourne <br />
            Victoria 3053 Australia
          </Typography>
          <br />
          <Typography variant="caption">
            <Phone color="primary" /> +61 3 8376 6284
          </Typography>
          <br />
          <Typography variant="caption">
            <Email color="primary" /> info@designingmedia.com
          </Typography>
          <br />
        </div>

        <div className="card-footer">
          <Typography variant="h4" className="mb-20">
            Newsletter Signup
          </Typography>
          <Typography variant="caption">
            Copyright © 2023 AiMentor. <br /> All Rights Reserved.
          </Typography>
          <br />
          <Typography variant="caption">.</Typography>
          <br />
          <Typography variant="caption">Social Media</Typography>
          <br />
          <Typography variant="caption">iconsssss</Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
