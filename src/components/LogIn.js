import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";

const LogIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { push } = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/login", credentials)
      .then((res) => {
        console.log("cd: Login.js: handleLogin: post request response: ", res);
        localStorage.setItem("token", res.data.payload);
        push("/ownerProfile");
      })
      .catch((err) => {
        console.log(
          "cd: LogIn.js: handleLogin: post request error response: ",
          err.response.data.message
        );
        setError(err.response.data.message.toUpperCase());
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Welcome! Please enter your credentials below to log in.</h2>
      <label htmlFor="email" /> User Email:
      <input
        id="email"
        name="email"
        type="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password" /> Password:
      <input
        id="password"
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Log In</button>
      {error && (
        <div>
          {error} Please Try Again, or{" "}
          <NavLink to="/register">REGISTER HERE</NavLink>
        </div>
      )}
    </form>
  );
};

export default LogIn;
