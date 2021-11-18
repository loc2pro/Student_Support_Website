import {
  DETB_LIST_FAIL,
  DETB_LIST_REQUEST,
  DETB_LIST_SUCCESS,
  DETB_RESET,
} from "../Contants/detbConstants";

export const detbReducer = (
  state = { loading: true, detblist: [] },
  action
) => {
  switch (action.type) {
    case DETB_LIST_REQUEST:
      return { loading: true };
    case DETB_LIST_SUCCESS:
      return { loading: false, detblist: action.payload };
    case DETB_LIST_FAIL:
      return { loading: false, error: action.payload };
    case DETB_RESET:
      return {};
    default:
      return state;
  }
};
