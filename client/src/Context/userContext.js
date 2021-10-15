import React, { createContext } from "react";
import axios from "../Utils/axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const updateProfilePicture = (image) => {
    axios
      .post("/users/uploadProfileImage", image)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
    console.log("Hey");
  };

  const value = { updateProfilePicture };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
