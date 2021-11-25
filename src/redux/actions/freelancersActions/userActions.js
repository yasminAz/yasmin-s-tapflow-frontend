import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_USER,
} from "../../types";
import axios from "axios";
// import jwtDecode from "jwt-decode";

export const loginUser = (userData, history) => (dispatch) => {
  console.log(userData);
  console.log("userData");
  // dispatch({ type: LOADING_UI });
  // axios
  //   .post("/account/signin", userData)
  //   .then((res) => {
  //     const t = res.data.token;
  //     setAuthorizationHeader(t);

  //     const decodedToken = jwtDecode(t);
  //     dispatch({
  //       type: SET_USER,
  //       payload: decodedToken,
  //     });
  //     dispatch({ type: SET_AUTHENTICATED });
  //     dispatch({ type: CLEAR_ERRORS });
  //     history.push("/");
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: SET_ERRORS,
  //       payload: err.response.data,
  //     });
  //   });
};

export const signupUser = (newUserData, history) => (dispatch) => {
  console.log(newUserData);
  // dispatch({ type: LOADING_UI });
  // console.log(newUserData);

  // axios
  //   .post("/account/signup", newUserData)
  //   .then((res) => {
  //     setAuthorizationHeader(res.data.token);
  //     //dispatch(getUserData());
  //     dispatch({ type: CLEAR_ERRORS });
  //     history.push("/");
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: SET_ERRORS,
  //       payload: err.response.data,
  //     });
  //   });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = (token, id) => (dispatch) => {
  dispatch({ type: LOADING_USER });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios.get(`/api/getFreelancerInfo/${id}`, config).then((res) => {
    // console.log(res.data);
    dispatch({
      type: SET_USER,
      payload: res.data.data.user.data,
    });
  });
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
