import {
  COURSES_LIST_FAIL,
  COURSES_LIST_REQUEST,
  COURSES_LIST_SUCCESS,
} from "../Contants/coursesConstants";

export const listCoursesReducer = (
  state = { loading: true, courses: [] },
  action
) => {
  switch (action.type) {
    case COURSES_LIST_REQUEST:
      return { loading: true };

    case COURSES_LIST_SUCCESS:
      return { loading: false, courses: action.payload };
    case COURSES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
