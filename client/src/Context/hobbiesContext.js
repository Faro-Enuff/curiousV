import React, { useState, createContext, useEffect, useContext } from "react";
// import axios from "../Utils/axios";
import axios from "axios";
import { AuthContext } from "./authContext";

export const HobbiesContext = createContext();

export const HobbiesContextProvider = ({ children }) => {
  const { loggedInUser } = useContext(AuthContext);
  const [userHobby, setUserHobby] = useState(null);

  const getHobbies = () => {
    axios({
      url: "http://localhost:5000/api/hobbies/getUserHobby",
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        // console.log("Get user hobby : >>",response);

        const data = response.data;
        const hobby = data.userHobby[0];
        console.log("Get user hobby : >>", hobby);
        setUserHobby(hobby);
      })
      .catch((error) => console.log(error.message));
  };

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
