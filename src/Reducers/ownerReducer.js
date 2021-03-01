import {
  USER_LOADING,
  USER_RETRIEVED,
  ERROR_LOADING_USER,
  USER_ITEMS_RETRIEVED,
  UPDATING_USER,
  UPDATED_USER,
} from "../actions/ownerActions";

import { ADD_ITEM } from "../actions/itemsActions";

const initialState = {
  owner_id: null,
  ownerProfile: {},
  error: "",
  isLoading: false,
  isEditing: false,
  itemsForSale: [], //REVIEW This is a stretch part
};

export const ownerReducer = (state = initialState, action) => {
  console.log("cd: OwnerReducer.js: action.payload: ", action.payload);
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_RETRIEVED:
      return {
        ...state,
        isLoading: false,
        ownerProfile: action.payload,
      };
    case USER_ITEMS_RETRIEVED:
      return {
        ...state,
        isLoading: false,
        itemsForSale: action.payload,
      };
    case ERROR_LOADING_USER:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATING_USER:
      return {
        ...state,
        isEditing: true,
      };
    case UPDATED_USER:
      return {
        ...state,
        ownerProfile: action.payload,
        isEditing: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        itemsForSale: [...state.itemsForSale, action.payload],
      };
    default:
      return state;
  }
};
