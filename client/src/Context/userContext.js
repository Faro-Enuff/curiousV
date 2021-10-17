import React, { createContext, useState, useContext, useEffect } from "react";

// Context Imports
import { AuthContext } from "./authContext";

import axios from "../Utils/axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  const getProfileData = (setState) => {
    axios
      .get("/users/profile")
      .then((response) => {
        // console.log(response.data);
        const user = response.data.user;
        console.log("User Context: Profile Data : >>", user);
        setState(user);
      })
      .catch((error) => console.log(`error`, error));
  };

  useEffect(() => {
    getProfileData(setProfile);
  }, []);

  const updateProfilePicture = (image) => {
    axios
      .post("/users/uploadProfileImage", image)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
    console.log("Hey");
  };

  const value = { profile, updateProfilePicture, getProfileData };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
