import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { cardContact, rocketBtn, titleContact } from "../assets";
import { contactValidation } from "../validations/contactValidation";
import { forgetPasswordValidation } from "../validations/forgetPasswordValidation";
import "./Contact/style.css";
const Contact = () => {
  const contactInputNames = {
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  };
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("formik values", values);
    },
    validationSchema: contactValidation,
  });
  return (
    <>
      <Box className="w-full min-h-[100vh] pb-32 pt-32 gap-4 px-32 flex flex-col items-center container-contact">
        <img src={titleContact} alt="title contact" />
        <Typography variant="caption" className="mx-auto">
          Reach out, and let's create a universe of possibilities together!
        </Typography>
        <Box
          sx={{ backgroundColor: "#1e1e1e80" , boxShadow:'0 0 10px black' }}
          className="flex  gap-5 p-6 rounded-lg w-full card-contact"
        >
          <div className="grow pt-10  w-[50%] form-cart-contact">
            <Typography variant="h4">Let’s connect constellations</Typography>
            <Typography variant="caption" color="GrayText">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </Typography>

            <form style={{ marginTop: "30px" }} onSubmit={formik.handleSubmit}>
              <Grid container rowGap={2}>
                <Grid item xs={12} sm={12} md={6} sx={{ padding: " 0 10px" }}>
                  <TextField
                    fullWidth
                    placeholder="Enter your LastName"
                    id="lastName"
                    sx={{
                      backgroundColor: "#1E1E1E",
                      boxShadow: "0 0 10px #0e0e0edb",
                    }}
                    label="LastName"
                    size="small"
                    name="lastName"
                    helperText={
                      formik.touched.lastName ? formik.errors.lastName : null
                    }
                    error={Boolean(
                      formik.touched.lastName && formik.errors.lastName
                    )}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ padding: "0 10px" }}>
                  <TextField
                    sx={{
                      backgroundColor: "#1E1E1E" ,
                      boxShadow: "0 0 10px #0e0e0edb",
                    }}
                    fullWidth
                    placeholder="Enter your FirstName"
                    id="firstName"
                    label="FirsName"
                    size="small"
                    name="firstName"
                    helperText={
                      formik.touched.firstName ? formik.errors.firstName : null
                    }
                    error={Boolean(
                      formik.touched.firstName && formik.errors.firstName
                    )}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} sx={{ padding: "0 10px" }}>
                  <TextField
                    sx={{
                      backgroundColor: "#1E1E1E",
                      boxShadow: "0 0 10px #0e0e0edb",
                    }}
                    fullWidth
                    placeholder="Enter your Email"
                    id="email"
                    label="Email"
                    size="small"
                    name="email"
                    helperText={
                      formik.touched.email ? formik.errors.email : null
                    }
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{ padding: "0 10px" }}>
                  <TextField
                    sx={{
                      backgroundColor: "#1E1E1E",
                      boxShadow: "0 0 10px #0e0e0edb",
                    }}
                    fullWidth
                    placeholder="Enter your Phone"
                    id="phone"
                    label="Phone"
                    size="small"
                    name="phone"
                    helperText={
                      formik.touched.phone ? formik.errors.phone : null
                    }
                    error={Boolean(formik.touched.phone && formik.errors.phone)}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{ padding: "0 10px" }}>
                  <TextField
                    sx={{
                      backgroundColor: "#1E1E1E",
                      boxShadow: "0 0 10px #0e0e0edb",
                    }}
                    fullWidth
                    multiline
                    rows={4}
                    maxRows={5}
                    placeholder="Enter your Message"
                    id="message"
                    label="Message"
                    size="small"
                    name="message"
                    helperText={
                      formik.touched.message ? formik.errors.message : null
                    }
                    error={Boolean(
                      formik.touched.message && formik.errors.message
                    )}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{ padding: "0 10px" }}>
                  <Button
                    sx={{
                      background:
                        "linear-gradient(to left , #A604F2 , #763AF5)",
                      color: "white",
                    }}
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Send it to the moon <img src={rocketBtn} alt="btn icon " />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
          <div className="grow-0 img-cart-contact">
            <img src={cardContact} alt="card contact img" />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
