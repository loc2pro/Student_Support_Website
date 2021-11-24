import Axios from "axios";
import api from "../api/index";
import { PAY_FAIL, PAY_REQUEST, PAY_SUCCESS } from "../Contants/payConstants";

export const payActions = (SemesterId, StudentId) => async (dispatch) => {
  dispatch({ type: PAY_REQUEST, payload: { SemesterId, StudentId } });
  try {
    const { data } = await Axios.post(
      `${api}/registercourse/donghocphi`,
      { SemesterId, StudentId }
    );
    dispatch({ type: PAY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PAY_FAIL, payload: message });
  }
};
