import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#0fcfec",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  navItemM: {
    display: "flex",
    alignItems: "center",
    padding: ".8rem 0",
    paddingLeft: "10%",
    opacity: ".8",
    transition: ".3s linear",
    borderRight: "4px solid transparent",
    "&:hover": {
      opacity: "1",
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  },
  active: {
    borderColor: theme.palette.primary.main,
  },
  navIcon: {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
  navLogoText: {
    color: theme.palette.primary.main,
    textAlign: "center",
    margin: "1rem .3rem",
  },
  logoImg: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
  },
  navbar: {
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
      display: "none",
    },
    background: "#0fcfec",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navItem: {
    borderBottom: "2px solid transparent",
    color: "#fff",
    transition: ".3s",
    "&:hover": {
      color: "#3a4256",
      borderBottom: "2px solid #3a4256",
    },
  },
  linkItem: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const Navigation = ({ window, handleClickOpen }) => {
  const {
    root,
    appBar,
    menuButton,
    drawerPaper,
    navbar,
    navItem,
    linkItem,
    link,
    navItemM,
  } = useStyles();

  const { user, logOut } = useAuth();

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ textAlign: "center" }}>
      <Typography sx={{ py: 3 }} variant="h6">
        DoctorPortal
      </Typography>
      <Divider />
      <Link to="/" className={link}>
        <ListItem button className={navItemM}>
          <ListItemText primary={"Home"} />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/appointment" className={link}>
        <ListItem button className={navItemM}>
          <ListItemText primary={"Appointment"} />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/login" className={link}>
        <ListItem button className={navItemM}>
          <ListItemText primary={"Login"} />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/signup" className={link}>
        <ListItem button className={navItemM}>
          <ListItemText primary={"Sign up"} />
        </ListItem>
      </Link>
      <Divider />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box className={root}>
        <AppBar className={appBar}>
          <Toolbar>
            <div>
              {" "}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={menuButton}
              >
                <MenuIcon />
              </IconButton>
              <nav className={drawer}>
                <Hidden mdUp implementation="css">
                  <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                      paper: drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  >
                    {drawer}
                  </Drawer>
                </Hidden>
              </nav>
            </div>

            <Container className={navbar}>
              <div>
                <Link className={linkItem} to="/">
                  <Button>
                    <span className={navItem}>Home</span>
                  </Button>
                </Link>
                <Link className={linkItem} to="/appointment">
                  <Button>
                    <span className={navItem}>Appointment</span>
                  </Button>
                </Link>
                <Link className={linkItem} to="/dashboard">
                  <Button>
                    <span className={navItem}>Dashboard</span>
                  </Button>
                </Link>

                {/* {user.email ?
                        <Avatar
                            style={{ display: 'inline-flex', top: 10 }}
                            src={loggedInUser.photoURL} /> :
                        <Link className={linkItem} to='/login'><Button><span className={navItem}>Login</span></Button></Link>} */}

                {user.email ? (
                  <Button onClick={logOut}>
                    <span className={navItem}>Logout</span>
                  </Button>
                ) : (
                  <Link className={linkItem} to="/register">
                    <Button>
                      <span className={navItem}>Register</span>
                    </Button>
                  </Link>
                )}
              </div>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
