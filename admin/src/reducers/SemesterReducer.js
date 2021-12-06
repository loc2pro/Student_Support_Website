import {
  CREATE_SEMESTER_FAIL,
  CREATE_SEMESTER_REQUEST,
  CREATE_SEMESTER_SUCCESS,
  DELETE_SEMESTER_FAIL,
  DELETE_SEMESTER_REQUEST,
  DELETE_SEMESTER_SUCCESS,
  GET_LIST_SEMESTER_FAIL,
  GET_LIST_SEMESTER_REQUEST,
  GET_LIST_SEMESTER_SUCCESS,
  GET_SEMESTER,
  INIT_STATE_SEMESTER,
  UPDATE_SEMESTER_FAIL,
  UPDATE_SEMESTER_REQUEST,
  UPDATE_SEMESTER_SUCCESS,
} from "../contants/semesterContant";

export const SemesterReducer = (state = INIT_STATE_SEMESTER, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_SEMESTER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_LIST_SEMESTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        semesters: payload,
        error: null,
      };
    case GET_LIST_SEMESTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_SEMESTER:
      return {
        ...state,
        isLoading: false,
        error: null,
        semester: payload,
      };
    case CREATE_SEMESTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CREATE_SEMESTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        semesters: [...state.semesters, payload],
        error: null,
      };
    case CREATE_SEMESTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case UPDATE_SEMESTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPDATE_SEMESTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        semesters: state.semesters.map((item) =>
          item.id === payload.id ? payload : item
        ),
        error: null,
      };
    case UPDATE_SEMESTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case DELETE_SEMESTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case DELETE_SEMESTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        semesters: state.semesters.filter(
          (item) => item.id !== state.semester.id
        ),
        semester: null,
      };
    case DELETE_SEMESTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
