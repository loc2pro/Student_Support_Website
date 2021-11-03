import Axios from "axios";
import {
  PLANSTUDY_LIST_FAIL,
  PLANSTUDY_LIST_REQUEST,
  PLANSTUDY_LIST_SUCCESS,
} from "../Contants/planstudyConstants";

export const listPlanstudy = (id) => async (dispatch) => {
  dispatch({ type: PLANSTUDY_LIST_REQUEST, payload: id });
  try {
    const { data } = await Axios.get(`http://localhost:5000/planstudy/${id}`);
    dispatch({ type: PLANSTUDY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PLANSTUDY_LIST_FAIL, payload: error.massage });
  }
};