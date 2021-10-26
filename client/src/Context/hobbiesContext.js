import React, { useState, createContext, useEffect, useContext } from "react";
// import axios from "../Utils/axios";
import axios from "../Utils/axios";
import { AuthContext } from "./authContext";

export const HobbiesContext = createContext();

export const HobbiesContextProvider = ({ children }) => {
  const { loggedInUser } = useContext(AuthContext);
  const [userHobby, setUserHobby] = useState(null);

  const postHobbies = (hobbies) => {
    axios
      .post("/hobbies/add", hobbies)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value = { userHobby, postHobbies };

  return (
    <HobbiesContext.Provider value={value}>{children}</HobbiesContext.Provider>
  );
};
