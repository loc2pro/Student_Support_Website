import {
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../Contants/userConstants";

export const userSigninReducer = (
  state = { isAuthenticated: true },
  action
) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { payload: true, isAuthenticated: true };
    case USER_SIGNIN_SUCCESS:
      return {
        payload: false,
        isAuthenticated: true,
        userInfo: action.payload,
      };
    case USER_SIGNIN_FAIL:
      return { payload: false, isAuthenticated: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { loading: true };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const forgotPasswordReducer = (
  state = {  forgot: {} },
  action
) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { payload: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { loading: false, forgot: action.payload, success: true };
    case FORGOT_PASSWORD_FAIL:
      return { payload: false, error: action.payload, success: false };
    default:
      return state;
  }
};
