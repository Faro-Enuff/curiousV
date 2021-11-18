import React, { ChangeEvent, useState, useContext } from 'react';
// Import MUI
import { Button, TextField, Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import BackgroundImage from '../Components/ReusableComponents/BackgroundImage';
import Enso from '../Images/EnsoTransparent.png';
import Loader from '../Utils/Loader';
import TextfieldAuth from '../Components/AuthComponents/TextfieldAuth';
// Import Context
import { AuthContext } from '../Context/authContext';
// React Router DOM
import { useHistory } from 'react-router-dom';
// Import Interfaces
import { RegisterUser } from '../Interfaces/interfaces';
// React Router DOM
import { Link } from 'react-router-dom';
interface Props {}

const CustomizedPaper = styled(Paper)`
  width: 325px;
`;

const useStyles = makeStyles((muiTheme) => ({
  signUpWindow: {
    overflow: 'hidden',
  },
  signUpDiv: {
    zIndex: 2,
    width: '100%',
    marginTop: '5%',
    flexGrow: 1,
    overflowY: 'auto',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    boxShadow: '3px 1px 4px 4px #f3e5f5',
  },
  signUpBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SignUp = (props: Props) => {
  const classes = useStyles();
  let history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<RegisterUser>({
    artistName: '',
    email: '',
    firstName: '',
    password: '',
  });

  const { registerUser } = useContext(AuthContext);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    registerUser(user);
    history.push('/signin');
  };

  return (
    <div className={classes.signUpWindow}>
      <div className={classes.signUpDiv}>
        {loading && <Loader />}
        <Box>
          <CustomizedPaper className={classes.signUpBody}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" component="h1">
                . curiousV .
              </Typography>
            </Box>
            <hr className="beautyHr" />
            <Box sx={{ m: 2 }}>
              <form className="form" noValidate onSubmit={handleOnSubmit}>
                <TextfieldAuth
                  name="email"
                  label="Email Address"
                  input={user}
                  typePassword={false}
                  setInput={setUser}
                />
                <TextfieldAuth
                  name="artistName"
                  label="Artist Name"
                  input={user}
                  typePassword={false}
                  setInput={setUser}
                />
                <TextfieldAuth
                  name="firstName"
                  label="First Name"
                  input={user}
                  typePassword={false}
                  setInput={setUser}
                />
                <TextfieldAuth
                  name="password"
                  label="Password"
                  input={user}
                  typePassword={true}
                  setInput={setUser}
                />
                <Box sx={{ mb: 2 }} />
                <hr className="beautyHr" />
                <Box mt={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                  >
                    Register
                  </Button>
                </Box>
              </form>
            </Box>
            <hr className="beautyHr" />
            <Box m={2}>
              <Link to="/signin">
                Already registered? <b>Sign In</b>
              </Link>
            </Box>
          </CustomizedPaper>
        </Box>
      </div>
      <BackgroundImage />
    </div>
  );
};

export default SignUp;
