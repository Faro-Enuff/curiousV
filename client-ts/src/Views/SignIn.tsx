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
import Enso from '../Images/EnsoTransparent.png';
import Loader from '../Utils/Loader';

// MUI Imports
import { Button, TextField, Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

// Import Context
import { AuthContext } from '../Context/authContext';

// React Router DOM
import { Link } from 'react-router-dom';

// Import Interfaces
import { LoginUser } from '../Interfaces/interfaces';

interface Props {}

const CustomizedPaper = styled(Paper)`
  width: 325px;
`;

const useStyles = makeStyles((muiTheme) => ({
  signInWindow: {
    overflow: 'hidden',
  },
  backgroundImageTopDiv: {
    opacity: 0.6,
  },
  backgroundImageDiv: {
    backgroundImage: `url(${Enso})`,
    opacity: 0.6,
    marginTop: '10%',
  },
  image: {
    width: '300px',
  },
  signInDiv: {
    width: '100%',
    marginTop: '5%',
    flexGrow: 1,
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    boxShadow: '3px 1px 4px 4px #f3e5f5',
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

  const handleOnSubmit = (event: any) => {
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
    <div className={classes.signInWindow}>
      <div className={classes.backgroundImageTopDiv}>
        <img className={classes.image} src={Enso} alt="Enso" />
      </div>
      <div className={classes.signInDiv}>
        {loading && <Loader />}
        <Box>
          <CustomizedPaper className={classes.signInBody}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" component="h1">
                . curiousV .
              </Typography>
            </Box>
            <hr className="beautyHr" />
            <Box m={2}>
              <form className="form" noValidate onSubmit={handleOnSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  value={user.email}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={user.password}
                />
                <Box mt={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                  >
                    Sign In
                  </Button>
                </Box>
              </form>
            </Box>
            <hr className="beautyHr" />

            <Box m={2}>
              <GoogleButton type="dark" onClick={redirectToGoogleSSO} />
            </Box>

            <Box m={2}>
              <Link to="/signup">
                Don't have an account? <b>Sign Up</b>
              </Link>
            </Box>
          </CustomizedPaper>
        </Box>
      </div>
      <div className={classes.backgroundImageDiv}>
        <img className={classes.image} src={Enso} alt="Enso" />
      </div>
    </div>
  );
};

export default SignIn;
