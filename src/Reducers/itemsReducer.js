const initialState = {
  id: "",
  name: "",
  category: "",
  marketLocation: "",
  price: "",
  description: "",
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
