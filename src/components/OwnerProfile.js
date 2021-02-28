import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadUser, loadUserItems, editingUser } from "../actions/ownerActions";
import UpdateOwnerForm from "./UpdateOwnerForm";

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
  // console.log("USE PARAMS", useParams());
  console.log("sr: ownerProfile.js, const ownerProfile props", props);

  useEffect(() => {
    props.loadUser(id);
    props.loadUserItems(id);
    props.setIsLoggedIn(true);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    props.editingUser();
  };

  // console.log("these are the items for sale", props.itemsForSale);

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
        <button onClick={handleClick}>update profile?</button>
        {/* {JSON.stringify(props.ownerProfile, 2, "")} */}
      </div>
      <div>
        {props.isEditing ? (
          <UpdateOwnerForm itemInfo={props.ownerProfile} />
        ) : null}
      </div>
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
        {/* {props.itemsForSale.map((item) => {
          return <div>{item}</div>;
        })} */}
        {/* {JSON.stringify(props.itemsForSale, 2, "")} */}
      </div>
      <br></br>
      {props.error && <p style={{ color: "red" }}>{props.error}</p>}
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
    isEditing: state.ORS.isEditing,
    itemsForSale: state.ORS.itemsForSale,
  };
};

export default connect(mapStateToProps, {
  loadUser,
  loadUserItems,
  editingUser,
})(OwnerProfile);
