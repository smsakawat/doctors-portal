import GoogleIcon from "@mui/icons-material/Google";
import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
import useStyles from "../../../styles";

const Login = () => {
  const {
    loginWithEmail,
    setIsLoading,
    signinWithGoogle,
    saveGoogleSigninUser,
  } = useAuth();
  const classes = useStyles();
  const [loginData, setLoginData] = useState({});
  const [successAlert, setSuccessAlert] = useState(false);
  const [authError, setAuthError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const destination = location.state?.from || "/";

  const handleOnChange = (e) => {
    /* const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData}
      newLoginData[field] = value;
      setLoginData(newLoginData) */

    // just shortcut'a kore fellam...
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const hanldeOnSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    loginWithEmail(loginData.email, loginData.password)
      .then(() => {
        navigate(destination);
        setSuccessAlert(true);
        //  close alert after three second
        setTimeout(() => {
          setSuccessAlert(false);
        }, 3000);
      })
      .catch(() => setAuthError(true))
      .finally(() => setIsLoading(false));
    e.target.reset();
  };

  // show error if any error occures while login

  const showError = () => {
    setTimeout(() => {
      setAuthError(false);
    }, 3000);
    return <Alert severity="error">Invalid Email or Password, try again</Alert>;
  };

  // sign in with google
  const handleGoogleSignin = () => {
    setIsLoading(true);
    signinWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(destination);
        saveGoogleSigninUser(user.email, user.displayName);
        alert("Login Successfull!");
      })
      .catch(() => setAuthError(true))
      .finally(() => setIsLoading(false));
  };
  return (
    <Container style={{ height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div style={{ width: "75%", margin: "150px auto 0" }}>
            {/* show error notification */}
            {authError && showError()}
            {/* show success notification */}
            {successAlert && (
              <Alert severity="success">Login Successfull!</Alert>
            )}
            <Typography
              variant="h6"
              align="center"
              sx={{ fontWeight: "bold", my: 3, color: "primary.main" }}
            >
              Login to your account
            </Typography>
            <form onSubmit={hanldeOnSubmit}>
              <TextField
                fullWidth
                sx={{ display: "block", m: 1 }}
                variant="standard"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
              ></TextField>
              <TextField
                fullWidth
                sx={{ display: "block", m: 1 }}
                type="password"
                label="Passoword"
                name="password"
                variant="standard"
                onChange={handleOnChange}
              ></TextField>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                sx={{ width: 1, mt: 2, ml: 1 }}
              >
                Login
              </Button>
            </form>
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                New to Doctors-Portal?
              </Typography>
              <Link
                to={{ pathname: "/register", query: { destination } }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="text" color="primary">
                  Register
                </Button>
              </Link>
              <Typography
                variant="body2"
                color="text.secondary"
                my={1}
                align="center"
              >
                or use Google sign-in
              </Typography>
              <Button
                onClick={handleGoogleSignin}
                variant="outlined"
                color="error"
                startIcon={<GoogleIcon />}
              >
                connect with google
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={login}
            style={{ width: "100%", paddingTop: 30 }}
            alt="login img"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
