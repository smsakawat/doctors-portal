import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { cyan } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AdminRoute from "../../../AdminRoute/AdminRoute";
import useAuth from "../../../hooks/useAuth";
import AddDoctor from "../AddDoctor/AddDcotor";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";

const drawerWidth = 200;

function Dashboard(props) {
  const { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, admin } = useAuth();

  //   here is just using one fucntion to toogle the state
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Toolbar>
          <Typography
            variant="h6"
            color="primary.main"
            sx={{ fontWeight: "bold" }}
          >
            Dashboard
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem>
            <ListItemText>
              <Button>
                {" "}
                <Link to={`${url}`}>Appointments</Link>
              </Button>
            </ListItemText>
          </ListItem>
          {user?.email && admin && (
            <>
              <ListItem>
                <ListItemText>
                  <Button>
                    {" "}
                    <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Button>
                    {" "}
                    <Link to={`${url}/addDoctor`}>Add Doctor</Link>
                  </Button>
                </ListItemText>
              </ListItem>
            </>
          )}
        </List>
      </div>
      <Link to="/">
        <Button variant="contained" color="error" sx={{ mb: 1 }}>
          Back to home
          <ArrowForwardIosIcon sx={{ ml: 1, fontSize: "0.95rem" }} />
        </Button>
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DoctorsPortal
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        style={{ backgroundColor: cyan[50], minHeight: "100vh" }}
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <Switch>
            <Route exact path={path}>
              <DashboardHome />
            </Route>
            <Route path={`${path}/payment/:appointmentId`}>
              <Payment />
            </Route>
            <AdminRoute exact path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            <Route exact path={`${path}/addDoctor`}>
              <AddDoctor />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
