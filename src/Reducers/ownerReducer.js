import {
  USER_LOADING,
  USER_RETRIEVED,
  ERROR_LOADING_USER,
} from "../actions/ownerActions";

const initialState = {
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
    case ERROR_LOADING_USER:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
