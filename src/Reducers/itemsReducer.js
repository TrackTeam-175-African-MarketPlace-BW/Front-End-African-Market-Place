const initialState = {
  name: "",
  market_id: "",
  description: "",
  category: "",
  user_id: "",
  category_id: "",
  price: "",
  error: "",
  isLoading: false,
  isEditing: false,
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
