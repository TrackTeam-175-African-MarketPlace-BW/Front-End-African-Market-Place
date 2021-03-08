import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { checkoutCart } from "../actions/itemsActions";
import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";

const Button = styled.button`
  background: #68773c;
  border-radius: 3px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const CartDiv = styled.div`
  display: block;
  margin: 0 auto;
  width: 1000px;
  background: #f1e8dd;
  border-radius: 5px;
  text-align: center;
`;

const ShoppingCart = (props) => {
  console.log("props from ShoppingCart", props);
  const getCartTotal = () => {
    return props.shoppingCart.reduce((acc, value) => {
      return acc + Number(value.price);
    }, 0);
  };
  useEffect(() => {}, [props.shoppingCart]);
  const { push } = useHistory();

  const handleClick = () => {
    props.checkoutCart();
    push(`/${props.id}/ownerProfile`);
  };
  return (
    <CartDiv>
      {props.shoppingCart.map((item) => (
        <ShoppingCartItem key={item.id} item={item} />
      ))}
      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <Button onClick={handleClick}>Checkout</Button>
      </div>
    </CartDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.ORS.ownerProfile.id,
    shoppingCart: state.ORS.shoppingCart,
  };
};

export default connect(mapStateToProps, { checkoutCart })(ShoppingCart);
