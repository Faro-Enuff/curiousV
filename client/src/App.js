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

// MUI Core Imports
import { Box } from "@mui/system";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <HobbiesContextProvider>
          <div className="App">
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
    </Router>
  );
}

export default App;
