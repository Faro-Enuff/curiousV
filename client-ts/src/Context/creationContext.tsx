import { FC, createContext } from 'react';
// Import CostumHooks
import axios from '../Utils/axios';
// Import Interfaces

interface ProviderValues {
  postCreation: (creation: FormData) => void;
  updateCollection: (summonId: string) => void;
}

interface Props {}

const initialProviderValue: ProviderValues = {
  postCreation: () => {
    throw new Error("postCreation function hasn't been provided");
  },
  updateCollection: () => {
    throw new Error("updateCollection function hasn't been provided");
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

  const updateCollection = (summonId: string) => {
    axios
      .post(`/collections/updateCollection/${summonId}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value: null | ProviderValues = {
    postCreation,
    updateCollection,
  };

  return (
    <CreationContext.Provider value={value}>
      {children}
    </CreationContext.Provider>
  );
};
