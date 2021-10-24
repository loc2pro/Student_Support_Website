import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../Contants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { payload: true };
    case USER_SIGNIN_SUCCESS:
      return { payload: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { payload: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
