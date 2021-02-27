import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    country: {
      Kenya: false, // doesn't work
      Uganda: false,
      Rwanda: false,
      Tanzania: false,
      Sudan: false, // doesn't work
    },
    user_info: "",
    user_photo: "",
  });

  const [countries, setCountries] = useState([]);
  console.log("these are the countries", countries);

  const { push } = useHistory();

  const [error, setError] = useState("");

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
        localStorage.setItem("token", response);
        push("/login");
      })
      .catch((error) => {
        console.log("Registration error", error.response.data.message); // REVIEW how do you find the error
        setError();
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/countries")
      .then((response) => {
        console.log("countries success response", response);
        console.log("figuring out country dropdown", response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("countries error", error);
      });
  }, []);

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
        email:<br></br>
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
            name="country"
            value={credentials.country}
            //   placeholder="country location?"
            onChange={handleChanges}
          >
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Sudan">South Sudan</option>
            {/* {countries.map((oneCountry) => {
              <option value={oneCountry.country}>{oneCountry.country}</option>;
            })} */}
            {/* <option value={countries.country}>{countries.country}</option> */}
          </select>
        </label>
        <br></br>
        <label htmlFor="user_photo" />
        user photo?<br></br>
        <input
          type="text"
          name="user_photo"
          value={credentials.user_photo}
          onChange={handleChanges}
          placeholder="url link format, please."
        />
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
      {/* <div>
        {countries.map((item) => {
          <div>{item.country}</div>;
        })}
      </div> */}
    </Center>
  );
};

export default Register;
