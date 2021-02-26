import axiosWithAuth from "../utils/axiosWithAuth";
// import { useHistory, useParams } from "react-router-dom";

// const { push } = useHistory();
// const { id } = useParams();

export const ITEMS_LOADING = "ITEMS_LOADING";
export const ITEMS_RETRIEVED = "ITEMS_RETRIEVED";
export const ERROR_LOADING_ITEMS = "ERROR_LOADING_ITEMS";
export const UPDATING_ITEM = "UPDATING_ITEM";
export const UPDATED_ITEM = "UPDATED_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const getItems = () => (dispatch) => {
  dispatch({ type: ITEMS_LOADING });
  axiosWithAuth()
    .get("/items")
    .then((res) => {
      console.log("cd: itemsActions: getItems: axios.get response: ", res);
      dispatch({
        type: ITEMS_RETRIEVED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("cd: itemsAction: getItems: axios.get error: ", err.response);
      dispatch({
        type: ERROR_LOADING_ITEMS,
        payload: err.response.data.message,
      });
    });
};
