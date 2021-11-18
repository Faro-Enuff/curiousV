import { FC, Dispatch, createContext } from 'react';
// Import CostumHooks
import axios from '../Utils/axios';
// Import Interfaces
import { CurrentComment } from '../Interfaces/interfaces';

interface ProviderValues {
  postSummon: (summon: FormData) => void;
  createComment: (
    comment: CurrentComment,
    setCommentList: Dispatch<any>
  ) => void;
}
interface Props {}

const initialProviderValue: ProviderValues = {
  postSummon: () => {
    throw new Error("postSummon function hasn't been provided");
  },
  createComment: () => {
    throw new Error("createComment function hasn't been provided");
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

  const createComment = (
    comment: CurrentComment,
    setCommentList: Dispatch<any>
  ) => {
    axios
      .post('/summons/createComment', comment)
      .then((response) => {
        console.log(response.data.popUserComment.comments);
        setCommentList(response.data.popUserComment.comments);
      })
      .catch((error) => console.log(error.message));
  };

  const value: null | ProviderValues = {
    postSummon,
    createComment,
  };

  return (
    <SummonContext.Provider value={value}>{children}</SummonContext.Provider>
  );
};
