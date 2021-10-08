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
import { makeStyles } from "@mui/styles";
import Enso from "./Images/Enso.png";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  app: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Enso})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-350% 50%",
    backgroundSize: "450px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider>
        <AuthContextProvider>
          <HobbiesContextProvider>
            <div className={classes.app}>
              <AppBarCostum />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                {/* <Route path="/getStarted" exact component={SetUp} /> */}
                <PrivateRoute path="/getStarted" component={SetUp} />
                {/* <Route path="/" component={Home} /> */}
              </Switch>
              <BottomNavigationCustom />
            </div>
          </HobbiesContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
