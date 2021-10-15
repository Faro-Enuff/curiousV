// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context Imports
import { ThemeProvider } from "./Context/themeContext";
import { SummonsContextProvider } from "./Context/summonsContext";
import { HobbiesContextProvider } from "./Context/hobbiesContext";
import { AuthContextProvider } from "./Context/authContext";
import { UserContextProvider } from "./Context/userContext";

// Internal Imports
import PrivateRoute from "./Navigation/PrivateRoute";
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import SetUp from "./Views/SetUp";
import Home from "./Views/Home";
import BottomNavigationCustom from "./Navigation/BottomNavigationCustom";
import AppBarCostum from "./Navigation/AppBarCustom";
import SummonBuild from "./Views/SummonBuild";

// MUI Core Imports
// import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
// import { makeStyles } from "@material-ui/core/styles";
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
          <UserContextProvider>
            <HobbiesContextProvider>
              <SummonsContextProvider>
                <div>
                  <Route exact path={["/"]}>
                    <AppBarCostum />
                  </Route>
                  <div>
                    <Switch>
                      <Route path="/signin" exact component={SignIn} />
                      <Route path="/signup" exact component={SignUp} />
                      <PrivateRoute path="/" exact component={Home} />
                      <PrivateRoute
                        path="/getStarted"
                        exact
                        component={SetUp}
                      />
                      <PrivateRoute
                        path="/createSummon"
                        exact
                        component={SummonBuild}
                      />
                    </Switch>
                  </div>
                  <Route exact path={["/"]}>
                    <BottomNavigationCustom />
                  </Route>
                </div>
              </SummonsContextProvider>
            </HobbiesContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
