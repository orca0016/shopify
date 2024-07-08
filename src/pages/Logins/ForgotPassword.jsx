import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { forgetPasswordValidation } from "../../validations/forgetPasswordValidation";
import "./style.css";
const ForgotPassword = () => {
  function goBack() {
    window.history.back();
  }
  const contactInputNames = {
    newPassword: "",
  };
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("formik values", values);
    },
    validationSchema: forgetPasswordValidation,
  });
  return (
    <>
      <Box className="w-full min-h-[100vh] flex cont-forget-pass bg-dark-card ">
        <div className=" grow flex flex-col justify-center pl-16 relative ">
          <Typography
            variant="h2"
            sx={{ fontSize: { sm: "70px", xs: "50px" } }}
          >
            No Worries.!!
          </Typography>
          <Button
            variant="outlined"
            className="btn-right-forget"
            color="grey"
            onClick={goBack}
            sx={{
              border: "3px  solid white",
              color: "white",
              borderRadius: "0px",
              width: "200px",
              padding: "10px",
              background: "transparent",
            }}
          >
            Take me back.!
          </Button>
        </div>
        <div className=" grow right-card-form-forgot flex justify-center items-center ">
          <div className="card-form-forgot flex flex-col gap-3">
            <Typography
              variant="h4"
              sx={{ fontSize: { sm: "38px", xs: "27px" } }}
            >
              Forgot Password ?
            </Typography>
            <Typography variant="caption">Please enter you’re email</Typography>
            <form
              className="flex flex-col gap-3"
              onSubmit={formik.handleSubmit}
            >
              <TextField
                label="your email address"
                variant="outlined"
                sx={{ borderRadius: "6px" }}
                placeholder="example@mail.com"
                id="newPassword"
                name="newPassword"
                helperText={
                  formik.touched.newPassword ? formik.errors.newPassword : null
                }
                error={Boolean(
                  formik.touched.newPassword && formik.errors.newPassword
                )}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
              />

              <Button
                variant="contained"
                sx={{
                  color: "white",
                  background: "linear-gradient(to left , #7f00ff , #00FCC6) ",
                }}
                type="submit"
              >
                Reset Password
              </Button>
            </form>

            <div style={{ marginTop: "auto" }}>
              Don’t have an account ? <Link to='/signUp' className="text-accent">Signup</Link>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ForgotPassword;
