import "../OwnerProfile.css";
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import * as Yup from 'yup';

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Headers = styled.h1`
  font-size: 28px;
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
`;

const Input = styled.input`
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 120%;
`;

const Names = styled.span`
  font-family: "Homemade Apple", cursive;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 120%;
`;

const Select = styled.select`
  outline: 0;
  background: white;
  width: 85%;
  height: 100%;
  color: black;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 8px;
`;

const NewRegister = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    country: "Kenya",
    user_info: "",
  });

  const [error, setError] = useState("");
  const { push } = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;

  const [countries, setCountries] = useState([]);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
    Yup.reach(formSchema, [e.target.name])
      .validate([e.target.value])
        .then(() => setYupErrors({...yupErrors, [e.target.name]: ''}))
        .catch(err => setYupErrors({...yupErrors, [e.target.name]: err.yupErrors}))
    
    setCredentials({
      ...credentials,
      [e.target.name]: [e.target.value],
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

  /* Yup validation */

  const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Name is required")
        .matches(/^[aA-zZ\s\-]+$/, "No special characters or numbers"),
    email: Yup
        .string()
        .email("Email is required"),
    password: Yup
        .string()
        .required("Password is required")
        .matches(/^[aA-zZ\s\-]+$/, "No special characters or numbers")
        .min(6, "Must be at least 6 characters long"),
    country: Yup
        .required("Country is required"),
    bio: Yup
        .required("Bio is required")
        .min(50, "Minimum 50 characters"),
  })

  const [ yupErrors, setYupErrors ] = useState({
      name: "",
      email: "",
      password: "",
      country: "",
      bio: "",
  })


  // Yup
  //   .reach(formSchema, [e.target.name])
  //   .validate([e.target.value])
  //   .then(valid => {
  //       setYupErrors({
  //           ...yupErrors, [e.target.name]: ""
  //       })
  //   })
  //   .catch(err => {
  //       setYupErrors({
  //           ...yupErrors, [e.target.name]: err.yupErrors[0]
  //       })
  //   })

  //   setFormState({
  //       ...formState, [e.target.name]: [e.target.value]
  //   })

  // useEffect(() => {
  //     formSchema.isValid(credentials)
  //       .then(valid => setButtonDisabled(!valid))
  //       .catch(err => console.log(err))
  // }, [credentials]);


  Yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
      setYupErrors({
          ...yupErrors, name: ""
      })
  })
  .catch(err => {
      setYupErrors({
          ...yupErrors, name: err.yupErrors[0]
      })
  })

  setFormState({
      ...formState, name: value
  })

useEffect(() => {
    formSchema.isValid(credentials)
      .then(valid => setButtonDisabled(!valid))
      .catch(err => console.log(err))
}, [credentials]);

  return (
    <Center>
      <Headers>
        <span role="img" aria-label="corn emoji">
          🌱
        </span>
        {""} register
        <span role="img" aria-label="corn emoji">
          {""} 🌾
        </span>
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
        <br />{yupErrors.name.length > 0 && <p className="error">
            {yupErrors.name}
            </p>}
        <br />
        <label htmlFor="email" />
        <Names>email (required)</Names>
        {""}:
        <br />{yupErrors.email.length > 0 && <p className="error">
            {yupErrors.email}
            </p>}
        <br />
        <Input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChanges}
          placeholder="email required"
        />
        <br></br>
        <label htmlFor="password" />
        <Names>password</Names>: <i onClick={togglePasswordVisibility}>{eye}</i>
        <br></br>
        <Input
          type={passwordShown ? "text" : "password"}
          name="password"
          value={credentials.password}
          onChange={handleChanges}
          placeholder="password required."
        />
        <br></br>
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
        <Button style={{ marginTop: "10px" }}>Ready to register?</Button>
        <br></br>
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </form>
    </Center>
  );
};

export default NewRegister;
