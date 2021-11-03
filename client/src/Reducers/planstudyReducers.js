import {
  PLANSTUDY_LIST_FAIL,
  PLANSTUDY_LIST_REQUEST,
  PLANSTUDY_LIST_SUCCESS,
  PLAN_STUDY_RESET,
} from "../Contants/planstudyConstants";

export const listPlanstudyReducer = (
  state = { loading: true, semester: [] },
  action
) => {
  switch (action.type) {
    case PLANSTUDY_LIST_REQUEST:
      return { loading: true };
    case PLANSTUDY_LIST_SUCCESS:
      return { loading: false, semester: action.payload };
    case PLANSTUDY_LIST_FAIL:
      return { loading: false, error: action.payload };
    case PLAN_STUDY_RESET:
      return {};
    default:
      return state;
  }
};
