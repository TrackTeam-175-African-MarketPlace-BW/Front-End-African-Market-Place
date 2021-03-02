import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loadUser,
  editingUser,
  updatedUser,
  cancelEditing,
} from "../actions/ownerActions";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: #a54623;
  border-radius: 3px;

  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const initialState = {
  name: "",
  email: "",
  country: "",
  user_info: "",
  user_photo: "",
};

const UpdateOwnerForm = (props) => {
  const { push } = useHistory();
  const [updatedInfo, setUpdatedInfo] = useState(initialState);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${props.id}`)
      .then((response) => {
        setUpdatedInfo(response.data);
      })
      .catch((error) => {
        console.log("updateOwnerForm get error", error.response.data.message);
      });
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
    setUpdatedInfo({
      ...updatedInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdate = (e) => {
    e.preventDefault();
    props.updatedUser(props.id, updatedInfo);
    push(`/${props.id}/ownerProfile`);
  };

  const toCancelEditing = (e) => {
    e.preventDefault();
    props.cancelEditing();
  };

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
        />
        <br></br>
        <label htmlFor="email" />
        email: required<br></br>
        <input
          type="email"
          name="email"
          value={updatedInfo.email}
          onChange={handleChanges}
        />
        <br></br>
        <label htmlFor="country">
          location:<br></br>
          <div className="select">
            <select
              id="country"
              name="country"
              value={updatedInfo.country}
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
          </div>
        </label>
        <label htmlFor="user_photo" />
        user photo?<br></br>
        <input
          type="text"
          name="user_photo"
          value={updatedInfo.user_photo}
          onChange={handleChanges}
        />
        <br></br>
        <br></br>
        <label htmlFor="user_info">
          bio:<br></br>
          <textarea
            type="text"
            name="user_info"
            value={updatedInfo.user_info}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <Button style={{ marginTop: "5px" }}>save updated info.</Button>
      </form>
      <Button style={{ marginTop: "5px" }} onClick={toCancelEditing}>
        cancel editing.
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.ORS.ownerProfile.id,
    ownerProfile: state.ORS.ownerProfile,
    error: state.ORS.error,
    isLoading: state.ORS.isLoading,
    isEditing: state.ORS.isEditing,
  };
};

export default connect(mapStateToProps, {
  loadUser,
  editingUser,
  updatedUser,
  cancelEditing,
})(UpdateOwnerForm);
