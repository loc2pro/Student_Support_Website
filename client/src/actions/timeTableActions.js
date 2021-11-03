import {
  TIMETABLE_LIST_FAIL,
  TIMETABLE_LIST_REQUEST,
  TIMETABLE_LIST_SUCCESS,
} from "../Contants/timeTableConstants";
import Axios from "axios";

export const listTimeTable = (mssv) => async (dispatch) => {
  dispatch({
    type: TIMETABLE_LIST_REQUEST,
    payload: mssv,
  });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/student/getclasses/${mssv}`
    );
    dispatch({ type: TIMETABLE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TIMETABLE_LIST_FAIL, payload: error.message });
  }
};
