import {
  USER_LOADING,
  USER_RETRIEVED,
  ERROR_LOADING_USER,
  USER_ITEMS_RETRIEVED,
  UPDATING_USER,
  UPDATED_USER,
} from "../actions/ownerActions";

const initialState = {
  owner_id: null,
  ownerProfile: {},
  error: "",
  isLoading: false,
  isEditing: false,
  itemsForSale: [], //REVIEW This is a stretch part
};

export const ownerReducer = (state = initialState, action) => {
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
        item: action.payload,
        isEditing: false,
      };

    default:
      return state;
  }
};
