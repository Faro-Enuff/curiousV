interface RegisterUser {
  artistName: string;
  email: string;
  firstName: string;
  password: string;
}

interface LoginUser {
  email: string;
  password: string;
}
export type { RegisterUser, LoginUser };
