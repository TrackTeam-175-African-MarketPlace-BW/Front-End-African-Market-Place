import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import styled from "styled-components";

// NOTE baseURL/api /${id}/profile

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const OwnerProfile = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  // REVIEW can I only view the user profile if I am currently logged in as that user?

  // const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`users/:id`)
      .then((response) => {
        console.log(("OwnerProfile success response", response));
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.log("OwnerProfile error", error.response.data.message);
      });
  }, []);

  console.log(props.isEditing);

  return (
    <Center>
      <div>
        <p>your profile!</p>
        {props.user_photo ? <div>photo: {props.user_photo}</div> : null}
        <br></br>
        <p>name: {props.name}</p>
        <br></br>
        <p>email: {props.email}</p>
        <br></br>
        <p>country: {props.country_id}</p>
        <br></br>
        {props.user_info ? <div>bio: {props.user_info}</div> : null}
      </div>
    </Center>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.ORS.name,
    password: state.ORS.password,
    email: state.ORS.email,
    country_id: state.ORS.country_id,
    user_photo: state.ORS.user_photo,
    user_info: state.ORS.user_info,
    error: state.ORS.error,
    isLoading: state.ORS.isLoading,
    isEditing: state.ORS.isEditing,
  };
};

export default connect(mapStateToProps, {})(OwnerProfile);
