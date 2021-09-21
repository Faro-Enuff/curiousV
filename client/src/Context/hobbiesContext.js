import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const HobbiesContext = createContext();

export const HobbiesContextProvider = ({ children }) => {
  const [hobbies, setHobbies] = useState(null);

  const axios = Axios.create({ baseURL: "http://localhost:5000/api/hobbies" });

  const getHobbies = () => {
    axios
      .get("/")
      .then((response) => {
        console.log(response);
        setHobbies(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  const postHobbies = (hobbies) => {
    axios
      .post("/add", hobbies)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  console.log(hobbies);

  const value = { hobbies, getHobbies, postHobbies };

  return (
    <HobbiesContext.Provider value={value}>{children}</HobbiesContext.Provider>
  );
};
