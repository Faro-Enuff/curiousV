// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context Imports
import { HobbiesContextProvider } from "./Context/hobbiesContext";
import { AuthContextProvider } from "./Context/authContext";

// Internal Imports
import PrivateRoute from "./Navigation/PrivateRoute";
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import SetUp from "./Views/SetUp";
import Home from "./Views/Home";
import BottomNavigationCustom from "./Navigation/BottomNavigationCustom";
import AppBarCostum from "./Navigation/AppBarCustom";
import { ThemeProvider } from "./Context/themeContext";

// MUI Core Imports
// import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Enso from "./Images/Enso.png";
import { Box } from "@mui/system";

// const useStyles = makeStyles((theme) => ({
//   app: {
//     backgroundImage: `url(${Enso})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "-350% 50%",
//     backgroundSize: "450px",
//   },
//   innerApp: {
//     maxHeight: "70%",
//     marginTop: "15%",
//     marginBottom: "15%",
//     display: "flex",
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <ThemeProvider>
      <Router>
        <AuthContextProvider>
          <HobbiesContextProvider>
            <div>
              <Route exact path={["/"]}>
                <AppBarCostum />
              </Route>
              <div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/signin" exact component={SignIn} />
                  <Route path="/signup" exact component={SignUp} />
                  <PrivateRoute path="/getStarted" exact component={SetUp} />
                </Switch>
              </div>
              <Route exact path={["/"]}>
                <BottomNavigationCustom />
              </Route>
            </div>
          </HobbiesContextProvider>
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
