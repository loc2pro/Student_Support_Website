import axios from "axios";
import api from "../api";
import {
  CREATE_COURSES_FAIL,
  CREATE_COURSES_REQUEST,
  CREATE_COURSES_SUCCESS,
  DELETE_COURSES_FAIL,
  DELETE_COURSES_REQUEST,
  DELETE_COURSES_SUCCESS,
  GET_COURSES_FAIL,
  GET_COURSES_REQUEST,
  GET_COURSES_SEMESTER,
  GET_COURSES_SUCCESS,
  GET_LIST_COURSES_FAIL,
  GET_LIST_COURSES_REQUEST,
  GET_LIST_COURSES_SUCCESS,
  UPDATE_COURSES_FAIL,
  UPDATE_COURSES_REQUEST,
  UPDATE_COURSES_SUCCESS,
} from "../contants/coursesContant";

export const getListCourses = () => async (dispatch) => {
  dispatch({ type: GET_COURSES_REQUEST });
  try {
    const { data } = await axios.get(`${api}/course`);
    if (data.success) {
      dispatch({ type: GET_COURSES_SUCCESS, payload: data.courses });
    } else {
      dispatch({ type: GET_COURSES_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: GET_COURSES_FAIL });
    return { success: false, message: error.message };
  }
};

export const getListCoursesBySemester = (semester) => async (dispatch) => {
  dispatch({ type: GET_LIST_COURSES_REQUEST });
  dispatch({ type: GET_COURSES_SEMESTER, payload: semester });
  try {
    const { data } = await axios.get(`${api}/course/${semester.id}`);
    if (data.success) {
      dispatch({ type: GET_LIST_COURSES_SUCCESS, payload: data.Courses });
    } else {
      dispatch({ type: GET_LIST_COURSES_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: GET_LIST_COURSES_FAIL });
    return { success: false, message: error.message };
  }
};

export const createCourses = (newCourses) => async (dispatch) => {
  dispatch({ type: CREATE_COURSES_REQUEST });
  try {
    const { data } = await axios.post(`${api}/course/create`, newCourses);
    console.log(data);
    if (data.success) {
      dispatch({ type: CREATE_COURSES_SUCCESS, payload: data.newcourse });
    } else {
      dispatch({ type: CREATE_COURSES_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: CREATE_COURSES_FAIL });
    return { success: false, message: error.message };
  }
};

export const updateCourses = (newCourses) => async (dispatch) => {
  dispatch({ type: UPDATE_COURSES_REQUEST });
  try {
    const { data } = await axios.post(`${api}/course/update`, newCourses);
    if (data.success) {
      dispatch({ type: UPDATE_COURSES_SUCCESS, payload: data.course });
    } else {
      dispatch({ type: UPDATE_COURSES_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: UPDATE_COURSES_FAIL });
    return { success: false, message: error.message };
  }
};

export const deleteCourses = (id) => async (dispatch) => {
  dispatch({ type: DELETE_COURSES_REQUEST });
  try {
    const { data } = await axios.get(`${api}/course/delete/${id}`);
    if (data.success) {
      dispatch({ type: DELETE_COURSES_SUCCESS, payload: data.id });
    } else {
      dispatch({ type: DELETE_COURSES_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: DELETE_COURSES_FAIL });
    return { success: false, message: error.message };
  }
};
