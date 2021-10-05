import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const setLocalStorage = (response) => {
  const expires = moment().add(response.data.expiresIn);
  localStorage.setItem("expires", JSON.stringify(expires.valueOf()));
  localStorage.setItem("token", response.data.token);
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expires");
};

const getExpiration = () => {
  const expiration = localStorage.getItem("expires");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
};

export const AuthContextProvider = ({ children }) => {
  let history = useHistory();

  const axios = Axios.create({ baseURL: "http://localhost:5000/api/users" });

  const [loggedInUser, setLoggedInUser] = useState();

  const loginUser = (user) => {
    axios
      .post("/signin", user)
      .then((response) => {
        console.log(`success:`, response);
        setLocalStorage(response);
        console.log(getExpiration());
        console.log();
        history.push("/");
      })
      .catch((error) => console.log(`Message:`, error.message));
  };

  const registerUser = (user) => {
    axios
      .post("/register", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const protectedUserRoute = (user) => {
    axios
      .post("/profile", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value = { registerUser, loginUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
