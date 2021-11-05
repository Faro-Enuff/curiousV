import React, { ChangeEvent, MouseEvent, useState, useContext } from 'react';
// Import MUI
import { Box, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
// Import Context
import { AuthContext } from '../Context/authContext';
// React Router DOM
import { useHistory } from 'react-router-dom';
// Import Interfaces
import { RegisterUser } from '../Interfaces/interfaces';

interface Props {}

const useStyles = makeStyles((muiTheme) => ({
  signUpDiv: {
    width: '100%',
    flexGrow: 1,
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  const [user, setUser] = useState<RegisterUser>({
    artistName: '',
    email: '',
    firstName: '',
    password: '',
  });

  const { registerUser } = useContext(AuthContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    registerUser(user);
    history.push('/signin');
  };

  return (
    <div className={classes.signUpDiv}>
      <Box>
        <Paper className={classes.signUpBody}>
          <Box>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <label>Artistname:</label>
            <input
              type="text"
              name="artistName"
              value={user.artistName}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <input type="submit" value="Register" onClick={handleClick} />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default SignUp;
