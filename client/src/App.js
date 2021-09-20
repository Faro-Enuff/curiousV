// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Internal Imports
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import SetUp from "./Views/SetUp";
import Home from "./Views/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} /> */}
          <Route path="/getStarted" component={SetUp} />
          {/* <Route path="/" component={Home} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
