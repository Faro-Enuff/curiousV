import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "../Utils/axios";
import { AuthContext } from "./authContext";

export const HobbiesContext = createContext();

export const HobbiesContextProvider = ({ children }) => {
  const { loggedInUser } = useContext(AuthContext);
  const [userHobby, setUserHobby] = useState(null);

  const getHobbies = () => {
    axios
      .get("/hobbies")
      .then((response) => {
        console.log(response);
        setUserHobby(response.data.userHobby[0]);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("token :>>", localStorage.getItem("token"));
      getHobbies();
    }
  }, [localStorage.getItem("token")]);

  const postHobbies = (hobbies) => {
    axios
      .post("/hobbies/add", hobbies)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value = { userHobby, getHobbies, postHobbies };

  return (
    <HobbiesContext.Provider value={value}>{children}</HobbiesContext.Provider>
  );
};
