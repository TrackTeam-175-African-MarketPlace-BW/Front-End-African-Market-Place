import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadUser, loadUserItems } from "../actions/ownerActions";

// NOTE baseURL/api /${id}/profile

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const OwnerProfile = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.loadUser(id);
    props.loadUserItems(id);
  }, []);

  return (
    <Center>
      {/* <div>
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
      </div> */}
      <h1>OWNER PROFILE</h1>
      {JSON.stringify(props.ownerProfile, 2, "")}
      <img src={props.ownerProfile.user_photo}></img>
      {JSON.stringify(props.itemsForSale, 2, "")}
      {props.error && <p style={{ color: "red" }}>{props.error}</p>}
    </Center>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE: ", state);
  return {
    owner_id: state.ORS.owner_id,
    ownerProfile: state.ORS.ownerProfile,
    error: state.ORS.error,
    isLoading: state.ORS.isLoading,
    isEditing: state.ORS.isEditing,
    itemsForSale: state.ORS.itemsForSale,
  };
};

export default connect(mapStateToProps, { loadUser, loadUserItems })(
  OwnerProfile
);
