import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    user_info: "",
  });

  const [error, setError] = useState("");
  const { push } = useHistory();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("countries error", error);
      });
  }, []);

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/register", credentials)
      .then((response) => {
        console.log("Registration submit success", response);
        push("/login");
      })
      .catch((error) => {
        console.log("Registration error", error.response.data.message);
        setError();
      });
  };

  return (
    <Center>
      <form onSubmit={submitRegistration}>
        <label htmlFor="name" />
        name:<br></br>
        <input
          type="name"
          name="name"
          value={credentials.name}
          onChange={handleChanges}
          placeholder="name required"
        />
        <br></br>
        <label htmlFor="email" />
        email: required<br></br>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChanges}
          placeholder="email required"
        />
        <br></br>
        <label htmlFor="password" />
        password:<br></br>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChanges}
          placeholder="password required."
        />
        <br></br>
        <label htmlFor="country">
          location:<br></br>
          <select
            id="country"
            name="country"
            value={credentials.country}
            onChange={handleChanges}
          >
            {countries.map((country) => {
              return (
                <option
                  key={country.id}
                  value={country.country}
                  defaultValue={country[0]}
                >
                  {country.country}
                </option>
              );
            })}
          </select>
        </label>
        <br></br>
        <label htmlFor="user_info">
          bio:<br></br>
          <textarea
            type="text"
            name="user_info"
            value={credentials.user_info}
            onChange={handleChanges}
            placeholder="tell us a little about yourself?"
          />
        </label>
        <br></br>
        <button style={{ marginTop: "5px" }}>Ready to register?</button>
        <br></br>
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </form>
    </Center>
  );
};

export default Register;
