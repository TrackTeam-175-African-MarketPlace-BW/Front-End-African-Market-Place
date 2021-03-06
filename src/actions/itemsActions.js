import axiosWithAuth from "../utils/axiosWithAuth";

export const DATA_LOADING = "DATA_LOADING";
export const DATA_RETRIEVED = "DATA_RETRIEVED";
export const ERROR_LOADING_DATA = "ERROR_LOADING_DATA";
export const TOGGLE_SHOW_UPDATE = "TOGGLE_SHOW_UPDATE"; // NOTE went to the singleItem Reducer
export const SINGLE_ITEM = "SINGLE_ITEM"; // NOTE went to the singleItem Reducer
export const CREATING_ITEM = "CREATING_ITEM";
export const CREATED_ITEM = "CREATED_ITEM";
export const UPDATING_ITEM = "UPDATING_ITEM";
export const UPDATED_ITEM = "UPDATED_ITEM";
export const REMOVING_ITEM = "REMOVING_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADDING_ITEM = "ADDING_ITEM";
export const ADDED_ITEM = "ADD_ITEM";
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export const getItems = () => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  setTimeout(() => {
    axiosWithAuth()
      .get("/items")
      .then((res) => {
        console.log("cd: itemsActions: getItems: axios.get response: ", res);
        dispatch({
          type: DATA_RETRIEVED,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(
          "cd: itemsAction: getItems: axios.get error: ",
          err.response
        );
        dispatch({
          type: ERROR_LOADING_DATA,
          payload: err.response.data.message,
        });
      });
  }, 1100);
};

export const showSingleItem = (itemId) => (dispatch) => {
  dispatch({ type: UPDATING_ITEM });
  axiosWithAuth()
    .get(`/items/:${itemId}`)
    .then((res) => {
      dispatch({
        type: UPDATED_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_LOADING_DATA,
        payload: err.response.data.message,
      });
    });
};

export const updatingTheItem = () => (dispatch) => {
  dispatch({ type: UPDATING_ITEM });
};

export const updateSingleItem = (id, itemId, item) => (dispatch) => {
  // dispatch({ type: UPDATING_ITEM });
  axiosWithAuth()
    .put(`users/${id}/items/${itemId}`, item)
    .then((res) => {
      console.log(
        "cd: itemsActions.js: updateSingleItem: axios.put response: ",
        res
      );
      dispatch({
        type: UPDATED_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("cd: ItemsAction.js: updateSingleItem: axios.get error: ", {
        err,
      });
      dispatch({
        type: ERROR_LOADING_DATA,
        payload: err.response.data.message,
      });
    });
};

export const addItemForSale = (id, item) => (dispatch) => {
  dispatch({ type: ADDING_ITEM });
  const sendItem = {
    category: item.category,
    country: item.country,
    description: item.description,
    market: item.market,
    name: item.name,
    price: item.price,
  };
  axiosWithAuth()
    .post(`/users/${id}/items`, sendItem)
    .then((res) => {
      console.log(
        "cd: itemsActions.js: addItemsForSale: axios.post response: ",
        res
      );
      dispatch({
        type: ADDED_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log({ err });
      dispatch({
        type: ERROR_LOADING_DATA,
        payload: err.response.data.message,
      });
    });
};

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_CART_ITEM,
    payload: item
  })
}

export const deleteFromCart = (itemId) => (dispatch) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: itemId,
  })
}

export const checkoutCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART
  })
  alert("Thank you for your purchase")
}