import { CalendarMonthRounded, ForumRounded } from "@mui/icons-material";
import "./Blogs/style.css";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import { aboutEagle, blogs1, quotes } from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <div className="bg-blogs-show pt-48 pb-32">
        <div >
          <Typography variant="h3" className="text-center ">
            Ai Mentor blogs
          </Typography>
        </div>
        <div className="cont-card-blogs mt-16 flex  gap-10  flex-wrap px-32">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              key={item}
              sx={{
                width: {
                  sm: 300,
                  xs: 280,
                },
                borderRadius: "7px",
                mx: {
                  sm: "auto",
                  xs: "auto",
                },
              }}
              className="card-blogs"
            >
              <div style={{ overflow: "hidden" }}>
                <Link to={`./${item}`}>
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
                /></Link>
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
                  <Avatar src={aboutEagle} sx={{ width: 20, height: 20 }} />
                  <Typography color="primary" variant="caption">
                    Lorem ipsum .
                  </Typography>
                </Typography>
                <Typography variant="h6">
                  Lizards are a widespread group of squamate
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
        <div className="flex  justify-center mt-16">
          <Pagination count={8} page={page} onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default Blogs;
