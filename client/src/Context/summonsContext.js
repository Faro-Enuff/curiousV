import React, { useState, createContext, useEffect } from "react";
import axios from "../Utils/axios";

export const SummonsContext = createContext();

export const SummonsContextProvider = ({ children }) => {
  const [userSummons, setUserSummons] = useState(null);

  const getSummons = () => {
    axios
      .get("/summons")
      .then((response) => {
        console.log(response);
        setUserSummons(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  const postSummon = (summon) => {
    axios
      .post("/summons/addSummon", summon)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value = { userSummons, getSummons, postSummon };

  return (
    <SummonsContext.Provider value={value}>{children}</SummonsContext.Provider>
  );
};
