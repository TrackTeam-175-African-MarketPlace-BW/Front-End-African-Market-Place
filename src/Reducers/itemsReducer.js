import {
  ITEMS_LOADING,
  ITEMS_RETRIEVED,
  ERROR_LOADING_ITEMS,
  UPDATING_ITEM,
  UPDATED_ITEM,
  REMOVE_ITEM,
} from "../actions/itemsActions";

const initialState = {
  // name: "",
  // market_id: "",
  // description: "",
  // category: "",
  // user_id: "",
  // category_id: "",
  // price: "",
  items: [],
  error: "",
  isLoading: false,
  isEditing: false,
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ITEMS_RETRIEVED:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    case ERROR_LOADING_ITEMS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
