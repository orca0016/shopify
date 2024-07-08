import { Avatar, Chip, Divider, Typography } from "@mui/material";
import { data } from "autoprefixer";
import { blog } from "../assets";
import "./Blog/style.css";
const Blog = () => {
  const dataComment = [
    {
      id: 1,
      reply: false,
    },
    {
      id: 2,
      reply: true,
    },
    {
      id: 3,
      reply: false,
    },
    {
      id: 4,
      reply: false,
    },
    {
      id: 5,
      reply: true,
    },
  ];

  return (
    <>
      <div className="bg-blogs-show pt-32  flex flex-col ">
        <div>
          <Typography variant="h3" className="text-center">
            title blog
          </Typography>
        </div>
        <div className="cont-blog-content mt-20   ">
          <img
            className="image-blog"
            src={'https://img.freepik.com/free-photo/young-woman-eye-reflects-colorful-summer-nature-generated-by-ai_188544-18407.jpg?t=st=1713881467~exp=1713885067~hmac=1fc176f33449074ed3ca3855fa4a0d4e1745aac36be0075ce82c7cb65727f61e&w=826'}
            alt="tum"
            style={{
              width: "100%",
              margin: "0 auto",
              borderRadius: "5px 5px 0 0 ",
            }}
          />
          <div className="px-5 py-10 flex flex-col gap-2">
            <Typography variant="h4">title of the blog...</Typography>
            <div className="flex gap-5 ">
              <Typography color="primary" variant="caption">
                date info.
              </Typography>
              <Typography color="primary" variant="caption">
                comment info
              </Typography>
              <Typography variant="caption">tags info</Typography>
            </div>
            <Divider />
            <div style={{ color: "#a8acb7" }} className="flex flex-col gap-2 ">
              <p>
                distinctio tenetur in quo architecto expedita ipsum amet maxime
                doloremque provident! Alias dolorum unde eligendi cumque error
                suscipit nulla odit itaque at! Est quisquam at eius harum nobis
                laboriosam commodi sequi debitis repudiandae reiciendis
                temporibus exercitationem, hic iusto. Eaque sit blanditiis
                cupiditate neque necessitatibus saepe fugiat, officia delectus
                laudantium libero numquam quos atque itaque maiores velit,
                debitis alias modi et corrupti placeat autem animi
                reprehenderit. Tempore nam atque laborum modi accusantium
                commodi, dolorem perspiciatis fugit reiciendis in adipisci
                doloremque dolo
              </p>
              <p>
                distinctio tenetur in quo architecto expedita ipsum amet maxime
                doloremque provident! Alias dolorum unde eligendi cumque error
                suscipit nulla odit itaque at! Est quisquam at eius harum nobis
                laboriosam commodi sequi debitis repudiandae reiciendis
                temporibus exercitationem, hic iusto. Eaque sit blanditiis
                cupiditate neque necessitatibus saepe fugiat, officia delectus
                laudantium libero numquam quos atque itaque maiores velit,
                debitis alias modi et corrupti placeat autem animi
                reprehenderit. Tempore nam atque laborum modi accusantium
                commodi, dolorem perspiciatis fugit reiciendis in adipisci
                doloremque dolo
              </p>
            </div>

            <Divider className=" mt-12">
              <Chip
                label="Tags title"
                variant="outlined"
                className="chip-blog-tag"
                sx={{ borderRadius: "6px", mx: "10px" }}
                />
              <Chip
                label="Tags title"
                className="chip-blog-tag"
                variant="outlined"
                sx={{ borderRadius: "6px", mx: "10px" }}
                />
              <Chip
                className="chip-blog-tag"
                label="Tags title"
                variant="outlined"
                sx={{ borderRadius: "6px", mx: "10px" }}
              />
            </Divider>

            <div className="comment">
              <Typography variant="h4" color="grey">
                Comment(1)
              </Typography>

              <div>
                {/* div container coments card */}
                <div className="mt-10">
                  {dataComment.map((data) => (
                    <div
                      key={data.id}
                      
                      style={{ marginTop:'20px' }}
                      className={`${data.reply ? "reply-comment" : ""} flex gap-4`}
                    >
                      <div>
                        <Avatar src="https://html.designingmedia.com/aimentor/assets/images/review1.jpg">
                          test
                        </Avatar>
                      </div>
                      <div>
                        <Typography variant="body1">
                          user name comment
                        </Typography>
                        <Typography variant="caption" color="grey">
                          date comment
                        </Typography>
                        <p style={{ color: "#a8acb7" }}>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illum cum, earum placeat, eos, dignissimos magni
                          nemo qui velit voluptatum nulla possimus? Illo earum
                          totam, deleniti ducimus ipsam at perspiciatis. Quos!
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illum cum, earum placeat, eos, dignissimos magni
                          nemo qui veli
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
