import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getItems,
  updateSingleItem,
  addItemForSale,
} from "./../../actions/itemsActions";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  width: 85%;
  margin: 20px auto;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
`;

const StyledH3 = styled.h3`
  font-size: 20px;
`;
const StyledH4 = styled.h4`
  font-size: 16px;
`;

const ItemsList = (props) => {
  const { id } = useParams();

  const { push } = useHistory();
  useEffect(() => {
    props.getItems();
    props.setIsLoggedIn(true);
  }, []);

  const editItem = (itemId) => {
    props.updateSingleItem(props.id, itemId);
  };

  const addItem = (item) => {
    console.log("cd: ItemsList.js: addItem: item: ", item);
    props.addItemForSale(props.id, item);
  };

  return (
    <div>
      {props.gettingItems ? (
        <Loader type="ThreeDots" color="#c1c1c1" height={40} width={40} />
      ) : props.error ? (
        <h3 style={{ color: "red" }}>{props.error}</h3>
      ) : (
        <ItemContainer>
          {props.items.map((item) => {
            return (
              <StyledDiv key={item.id}>
                <StyledH3>{item.name}</StyledH3>
                <StyledH4>{item.description}</StyledH4>
                <StyledH4>{item.market}</StyledH4>
                <StyledH4>{item.country}</StyledH4>
                <StyledH4>{item.price}</StyledH4>
                <button
                  onClick={() => {
                    addItem(item);
                  }}
                >
                  Add Item To Your Profile
                </button>
                <br />
                <button
                  onClick={() => {
                    // editItem(`${item.id}`)
                    push(`/editItem/${item.id}`);
                  }}
                >
                  Update Item
                </button>
              </StyledDiv>
            );
          })}
        </ItemContainer>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.ORS.owner_id,
    item_id: state.IRS.items.id,
    items: state.IRS.items,
    error: state.IRS.error,
    gettingItems: state.IRS.getItems,
    updatingItem: state.IRS.updatingItem,
    creatingItem: state.IRS.creatingItem,
    deletingItem: state.IRS.deletingItem,
  };
};

export default connect(mapStateToProps, {
  getItems,
  updateSingleItem,
  addItemForSale,
})(ItemsList);
