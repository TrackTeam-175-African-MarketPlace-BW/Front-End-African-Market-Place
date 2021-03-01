import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  loadUser,
  loadUserItems,
  editingUser,
  editingPassword,
} from "../actions/ownerActions";
import UpdateOwnerForm from "./UpdateOwnerForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

// NOTE baseURL/api /${id}/profile

const FlexStyling = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  font-size: 12px;
  max-width: 80%;
  margin-top: 8%;
`;

const Headers = styled.h1`
  font-size: 20px;
  font-weight: none;
  // border: 1px solid black;
  // border-radius: 5px;
  padding: 4px;
  width: 100%;
`;

const OwnerProfile = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.loadUser(id);
    props.loadUserItems(id);
    props.setIsLoggedIn(true);
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    props.editingUser();
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    props.editingPassword();
  };

  return (
    <FlexStyling>
      <div>
        <Headers>👥 welcome, {props.ownerProfile.name} </Headers>
        name: {props.ownerProfile.name}
        <br></br>
        <img
          style={{ width: "40%", borderRadius: "10px" }}
          src={props.ownerProfile.user_photo}
          alt={props.ownerProfile.name}
        ></img>
        <br></br>
        country: {props.ownerProfile.country}
        <br></br>
        email: {props.ownerProfile.email}
        <br></br>
        bio: {props.ownerProfile.user_info}
        <br></br>
        {props.isEditingUser === false ? (
          <button onClick={handleUpdateProfile}>update profile?</button>
        ) : null}
        <button onClick={handleUpdatePassword}>update password?</button>
      </div>
      <div>{props.isEditingUser ? <UpdateOwnerForm /> : null}</div>
      <div>{props.isEditingPassword ? <UpdatePasswordForm /> : null}</div>
      <div>
        <div>
          <Headers>🌾 {props.ownerProfile.name}'s items for sale 🌾</Headers>
        </div>
        {props.itemsForSale.map((item) => {
          return (
            <div key={item.id}>
              name: {item.name}
              <br></br>
              description: {item.description}
              <br></br>
              price: {item.price}
              <br></br>
              category: {item.category}
              <br></br>
              market: {item.market}
              <br></br>
              country: {item.country}
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
      <br></br>
    </FlexStyling>
  );
};

const mapStateToProps = (state) => {
  // console.log("STATE: ", state);
  return {
    owner_id: state.ORS.owner_id,
    ownerProfile: state.ORS.ownerProfile,
    error: state.ORS.error,
    isLoading: state.ORS.isLoading,
    isEditingUser: state.ORS.isEditingUser,
    isEditingPassword: state.ORS.isEditingPassword,
    itemsForSale: state.ORS.itemsForSale,
  };
};

export default connect(mapStateToProps, {
  loadUser,
  loadUserItems,
  editingUser,
  editingPassword,
})(OwnerProfile);
