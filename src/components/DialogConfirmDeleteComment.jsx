import { DeleteRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import MainContext from '../context';


const DialogConfirmDeleteComment = React.memo(({ works }) => {

  const { deleteCommentProduct , deleteReplyCommentProduct} = React.useContext(MainContext);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
    };
    const handleAgreeDeleteComment = () => {
        if (works.isReply) {
        deleteReplyCommentProduct(works.commentId , works.isReplyId)
    }else{
        deleteCommentProduct(works.commentId);
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        variant="contained"
        size="small"
        onClick={handleClickOpen}
      >
        <DeleteRounded />
      </IconButton>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Are you sure you want to delete "${works.commentTitle}" comment?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            message: {works.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Disagree</Button>
          <Button onClick={handleAgreeDeleteComment} color='error'>Agree</Button>
        </DialogActions>
      </Dialog> 
    </>
  );
});

export default DialogConfirmDeleteComment;
