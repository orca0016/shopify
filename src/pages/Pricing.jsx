import FeaturesPrice from "./Pricing/FeaturesPrice";
import Price from "./Pricing/Price";
import "./Pricing/style.css";
import VideoSection from "./home/VideoSection";
import Typography from "@mui/material/Typography";
const Pricing = () => {
  return (
    <>
      <div className="background-price-gradient w-full pt-24 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Typography variant="caption" color="primary" className="text-center">
            AFFORDABLE PLANS
          </Typography>
          <Typography variant="h4" className="text-center">
            Pricing Plans
          </Typography>
        </div>
        <div className="cont-price py-10 w-full px-32">
          <Price />
          <Price />
          <Price />
        </div>
        <VideoSection />
        <FeaturesPrice />
      </div>
    </>
  );
};

export default Pricing;
