import {
  LIST_RESULT_FAIL,
  LIST_RESULT_REQUEST,
  LIST_RESULT_RESET,
  LIST_RESULT_SUCCESS,
} from "../Contants/resultConstants";

export const resultReducer = (
  state = { loading: true, listresult: [] },
  action
) => {
  switch (action.type) {
    case LIST_RESULT_REQUEST:
      return { loading: true };
    case LIST_RESULT_SUCCESS:
      return { loading: false, listresult: action.payload };
    case LIST_RESULT_FAIL:
      return { loading: false, error: action.payload };
    case LIST_RESULT_RESET:
      return {};
    default:
      return state;
  }
};
