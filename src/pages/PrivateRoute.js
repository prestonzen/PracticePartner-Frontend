import React from "react";
import { Route, Link } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Link to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
