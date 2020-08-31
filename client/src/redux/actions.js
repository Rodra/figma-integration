import { SET_ERROR, SET_IS_LOADING, SET_ALERT } from "./types";

export const setAlert = (alert) => {
  return (dispatch) => {
    dispatch({
      type: SET_ALERT,
      payload: alert,
    });
  };
};

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});
