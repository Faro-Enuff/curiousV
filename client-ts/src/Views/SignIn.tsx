import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  useState,
  useContext,
} from 'react';

// NPM
import GoogleButton from 'react-google-button';

// Internal Imports
import Loader from '../Utils/Loader';

// MUI Imports
import { Box, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

// Import Context
import { AuthContext } from '../Context/authContext';

// React Router DOM
import { Link } from 'react-router-dom';

// Import Interfaces
import { LoginUser } from '../Interfaces/interfaces';

interface Props {}

const useStyles = makeStyles((muiTheme) => ({
  signInDiv: {
    width: '100%',
    flexGrow: 1,
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SignIn: FC = (props: Props) => {
  const classes = useStyles();

  const { loginUser, googleSignInUser } = useContext(AuthContext);

  const [user, setUser] = useState<LoginUser>({ email: '', password: '' });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  ////////////////////////////////////////////////////////
  // Email & Password  Login
  ////////////////////////////////////////////////////////

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    // Get request - Backend Router
    loginUser(user);
  };

  ////////////////////////////////////////////////////////
  // Google Login
  ////////////////////////////////////////////////////////

  const redirectToGoogleSSO = async () => {
    // API Route
    const googleLoginUrl: string = 'http://localhost:5000/api/users/google';

    // Opten Pop-up Window for Google
    const newWindow: Window | null = window.open(
      googleLoginUrl,
      '_blank',
      'width=500,height=600'
    );

    // Set Loader
    setLoading(true);

    let timer: NodeJS.Timeout | null = null;

    // Set Inverval to listen to the popup window for closing
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('Window closed');
          googleSignInUser(setLoading);
          setLoading(false);
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500);
    }
  };

  return (
    <div className={classes.signInDiv}>
      {loading && <Loader />}
      <Box>
        <Paper className={classes.signInBody}>
          <Box m={2}>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Box>

          <Box m={2}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </Box>
          <Box m={2}>
            <input type="submit" value="signin" onClick={handleClick} />
          </Box>
          <Box m={2}>
            <Link to="/signup">
              Don't have an account? <b>Sign Up</b>
            </Link>
          </Box>
          <Box m={2}>
            <GoogleButton type="dark" onClick={redirectToGoogleSSO} />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default SignIn;
