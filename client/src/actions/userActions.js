import Axios from "axios";
import {
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../Contants/userConstants";
import api from "../api/index"

export const signin = (mssv, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { mssv, password } });
  try {
    const { data } = await Axios.post(`${api}/auth/login`, {
      mssv,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/login";
};

export const detailsUser = (mssv) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: mssv });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      `${api}/student/getsciences/${mssv}`,
      {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      }
    );
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_FAIL, payload: message });
  }
};
export const updateUserProfile =
  (mssv, name, password, email, dateOfBirth, address) =>
  async (dispatch, getState) => {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
      payload: { mssv, name, password, email, dateOfBirth, address },
    });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `${api}/student/update`,
        { mssv, name, password, email, dateOfBirth, address },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
        // {
        //   headers: { Authorization: `Bearer ${userInfo.token}` },
        // }
      );
      dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST, payload: { email } });
  try {
    const { data } = await Axios.post(
      `${api}/student/sendmail`,
      { email }
    );
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
