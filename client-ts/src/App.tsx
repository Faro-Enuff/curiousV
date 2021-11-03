import React, { FC } from 'react';
// React Router Dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/authContext';
// MUI imports
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import Home from './Views/Home';
import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';
import SetUp from './Views/SetUp';
import SummonBuild from './Views/SummonBuild';
import AppBarCostum from './Components/Navigation/AppBarCustom';
import BottomNavigationCustom from './Components/Navigation/BottomNavigationCustom';
import { SummonContextProvider } from './Context/summonContext';

const useStyles = makeStyles((muiTheme) => ({
  app: {
    height: '100vh',
    backgroundColor: 'rgba(181, 173, 207, 0.2)',
  },
  content: {
    minHeight: '100%',
    margin: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const App: FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <AuthContextProvider>
        <SummonContextProvider>
          <div className={classes.app}>
            <Route exact path={['/', '/createSummon', '/setUp']}>
              <AppBarCostum />
            </Route>
            <div className={classes.content}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/setUp" exact component={SetUp} />
                <Route path="/createSummon" exact component={SummonBuild} />
              </Switch>
            </div>
            <Route exact path={['/', '/createSummon', '/setUp']}>
              <BottomNavigationCustom />
            </Route>
          </div>
        </SummonContextProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
