import { FC, createContext, Dispatch, useState } from 'react';
import { useFetch } from '../Utils/useFetch';
// Import CostumHooks
import axios from '../Utils/axios';
// Import Interfaces

interface ProviderValues {
  postCreation: (creation: FormData) => void;
  updateCollection: (summonId: string) => void;
  creations: any;
  setCreations: Dispatch<any>;
}

interface Props {}

const initialProviderValue: ProviderValues = {
  postCreation: () => {
    throw new Error("postCreation function hasn't been provided");
  },
  updateCollection: () => {
    throw new Error("updateCollection function hasn't been provided");
  },
  creations: null,
  setCreations: () => {
    throw new Error('No set Function has been provided');
  },
};

export const CreationContext =
  createContext<ProviderValues>(initialProviderValue);

export const CreationContextProvider: FC<Props> = ({ children }) => {
  const [creations, setCreations] = useState<any | null>(null);

  const getCreations = (userId: string) => {
    axios
      .get(`/creations/getOtherUsersCreations/${userId}`)
      .then((response) => {
        console.log(response.data);
        setCreations(response.data);
      })
      .catch((error) => console.log(error.message));
  };

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
    creations,
    setCreations,
  };

  return (
    <CreationContext.Provider value={value}>
      {children}
    </CreationContext.Provider>
  );
};
