import "../../OwnerProfile.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems } from "./../../actions/itemsActions";
import Loader from "react-loader-spinner";
import styled, { css } from "styled-components";

const Headers = styled.h1`
  font-size: 20px;
  font-weight: none;
  font-family: "Homemade Apple", cursive;

  width: 100%;
  text-align: center;
`;

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
  text-transform: lowercase;
  font-size: 1rem;
`;

const Names = styled.span`
  font-family: "Homemade Apple", cursive;
  font-size: 1em;
`;

const ItemsList = (props) => {
  useEffect(() => {
    props.getItems();
    props.setIsLoggedIn(true);
  }, []);

  return (
    <div>
      <Headers> 🍃 welc🌎me 🍃 to 🍃 the 🍃 market 🍃 </Headers>
      {props.gettingItems ? (
        <Loader type="ThreeDots" color="#c1c1c1" height={40} width={40} />
      ) : props.error ? (
        <h3 style={{ color: "red" }}>{props.error}</h3>
      ) : (
        <ItemContainer>
          {props.items.sort((a,b) => b.id - a.id).map((item) => {
            return (
              <StyledDiv key={item.id}>
                <span>
                  <Names>name</Names>: {item.name}
                </span>
                <span>
                  <Names>info</Names>: {item.description}
                </span>
                <span>
                  <Names>🛒 market</Names>: {item.market}
                </span>
                <span>
                  <Names>country</Names>: {item.country}
                </span>
                <span>
                  <Names>price</Names>: ${item.price}
                </span>
                <span>
                  <Names>owner</Names>: {item.owner}
                </span>
                <span>
                  <Names>✉️email</Names>: {item.owner_email}
                </span>
                <span>
                  <Names>id</Names>: {item.id}
                </span>
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
    items: state.IRS.items,
    error: state.IRS.error,    
  };
};

export default connect(mapStateToProps, { getItems })(ItemsList);
