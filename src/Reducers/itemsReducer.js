import {
  DATA_LOADING,
  DATA_RETRIEVED,
  ERROR_LOADING_DATA,
  CREATING_ITEM,
  CREATED_ITEM,
  UPDATING_ITEM,
  UPDATED_ITEM,
  REMOVING_ITEM,
  REMOVE_ITEM,
} from "../actions/itemsActions";

const initialState = {
  items: [],
  gettingItems: false,
  updatingItem: false,
  creatingItem: false,
  deletingItem: false,
  error: null,

};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        gettingItems: true,
      };
    case DATA_RETRIEVED:
      return {
        ...state,
        gettingItems: false,
        items: action.payload,
      };
    case UPDATING_ITEM:
      return {
        ...state,
        updatingItem: true,
      }
    case UPDATED_ITEM:
      return {
        ...state,
        item: action.payload,
        updatingItem: false,
      }
    case CREATING_ITEM:
      return {
        ...state,
        creatingItem: true,
      }
    case CREATED_ITEM:
      return {
        ...state,
        items: action.payload,
        creatingItem: false,
      }
    case REMOVING_ITEM:
      return {
        ...state,
        deletingItem: true,
      }
    case REMOVE_ITEM:
      return {
        ...state,
        items: action.payload,
        deletingItem: false,
      }
    case ERROR_LOADING_DATA:
      return {
        ...state,
        gettingItems: false,
        updatingItem: false,
        creatingItem: false,
        deletingItem: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
