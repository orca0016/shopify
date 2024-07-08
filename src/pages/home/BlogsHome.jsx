
import { CalendarMonthRounded, ForumRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { blogs1, quotes } from "../../assets";

const BlogsHome = () => {
  return (
    <>
      <Box className="w-full flex flex-col gap-7 items-center box-blogs px-32 pb-20">
        <Typography
          variant="caption"
          color="primary"
          className="aos-init aos-animate "
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          LATEST POSTS
        </Typography>
        <Typography
          variant="h3"
          data-aos="fade-up"
          fontSize={{
            xl: 90,
            lg: 90,
            md: 70,
            sm: 45,
            xs: 30,
          }}
          data-aos-anchor-placement="bottom-bottom"
        >
          {" "}
          News & Articles
        </Typography>

        <div className="con-blogs-home py-8 grid grid-rows-1 grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              sx={{
                width: {
                  sm:300,
                  xs:280,
                },
                borderRadius: "7px",
                mx: {
                  sm: "auto",
                  xs: "auto",
                },
              }}
              className="card-blo
              gs aos-init aos-animate "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div style={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  className="img-blog-card"
                  height="140"
                  sx={{
                    transition: ".6s",
                    "&:hover": {
                      scale: "1.1",
                    },
                  }}
                  image={blogs1}
                />
              </div>
              <CardContent
                sx={{
                  px: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  className="flex items-center gap-4"
                  component="div"
                >
                  <Avatar src={quotes} sx={{ width: 20, height: 20 }} />
                  <Typography color="primary" variant="caption">
                    Lorem ipsum .
                  </Typography>
                </Typography>
                <Typography variant="h6">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <div className="flex justify-between">
                  <div>
                    <Typography variant="caption" color="GrayText">
                      <CalendarMonthRounded
                        color="primary"
                        sx={{ fontSize: ".9rem" }}
                      />{" "}
                      June 25, 2023
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="caption" color="GrayText">
                      <ForumRounded
                        color="primary"
                        sx={{ fontSize: ".9rem" }}
                      />{" "}
                      0 Comments
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Box>
    </>
  );
};

export default BlogsHome;
