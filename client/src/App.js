// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Context Imports
import { ThemeProvider } from "./Context/themeContext";
import { ThemeProviderTwo } from "./Context/themeContextTwo";
import { SummonsContextProvider } from "./Context/summonsContext";
import { HobbiesContextProvider } from "./Context/hobbiesContext";
import { AuthContextProvider } from "./Context/authContext";
import { UserContextProvider } from "./Context/userContext";
import { ChatContextProvider } from "./Context/chatContext";

// Internal Imports
import GoogleSuccess from "./Components/Google OAuth/GoogleSuccess";
import GoogleFailure from "./Components/Google OAuth/GoogleFailure";
import PrivateRoute from "./Navigation/PrivateRoute";
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import SetUp from "./Views/SetUp";
import Home from "./Views/Home";
import BottomNavigationCustom from "./Navigation/BottomNavigationCustom";
import AppBarCostum from "./Navigation/AppBarCustom";
import SummonBuild from "./Views/SummonBuild";
import Chatroom from "./Views/Chatroom";
import UserSearch from "./Views/UserSearch";

// MUI Core Imports
// import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Enso from "./Images/Enso.png";
import { Box } from "@mui/system";

const useStyles = makeStyles((muiTheme) => ({
  app: {
    marginTop: "15%",
    marginBottom: "15%",
  },
  imgDiv: {
    position: "absolute",
    width: "100%",
    overflow: "hidden",
  },
  // backgroundImageRight: {
  //   bottom: "25%",
  //   left: "60%",
  //   width: "450px",
  //   opacity: 0.1,
  // },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProviderTwo>
        <ThemeProvider>
          <AuthContextProvider>
            <UserContextProvider>
              <HobbiesContextProvider>
                <SummonsContextProvider>
                  <ChatContextProvider>
                    <div className={classes.app}>
                      <Route
                        exact
                        path={[
                          "/",
                          "/createSummon",
                          "/getStarted",
                          "/userSearch",
                          "/chatRoom/:receiverName",
                        ]}
                      >
                        <AppBarCostum />
                        <div className={classes.imgDiv}></div>
                      </Route>
                      <div>
                        <Switch>
                          <Route
                            path="/chatRoom/:receiverName"
                            exact
                            component={Chatroom}
                          />
                          <Route path="/" exact component={Home} />
                          <Route path="/signin" exact component={SignIn} />
                          <Route path="/signup" exact component={SignUp} />
                          <Route
                            path="/google/success"
                            exact
                            component={GoogleSuccess}
                          />
                          <Route
                            path="/google/failure"
                            exact
                            component={GoogleFailure}
                          />
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
                          <PrivateRoute
                            path="/userSearch"
                            exact
                            component={UserSearch}
                          />
                        </Switch>
                      </div>
                      <Route
                        exact
                        path={[
                          "/",
                          "/createSummon",
                          "/getStarted",
                          "/userSearch",
                          "/chatRoom/:receiverName",
                        ]}
                      >
                        <BottomNavigationCustom />
                      </Route>
                    </div>
                  </ChatContextProvider>
                </SummonsContextProvider>
              </HobbiesContextProvider>
            </UserContextProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeProviderTwo>
    </Router>
  );
}

export default App;
