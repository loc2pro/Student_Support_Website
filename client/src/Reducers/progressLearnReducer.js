import {
  PROGRESS_LEARN_FAIL,
  PROGRESS_LEARN_REQUEST,
  PROGRESS_LEARN_RESET,
  PROGRESS_LEARN_SUCCESS,
} from "../Contants/progressConstants";

export const progressLearnReducer = (
  state = { loading: true, listprogress: {} },
  action
) => {
  switch (action.type) {
    case PROGRESS_LEARN_REQUEST:
      return { loading: true };
    case PROGRESS_LEARN_SUCCESS:
      return { loading: false, success: true, listprogress: action.payload };
    case PROGRESS_LEARN_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PROGRESS_LEARN_RESET:
      return {};
    default:
      return state;
  }
};
