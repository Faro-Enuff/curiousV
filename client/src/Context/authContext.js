import React, { useState, createContext, useEffect } from "react";
import axios from "../Utils/axios";
import jwt_decode from "jwt-decode";
import moment from "moment";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const setLocalStorage = (response) => {
  localStorage.setItem("token", response.data.token);
};

const getExpiration = () => {
  const expiration = localStorage.getItem("expires");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
};

export const AuthContextProvider = ({ children }) => {
  let history = useHistory();

  const [loggedInUser, setLoggedInUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedInUser(null);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // const userId = jwt_decode(localStorage.getItem("token")).id;
      // console.log(userId);
      axios
        .get("/users/profile")
        .then((response) => {
          // console.log(response.data);
          const data = response.data;
          const user = data.user;
          setLoggedInUser(user);
        })
        .catch((error) => console.log(`error`, error));
    } else {
      setLoggedInUser({});
    }
  }, []);

  const loginUser = (user) => {
    axios
      .post("/users/signin", user)
      .then((response) => {
        console.log(`success:`, response);

        // Safe Token in Local Storage
        setLocalStorage(response);

        const data = response.data;
        const user = data.user;

        // Token decoded
        console.log(jwt_decode(data.token));

        // Set User
        setLoggedInUser(user);

        history.push("/");
      })
      .catch((error) => console.log(`Message:`, error.message));
  };

  const registerUser = (user) => {
    axios
      .post("/users/register", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const protectedUserRoute = (user) => {
    axios
      .post("/users/profile", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value = { registerUser, loginUser, loggedInUser, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
