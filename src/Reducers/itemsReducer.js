import {
  DATA_LOADING,
  DATA_RETRIEVED,
  ERROR_LOADING_DATA,
} from "../actions/itemsActions";

const initialState = {
  items: [],
  gettingItems: false,
  // updatingItem: false,
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
    case ERROR_LOADING_DATA:
      return {
        ...state,
        gettingItems: false,
        // updatingItem: false,
        creatingItem: false,
        deletingItem: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
