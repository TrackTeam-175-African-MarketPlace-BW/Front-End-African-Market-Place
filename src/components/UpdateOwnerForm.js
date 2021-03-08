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
import styled from "styled-components";

const Button = styled.button`
  background: #a54623;
  border-radius: 3px;

  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const Input = styled.input`
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  height: 80px;
  border-radius: 15px;
  width: 90%;
`;

const Select = styled.select`
  outline: 0;
  background: white;
  width: 100%;
  padding: 5px;
  color: black;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
`;

const initialState = {
  name: "",
  email: "",
  country: "Kenya",
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
        <Input
          type="name"
          name="name"
          value={updatedInfo.name}
          onChange={handleChanges}
        />
        <br></br>
        <label htmlFor="email" />
        email: required<br></br>
        <Input
          type="email"
          name="email"
          value={updatedInfo.email}
          onChange={handleChanges}
        />
        <br></br>
        <label htmlFor="country">
          location:<br></br>
          <div className="select">
            <Select
              id="country"
              name="country"
              value={updatedInfo.country}
              onChange={handleChanges}
            >
              {countries
                .sort((a, b) => a.id - b.id)
                .map((country) => {
                  return (
                    <option
                      key={country.id}
                      value={country.country}
                      defaultValue={country.id[0]}
                    >
                      {country.country}
                    </option>
                  );
                })}
            </Select>
          </div>
        </label>
        <label htmlFor="user_photo" />
        user photo?<br></br>
        <Input
          type="text"
          name="user_photo"
          value={updatedInfo.user_photo}
          onChange={handleChanges}
          placeholder="url format please"
        />
        <br></br>
        <br></br>
        <label htmlFor="user_info">
          bio:<br></br>
          <TextArea
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
