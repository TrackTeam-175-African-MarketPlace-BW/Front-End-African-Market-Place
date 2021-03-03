import axiosWithAuth from "../utils/axiosWithAuth";
import { ADDING_ITEM } from "./itemsActions";
export const USER_LOADING = "USER_LOADING";
export const USER_RETRIEVED = "USER_RETRIEVED";
export const USER_ITEMS_RETRIEVED = "USER_ITEMS_RETRIEVED";
export const ERROR_LOADING_USER = "ERROR_LOADING_USER";
export const UPDATING_USER = "UPDATING_USER";
export const UPDATED_USER = "UPDATED_USER";
export const UPDATING_PASSWORD = "UPDATING_PASSWORD";
export const UPDATED_PASSWORD = "UPDATED_PASSWORD";
export const TOGGLE_UPDATE_USER = "TOGGLE_UPDATE_USER";
export const TOGGLE_UPDATE_PASSWORD = "TOGGLE_UPDATE_PASSWORD";
export const CANCEL_EDITING = "CANCEL_EDITING";
export const ERROR_UPDATING_PASSWORD = "ERROR_UPDATING_PASSWORD";
export const DELETE_USER_ITEM = "DELETE_USER_ITEM";

export const loadUser = (id) => {
  return (dispatch) => {
    dispatch({ type: USER_LOADING });
    axiosWithAuth()
      .get(`/users/${id}`)
      .then((response) => {
        dispatch({
          type: USER_RETRIEVED,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_LOADING_USER,
          payload: error.response.data.message,
        });
      });
  };
};

export const updatedUser = (id, updatedInfo) => {
  return (dispatch) => {
    axiosWithAuth()
      .put(`/users/${id}/profile`, updatedInfo)
      .then((response) => {
        console.log(
          "src: ownerActions.js, function: updatedUser success",
          response
        );
        dispatch({
          type: UPDATED_USER,
          payload: JSON.parse(response.config.data),
        });
      })
      .catch((error) => {
        console.log("updatedUser error", { error });
        dispatch({
          type: ERROR_LOADING_USER,
          payload: error.response.data.message,
        });
      });
  };
};

export const updatedPassword = (id, changedPassword) => {
  return (dispatch) => {
    axiosWithAuth()
      .put(`/users/${id}/password`, changedPassword)
      .then((response) => {
        console.log(
          "src: ownerActions.js, function: updatedPassword success",
          response
        );

        dispatch({
          type: UPDATED_PASSWORD,
          payload: JSON.parse(response.config.data),
        });
      })
      .catch((error) => {
        console.log("update password error", error.response.data.message);
        dispatch({
          type: ERROR_UPDATING_PASSWORD,
          payload: error.response.data.message,
        });

        // { error }
        // dispatch({
        //   type: ERROR_LOADING_USER,
        //   payload: error.response.data.message,
        // });
      });
  };
};

export const editingUser = () => {
  return (dispatch) => {
    dispatch({ type: UPDATING_USER });
  };
};

export const editingPassword = () => {
  return (dispatch) => {
    dispatch({ type: UPDATING_PASSWORD });
  };
};
export const addingItem = () => (dispatch) => {
  dispatch({type: ADDING_ITEM})
}

export const cancelEditing = () => {
  return (dispatch) => {
    dispatch({ type: CANCEL_EDITING });
  };
};

export const unmountUser = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_UPDATE_USER });
  };
};

export const unmountPasswordChange = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_UPDATE_PASSWORD });
  };
};

export const deleteUserItem = (id, itemId) => (dispatch) => {
  axiosWithAuth()
    .delete(`/users/${id}/items/${itemId}`)
    .then((res) => {
      console.log(
        "src: ownerActions.js: deleteUserItem: axios.delete response: ",
        res
      );
      dispatch({ type: DELETE_USER_ITEM, payload: itemId });
    });
};

export const loadUserItems = (id) => {
  return (dispatch) => {
    //dispatch({ type: USER_LOADING });
    axiosWithAuth()
      .get(`/users/${id}/items`)
      .then((response) => {
        dispatch({
          type: USER_ITEMS_RETRIEVED,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_LOADING_USER,
          payload: error.response.data.message,
        });
      });
  };
};
