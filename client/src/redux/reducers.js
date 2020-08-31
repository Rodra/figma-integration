import { combineReducers } from "redux";

import { SET_ERROR, SET_IS_LOADING, SET_ALERT } from "./types";

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  alert: null,
};

const rootReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case SET_ALERT: {
      return {
        ...state,
        alert: payload,
      };
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  root: rootReducer,
});

export default reducers;
