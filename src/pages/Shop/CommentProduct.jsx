import { ReplyRounded,KeyboardReturnRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { useContext, useId, useState } from "react";
import { noComment, userDefault } from "../../assets";
import MainContext from "../../context";
import { useImmer } from "use-immer";
import DialogConfirmDeleteComment from "../../components/DialogConfirmDeleteComment";
const CommentProduct = ({ CommentProductId }) => {
  const {
    commentProducts,
    profiles,
    user,
    replyCommentProduct,
    setCommentProducts,
    deleteCommentProduct,
    deleteReplyCommentProduct,
    confirmDelete
    
  } = useContext(MainContext);

  // ------------------get all comments for this product------------------
  const filterdata = commentProducts.filter(
    (data) => data.postId == CommentProductId
  );

  // ------------------reverse the array comment------------------
  const reverse_array = filterdata.map(
    (item, idx) => filterdata[filterdata.length - 1 - idx]
  );

  const getUserProfileSrc = (userName) => {
    const user = profiles.find((profile) => profile.id === userName);
    return user ? user.srcProfile : userDefault;
  };

  // State to keep track of which comment is being replied to
  const [replyingTo, setReplyingTo] = useState(null);
  const [titleReply, setTitleReply] = useState("");
  const [replyText, setReplyText] = useState("");
  const handleReplyClick = (commentId) => {
    setReplyingTo(commentId);
  };

  const handleReplySubmit = (comment) => {
    const newReply = {
      id: JSON.stringify(Math.random()),
      title: titleReply,
      message: replyText,
      userName: user.id,
    };
    const updatedComments = commentProducts.map((item) => {
      if (item.id === comment.id) {
        return {
          ...item,
          isReply: [...item.isReply, newReply],
        };
      }
      return item;
    });

    setCommentProducts(updatedComments);

    replyCommentProduct(
      { ...comment, isReply: [...comment.isReply, newReply] },
      comment.id
    );

    setReplyText("");
    setTitleReply("");
    setReplyingTo(null);
  };

  return (
    <div>
      <div className="mt-10">
        {reverse_array.length > 0 ? (
          reverse_array.map((data) => (
            <div key={data.id}>
              <div>
                <div
                  style={{ marginTop: "20px" }}
                  className={`flex flex-row justify-between gap-4 py-4 pr-4 max-sm:flex-col `}
                >
                  <div className="flex gap-4 max-sm:flex-col">
                    {/* avatar */}
                    <div>
                      <Avatar src={getUserProfileSrc(data.userName)}>
                        user profile
                      </Avatar>
                    </div>

                    {/* message and title */}
                    <div>
                      <Typography variant="body1" className="mb-4">
                        {data.title}
                      </Typography>
                      
                      <p style={{ color: "#a8acb7" }}>{data.message}</p>
                    </div>
                  </div>

                  {/* actions comment */}
                  <div className='max-sm:self-end'>
                    <Tooltip
                      title="reply to comment"
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <IconButton
                        variant="contained"
                        size="small"
                        onClick={() => handleReplyClick(data.id)}
                      >
                        <ReplyRounded />
                      </IconButton>
                    </Tooltip>

                    {user.id === data.userName ? (
                      <Tooltip
                        title="delete this comment"
                        arrow
                        TransitionComponent={Zoom}
                      >
                        <DialogConfirmDeleteComment works={{
                          commentId: data.id,
                          commentTitle: data.title ,
                          message:data.message,
                          isReply:false
                        }}/>
                      </Tooltip>
                    ) : null}
                  </div>
                </div>
                {replyingTo === data.id && (
                  <div className="reply-form flex gap-4 flex-col">
                    <TextField
                      label="title your reply"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={titleReply}
                      onChange={(e) => setTitleReply(e.target.value)}
                    />
                    <TextField
                      label="Your Reply"
                      multiline
                      rows={4}
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleReplySubmit(data)}
                    >
                      Submit Reply
                    </Button>
                  </div>
                )}
                <Divider variant="middle" />
              </div>
                <div className="text-right flex flex-row-reverse px-4 py-2">
                {data.isReply.length >=1  ? <KeyboardReturnRounded sx={{ml:'auto'}}/> : null}
                </div>
              {data.isReply.map((item) => (
                <div key={item.id}>
                  <div
             
                    className={`reply-comment flex items-center  justify-between pr-4 max-sm:flex-col max-sm:items-stretch gap-4 py-4`}
                  >
                    <div className="flex gap-5 max-sm:flex-col">
                      <Avatar src={getUserProfileSrc(item.userName)}>
                        user profile
                      </Avatar>

                      <div>
                        <Typography variant="body1" className="mb-4">
                          {item.title}
                        </Typography>
                        <p style={{ color: "#a8acb7" }}>{item.message}</p>
                      </div>
                    </div>
                    <div className='max-sm:self-end'>

                    {user.id === item.userName ? (
                      <Tooltip
                        title="delete this comment"
                        arrow
                        TransitionComponent={Zoom}
                      >
                        <DialogConfirmDeleteComment works={{
                          commentId: data.id,
                          commentTitle: item.title ,
                          isReplyId:item.id,
                          message:item.message,
                          isReply:true
                        }}/>
                      </Tooltip>
                    ) : null}
                    </div>
                  </div>
                  <Divider variant="middle" sx={{ ml: "50px" }} />
                </div>
              ))}
            </div>
          ))
        ) : (
          <>
            <img
              style={{ width: "40%", margin: "10px auto" }}
              src={noComment}
              className="drop-shadow-xl"
              alt="There are no comments here yet"
            />
            <Typography variant="h4" className="text-center">
              There are no comments here yet
            </Typography>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentProduct;
