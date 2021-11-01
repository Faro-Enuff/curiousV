import React, { FC } from 'react';
// React Router Dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/authContext';
// Internal Imports
import Home from './Views/Home';
import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';
import AppBarCostum from './Components/Navigation/AppBarCustom';

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Route exact path={['/']}>
            <AppBarCostum />
          </Route>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
};

export default App;
