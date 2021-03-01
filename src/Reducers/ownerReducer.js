import {
  USER_LOADING,
  USER_RETRIEVED,
  ERROR_LOADING_USER,
  USER_ITEMS_RETRIEVED,
  UPDATING_USER,
  UPDATED_USER,
  UPDATING_PASSWORD,
  UPDATED_PASSWORD,
  TOGGLE_UPDATE_USER,
  TOGGLE_UPDATE_PASSWORD,
} from "../actions/ownerActions";

import { ADD_ITEM } from "../actions/itemsActions";

const initialState = {
  owner_id: null,
  ownerProfile: {},
  error: "",
  isLoading: false,
  isEditingUser: false,
  isEditingPassword: false,
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
      console.log("USER_RETRIEVED", action.payload);
      return {
        ...state,
        isLoading: false,
        ownerProfile: action.payload,
        owner_id: action.payload.id,
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
        isEditingUser: true,
      };

    case TOGGLE_UPDATE_USER:
      return {
        ...state,
        isEditingUser: false,
      };
    case UPDATED_USER:
      console.log("UPDATED_USER", action.payload);
      return {
        ...state,
        ownerProfile: action.payload,
        isEditingUser: false,
      };
    case UPDATING_PASSWORD:
      return {
        ...state,
        isEditingPassword: true,
      };
    case UPDATED_PASSWORD:
      console.log("UPDATED_PASSWORD", action.payload);
      return {
        ...state,
        ownerProfile: action.payload,
        isEditingPassword: false,
      };
    case TOGGLE_UPDATE_PASSWORD:
      return {
        ...state,
        isEditingPassword: false,
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
