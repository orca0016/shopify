import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useContext, useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  toastDefaultComponent,
  toastErrorComponent,
} from "../../components/toast";
import MainContext from "../../context";
import { SignUpValidation } from "../../validations/SignUpValidation";
import "./style.css";
import { userDefault } from "../../assets";

const SignUp = () => {
  const { createNewUser, profiles } = useContext(MainContext);
  const navigate = useNavigate();
  const [selectProfile, setSelectProfile] = useState('');
  const idRand = useId();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectProfile(value);

    let profileUrl = '';
    switch (value) {
      case 1:
        profileUrl = 'https://mui.com/static/images/avatar/1.jpg';
        break;
      case 2:
        profileUrl = 'https://mui.com/static/images/avatar/2.jpg';
        break;
      case 3:
        profileUrl = 'https://mui.com/static/images/avatar/3.jpg';
        break;
      case 4:
        profileUrl = 'https://mui.com/static/images/avatar/4.jpg';
        break;
      case 5:
        profileUrl = 'https://mui.com/static/images/avatar/5.jpg';
        break;
      case 6:
        profileUrl = 'https://mui.com/static/images/avatar/6.jpg';
        break;
      default:
        profileUrl = userDefault;
        break;
    }

    formik.setFieldValue('srcProfile', profileUrl);
    console.log(selectProfile);
  };

  const contactInputNames = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    srcProfile: userDefault,
    id: idRand,
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      const isUserExists = profiles.some(
        (user) =>
          user.username === values.username && user.email === values.email
      );
      if (!isUserExists) {
        const { confirmPassword, ...newValues } = values;
        createNewUser(newValues, idRand);
        navigate("/");
      } else {
        toastErrorComponent("userName👤 and email📧 is already used ");
        formik.setValues(contactInputNames);
      }
    },
    validationSchema: SignUpValidation,
  });

  return (
    <>
      <Box className="w-full min-h-[100vh] flex cont-signUp-pass bg-dark-card">
        <div className="grow flex flex-col justify-center pl-16 relative">
          <Typography
            variant="h2"
            sx={{ fontSize: { sm: "70px", xs: "50px" } }}
          >
            Roll the Carpet.!
          </Typography>
          <Button
            variant="outlined"
            className="btn-right-signUp"
            color="grey"
            onClick={() => window.history.back()}
            sx={{
              border: "3px solid white",
              color: "white",
              borderRadius: "0px",
              width: "200px",
              padding: "10px",
              background: "transparent",
            }}
          >
            Skip the lag ?
          </Button>
        </div>
        <div className="grow right-card-form-signUp flex justify-center items-center">
          <div className="card-form-signUp flex flex-col gap-3">
            <Typography
              variant="h4"
              sx={{ fontSize: { sm: "38px", xs: "27px" } }}
            >
              SignUp
            </Typography>
            <Typography variant="caption">
              Just some details to get you in.!
            </Typography>
            <form
              className="flex flex-col gap-3"
              onSubmit={formik.handleSubmit}
              autoComplete="off"
            >
              <TextField
                label="enter your username"
                variant="outlined"
                sx={{ borderRadius: "6px" }}
                placeholder="Username"
                size="small"
                id="username"
                name="username"
                helperText={
                  formik.touched.username ? formik.errors.username : null
                }
                error={Boolean(
                  formik.touched.username && formik.errors.username
                )}
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <TextField
                label="enter your email address"
                variant="outlined"
                sx={{ borderRadius: "6px" }}
                size="small"
                placeholder="Email"
                id="email"
                name="email"
                helperText={formik.touched.email ? formik.errors.email : null}
                error={Boolean(formik.touched.email && formik.errors.email)}
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              <FormControl size="small">
                <InputLabel id="srcProfile">select a profile</InputLabel>
                <Select
                  value={selectProfile}
                  label="select a profile"
                  size='small'
                  placeholder="profile"
                  id="srcProfile"
                  name="srcProfile"
                  variant="outlined"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>
                    <div className="flex flex-row-reverse gap-3 items-center justify-around w-full">
                      <Avatar src='https://mui.com/static/images/avatar/1.jpg'></Avatar>
                      <Typography>profile 1:</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem value={2}>
                    <div className="flex flex-row-reverse gap-3 items-center justify-around w-full ">
                      <Avatar src='https://mui.com/static/images/avatar/2.jpg'></Avatar>
                      <Typography>profile 2:</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem value={3}>
                    <div className="flex flex-row-reverse gap-3 items-center justify-around w-full">
                      <Avatar src='https://mui.com/static/images/avatar/3.jpg'></Avatar>
                      <Typography>profile 3:</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem value={4}>
                    <div className="flex flex-row-reverse gap-3 items-center justify-around w-full">
                      <Avatar src='https://mui.com/static/images/avatar/4.jpg'></Avatar>
                      <Typography>profile 4:</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem value={5}>
                    <div className="flex flex-row-reverse gap-3 items-center justify-around w-full">
                      <Avatar src='https://mui.com/static/images/avatar/5.jpg'></Avatar>
                      <Typography>profile 5:</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem value={6}>
                    <div className="flex flex-row-reverse gap-3 items-center justify-around w-full ">
                      <Avatar src='https://mui.com/static/images/avatar/6.jpg'></Avatar>
                      <Typography>profile 6:</Typography>
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="enter new Password"
                variant="outlined"
                sx={{ borderRadius: "6px" }}
                placeholder="Password"
                id="password"
                size="small"
                name="password"
                helperText={
                  formik.touched.password ? formik.errors.password : null
                }
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <TextField
                label="Confirm Your Password"
                variant="outlined"
                sx={{ borderRadius: "6px" }}
                placeholder="Password"
                id="confirmPassword"
                size="small"
                name="confirmPassword"
                helperText={
                  formik.touched.confirmPassword
                    ? formik.errors.confirmPassword
                    : null
                }
                error={Boolean(
                  formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                )}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  background: "linear-gradient(to left , #7f00ff , #00FCC6)",
                }}
                type="submit"
              >
                SignUp
              </Button>
            </form>
            <Divider>or</Divider>
            <div style={{ marginTop: "auto" }}>
              Already Registered?{" "}
              <Link to="/login" className="text-accent">
                Login
              </Link>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default SignUp;
