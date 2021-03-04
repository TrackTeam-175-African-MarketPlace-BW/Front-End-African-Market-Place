import "../OwnerProfile.css";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Headers = styled.h1`
  font-size: 20px;
  font-weight: none;
  font-family: "Homemade Apple", cursive;
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  background: #68773c;
  border-radius: 8px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  padding-top: 7px;
  padding-bottom: 7px;
  width: 50%;
`;

const Input = styled.input`
  padding: 8px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: 100%;
  height: 21px;
`;

const Names = styled.span`
  font-family: "Homemade Apple", cursive;
  font-size: 14px;
`;

const LogIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { push } = useHistory();

  const [eyeVisible, setEyeVisible] = useState(false);

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
        localStorage.setItem("token", res.data.token);
        push(`${res.data.user.id}/ownerProfile`);
      })
      .catch((err) => {
        console.log(
          "cd: LogIn.js: handleLogin: post request error response: ",
          setError(err.response.data.message)
        );
      });
  };

  const handleClick = (e) => {
    if (eyeVisible === false) {
      setEyeVisible(true);
      e.target.src =
        "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/036/original/eye-closed.png";
    } else {
      setEyeVisible(false);
      e.target.src =
        "https://icon-library.com/images/vector-eye-icon/vector-eye-icon-6.jpg";
    }
  };

  return (
    <Center>
      <Headers>welcome, login below!</Headers>
      <form onSubmit={handleLogin}>
        <label htmlFor="email" /> <Names>user email:</Names>
        <Input
          id="email"
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="email here please"
        />
        <br />
        <br />
        <Names>password</Names>:<br></br>
        <div className="form-field">
          <label htmlFor="password" />

          <div className="ps" class="password">
            <input
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="password here please"
              className="text"
              type={eyeVisible ? "text" : "password"}
            />
            <img
              onClick={handleClick}
              className="eye"
              src="https://icon-library.com/images/vector-eye-icon/vector-eye-icon-6.jpg"
              style={{ width: "20px" }}
            />
          </div>
        </div>
        {error && (
          <div style={{ color: "red" }}>
            {error} please try again, or{" "}
            <NavLink to="/register">register here</NavLink>
          </div>
        )}
        <Button style={{ marginTop: "15px" }} type="submit">
          log in
        </Button>
      </form>
    </Center>
  );
};

export default LogIn;
