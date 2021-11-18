import {
  PAY_FAIL,
  PAY_REQUEST,
  PAY_RESET,
  PAY_SUCCESS,
} from "../Contants/payConstants";

export const payReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_REQUEST:
      return { loading: true };
    case PAY_SUCCESS:
      return { loading: false, success: true, message: action.payload };
    case PAY_FAIL:
      return { loading: false, message: action.payload, error: action.payload };
    case PAY_RESET:
      return {};
    default:
      return state;
  }
};
