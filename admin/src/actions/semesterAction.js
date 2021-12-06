import axios from "axios";
import api from "../api";
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
  UPDATE_SEMESTER_FAIL,
  UPDATE_SEMESTER_REQUEST,
  UPDATE_SEMESTER_SUCCESS,
} from "../contants/semesterContant";

export const getListSemester = () => async (dispatch) => {
  dispatch({ type: GET_LIST_SEMESTER_REQUEST });
  try {
    const { data } = await axios.get(`${api}/semester/list`);
    if (data.success) {
      dispatch({ type: GET_LIST_SEMESTER_SUCCESS, payload: data.semester });
    } else {
      dispatch({ type: GET_LIST_SEMESTER_FAIL, payload: data.message });
    }
    return data;
  } catch (error) {
    dispatch({ type: GET_LIST_SEMESTER_FAIL, payload: error.message });
    return { success: false, message: error.message };
  }
};

export const createSemester = (newSemester) => async (dispatch) => {
  dispatch({ type: CREATE_SEMESTER_REQUEST });
  try {
    const { data } = await axios.post(`${api}/Semester/create`, newSemester);
    if (data.success) {
      dispatch({ type: CREATE_SEMESTER_SUCCESS, payload: data.result });
    } else {
      dispatch({ type: CREATE_SEMESTER_FAIL, payload: data.message });
    }
    return data;
  } catch (error) {
    dispatch({ type: CREATE_SEMESTER_FAIL, payload: error.message });
    return { success: false, message: error.message };
  }
};

export const updateSemester = (newSemester) => async (dispatch) => {
  dispatch({ type: UPDATE_SEMESTER_REQUEST });
  try {
    const { data } = await axios.post(`${api}/Semester/update`, newSemester);
    if (data.success) {
      dispatch({ type: UPDATE_SEMESTER_SUCCESS, payload: data.semester });
    } else {
      dispatch({ type: UPDATE_SEMESTER_FAIL, payload: data.message });
    }
    return data;
  } catch (error) {
    dispatch({ type: UPDATE_SEMESTER_FAIL, payload: error.message });
    return { success: false, message: error.message };
  }
};

export const deleteSemester = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SEMESTER_REQUEST });
  try {
    const { data } = await axios.get(`${api}/Semester/delete/${id}`);
    if (data.success) {
      console.log("data delte", data);
      dispatch({ type: DELETE_SEMESTER_SUCCESS, payload: data.result });
    } else {
      dispatch({ type: DELETE_SEMESTER_FAIL, payload: data.message });
    }
    return data;
  } catch (error) {
    dispatch({ type: DELETE_SEMESTER_FAIL, payload: error.message });
    return { success: false, message: error.message };
  }
};
