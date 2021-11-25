import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  REMOVE_LOADING,
  LOADING_USER,
} from "../../types";
import axios from "axios";

export const logoutUser = (token, id) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const formData = new FormData();
  formData.append("user_id", id);

  axios.get("/sanctum/csrf-cookie").then((response) => {
    axios.post("/api/Logout", formData, config).then((response) => {
      dispatch({ type: SET_UNAUTHENTICATED });
    });
  });
};

export const getUserData = (token, id, type) => (dispatch, getState) => {
  dispatch({ type: LOADING_UI });
  console.log("dispatch 1 ");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (type === 1) {
    axios.get(`/api/getFreelancerInfo/${id}`, config).then((res) => {
      console.log(res);
      dispatch({
        type: SET_USER,
        payload: res.data.data,
      });

      dispatch({ type: REMOVE_LOADING });
      console.log(getState());
    });
  } else if (type === 2) {
    console.log("Client!");
    axios.get(`/api/getClientInfo/${id}`, config).then((res) => {
      console.log("Client data from the redux actions", res);
      dispatch({
        type: SET_USER,
        payload: res.data.data,
      });
      console.log("dispatch 2 ");
      dispatch({ type: REMOVE_LOADING });
      console.log("dispatch 3 ");
      console.log(getState());
    });
  }
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
