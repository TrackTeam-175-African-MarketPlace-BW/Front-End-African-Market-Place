import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ShoppingCartItem from './ShoppingCartItem';


const CartDiv = styled.div`
  display: block;
  margin: 0 auto;
  width: 1000px;
  background: white;
  border-radius: 5px;

  &__title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0;
  }

  &_item {
    display: flex;
    order: -2;
    padding: 30px 0 0 30px;

    img {
      width: 100px;
    }

    h1,
    p {
      padding: 2px 0;
      margin: 0 20px;
    }

    p {
      font-weight: bold;
    }

    button {
      border-radius: 5px;
      border: 1px solid lightcoral;
      padding: 10px;
      background: transparent;
      transition: 0.15s ease-in-out;
      margin: 10px 0;
      color: lightcoral;
      margin-left: 22px;

      &:hover {
        cursor: pointer;
        background: lightcoral;
        color: white;
      }
    }
  }

  &__checkout {
    margin: 30px 0;
    border-top: 1px solid lightgray;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #141618;
    color: white;

    button {
      border: 1px solid white;
      background: transparent;
      border-radius: 5px;
      padding: 10px;
      color: white;

      &:hover {
        background: black;
        color: white;
      }
    }
  }
`;

const ShoppingCart = (props) => {
  console.log("props from ShoppingCart", props)  
  const getCartTotal = () => {
    return props.cart.reduce((acc, value) => {
        return acc + value.price;
      }, 0);
  };

  return (
    <CartDiv>
      [{props.cart.map((item) => (
        <ShoppingCartItem key={item.id} {...item} />
      ))}
      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
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
