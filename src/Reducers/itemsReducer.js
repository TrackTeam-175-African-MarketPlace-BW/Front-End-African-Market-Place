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
      console.log("DATA_RETRIEVED", action.payload);
      return {
        ...state,
        gettingItems: false,
        items: action.payload,
      };
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
