import { BACKDROP_SHOW, BACKDROP_HIDE } from "../types";
import axios from "axios";

export const showBackDrop = (history) => (dispatch) => {
  dispatch({ type: BACKDROP_SHOW });
};

export const hideBackDrop = (history) => (dispatch) => {
  dispatch({ type: BACKDROP_HIDE });
};
