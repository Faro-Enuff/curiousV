import React, { useState, createContext, useEffect } from "react";
import axios from "../Utils/axios";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

///////////////////////////////////
// Local Storage Functions
///////////////////////////////////

const setLocalStorage = (response) => {
  localStorage.setItem("token", response.data.token);
  console.log("Token set in Local Storage");
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////
// AUTH Context Provider
///////////////////////////////////

export const AuthContextProvider = ({ children }) => {
  let history = useHistory();

  const [loggedInUser, setLoggedInUser] = useState(null);

  /////////////////////////////////
  // Register User Email & Password
  /////////////////////////////////
  const registerUser = (user) => {
    axios
      .post("/users/register", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  /////////////////////////////////
  // Login User Email & Password
  /////////////////////////////////
  const loginUser = (userLogin) => {
    axios
      .post("/users/signin", userLogin)
      .then((response) => {
        console.log(response);
        // console.log(`AuthContext: Success:`, response);

        // Safe Token in Local Storage
        setLocalStorage(response);

        const data = response.data;
        const user = data.user;
        console.log("AuthContext: User Login : >>", user);

        // Token decoded
        // console.log(jwt_decode(data.token));

        // Set User
        setLoggedInUser(user);
        if (user) {
          history.push("/");
        }
      })
      .catch((error) => console.log(`Message:`, error.response.data));
  };

  /////////////////////////////////
  // Google Authentication
  /////////////////////////////////

  const loginGoogle = () => {
    axios
      .get("/users/google")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(`Message:`, error.message));
  };

  /////////////////////////////////////////
  // SignIn via authenticated GoogleAccount
  /////////////////////////////////////////

  const googleSignInUser = (loadingState) => {
    axios
      .get("/users/google/signIn")
      .then((response) => {
        // Safe Token in Local Storage
        setLocalStorage(response);
        const user = response.data.user;

        // set User
        setLoggedInUser(user);

        if (user) {
          history.push("/");
        } else {
          // Set Parameter Loading useState true
          loadingState(false);
        }
      })
      .catch((error) => console.log(`Message:`, error.response.data));
  };

  /////////////////////////////////
  // Set User
  /////////////////////////////////

  const getUser = () => {
    axios
      .get("/users/profile")
      .then((response) => {
        console.log(response.data.user);
        const user = response.data.user;
        if (user) {
          console.log("User set : >>", user);
          setLoggedInUser(user);
        } else {
          console.log("No user");
          setLoggedInUser(null);
        }
      })
      .catch((error) => console.log(`error`, error));
  };

  useEffect(() => {
    getUser();
  }, []);

  /////////////////////////////////
  // User LogOut
  /////////////////////////////////
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedInUser(null);
    history.push("/signin");
  };
  console.log("Logged in User : >>", loggedInUser);

  /////////////////////////////////
  // Update Hobby
  /////////////////////////////////
  const postHobbies = (hobby) => {
    axios
      .post("/users/addHobby", hobby)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  // Values
  const value = {
    registerUser,
    loginUser,
    loggedInUser,
    logout,
    loginGoogle,
    googleSignInUser,
    postHobbies,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
