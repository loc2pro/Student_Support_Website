import Axios from "axios";
import {
  LIST_RESULT_FAIL,
  LIST_RESULT_REQUEST,
  LIST_RESULT_SUCCESS,
} from "../Contants/resultConstants";

export const listResult = (StudentId, SemesterId) => async (dispatch) => {
  dispatch({
    type: LIST_RESULT_REQUEST,
    payload: { StudentId, SemesterId },
  });
  try {
    const { data } = await Axios.post(
      `http://localhost:5000/learn/getLearnsbySemesters`,
      { StudentId, SemesterId }
    );
    dispatch({ type: LIST_RESULT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIST_RESULT_FAIL, payload: error.message });
  }
};
