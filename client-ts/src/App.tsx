import React, { FC } from 'react';
// React Router Dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/authContext';
// Internal Imports

import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
};

export default App;
