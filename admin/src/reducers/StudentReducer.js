import {
    CREATE_STUDENT_EXCEL_FAIL,
    CREATE_STUDENT_EXCEL_REQUEST,
    CREATE_STUDENT_EXCEL_SUCCESS,
    CREATE_STUDENT_FAIL,
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAIL,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_SUCCESS,
    GET_LIST_STUDENT_FAIL,
    GET_LIST_STUDENT_REQUEST,
    GET_LIST_STUDENT_SUCCESS,
    GET_STUDENT,
    GET_STUDENT_MAJOR,
    INIT_STATE_STUDENT,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
} from "../contants/studentContant";

export const StudentsReducer = (state = INIT_STATE_STUDENT, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_LIST_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case GET_LIST_STUDENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                students: payload,
            };
        case GET_LIST_STUDENT_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case GET_STUDENT:
            return {
                ...state,
                isLoading: false,
                student: payload,
            };

        case GET_STUDENT_MAJOR:
            return {
                ...state,
                isLoading: false,
                major: payload,
            };

        case CREATE_STUDENT_EXCEL_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case CREATE_STUDENT_EXCEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case CREATE_STUDENT_EXCEL_FAIL:
            return {
                ...state,
                isLoading: false,
            };

        case CREATE_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case CREATE_STUDENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                students: [...state.students, payload],
            };
        case CREATE_STUDENT_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case UPDATE_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_STUDENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                students: state.students.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
        case UPDATE_STUDENT_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case DELETE_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case DELETE_STUDENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                students: state.students.filter((item) => item.id !== state.student.id),
            };
        case DELETE_STUDENT_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};