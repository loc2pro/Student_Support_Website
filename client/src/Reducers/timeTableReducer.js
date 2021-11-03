import {
  TIMETABLE_LIST_FAIL,
  TIMETABLE_LIST_REQUEST,
  TIMETABLE_LIST_SUCCESS,
  TIMETABLE_RESET,
} from "../Contants/timeTableConstants";

export const timeTableReducer = (
  state = { loading: true, timeTable: [] },
  action
) => {
  switch (action.type) {
    case TIMETABLE_LIST_REQUEST:
      return { loading: true };
    case TIMETABLE_LIST_SUCCESS:
      return { loading: false, timeTable: action.payload };
    case TIMETABLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case TIMETABLE_RESET:
      return {};
    default:
      return state;
  }
};
