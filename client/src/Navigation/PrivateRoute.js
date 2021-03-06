import React, { useContext, useEffect, useState } from "react";

// React Router Dom
import { Redirect, Route } from "react-router-dom";

// Internal Imports
import { AuthContext } from "../Context/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log("rest :>> ", rest);
  const { loggedInUser } = useContext(AuthContext);
  // console.log(loggedInUser?._id);
  return (
    loggedInUser && (
      <Route
        {...rest}
        render={(props) =>
          loggedInUser ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    )
  );
};

export default PrivateRoute;
