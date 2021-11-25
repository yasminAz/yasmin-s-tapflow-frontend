import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  REMOVE_LOADING,
  BACKDROP_SHOW,
  BACKDROP_HIDE,
} from "../types";

const initialState = {
  loading: false,
  backdrop: false,
  errors: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case BACKDROP_SHOW:
      return {
        ...state,
        backdrop: true,
      };
    case BACKDROP_HIDE:
      return {
        ...state,
        backdrop: false,
      };
    default:
      return state;
  }
}
