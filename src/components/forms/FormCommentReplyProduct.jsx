import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../../context";
import { commentProductValidation } from "../../validations/commentProductValidation";
const FormCommentProduct = ({ setOpenDialog }) => {
  const { createNewComment , user } = useContext(MainContext);
  const { shopId } = useParams();

  const inputName = {
    title: "",
    message: "",
    postId: shopId || 0,
    isReply: [],
    userName:user.id
  };
  const formik = useFormik({
    initialValues: inputName,
    onSubmit: (values) => {
      console.log("formik values", values);
      createNewComment(values);
      setOpenDialog((draft) => !draft);
    },
    validationSchema: commentProductValidation,
  });
  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} sx={{ p: "10px 0 " }}>
            <TextField
              fullWidth
              placeholder="Enter your title"
              // ref={titleField}
              id="title"
              sx={{
                backgroundColor: "#1E1E1E",
                boxShadow: "0 0 10px #0e0e0edb",
              }}
              label="enter your title"
              size="small"
              name="title"
              helperText={formik.touched.title ? formik.errors.title : null}
              error={Boolean(formik.touched.title && formik.errors.title)}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ py: "10px" }}>
            <TextField
              sx={{
                backgroundColor: "#1E1E1E",
                boxShadow: "0 0 10px #0e0e0edb",
              }}
              fullWidth
              multiline
              minRows={4}
              maxRows={5}
              placeholder="Enter your Message"
              id="message"
              label="Message"
              size="small"
              name="message"
              helperText={formik.touched.message ? formik.errors.message : null}
              error={Boolean(formik.touched.message && formik.errors.message)}
              value={formik.values.message}
              onChange={formik.handleChange}
            />
          </Grid>
          <Button type="submit" fullWidth sx={{ p: "10px" }}>
            send
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default FormCommentProduct;
