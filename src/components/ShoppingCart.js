import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ShoppingCartItem from './ShoppingCartItem';

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
  console.log("props from ShoppingCart", props)  
  const getCartTotal = () => {
    return props.cart.reduce((acc, value) => {
        return acc + Number(value.price);
      }, 0);
  };

  return (
    <CartDiv>
      {props.cart.map((item) => (
        <ShoppingCartItem key={item.id} item={item} />
      ))}
      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <Button>Checkout</Button>
      </div>
    </CartDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.SCR.cart,
  };
};

export default connect(mapStateToProps, {})(ShoppingCart);
