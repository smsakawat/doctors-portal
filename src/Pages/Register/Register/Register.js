import GoogleIcon from "@mui/icons-material/Google";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
import useStyles from "../../../styles";

const Register = () => {
  const {
    user,
    setUser,
    registerUser,
    updateName,
    isLoading,
    setIsLoading,
    signinWithGoogle,
    saveUser,
    saveGoogleSigninUser,
  } = useAuth();
  const classes = useStyles();
  const [registerData, setRegisterData] = useState({});
  const [successAlert, setSuccessAlert] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [passError, setPassError] = useState(false);
  // getting query value that i provider from login to redirect the use in wished page
  // const { query } = useLocation();
  // console.log(query);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    /* const field = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[field] = value;
          setLoginData(newLoginData) */

    // just shortcut'a kore fellam...
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  //   handle register form submit
  const hanldeOnSubmit = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.password2) {
      setPassError(true);
      setTimeout(() => {
        setPassError(false);
      }, 3000);
      return;
    }
    registerUser(registerData.email, registerData.password)
      .then(() => {
        // i know i will get userName and email if i donot set here by observer but it works asyncly..so i need this before it executes and that's why i set it here
        setUser({
          ...user,
          displayName: registerData.name,
          email: registerData.email,
        });
        saveUser(registerData.email, registerData.name);
        updateName(registerData.name);
        setSuccessAlert(true);
        navigate("/");
        //  close alert after three second
        setTimeout(() => {
          setSuccessAlert(false);
        }, 3000);
      })
      .catch((err) => {})
      .finally(() => setIsLoading(false));

    // console.log(registerData);
    e.target.reset();
  };
  // show Error while sign up
  const showError = () => {
    setTimeout(() => {
      setAuthError(false);
    }, 3000);
    return (
      <Alert severity="error">
        An error occcured while signing up,please try again
      </Alert>
    );
  };

  // sign up with google
  const handleGoogleSignUp = () => {
    setIsLoading(true);
    signinWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate("/");
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
          <div style={{ width: "75%", margin: "140px auto 0" }}>
            {/* show error while pass don't match */}
            {passError && (
              <Alert severity="error">
                Password fields didn't match,please try again
              </Alert>
            )}
            {/* show error notification */}
            {authError && showError()}
            {/* show successs notification */}
            {successAlert && (
              <Alert severity="success">Login Successfull!</Alert>
            )}
            <Typography
              variant="h6"
              align="center"
              sx={{ fontWeight: "bold", my: 3, color: "primary.main" }}
            >
              Register
            </Typography>
            {isLoading ? (
              <CircularProgress color="inherit" sx={{ my: 3 }} />
            ) : (
              <>
                <form onSubmit={hanldeOnSubmit}>
                  <TextField
                    fullWidth
                    sx={{ display: "block", m: 1 }}
                    variant="standard"
                    label="Full Name"
                    name="name"
                    onChange={handleOnChange}
                  ></TextField>
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
                  <TextField
                    fullWidth
                    sx={{ display: "block", m: 1 }}
                    type="password"
                    label="Re-Type Passoword"
                    name="password2"
                    variant="standard"
                    onChange={handleOnChange}
                  ></TextField>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.button}
                    sx={{ width: 1, mt: 2, ml: 1 }}
                  >
                    Register
                  </Button>
                </form>

                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="span"
                  >
                    Already Registered?
                  </Typography>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button variant="text" color="primary">
                      Please Login
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
                    onClick={handleGoogleSignUp}
                    variant="outlined"
                    color="error"
                    startIcon={<GoogleIcon />}
                  >
                    join with google
                  </Button>
                </Box>
              </>
            )}
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

export default Register;
