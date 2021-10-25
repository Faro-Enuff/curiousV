import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "../Utils/axios";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [chatRoom, setChatRoom] = useState("");

  const createChat = (chat) => {
    axios
      .post("/chatrooms/addChat", chat)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(`Message:`, error.response.data));
  };

  const value = { createChat };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
