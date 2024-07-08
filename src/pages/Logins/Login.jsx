import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useContext } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import MainContext from '../../context';
import { loginValidation } from "../../validations/loginValidation";
import { toastComponent, toastErrorComponent } from "../../components/toast";
const Login = () => {
  const {setForceRenderLogin , profiles} = useContext(MainContext)
  const navigation = useNavigate()
  function goBack() {
    window.history.back();
  }
  const inputsName = {
    username: "",
    password:'' , 
  };
  const formik = useFormik({
    initialValues: inputsName,
    onSubmit: (values) => {
      console.log("formik values", values);
      if (profiles.find(e=>e.username === values.username && e.password ===values.password )) {
        let objectProfile = profiles.find(e=>  e.username === values.username && e.password === values.password);
          localStorage.setItem('userId',JSON.stringify(objectProfile)) ; 
          setForceRenderLogin(draft => !draft)
          toastComponent("you're login")
          navigation('/');
        }else{
          toastErrorComponent('The desired information was not found')
        // formik.resetForm();
      }
    },
    validationSchema: loginValidation,
  });
  // console.table(profiles);
  return (
    <>
      <Box className="w-full min-h-[100vh] flex cont-signUp-pass bg-dark-card ">
        <div className=" grow flex flex-col justify-center pl-16 relative ">
          <Typography
            variant="h2"
            sx={{ fontSize: { sm: "70px", xs: "50px" } }}
          >
            Welcome Back .!
          </Typography>
          <Button
            variant="outlined"
            className="btn-right-signUp"
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
            Skip the lag ?
          </Button>
        </div>
        <div className=" grow right-card-form-signUp flex justify-center items-center ">
          <div className="card-form-signUp flex flex-col gap-3">
            <Typography
              variant="h4"
              sx={{ fontSize: { sm: "38px", xs: "27px" } }}
            >
             Login
            </Typography>
            <Typography variant="caption">Glad you’re back.!</Typography>
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
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  background: "linear-gradient(to right , #7f00ff , #00FCC6) ",
                }}
                type="submit"
              >
                Login
              </Button>
            </form>
            <Link to='/forgotPassword' className="text-accent"> forget password ? </Link>
                <Divider sx={{mt:'auto'}} >or</Divider>
            <div >
            Don’t have an account ? <Link to='/signUp' className="text-accent">Signup</Link>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Login;