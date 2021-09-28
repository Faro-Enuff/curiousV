import React, { useState, useContext } from "react";

// Import Context
import { AuthContext } from "../Context/authContext";

// React Router DOM
import { useHistory } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    artistName: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const { loginUser } = useContext(AuthContext);

  const handleClick = (event) => {
    event.preventDefault();

    loginUser(user);
  };

  console.log(user);

  return (
    <form method="post">
      <div>
        <label>Artistname:</label>
        <input
          type="text"
          name="artistName"
          value={user.artistName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="submit" value="signin" onClick={handleClick} />
      </div>
    </form>
  );
};

export default SignIn;
