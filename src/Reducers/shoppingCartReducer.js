import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../actions/itemsActions";

const initialState = {
  cart: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
          ...state,
          cart: [...state.cart, action.payload]
          };
      case REMOVE_CART_ITEM:
          return {
              ...state,
              cart: [...state.cart.filter((item) => item.id !== action.payload.id)]
          }
    default:
      return state;
  }
};
