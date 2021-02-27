import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadUser } from "../actions/ownerActions";

// NOTE baseURL/api /${id}/profile

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const OwnerProfile = (props) => {
  // const { id } = useParams();

  useEffect(() => {
    props.loadUser();
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
      {props.error && <p style={{ color: "red" }}>{props.error}</p>}
    </Center>
  );
};

const mapStateToProps = (state) => {
  return {
    ownerProfile: state.ORS.ownerProfile,
    error: state.ORS.error,
    isLoading: state.ORS.isLoading,
    isEditing: state.ORS.isEditing,
  };
};

export default connect(mapStateToProps, { loadUser })(OwnerProfile);
