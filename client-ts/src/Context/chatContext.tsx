import { FC, createContext } from 'react';
// Import CostumHooks
import axios from '../Utils/axios';
// Import Interfaces
import { CurrentMessage } from '../Interfaces/interfaces';

interface ProviderValues {
  createChat: (chatReceiver: ChatroomUser) => void;
  saveMessage: (message: CurrentMessage) => void;
}

interface Props {}

interface ChatroomUser {
  _id: string;
  artistName: string;
  profileName: string;
  chatroomIds: string[];
}

const initialProviderValue: ProviderValues = {
  createChat: () => {
    throw new Error("Create Chat-Function hasn't been provided");
  },
  saveMessage: () => {
    throw new Error("Save Message-Function hasn't been provided");
  },
};

export const ChatContext = createContext<ProviderValues>(initialProviderValue);

export const ChatContextProvider: FC<Props> = ({ children }) => {
  const createChat = (chatReceiver: ChatroomUser) => {
    axios
      .post('/chatrooms/addChat', chatReceiver)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(`Message:`, error.response.data));
  };

  const saveMessage = (message: CurrentMessage) => {
    axios
      .post('/chatrooms/saveMessages', message)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(`Message:`, error.response.data));
  };

  const value: null | ProviderValues = {
    createChat,
    saveMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
