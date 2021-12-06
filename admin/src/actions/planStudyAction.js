import axios from "axios";
import api from "../api";
import {
  CREATE_PLANSTUDY_FAIL,
  CREATE_PLANSTUDY_REQUEST,
  CREATE_PLANSTUDY_SUCCESS,
  DELETE_PLANSTUDY_FAIL,
  DELETE_PLANSTUDY_REQUEST,
  DELETE_PLANSTUDY_SUCCESS,
  GET_LIST_PLANSTUDY_FAIL,
  GET_LIST_PLANSTUDY_REQUEST,
  GET_LIST_PLANSTUDY_SUCCESS,
  GET_PLANSTUDY_FAIL,
  GET_PLANSTUDY_REQUEST,
  GET_PLANSTUDY_SUCCESS,
  UPDATE_PLANSTUDY_FAIL,
  UPDATE_PLANSTUDY_REQUEST,
  UPDATE_PLANSTUDY_SUCCESS,
} from "../contants/planStudyContant";
export const getListPlanStudy = (majorId) => async (dispatch) => {
  dispatch({ type: GET_LIST_PLANSTUDY_REQUEST, payload: majorId });
  try {
    const { data } = await axios.get(`${api}/planstudy/getlist`);
    if (data.success) {
      dispatch({ type: GET_LIST_PLANSTUDY_SUCCESS, payload: data.planstudys});
    } else {
      dispatch({ type: GET_LIST_PLANSTUDY_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: GET_LIST_PLANSTUDY_FAIL });
    return { success: false, message: error.message };
  }
};

export const getListPlanStudyByMajor = (majorId) => async (dispatch) => {
  dispatch({ type: GET_PLANSTUDY_REQUEST, payload: majorId });
  try {
    const { data } = await axios.get(
      `${api}/planstudy/getlistplanstudybymajor/${majorId}`
    );
    if (data.success) {
      dispatch({ type: GET_PLANSTUDY_SUCCESS, payload: data.planstudys });
    } else {
      dispatch({ type: GET_PLANSTUDY_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: GET_PLANSTUDY_FAIL });
    return { success: false, message: error.message };
  }
};
export const createPlanStudy = (newPlanStudy) => async (dispatch) => {
  dispatch({ type: CREATE_PLANSTUDY_REQUEST });
  try {
    const { data } = await axios.post(`${api}/planstudy/create`, newPlanStudy);
    console.log(data);
    if (data.success) {
      dispatch({ type: CREATE_PLANSTUDY_SUCCESS, payload: data.result });
    } else {
      dispatch({ type: CREATE_PLANSTUDY_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: CREATE_PLANSTUDY_FAIL });
    return { success: false, message: error.message };
  }
};

export const updatePlanStudy = (newPlanStudy) => async (dispatch) => {
  dispatch({ type: UPDATE_PLANSTUDY_REQUEST });
  try {
    const { data } = await axios.post(`${api}/planstudy/update`, newPlanStudy);
    if (data.success) {
      dispatch({ type: UPDATE_PLANSTUDY_SUCCESS, payload: data.planstudy });
    } else {
      dispatch({ type: UPDATE_PLANSTUDY_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: UPDATE_PLANSTUDY_FAIL });
    return { success: false, message: error.message };
  }
};

export const deletePlanStudy = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PLANSTUDY_REQUEST });
  try {
    const { data } = await axios.get(`${api}/planstudy/delete/${id}`);
    if (data.success) {
      dispatch({ type: DELETE_PLANSTUDY_SUCCESS, payload: data });
    } else {
      dispatch({ type: DELETE_PLANSTUDY_FAIL });
    }
    return data;
  } catch (error) {
    dispatch({ type: DELETE_PLANSTUDY_FAIL });
    return { success: false, message: error.message };
  }
};
