import Axios from "axios";
import {
  CLASS_COURSES_FAIL,
  CLASS_COURSES_REQUEST,
  CLASS_COURSES_SUCCESS,
  CLASS_DETAILS_FAIL,
  CLASS_DETAILS_REQUEST,
  CLASS_DETAILS_SUCCESS,
  COURSES_DETAILS_FAIL,
  COURSES_DETAILS_REQUEST,
  COURSES_DETAILS_SUCCESS,
  COURSES_LIST_FAIL,
  COURSES_LIST_REQUEST,
  COURSES_LIST_SUCCESS,
  DELETE_REGISTER_COURSES_FAIL,
  DELETE_REGISTER_COURSES_REQUEST,
  DELETE_REGISTER_COURSES_SUCCESS,
  REGISTER_CLASS_DETAILS_FAIL,
  REGISTER_CLASS_DETAILS_REQUEST,
  REGISTER_CLASS_DETAILS_SUCCESS,
  REGISTER_COURSES_FAIL,
  REGISTER_COURSES_REQUEST,
  REGISTER_COURSES_SUCCESS,
} from "../Contants/coursesConstants";

export const listCourses = (semesterId) => async (dispatch) => {
  dispatch({
    type: COURSES_LIST_REQUEST,
    payload: semesterId,
  });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/semester/${semesterId}`
    );
    dispatch({ type: COURSES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COURSES_LIST_FAIL, payload: error.message });
  }
};

export const detailsCourses = (coursesId) => async (dispatch) => {
  dispatch({ type: COURSES_DETAILS_REQUEST, payload: coursesId });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/course/get/${coursesId}`
    );
    dispatch({ type: COURSES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COURSES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const classCoursess = (classcourseId) => async (dispatch) => {
  dispatch({ type: CLASS_COURSES_REQUEST, payload: classcourseId });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/course/${classcourseId}`
    );
    dispatch({ type: CLASS_COURSES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CLASS_COURSES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const classDetails = (coursesId) => async (dispatch) => {
  dispatch({ type: CLASS_DETAILS_REQUEST, payload: coursesId });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/classcourse/${coursesId}`
    );
    dispatch({ type: CLASS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CLASS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const classRegisterDetails = (coursesId) => async (dispatch) => {
  dispatch({ type: REGISTER_CLASS_DETAILS_REQUEST, payload: coursesId });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/classcourse/${coursesId}`
    );
    dispatch({ type: REGISTER_CLASS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_CLASS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerCourses =
  (CourseId, SemesterId, StudentId, ClassCourseId) => async (dispatch) => {
    dispatch({
      type: REGISTER_COURSES_REQUEST,
      payload: { CourseId, SemesterId, StudentId, ClassCourseId },
    });
    try {
      const { data } = await Axios.post(
        `http://localhost:5000/registercourse/dangkyhocphan`,
        { CourseId, SemesterId, StudentId, ClassCourseId }
      );
      dispatch({
        type: REGISTER_COURSES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_COURSES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteRegisterCourses =
  (CourseId, SemesterId, StudentId) => async (dispatch) => {
    dispatch({
      type: DELETE_REGISTER_COURSES_REQUEST,
      payload: { CourseId, SemesterId, StudentId },
    });
    try {
      const { data } = await Axios.post(
        `http://localhost:5000/registercourse/delete`,
        { CourseId, SemesterId, StudentId }
      );
      dispatch({
        type: DELETE_REGISTER_COURSES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_REGISTER_COURSES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
