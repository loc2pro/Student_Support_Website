import Axios from "axios";
import {
  COURSES_LIST_FAIL,
  COURSES_LIST_REQUEST,
  COURSES_LIST_SUCCESS,
} from "../Contants/coursesConstants";

export const listCourses = () => async (dispatch) => {
  dispatch({
    type: COURSES_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("http://localhost:5000/course");
    dispatch({ type: COURSES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COURSES_LIST_FAIL, payload: error.message });
  }
};
