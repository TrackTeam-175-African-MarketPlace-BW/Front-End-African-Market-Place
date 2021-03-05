import React from 'react'
import styled from 'styled-components';
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

const Button = styled.button`
  background: #68773c;
  border-radius: 3px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`

const Item = (props) => {
    return (
      <StyledDiv key={props.item.id}>
        <span>
          <Names>name</Names>: {props.item.name}
        </span>
        <span>
          <Names>info</Names>: {props.item.description}
        </span>
        <span>
          <Names>
            <span
              role="img"
              alt="shopping cart emoji"
              aria-label="shopping cart emoji"
            >
              🛒
            </span>{" "}
            market
          </Names>
          : {props.item.market}
        </span>
        <span>
          <Names>country</Names>: {props.item.country}
        </span>
        <span>
          <Names>price</Names>: ${props.item.price}
        </span>
        <span>
          <Names>owner</Names>: {props.item.owner}
        </span>
        <span>
          <Names>email</Names>: {props.item.owner_email}
        </span>
        <span>
          <Button>Add To Cart</Button>
        </span>
      </StyledDiv>
    );
}

export default Item
