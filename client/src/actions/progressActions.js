import Axios from "axios";
import {
  PROGRESS_LEARN_FAIL,
  PROGRESS_LEARN_REQUEST,
  PROGRESS_LEARN_SUCCESS,
} from "../Contants/progressConstants";

export const listProgress = (StudentId) => async (dispatch) => {
  dispatch({
    type: PROGRESS_LEARN_REQUEST,
    payload: { StudentId },
  });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/progresslearn/${StudentId}`
    );
    dispatch({ type: PROGRESS_LEARN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRESS_LEARN_FAIL, payload: error.message });
  }
};
