import { FC, createContext } from 'react';
// Import CostumHooks
import axios from '../Utils/axios';
// Import Interfaces

interface ProviderValues {
  postSummon: (summon: FormData) => void;
}
interface Props {}

const initialProviderValue: ProviderValues = {
  postSummon: () => {
    throw new Error("postSummon function hasn't been provided");
  },
};

export const SummonContext =
  createContext<ProviderValues>(initialProviderValue);

export const SummonContextProvider: FC<Props> = ({ children }) => {
  const postSummon = (summon: FormData) => {
    axios
      .post('/summons/addSummon', summon)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const value: null | ProviderValues = {
    postSummon,
  };

  return (
    <SummonContext.Provider value={value}>{children}</SummonContext.Provider>
  );
};
