import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import {
  loadUser,
  editingUser,
  updatedUser,
  updatedPassword,
} from "../actions/ownerActions";
import { connect } from "react-redux";

const initialState = {
  oldPassword: "",
  newPassword: "",
};

const UpdatePasswordForm = (props) => {
  console.log("UpdatePasswordForm props", props);
  const [changedPassword, setChangedPassword] = useState(initialState);
  //   console.log("updatedInfo", updatedInfo);

  // console.log("these are the credentials", credentials);

  const { push } = useHistory();

  const [error, setError] = useState("");

  const handleChanges = (e) => {
    setChangedPassword({
      ...changedPassword,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdatedPassword = (e) => {
    e.preventDefault();
    props.updatedPassword(props.id, changedPassword);
    push(`/${props.id}/ownerProfile`);
  };

  return (
    <div>
      <form onSubmit={submitUpdatedPassword}>
        <label htmlFor="oldPassword" />
        old password:<br></br>
        <input
          type="text"
          name="oldPassword"
          value={changedPassword.oldPassword}
          onChange={handleChanges}
        />
        <br></br>
        <label htmlFor="newPassword" />
        new password:<br></br>
        <input
          type="text"
          name="newPassword"
          value={changedPassword.newPassword}
          onChange={handleChanges}
        />
        <br></br>
        <button style={{ marginTop: "5px" }}>update user info?</button>
        <br></br>
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("STATE: ", state);
  return {
    id: state.ORS.ownerProfile.id,
    ownerProfile: state.ORS.ownerProfile,
    error: state.ORS.error,
    isLoading: state.ORS.isLoading,
    isEditingUser: state.ORS.isEditingUser,
    isEditingPassword: state.ORS.isEditingPassword,
  };
};

export default connect(mapStateToProps, {
  loadUser,
  editingUser,
  updatedUser,
  updatedPassword,
})(UpdatePasswordForm);
