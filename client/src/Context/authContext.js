import React, { useState, createContext, useEffect } from "react";
import axios from "../Utils/axios";
import jwt_decode from "jwt-decode";
import moment from "moment";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

///////////////////////////////////
// Local Storage Functions
///////////////////////////////////

const setLocalStorage = (response) => {
  localStorage.setItem("token", response.data.token);
  console.log("Token set in Local Storage");
};

const getExpiration = () => {
  const expiration = localStorage.getItem("expires");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
};

///////////////////////////////////
// AUTH Context Provider
///////////////////////////////////

export const AuthContextProvider = ({ children }) => {
  let history = useHistory();
  const [loggedInUser, setLoggedInUser] = useState("Not logged in");

  const loginUser = (userLogin) => {
    axios
      .post("/users/signin", userLogin)
      .then((response) => {
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
      .catch((error) => console.log(`Message:`, error.message));
  };

  const getUser = () => {
    axios
      .get("/users/profile")
      .then((response) => {
        console.log(response.data.user);
        const user = response.data.user;
        if (user) {
          console.log("Fuyk aye");
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

  const registerUser = (user) => {
    axios
      .post("/users/register", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedInUser(null);
  };
  console.log("WAS IST HIER LOS?", loggedInUser);
  const value = { registerUser, loginUser, loggedInUser, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
