import React, {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  createContext,
} from 'react';
// Import Axios Instance
import axios from '../Utils/axios';
// Import React Router Dom
import { useHistory } from 'react-router-dom';
// Import Interfaces
import { RegisterUser, LoginUser } from '../Interfaces/interfaces';

interface User {
  _id: string;
  artistName: string;
  email: string;
  firstName: string;
}

interface ProviderValues {
  registerUser: (user: RegisterUser) => void;
  loginUser: (user: LoginUser) => void;
  googleSignInUser: (loadingState: Dispatch<SetStateAction<boolean>>) => void;
  loginGoogle: () => void;
  loggedInUser: User | null;
}
interface Props {}
interface LoggedInUserResponse {
  success: boolean;
  token: string;
  expiresIn: string;
  user: User;
}

const initialProviderValue: ProviderValues = {
  registerUser: () => {
    throw new Error("LoginUser-Function hasn't been provided");
  },
  loginUser: () => {
    throw new Error("LoginUser-Function hasn't been provided");
  },
  googleSignInUser: () => {
    throw new Error("LoginUser-Function hasn't been provided");
  },
  loginGoogle: () => {
    throw new Error("LoginUser-Function hasn't been provided");
  },
  loggedInUser: null,
};

export const AuthContext = createContext<ProviderValues>(initialProviderValue);

///////////////////////////////////
// Local Storage Functions
///////////////////////////////////

const setLocalStorage = (data: LoggedInUserResponse) => {
  localStorage.setItem('token', data.token);
  console.log('Token set in Local Storage');
};

export const AuthContextProvider: FC<Props> = ({ children }) => {
  let history = useHistory();

  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  /////////////////////////////////
  // Register User Email & Password
  /////////////////////////////////
  const registerUser = (user: RegisterUser) => {
    axios
      .post('/users/register', user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };
  /////////////////////////////////
  // Login User Email & Password
  /////////////////////////////////
  const loginUser = (user: LoginUser): void => {
    axios
      .post('/users/signin', user)
      .then((response) => {
        console.log(response);
        // console.log(`AuthContext: Success:`, response);

        const data: LoggedInUserResponse = response.data;

        // Safe Token in Local Storage
        setLocalStorage(data);

        const user: User = data.user;
        console.log('AuthContext: User Login : >>', user);

        // Token decoded
        // console.log(jwt_decode(data.token));

        // Set User
        setLoggedInUser(user);
        if (user) {
          history.push('/');
        }
      })
      .catch((error) => console.log(`Message:`, error.response.data));
  };

  /////////////////////////////////
  // Google Authentication
  /////////////////////////////////

  const loginGoogle = () => {
    axios
      .get('/users/google')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(`Message:`, error.message));
  };

  /////////////////////////////////////////
  // SignIn via authenticated GoogleAccount
  /////////////////////////////////////////

  const googleSignInUser = (
    loadingState: Dispatch<SetStateAction<boolean>>
  ) => {
    axios
      .get('/users/google/signIn')
      .then((response) => {
        // Safe Token in Local Storage

        const data: LoggedInUserResponse = response.data;
        setLocalStorage(data);
        const user = response.data.user;

        // set User
        setLoggedInUser(user);

        if (user) {
          history.push('/');
        } else {
          // Set Parameter Loading useState true
          loadingState(false);
        }
      })
      .catch((error) => console.log(`Message:`, error.response.data));
  };

  const value: null | ProviderValues = {
    registerUser,
    loginUser,
    googleSignInUser,
    loginGoogle,
    loggedInUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
