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
  CANCEL_EDITING,
  ERROR_UPDATING_PASSWORD,
  DELETE_USER_ITEM,
} from "../actions/ownerActions";
import {
  UPDATING_ITEM,
  UPDATED_ITEM,
  ADDING_ITEM,
  ADDED_ITEM,
} from "../actions/itemsActions";

const initialState = {
  owner_id: null,
  ownerProfile: {},
  error: "",
  isLoading: false,
  isEditingUser: false,
  isEditingPassword: false,
  updatingItem: false,
  addingItem: false,
  itemsForSale: [],
};

export const ownerReducer = (state = initialState, action) => {
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
        isEditingPassword: false,
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
        isEditingPassword: false,
      };
    case UPDATING_PASSWORD:
      return {
        ...state,
        isEditingPassword: true,
        isEditingUser: false,
      };
    case UPDATED_PASSWORD:
      console.log("UPDATED_PASSWORD", action.payload);
      return {
        ...state,
        ownerProfile: action.payload,
        isEditingPassword: false,
        isEditingUser: false,
      };
    case TOGGLE_UPDATE_PASSWORD:
      return {
        ...state,
        isEditingPassword: false,
      };
    case ERROR_UPDATING_PASSWORD:
      return {
        ...state,
        isEditingPassword: true,
        isEditingUser: false,
        error: action.payload,
      };
    case CANCEL_EDITING:
      return {
        ...state,
        isEditingPassword: false,
        isEditingUser: false,
        updatingItem: false,
      };
    case DELETE_USER_ITEM:
      return {
        ...state,
        itemsForSale: state.itemsForSale.filter(
          (item) => item.id !== action.payload
        ),
      };
    case UPDATING_ITEM:
      return {
        ...state,
        updatingItem: true,
      };
    case UPDATED_ITEM:
      return {
        ...state,
        itemsForSale: [
          ...state.itemsForSale.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
        updatingItem: false,
      };
    case ADDING_ITEM:
      return {
        ...state,
        addingItem: true,
      };
    case ADDED_ITEM:
      return {
        ...state,
        addingItem: false,
        itemsForSale: [...state.itemsForSale, action.payload],
      };
    default:
      return state;
  }
};
