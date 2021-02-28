import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadUser, loadUserItems } from "../actions/ownerActions";

// NOTE baseURL/api /${id}/profile

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const OwnerProfile = (props) => {
  const { id } = useParams(); // REVIEW pretty sure I will never understand this
  // console.log("USE PARAMS", useParams());
  // console.log("sr: ownerProfile.js, const ownerProfile props", props);

  useEffect(() => {
    props.loadUser(id);
    props.loadUserItems(id);
    props.setIsLoggedIn(true); // REVIEW where is this coming from
  }, []);

  // console.log("these are the items for sale", props.itemsForSale);

  return (
    <div>
      <div>
        <h1>your profile!</h1>
        name: {props.ownerProfile.name}
        <br></br>
        <img
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
        {/* {JSON.stringify(props.ownerProfile, 2, "")} */}
      </div>
      <div>
        <h1>items currently for sale:</h1>
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
      {props.error && <p style={{ color: "red" }}>{props.error}</p>}
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
    itemsForSale: state.ORS.itemsForSale,
  };
};

export default connect(mapStateToProps, { loadUser, loadUserItems })(
  OwnerProfile
);
