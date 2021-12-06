import {
  CREATE_COURSES_FAIL,
  CREATE_COURSES_SUCCESS,
  DELETE_COURSES_FAIL,
  DELETE_COURSES_REQUEST,
  DELETE_COURSES_SUCCESS,
  GET_COURSES,
  GET_COURSES_FAIL,
  GET_COURSES_REQUEST,
  GET_COURSES_SEMESTER,
  GET_COURSES_SUCCESS,
  INIT_STATE_COURSES,
  UPDATE_COURSES_FAIL,
  UPDATE_COURSES_REQUEST,
  UPDATE_COURSES_SUCCESS,
} from "../contants/coursesContant";
import { CREATE_MAJOR_REQUEST } from "../contants/MajorContant";

export const CoursesReducer = (state = INIT_STATE_COURSES, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES_REQUEST:
      return { ...state, isLoading: true };
    case GET_COURSES_SUCCESS:
      return { ...state, isLoading: false, courses: payload };
    case GET_COURSES_FAIL:
      return { ...state, isLoading: false };
    case GET_COURSES:
      return {
        ...state,
        isLoading: false,
        course: payload,
      };

    case GET_COURSES_SEMESTER:
      return {
        ...state,
        isLoading: false,
        semester: payload,
      };

    case CREATE_MAJOR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courses: [...state.courses, payload],
      };
    case CREATE_COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courses: state.courses.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case UPDATE_COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courses: state.courses.filter((item) => item.id !== state.course.id),
      };
    case DELETE_COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
