import React, { useEffect, useState, useContext } from "react";
import Loader from "../Utils/Loader";

import GoogleButton from "react-google-button";
// MUI Imports
import { Button } from "@mui/material";

// Import Context
import { AuthContext } from "../Context/authContext";

// React Router DOM
import { useHistory } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();
  const { loginUser, loginGoogle, googleSignInUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    loginUser(user);
  };

  const redirectToGoogleSSO = async () => {
    let timer = null;
    const googleLoginUrl = "http://localhost:5000/api/users/google";

    const newWindow = window.open(
      googleLoginUrl,
      "_blank",
      "width=500,height=600"
    );

    setLoading(true);

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yeah");
          googleSignInUser();
          clearInterval(timer);
        }
      }, 500);
    }
  };

  // console.log(user);

  return (
    <form method="post">
      {loading && <Loader />}
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="submit" value="signin" onClick={handleClick} />
      </div>
      <div>
        <GoogleButton type="dark" onClick={redirectToGoogleSSO} />
      </div>
    </form>
  );
};

export default SignIn;
