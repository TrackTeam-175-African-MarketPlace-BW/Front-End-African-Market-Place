import "../UpdatePassword.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loadUser,
  editingUser,
  updatedUser,
  updatedPassword,
  cancelEditing,
} from "../actions/ownerActions";

import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 90%;
  justify-content: center;
`;

const Button = styled.button`
  background: #a54623;
  border-radius: 3px;

  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const initialState = {
  oldPassword: "",
  newPassword: "",
};

const UpdatePasswordForm = (props) => {
  const [changedPassword, setChangedPassword] = useState(initialState);
  const [eyeVisibleOldPS, setEyeVisibleOldPS] = useState(false);
  const [eyeVisibleNewPS, setEyeVisibleNewPS] = useState(false);
  const { push } = useHistory();

  const [error, setError] = useState("");

  const handleChanges = (e) => {
    setChangedPassword({
      ...changedPassword,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickOld = (e) => {
    if (eyeVisibleOldPS === false) {
      setEyeVisibleOldPS(true);
      e.target.src =
        "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/036/original/eye-closed.png";
    } else {
      setEyeVisibleOldPS(false);
      e.target.src =
        "https://icon-library.com/images/vector-eye-icon/vector-eye-icon-6.jpg";
    }
  };

  const handleClickNew = (e) => {
    if (eyeVisibleNewPS === false) {
      setEyeVisibleNewPS(true);
      e.target.src =
        "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/036/original/eye-closed.png";
    } else {
      setEyeVisibleNewPS(false);
      e.target.src =
        "https://icon-library.com/images/vector-eye-icon/vector-eye-icon-6.jpg";
    }
  };

  const submitPass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/users/${props.ownerProfile.id}/password`, changedPassword)
      .then((response) => {
        console.log("submit password success", response);
        window.localStorage.removeItem("token");
        push(`/newpassword`);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const toCancelEditing = (e) => {
    e.preventDefault();
    props.cancelEditing();
  };

  return (
    <div>
      <Form onSubmit={submitPass}>
        password:<br></br>
        <div className="form-field">
          <label htmlFor="oldPassword" />

          <div className="password">
            <input
              id="oldPassword"
              name="oldPassword"
              value={changedPassword.oldPassword}
              onChange={handleChanges}
              placeholder="old"
              className="text"
              type={eyeVisibleOldPS ? "text" : "password"}
            />
            <img
              onClick={handleClickOld}
              alt="eye icon"
              className="eye"
              src="https://icon-library.com/images/vector-eye-icon/vector-eye-icon-6.jpg"
              style={{ width: "20px" }}
            />
          </div>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <br></br>
        password:<br></br>
        <div className="form-field">
          <label htmlFor="newPassword" />

          <div className="ps" class="password">
            <input
              id="newPassword"
              name="newPassword"
              value={changedPassword.newPassword}
              onChange={handleChanges}
              placeholder="new"
              className="text"
              type={eyeVisibleNewPS ? "text" : "password"}
            />
            <img
              onClick={handleClickNew}
              className="eye"
              alt="eye icon"
              src="https://icon-library.com/images/vector-eye-icon/vector-eye-icon-6.jpg"
              style={{ width: "20px" }}
            />
          </div>
        </div>
        <Button style={{ marginTop: "14px" }}>change password.</Button>
      </Form>
      <Button onClick={toCancelEditing}>cancel editing</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
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
  cancelEditing,
})(UpdatePasswordForm);
