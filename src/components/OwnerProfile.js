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
  flex-direction: row;

  text-transform: lowercase;
  font-size: 12px;

  width: 90%;
  margin-left: 8%;
`;

const Names = styled.span`
  font-family: "Homemade Apple", cursive;
`;

const SaleItemsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: flex-start;
  padding: 10px;
  border-radius: 20px;
  flex-wrap: wrap;
  width: 100%;
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

// input,
// textarea,
// dropdown {
//   padding: 10px;
//   border: 0;
//   box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
//   border-radius: 8px;
// }

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
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  text-align: center;
  padding-right: 60px;
  width: 100%;
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
    // console.log("ITEMFORSALE ID", props.ownerProfile, item.id);
    // console.log("THESE ARE THE CURRENT ITEMS FOR SALE", props.itemsForSale);
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
        <br></br>

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

      <ProfileDiv>
        <div>
          <Headers>
            <span role="img" aria-label="bust of two people emoji">
              👥
            </span>{" "}
            welcome, {props.ownerProfile.name}
          </Headers>
          <br></br>
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
        </div>
        <div>
          {props.isEditingUser && <UpdateOwnerForm />}
          {props.isEditingPassword && <UpdatePasswordForm />}
        </div>
      </ProfileDiv>
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
