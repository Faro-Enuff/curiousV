import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const axios = Axios.create({ baseURL: "http://localhost:5000/api/users" });

  const [loggedInUser, setLoggedInUser] = useState();

  const loginUser = (user) => {
    axios
      .post("/signin", user)
      .then((response) => {
        console.log(
          `success:`,
          response.data.filter((data) => data.artistName === user.artistName)
        );
        setLoggedInUser(
          response.data.filter((data) => data.artistName === user.artistName)
        );
      })
      .catch((error) => console.log(`Message:`, error.message));
  };

  const registerUser = (user) => {
    axios
      .post("/register", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value = { registerUser, loginUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
