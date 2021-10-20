import React, { useEffect, useState, useContext } from "react";

// NPM
import GoogleButton from "react-google-button";

// Internal Imports
import Loader from "../Utils/Loader";

// MUI Imports
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

// Import Context
import { AuthContext } from "../Context/authContext";

// React Router DOM
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((muiTheme) => ({}));

const SignIn = () => {
  const classes = useStyles();

  let history = useHistory();

  // Auth Context
  const { loginUser, loginGoogle, googleSignInUser } = useContext(AuthContext);

  // User useState
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  ////////////////////////////////////////////////////////
  // Email & Password  Login
  ////////////////////////////////////////////////////////

  const handleClick = (event) => {
    event.preventDefault();
    // Get request - Backend Route
    loginUser(user);
  };

  ////////////////////////////////////////////////////////
  // Google Login
  ////////////////////////////////////////////////////////

  const redirectToGoogleSSO = async () => {
    // API Route
    const googleLoginUrl = "http://localhost:5000/api/users/google";

    // Opten Pop-up Window for Google
    const newWindow = window.open(
      googleLoginUrl,
      "_blank",
      "width=500,height=600"
    );

    // Set Loader
    setLoading(true);

    let timer = null;
    // Set Inverval to listen to the popup window for closing
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yeah");
          googleSignInUser(loading);
          setLoading(false);
          clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <form method="post">
      {loading && <Loader />}

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
        <Link to="/signup" variant="body2" className={classes.signUpLink}>
          Don't have an account? <b>Sign Up</b>
        </Link>
      </Box>

      <Box m={2}>
        <GoogleButton type="dark" onClick={redirectToGoogleSSO} />
      </Box>
    </form>
  );
};

export default SignIn;
