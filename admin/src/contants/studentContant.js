export const GET_LIST_STUDENT_REQUEST = "GET_LIST_STUDENT_REQUEST";
export const GET_LIST_STUDENT_SUCCESS = "GET_LIST_STUDENT_SUCCESS";
export const GET_LIST_STUDENT_FAIL = "GET_LIST_STUDENT_FAIL";

export const GET_STUDENT = "GET_STUDENT";
export const GET_STUDENT_MAJOR = "GET_STUDENT_MAJOR";

export const CREATE_STUDENT_SUCCESS = "CREATE_STUDENT_SUCCESS";
export const CREATE_STUDENT_REQUEST = "CREATE_STUDENT_REQUEST";
export const CREATE_STUDENT_FAIL = "CREATE_STUDENT_FAIL";

export const CREATE_STUDENT_EXCEL_SUCCESS = "CREATE_STUDENT_EXCEL_SUCCESS";
export const CREATE_STUDENT_EXCEL_REQUEST = "CREATE_STUDENT_EXCEL_REQUEST";
export const CREATE_STUDENT_EXCEL_FAIL = "CREATE_STUDENT_EXCEL_FAIL";

export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
export const DELETE_STUDENT_REQUEST = "DELETE_STUDENT_REQUEST";
export const DELETE_STUDENT_FAIL = "DELETE_STUDENT_FAIL";

export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const UPDATE_STUDENT_REQUEST = "UPDATE_STUDENT_REQUEST";
export const UPDATE_STUDENT_FAIL = "UPDATE_STUDENT_FAIL";

export const INIT_STATE_STUDENT = {
    isLoading: true,
    student: null,
    students: [],
    major: null,
};