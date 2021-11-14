import { FC, createContext } from 'react';
// Import CostumHooks
import axios from '../Utils/axios';
// Import Interfaces

interface ProviderValues {
  postCreation: (creation: FormData) => void;
}

interface Props {}

const initialProviderValue: ProviderValues = {
  postCreation: () => {
    throw new Error("postCreation function hasn't been provided");
  },
};

export const CreationContext =
  createContext<ProviderValues>(initialProviderValue);

export const CreationContextProvider: FC<Props> = ({ children }) => {
  const postCreation = (creation: FormData) => {
    axios
      .post('/creations/createCreation', creation)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value: null | ProviderValues = {
    postCreation,
  };

  return (
    <CreationContext.Provider value={value}>
      {children}
    </CreationContext.Provider>
  );
};
