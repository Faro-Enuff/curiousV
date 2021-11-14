import React, { FC } from 'react';
// React Router Dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Context Imports
import { AuthContextProvider } from './Context/authContext';
import { SummonContextProvider } from './Context/summonContext';
import { CreationContextProvider } from './Context/creationContext';
import { ChatContextProvider } from './Context/chatContext';
// MUI imports
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import Home from './Views/Home';
import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';
import SetUp from './Views/SetUp';
import UserSearch from './Views/UserSearch';
import Chatroom from './Views/Chatroom';
import SummonBuild from './Views/SummonBuild';
import CreationSubmit from './Views/CreationSubmit';
import GoogleSuccess from './Components/Google oAuth/GoogleSuccess';
import AppBarCostum from './Components/Navigation/AppBarCustom';
import BottomNavigationCustom from './Components/Navigation/BottomNavigationCustom';

const useStyles = makeStyles((muiTheme) => ({
  app: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
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
          <CreationContextProvider>
            <ChatContextProvider>
              <div className={classes.app}>
                <div className={'header'}>
                  <Route
                    exact
                    path={[
                      '/',
                      '/createSummon',
                      '/setUp',
                      '/userSearch',
                      '/chatroom/:receiverId',
                      '/creationSubmit/:id',
                    ]}
                  >
                    <AppBarCostum />
                  </Route>
                </div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/signin" exact component={SignIn} />
                  <Route path="/signup" exact component={SignUp} />
                  <Route path="/setUp" exact component={SetUp} />
                  <Route path="/createSummon" exact component={SummonBuild} />
                  <Route path="/userSearch" exact component={UserSearch} />
                  <Route
                    path="/creationSubmit/:id"
                    exact
                    component={CreationSubmit}
                  />
                  <Route
                    path="/chatroom/:receiverId"
                    exact
                    component={Chatroom}
                  />
                  <Route
                    path="/google/success"
                    exact
                    component={GoogleSuccess}
                  />
                </Switch>
                <div className={'footer'}>
                  <Route
                    exact
                    path={[
                      '/',
                      '/createSummon',
                      '/setUp',
                      '/userSearch',
                      '/chatroom/:receiverId',
                      '/creationSubmit/:id',
                    ]}
                  >
                    <BottomNavigationCustom />
                  </Route>
                </div>
              </div>
            </ChatContextProvider>
          </CreationContextProvider>
        </SummonContextProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
