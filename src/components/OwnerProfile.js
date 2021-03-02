import "../OwnerProfile.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import UpdateOwnerForm from "./UpdateOwnerForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import {
  loadUser,
  loadUserItems,
  editingUser,
  editingPassword,
  unmountUser,
  unmountPasswordChange,
  deleteUserItem,
} from "../actions/ownerActions";
import styled, { css } from "styled-components";

const FlexStyling = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  font-size: 12px;
`;

const Names = styled.span`
  font-family: "Homemade Apple", cursive;
`;

const SaleItemsDiv = styled.div`
  display: flex;

  padding: 10px;
  border-radius: 20px;
  flex-wrap: wrap;
  width: 55%;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
`;

const Headers = styled.h1`
  font-size: 23px;
  font-weight: none;
  font-family: "Homemade Apple", cursive;

  width: 100%;
`;
// first #68773C
// last #A54623

const Button = styled.button`
  background: #68773c;
  border-radius: 3px;

  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.other &&
    css`
      background: #83a32e;
      color: white;
    `}
`;

const ProfileDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ItemDiv = styled.div`
  padding: 12px;
`;

const OwnerProfile = (props) => {
  console.log("OWNERPROFILE PROPS", props);
  const { id } = useParams();

  useEffect(() => {
    props.loadUser(id);
    props.loadUserItems(id);
    props.setIsLoggedIn(true);
    return () => {
      props.unmountUser();
      props.unmountPasswordChange();
    };
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    props.editingUser();
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    props.editingPassword();
  };

  const deleteItem = (item) => {
    props.deleteUserItem(props.ownerProfile.id, item.id);
    console.log("ITEMFORSALE ID", props.ownerProfile, item.id);
    console.log("THESE ARE THE CURRENT ITEMS FOR SALE", props.itemsForSale);
    // props.itemsForSale.filter((itemForSale) => {
    //   return itemForSale.id !== item.id;
    // });
  };

  return (
    <FlexStyling>
      <SaleItemsDiv>
        <Headers>
          <span role="img" aria-label="corn emoji">
            🌾
          </span>{" "}
          {props.ownerProfile.name}'s items for sale{" "}
        </Headers>

        {props.itemsForSale.map((item) => {
          return (
            <ItemDiv key={item.id}>
              <Names>name</Names>: {item.name}
              <br></br>
              <Names>info:</Names>: {item.description}
              <br></br>
              <Names>price</Names>: ${item.price}
              <br></br>
              <Names>category</Names>: {item.category}
              <br></br>
              <Names>market</Names>: {item.market}
              <br></br>
              <Names>country</Names>: {item.country}
              <br></br>
              <Button
                other
                onClick={() => {
                  deleteItem(item);
                }}
              >
                delete item?
              </Button>
            </ItemDiv>
          );
        })}
      </SaleItemsDiv>

      <div>
        <ProfileDiv>
          <Headers>
            <span role="img" aria-label="bust of two people emoji">
              👥
            </span>{" "}
            welcome, {props.ownerProfile.name}
          </Headers>
          <Names>name:</Names> {props.ownerProfile.name}
          <br></br>
          <img
            style={{ width: "40%", borderRadius: "10px" }}
            src={props.ownerProfile.user_photo}
            alt={props.ownerProfile.name}
          ></img>
          <br></br>
          <Names>country:</Names> {props.ownerProfile.country}
          <br></br>
          <Names>email:</Names> {props.ownerProfile.email}
          <br></br>
          <Names>bio:</Names> {props.ownerProfile.user_info}
          <br></br>
          {props.isEditingUser === false ? (
            <Button onClick={handleUpdateProfile}>update profile?</Button>
          ) : null}
          {props.isEditingPassword === false ? (
            <Button onClick={handleUpdatePassword}>update password?</Button>
          ) : null}
        </ProfileDiv>
        <div>{props.isEditingUser && <UpdateOwnerForm />}</div>
        <div>{props.isEditingPassword && <UpdatePasswordForm />}</div>
      </div>
    </FlexStyling>
  );
};

const mapStateToProps = (state) => {
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
  unmountUser,
  unmountPasswordChange,
  deleteUserItem,
})(OwnerProfile);
