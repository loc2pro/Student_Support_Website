import axios from "axios";
import api from "../api";
import {
    CREATE_MAJOR_FAIL,
    CREATE_MAJOR_REQUEST,
    CREATE_MAJOR_SUCCESS,
    DELETE_MAJOR_FAIL,
    DELETE_MAJOR_REQUEST,
    DELETE_MAJOR_SUCCESS,
    GET_LIST_MAJOR_FAIL,
    GET_LIST_MAJOR_REQUEST,
    GET_LIST_MAJOR_SUCCESS,
    GET_SCIENCE_MAJOR,
    UPDATE_MAJOR_FAIL,
    UPDATE_MAJOR_REQUEST,
    UPDATE_MAJOR_SUCCESS,
} from "../contants/MajorContant";
import { UPDATE_SCIENCE_FAIL } from "../contants/scienceContant";

export const getListMajors = () => async(dispatch) => {
    dispatch({ type: GET_LIST_MAJOR_REQUEST });
    try {
        const { data } = await axios.get(`${api}/major`);
        if (data.success) {
            dispatch({ type: GET_LIST_MAJOR_SUCCESS, payload: data.Majors });
        } else {
            dispatch({ type: GET_LIST_MAJOR_FAIL });
        }
        return data;
    } catch (error) {
        dispatch({ type: GET_LIST_MAJOR_FAIL });
        return { success: false, message: error.message };
    }
};

export const getListMajorsByScience = (science) => async(dispatch) => {
    dispatch({ type: GET_LIST_MAJOR_REQUEST });
    dispatch({ type: GET_SCIENCE_MAJOR, payload: science });
    try {
        const { data } = await axios.get(`${api}/major/${science.id}`);
        if (data.success) {
            dispatch({ type: GET_LIST_MAJOR_SUCCESS, payload: data.Majors });
        } else {
            dispatch({ type: GET_LIST_MAJOR_FAIL });
        }
        return data;
    } catch (error) {
        dispatch({ type: GET_LIST_MAJOR_FAIL });
        return { success: false, message: error.message };
    }
};

export const createMajor = (newMajor) => async(dispatch) => {
    dispatch({ type: CREATE_MAJOR_REQUEST });
    try {
        const { data } = await axios.post(`${api}/major/create`, newMajor);
        console.log(data);
        if (data.success) {
            dispatch({ type: CREATE_MAJOR_SUCCESS, payload: data.newMajor });
        } else {
            dispatch({ type: CREATE_MAJOR_FAIL });
        }
        return data;
    } catch (error) {
        dispatch({ type: CREATE_MAJOR_FAIL });
        return { success: false, message: error.message };
    }
};

export const updateMajor = (newMajor) => async(dispatch) => {
    dispatch({ type: UPDATE_MAJOR_REQUEST });
    try {
        const { data } = await axios.post(`${api}/major/update`, newMajor);
        if (data.success) {
            dispatch({ type: UPDATE_MAJOR_SUCCESS, payload: data.Major });
        } else {
            dispatch({ type: UPDATE_MAJOR_FAIL });
        }
        return data;
    } catch (error) {
        dispatch({ type: UPDATE_SCIENCE_FAIL });
        return { success: false, message: error.message };
    }
};

export const deleteMajor = (id) => async(dispatch) => {
    dispatch({ type: DELETE_MAJOR_REQUEST });
    try {
        const { data } = await axios.get(`${api}/major/delete/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_MAJOR_SUCCESS, payload: data.id });
        } else {
            dispatch({ type: DELETE_MAJOR_FAIL });
        }
        return data;
    } catch (error) {
        dispatch({ type: DELETE_MAJOR_FAIL });
        return { success: false, message: error.message };
    }
};