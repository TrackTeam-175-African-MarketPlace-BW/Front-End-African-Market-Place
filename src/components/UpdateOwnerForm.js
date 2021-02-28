import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { editingUser } from "../actions/ownerActions";

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const UpdateOwnerForm = ({ itemInfo }) => {
  //   console.log("UpdateOwnerForm props", itemInfo.country);

  const [updatedInfo, setUpdatedInfo] = useState({
    name: "",
    email: "",
    country: "",
    user_info: "",
    // user_photo: "",
  });

  // console.log("these are the credentials", credentials);

  const [countries, setCountries] = useState([]);
  // console.log("these are the countries", countries);

  const { push } = useHistory();

  const [error, setError] = useState("");

  const handleChanges = (e) => {
    setUpdatedInfo({
      ...updatedInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdate = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/countries")
      .then((response) => {
        // console.log("countries success response", response);
        // console.log("figuring out country dropdown", response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("countries error", error);
      });
  }, []);

  return (
    <div>
      <form onSubmit={submitUpdate}>
        <label htmlFor="name" />
        name:<br></br>
        <input
          type="name"
          name="name"
          value={updatedInfo.name}
          onChange={handleChanges}
          placeholder={itemInfo.name}
        />
        <br></br>
        <label htmlFor="email" />
        email: required<br></br>
        <input
          type="email"
          name="email"
          value={updatedInfo.email}
          onChange={handleChanges}
          placeholder={itemInfo.email}
        />
        <br></br>
        <label htmlFor="country">
          location:<br></br>
          <select
            id="country"
            name="country"
            value={updatedInfo.country}
            // defaultValue={countries[0]}
            onChange={handleChanges}
            placeholder={itemInfo.country}
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
        {/* <label htmlFor="user_photo" />
        user photo?<br></br>
        <input
          type="text"
          name="user_photo"
          value={credentials.user_photo}
          onChange={handleChanges}
          placeholder="url link format, please."
        />
        <br></br> */}
        <br></br>
        <label htmlFor="user_info">
          bio:<br></br>
          <textarea
            type="text"
            name="user_info"
            value={updatedInfo.user_info}
            onChange={handleChanges}
            placeholder={itemInfo.user_info}
          />
        </label>
        <br></br>
        <button style={{ marginTop: "5px" }}>update user info?</button>
        <br></br>
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </form>
      {/* <div>
        {countries.map((item) => {
          <div>{item.country}</div>;
        })}
      </div> */}
    </div>
  );
};

export default UpdateOwnerForm;
