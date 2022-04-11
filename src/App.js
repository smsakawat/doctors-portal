import { cyan } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoute from "./AdminRoute/AdminRoute";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome.js";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Register/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const theme = createTheme({
  palette: {
    primary: {
      main: cyan.A700,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route
                path="/appointment"
                element={
                  <PrivateRoute>
                    {" "}
                    <Appointment />
                  </PrivateRoute>
                }
              ></Route>

              {/* i am not showing dashboard to only users..but if they got the route of dashboard they can access it..that's the reason i had to make a adminroute and if i give some accessible routes in dashboard page for users..then i will make
              Adminroute only the routes..which are avilable only for admins*/}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              >
                {/* nested routing starts here */}
                <Route path="/dashboard" element={<DashboardHome />}></Route>
                <Route
                  path="/dashboard/payment/:appointmentId"
                  element={<Payment />}
                ></Route>
                <Route
                  path="/dashboard/makeAdmin"
                  element={
                    <AdminRoute>
                      <MakeAdmin />
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path="/dashboard/addDoctor"
                  element={
                    <AdminRoute>
                      <AddDoctor />
                    </AdminRoute>
                  }
                ></Route>
              </Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
