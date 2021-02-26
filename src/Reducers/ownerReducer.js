const initialState = {
  name: "",
  password: "",
  email: "",
  country_id: '',
  user_photo: "", // REVIEW this is a stretch
  user_info: '',
  error: "",
  isLoading: false,
  isEditing: false,
  itemsForSale: [],  //REVIEW This is a stretch part
};

export const ownerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
