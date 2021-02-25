import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute(props) {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          // REVIEW add updated pathname once determined

          <Redirect to={{ pathname: "/", state: { from: location } }} />
        );
      }}
    />
  );
}
