import axios from "axios";
import api from "../api";
import { CREATE_MAJOR_FAIL } from "../contants/MajorContant";
import {
    CREATE_STUDENT_EXCEL_FAIL,
    CREATE_STUDENT_EXCEL_REQUEST,
    CREATE_STUDENT_EXCEL_SUCCESS,
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAIL,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_SUCCESS,
    GET_LIST_STUDENT_FAIL,
    GET_LIST_STUDENT_REQUEST,
    GET_LIST_STUDENT_SUCCESS,
    GET_STUDENT_MAJOR,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
} from "../contants/studentContant";

export const getListStudent = () => async(dispatch) => {
    dispatch({ type: GET_LIST_STUDENT_REQUEST });
    try {
        const { data } = await axios.get(`${api}/student`);
        if (data.success) {
            dispatch({ type: GET_LIST_STUDENT_SUCCESS, payload: data.students });
        } else {
            dispatch({ type: GET_LIST_STUDENT_FAIL, payload: data.message });
        }
    } catch (err) {
        dispatch({ type: GET_LIST_STUDENT_FAIL, payload: err.message });
    }
};

export const getListStudentsByMajor = (major) => async(dispatch) => {
    dispatch({ type: GET_LIST_STUDENT_REQUEST });
    dispatch({ type: GET_STUDENT_MAJOR, payload: major });
    try {
        const { data } = await axios.get(`${api}/student/${major.id}`);
        if (data.success) {
            dispatch({ type: GET_LIST_STUDENT_SUCCESS, payload: data.students });
            dispatch({ type: GET_STUDENT_MAJOR, payload: major });
        } else {
            dispatch({ type: GET_LIST_STUDENT_FAIL });
        }
        return data;
    } catch (error) {
        dispatch({ type: GET_LIST_STUDENT_FAIL });
    }
};

export const createStudent = (newstudent) => async(dispatch) => {
    dispatch({ type: CREATE_STUDENT_REQUEST });
    try {
        const { data } = await axios.post(`${api}/student/create`, newstudent);
        if (data.success) {
            dispatch({ type: CREATE_STUDENT_SUCCESS, payload: data.result });
        } else {
            dispatch({ type: CREATE_MAJOR_FAIL });
        }
        return data;
    } catch (err) {
        dispatch({ type: CREATE_MAJOR_FAIL });
    }
};

export const updateStudent = (newstudent) => async(dispatch) => {
    dispatch({ type: UPDATE_STUDENT_REQUEST });
    try {
        const { data } = await axios.post(
            `${api}/student/admin/update`,
            newstudent
        );
        if (data.success) {
            dispatch({ type: UPDATE_STUDENT_SUCCESS, payload: data.student });
        } else {
            dispatch({ type: UPDATE_STUDENT_FAIL });
        }
        return data;
    } catch (err) {
        dispatch({ type: UPDATE_STUDENT_FAIL });
        return { success: false, message: err.message };
    }
};

export const deleteStudent = (student) => async(dispatch) => {
    dispatch({ type: DELETE_STUDENT_REQUEST });
    try {
        const { data } = await axios.get(`${api}/student/delete/${student.id}`);
        if (data.success) {
            dispatch({ type: DELETE_STUDENT_SUCCESS, payload: student });
        } else {
            dispatch({ type: DELETE_STUDENT_FAIL });
        }
        return data;
    } catch (err) {
        dispatch({ type: DELETE_STUDENT_FAIL });
        return { success: false, message: err.message };
    }
};

export const createListStudentByExcel = (form) => async(dispatch) => {
    dispatch({ type: CREATE_STUDENT_EXCEL_REQUEST });
    try {
        const { data } = await axios.post(`${api}/student/create/excel`, form);
        if (data.success) {
            console.log("form thêm:", form);
            dispatch({ type: CREATE_STUDENT_EXCEL_SUCCESS });
        } else {
            dispatch({ type: CREATE_STUDENT_EXCEL_FAIL });
        }
        return data;
    } catch (err) {
        dispatch({ type: CREATE_STUDENT_EXCEL_FAIL });
        return { success: false, message: err.message };
    }
};