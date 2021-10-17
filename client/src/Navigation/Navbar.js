import { Link, useHistory } from "react-router-dom";
import { React, useContext } from "react";
import { AuthContext } from "../Context/authContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link to="/signup">Register</Link>
      <Link to="/signin">Login</Link>
      <Link to="/signin" onClick={logout}>
        Logout
      </Link>
      <Link to="/getStarted">Profile</Link>
    </div>
  );
};

export default Navbar;
