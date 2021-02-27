import axiosWithAuth from "../utils/axiosWithAuth";

export const USER_LOADING = "USER_LOADING";
export const USER_RETRIEVED = "USER_RETRIEVED";
export const ERROR_LOADING_USER = "ERROR_LOADING_USER";

export const loadUser = (id) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  axiosWithAuth()
    .get(`/users/${id}`)
    .then((response) => {
      console.log("sc: ownerActions: loadUser: axios.get response: ", response);
      dispatch({
        type: USER_RETRIEVED,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(
        "sc: ownerActions: loadUser: axios.get error: ",
        error.response
      );
      dispatch({
        type: ERROR_LOADING_USER,
        payload: error.response.data.message,
      });
    });
};
