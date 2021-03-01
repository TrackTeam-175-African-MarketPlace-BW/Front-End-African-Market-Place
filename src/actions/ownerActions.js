import axiosWithAuth from "../utils/axiosWithAuth";
export const USER_LOADING = "USER_LOADING";
export const USER_RETRIEVED = "USER_RETRIEVED";
export const USER_ITEMS_RETRIEVED = "USER_ITEMS_RETRIEVED";
export const ERROR_LOADING_USER = "ERROR_LOADING_USER";
export const UPDATING_USER = "UPDATING_USER";
export const UPDATED_USER = "UPDATED_USER";

export const loadUser = (id) => {
  return (dispatch) => {
    // console.log("ID HERE: ", id);
    dispatch({ type: USER_LOADING });
    axiosWithAuth()
      .get(`/users/${id}`)
      .then((response) => {
        // console.log(
        //   "sc: ownerActions: loadUser: axios.get response: ",
        //   response
        // );
        dispatch({
          type: USER_RETRIEVED,
          payload: response.data,
        });
      })
      .catch((error) => {
        // console.log(
        //   "sc: ownerActions: loadUser: axios.get error: ",
        //   error.response
        // );
        dispatch({
          type: ERROR_LOADING_USER,
          payload: error.response.data.message,
        });
      });
  };
};

export const editingUser = () => {
  return (dispatch) => {
    dispatch({ type: UPDATING_USER });
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
        console.log("updatedUser error", {error});
        dispatch({
          type: ERROR_LOADING_USER,
          payload: error.response.data.message,
        });
      });
  };
};

export const loadUserItems = (id) => {
  return (dispatch) => {
    //dispatch({ type: USER_LOADING });
    axiosWithAuth()
      .get(`/users/${id}/items`)
      .then((response) => {
        // console.log(
        //   "sc: ownerActions: loadUser: axios.get response: ",
        //   response
        // );
        dispatch({
          type: USER_ITEMS_RETRIEVED,
          payload: response.data,
        });
      })
      .catch((error) => {
        // console.log(
        //   "sc: ownerActions: loadUser: axios.get error: ",
        //   error.response
        // );
        dispatch({
          type: ERROR_LOADING_USER,
          payload: error.response.data.message,
        });
      });
  };
};
