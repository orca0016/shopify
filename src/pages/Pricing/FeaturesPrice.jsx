import { CheckBoxOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

const FeaturesPrice = () => {
  const data = [
    {
      id: 1,
      content: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 4,
          text: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 2,
      content: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 4,
          text: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 3,
      content: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet",
        },
        {
          id: 4,
          text: "Lorem ipsum dolor sit amet",
        },
      ],
    },
  ];
  return (
    <>
      <div className="w-full features-banner  py-12">
        <div className="flex flex-col items-center">
          <Typography variant="caption" color="primary" className="text-center">
            AFFORDABLE PLANS
          </Typography>
          <Typography variant="h4" className="text-center">
            Pricing Plans
          </Typography>
          <div className="cont-banner-price">
            {data.map((info, index) => (
              <div key={index}>
                {info.content.map((text, index) => (
                  <div key={index}>
                    <CheckBoxOutlined color="primary" />
                    {text.text}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesPrice;
