import Axios from "axios";
import api from "../api/index";
import {
  DETB_LIST_FAIL,
  DETB_LIST_REQUEST,
  DETB_LIST_SUCCESS,
} from "../Contants/detbConstants";

export const listDetb = (StudentId, SemesterId) => async (dispatch) => {
  dispatch({
    type: DETB_LIST_REQUEST,
    payload: { StudentId, SemesterId },
  });
  try {
    const { data } = await Axios.post(
      `${api}/registercourse/getRegisterCourses`,
      { StudentId, SemesterId }
    );
    dispatch({ type: DETB_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DETB_LIST_FAIL, payload: error.message });
  }
};
