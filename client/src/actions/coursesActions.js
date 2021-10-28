import Axios from "axios";
import {
  COURSES_DETAILS_FAIL,
  COURSES_DETAILS_REQUEST,
  COURSES_DETAILS_SUCCESS,
  COURSES_LIST_FAIL,
  COURSES_LIST_REQUEST,
  COURSES_LIST_SUCCESS,
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
      `http://localhost:5000/course/${coursesId}`
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
