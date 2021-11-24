import axios from "axios";
import api from "../api";
import {
    CREATE_SCIENCE_FAIL,
    CREATE_SCIENCE_REQUEST,
    CREATE_SCIENCE_SUCCESS,
    DELETE_SCIENCE_FAIL,
    DELETE_SCIENCE_REQUEST,
    DELETE_SCIENCE_SUCCESS,
    GET_LIST_SCIENCES_FAIL,
    GET_LIST_SCIENCES_REQUEST,
    GET_LIST_SCIENCES_SUCCESS,
    UPDATE_SCIENCE_FAIL,
    UPDATE_SCIENCE_REQUEST,
    UPDATE_SCIENCE_SUCCESS,
} from "../contants/scienceContant";

export const getListSciences = () => async(dispatch) => {
    dispatch({ type: GET_LIST_SCIENCES_REQUEST });
    try {
        const { data } = await axios.get(`${api}/science`);
        if (data.success) {
            dispatch({ type: GET_LIST_SCIENCES_SUCCESS, payload: data.sciences });
        } else {
            dispatch({ type: GET_LIST_SCIENCES_FAIL, payload: data.message });
        }
        return data;
    } catch (error) {
        dispatch({ type: GET_LIST_SCIENCES_FAIL, payload: error.message });
        return { success: false, message: error.message };
    }
};

export const createScience = (newScience) => async(dispatch) => {
    dispatch({ type: CREATE_SCIENCE_REQUEST });
    try {
        const { data } = await axios.post(`${api}/science/create`, newScience);
        if (data.success) {
            dispatch({ type: CREATE_SCIENCE_SUCCESS, payload: data.science });
        } else {
            dispatch({ type: CREATE_SCIENCE_FAIL, payload: data.message });
        }
        return data;
    } catch (error) {
        dispatch({ type: CREATE_SCIENCE_FAIL, payload: error.message });
        return { success: false, message: error.message };
    }
};

export const updateScience = (newScience) => async(dispatch) => {
    dispatch({ type: UPDATE_SCIENCE_REQUEST });
    try {
        const { data } = await axios.post(`${api}/science/update`, newScience);
        if (data.success) {
            dispatch({ type: UPDATE_SCIENCE_SUCCESS, payload: data.science });
        } else {
            dispatch({ type: UPDATE_SCIENCE_FAIL, payload: data.message });
        }
        return data;
    } catch (error) {
        dispatch({ type: UPDATE_SCIENCE_FAIL, payload: error.message });
        return { success: false, message: error.message };
    }
};

export const deleteScience = (scienceId) => async(dispatch) => {
    dispatch({ type: DELETE_SCIENCE_REQUEST });
    try {
        const { data } = await axios.delete(`${api}/science/delete/${scienceId}`);
        if (data.success) {
            console.log("data delte", data);
            dispatch({ type: DELETE_SCIENCE_SUCCESS, payload: data });
        } else {
            dispatch({ type: DELETE_SCIENCE_FAIL, payload: data.message });
        }
        return data;
    } catch (error) {
        dispatch({ type: DELETE_SCIENCE_FAIL, payload: error.message });
        return { success: false, message: error.message };
    }
};