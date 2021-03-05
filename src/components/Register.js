import "../OwnerProfile.css";
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Headers = styled.div`
  width: 100%;
  text-align: center;
  margin-left: 13%;
`;

const Button = styled.button`
  background: #68773c;
  border-radius: 8px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  padding-top: 7px;
  padding-bottom: 7px;
`;

const Input = styled.input`
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: 100%;
`;

const Names = styled.span`
  font-family: "Homemade Apple", cursive;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: 100%;
`;

const Select = styled.select`
  outline: 0;
  background: white;
  width: 100%;
  height: 100%;
  color: black;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 8px;
`;

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    country: "Kenya",
    user_info: "",
  });

  const [error, setError] = useState("");
  const { push } = useHistory();

  const [eyeVisible, setEyeVisible] = useState(false);

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
      <Headers>
        <img
          alt="corn and text that says register with a corn"
          src="https://i.ibb.co/Qd3wMdJ/Screen-Shot-2021-03-03-at-5-55-33-PM.png"
          style={{ width: "23%" }}
        ></img>
      </Headers>

      <form onSubmit={submitRegistration}>
        <label htmlFor="name" />
        <Names>name</Names>:<br></br>
        <Input
          type="name"
          name="name"
          value={credentials.name}
          onChange={handleChanges}
          placeholder="name required"
        />
        <br></br>
        <label htmlFor="email" />
        <Names>email (required)</Names>
        {""}:<br></br>
        <Input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChanges}
          placeholder="email required"
        />
        <br></br>
        <Names>password</Names>:<br></br>
        <div className="form-field">
          <label htmlFor="password" />

          <div className="ps" class="password" style={{ width: "120%" }}>
            <input
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChanges}
              placeholder="password here"
              className="text"
              type={eyeVisible ? "text" : "password"}
              style={{ width: "50%" }}
            />
            <img
              onClick={handleClick}
              className="eye"
              alt="eye icon"
              src="https://icon-library.com/images/vector-eye-icon/vector-eye-icon-6.jpg"
              style={{ marginLeft: "70px", width: "20px" }}
            />
          </div>
        </div>
        <label htmlFor="country">
          <Names>location</Names>:<br></br>
          <div>
            <Select
              id="country"
              name="country"
              value={credentials.country}
              onChange={handleChanges}
            >
              {countries
                .sort((a, b) => a.id - b.id)
                .map((country) => {
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
            </Select>
          </div>
        </label>
        <label htmlFor="user_info">
          <Names>bio</Names>:<br></br>
          <TextArea
            type="text"
            name="user_info"
            value={credentials.user_info}
            onChange={handleChanges}
            placeholder="tell us a little about yourself?"
          />
        </label>
        <br></br>
        <Button style={{ marginTop: "10px", marginLeft: "60px" }}>
          ready to register?
        </Button>
        <br></br>
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </form>
    </Center>
  );
};

export default Register;
