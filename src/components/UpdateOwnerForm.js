import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";
import { loadUser, editingUser, updatedUser } from "../actions/ownerActions";
import { connect } from "react-redux";

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const initialState = {
  name: "",
  email: "",
  country: "",
  user_info: "",
  user_photo: "",
};

const UpdateOwnerForm = (props) => {
  console.log("UpdateOwnerForm props", props);
  const [updatedInfo, setUpdatedInfo] = useState(initialState);
  //   console.log("updatedInfo", updatedInfo);

  // console.log("these are the credentials", credentials);

  const [countries, setCountries] = useState([]);
  // console.log("these are the countries", countries);

  const { push } = useHistory();
  const { id } = useParams();

  const [error, setError] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}`)
      .then((response) => {
        setUpdatedInfo(response.data);
      })
      .catch((error) => {
        console.log("updateOwnerForm get error", error.response.data.message);
      });
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

  const handleChanges = (e) => {
    setUpdatedInfo({
      ...updatedInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdate = (e) => {
    e.preventDefault();
    props.updatedUser(updatedInfo);
    push(`/${id}/ownerProfile`);
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
          <select
            id="country"
            name="country"
            value={updatedInfo.country}
            // defaultValue={countries[0]}
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

const mapStateToProps = (state) => {
  // console.log("STATE: ", state);
  return {
    owner_id: state.ORS.owner_id,
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
})(UpdateOwnerForm);
