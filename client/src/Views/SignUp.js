import React, { useState, useContext } from "react";

// Import Context
import { AuthContext } from "../Context/authContext";

// React Router DOM
import { useHistory } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    artistName: "",
    email: "",
    firstName: "",
    password: "",
  });

  const { registerUser } = useContext(AuthContext);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    registerUser(user);
    history.push("/signin");
  };

  console.log(user);

  return (
    <form method="post">
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
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
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
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
        <input type="submit" value="Register" onClick={handleClick} />
      </div>
    </form>
  );
};

export default SignUp;
