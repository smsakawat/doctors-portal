import { cyan } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
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
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/appointment">
                <Appointment />
              </PrivateRoute>
              {/* i am not showing dashboard to only users..but if they got the route of dashboard they can access it..that's the reason i had to make a adminroute and if i give some accessible routes in dashboard page for users..then i will make
              Adminroute only the routes..which are avilable only for admins*/}
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
