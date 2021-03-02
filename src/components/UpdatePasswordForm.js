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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
  oldPassword: "",
  newPassword: "",
};

const UpdatePasswordForm = (props) => {
  const [changedPassword, setChangedPassword] = useState(initialState);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const { push } = useHistory();
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [error, setError] = useState("");
  const handleChanges = (e) => {
    setChangedPassword({
      ...changedPassword,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibilityOld = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const togglePasswordVisibilityNew = () => {
    setPasswordShown2(passwordShown2 ? false : true);
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
      <form onSubmit={submitPass}>
        <label htmlFor="oldPassword" />
        old password: <i onClick={togglePasswordVisibilityOld}>{eye}</i>
        <br></br>
        <div>
          <input
            type={passwordShown ? "text" : "password"}
            name="oldPassword"
            placeholder={"enter old password"}
            value={changedPassword.oldPassword}
            onChange={handleChanges}
          />
        </div>
        <br></br>
        <label htmlFor="newPassword" />
        new password: <i onClick={togglePasswordVisibilityNew}>{eye}</i>{" "}
        <br></br>
        <input
          type={passwordShown2 ? "text" : "password"}
          name="newPassword"
          value={changedPassword.newPassword}
          onChange={handleChanges}
        />
        <br></br>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button style={{ marginTop: "5px" }}>change password.</button>
        <br></br>
      </form>
      <button onClick={toCancelEditing}>cancel editing</button>
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
