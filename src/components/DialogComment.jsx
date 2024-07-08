import { LoadingButton } from "@mui/lab";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:{
    xl:'50vw' ,
    lg:'50vw',
    md:'50vw',
    sm:'90vw',
    xs:'90vw'
  },
  bgcolor: "background.paper",
  border: "2px solid #00FCC6",
  boxShadow: 24,
  p: {
    xl:4 ,
    lg:4,
    md:4,
    sm:4,
    xs:2
  },
};

export default function DialogComment({ children, setOpen, open }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);
  function handleClickLoading() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    handleOpen();
  }

  return (
    <div>
      <LoadingButton
        onClick={handleClickLoading}
        loading={loading}
        variant="text"
        type="button"
        fullWidth
        color="primary"
        sx={{
          gap: "15px",
          borderRadius: "5px",
        }}
      >
        <span className="fontsize-btn-add-product">Leave a comment</span>
      </LoadingButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
