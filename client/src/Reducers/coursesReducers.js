import {
  CLASS_COURSES_FAIL,
  CLASS_COURSES_REQUEST,
  CLASS_COURSES_RESET,
  CLASS_COURSES_SUCCESS,
  CLASS_DETAILS_FAIL,
  CLASS_DETAILS_REQUEST,
  CLASS_DETAILS_RESET,
  CLASS_DETAILS_SUCCESS,
  COURSES_DETAILS_FAIL,
  COURSES_DETAILS_REQUEST,
  COURSES_DETAILS_RESET,
  COURSES_DETAILS_SUCCESS,
  COURSES_LIST_FAIL,
  COURSES_LIST_REQUEST,
  COURSES_LIST_RESET,
  COURSES_LIST_SUCCESS,
  REGISTER_COURSES_FAIL,
  REGISTER_COURSES_REQUEST,
  REGISTER_COURSES_SUCCESS,
  REGISTER_COURSES_RESET,
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

export const coursesDetailsReducer = (
  state = { loading: true, course: {} },
  action
) => {
  switch (action.type) {
    case COURSES_DETAILS_REQUEST:
      return { loading: true };
    case COURSES_DETAILS_SUCCESS:
      return { loading: false, course: action.payload };
    case COURSES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case COURSES_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const coursesClassReducer = (
  state = { loading: true, lop: [] },
  action
) => {
  switch (action.type) {
    case CLASS_COURSES_REQUEST:
      return { loading: true };
    case CLASS_COURSES_SUCCESS:
      return { loading: false, lop: action.payload };
    case CLASS_COURSES_FAIL:
      return { loading: false, error: action.payload };
    case CLASS_COURSES_RESET:
      return {};
    default:
      return state;
  }
};

export const classDetailsReducer = (
  state = { loading: true, classdetail: [] },
  action
) => {
  switch (action.type) {
    case CLASS_DETAILS_REQUEST:
      return { loading: true };
    case CLASS_DETAILS_SUCCESS:
      return { loading: false, classdetail: action.payload };
    case CLASS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CLASS_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const registerCoursesReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case REGISTER_COURSES_REQUEST:
      return { loading: true };
    case REGISTER_COURSES_SUCCESS:
      return {
        loading: false,
        success: true,
        registerCoursess: action.payload,
      };
    case REGISTER_COURSES_FAIL:
      return {
        loading: false,
        success: false,
        registerCoursess: action.payload,
        error: action.payload,
      };
    case REGISTER_COURSES_RESET:
      return {};
    default:
      return state;
  }
};
