// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context Imports
import { HobbiesContextProvider } from "./Context/hobbiesContext";
import { AuthContextProvider } from "./Context/authContext";

// Internal Imports
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import SetUp from "./Views/SetUp";
import Home from "./Views/Home";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <HobbiesContextProvider>
          <div className="App">
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/getStarted" component={SetUp} />
              {/* <Route path="/" component={Home} /> */}
            </Switch>
          </div>
        </HobbiesContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
