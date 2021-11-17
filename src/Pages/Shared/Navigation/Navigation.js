import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { cyan } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut, admin } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: cyan[600] }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            DOCTORS PORTAL
          </Typography>
          <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to="/appointment"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button color="inherit">Appointment</Button>
          </Link>
          {user.email ? (
            <>
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Button color="inherit">Dashboard</Button>
              </Link>

              <Typography variant="body1" color="text.secondary">
                {user.displayName}
              </Typography>
              <Button
                varaint="text"
                onClick={logOut}
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
