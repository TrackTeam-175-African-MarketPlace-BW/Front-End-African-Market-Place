import axiosWithAuth from "../utils/axiosWithAuth";
// import { useHistory, useParams } from "react-router-dom";

// const { push } = useHistory();
// const { id } = useParams();

export const DATA_LOADING = "DATA_LOADING";
export const DATA_RETRIEVED = "DATA_RETRIEVED";
export const ERROR_LOADING_DATA = "ERROR_LOADING_DATA";
export const TOGGLE_SHOW_UPDATE = 'TOGGLE_SHOW_UPDATE'; // NOTE went to the singleItem Reducer
export const SINGLE_ITEM = "SINGLE_ITEM"; // NOTE went to the singleItem Reducer
export const CREATING_ITEM = 'CREATING_ITEM';
export const CREATED_ITEM = 'CREATED_ITEM';
export const UPDATING_ITEM = "UPDATING_ITEM";
export const UPDATED_ITEM = "UPDATED_ITEM";
export const REMOVING_ITEM = "REMOVING_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const getItems = () => (dispatch) => {
  dispatch({ type: DATA_LOADING });
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
      console.log("cd: itemsAction: getItems: axios.get error: ", err.response);
      dispatch({
        type: ERROR_LOADING_DATA,
        payload: err.response.data.message,
      });
    });
};

export const showSingleItem = (itemId) => (dispatch) => {
  dispatch({ type: UPDATING_ITEM })
  axiosWithAuth()
    .get(`/items/:${itemId}`)
    .then((res) => {
      dispatch({
        type: UPDATED_ITEM,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: ERROR_LOADING_DATA,
        payload: err.response.data.message,
      })
    })
};

const deleteItem = (itemId) => (dispatch) => {
  dispatch({ type: REMOVING_ITEM })
  axiosWithAuth()
  .delete(`/`)
}