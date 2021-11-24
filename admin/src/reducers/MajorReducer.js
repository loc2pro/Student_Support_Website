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
    GET_MAJOR,
    GET_SCIENCE_MAJOR,
    INIT_STATE_MAJOR,
    UPDATE_MAJOR_FAIL,
    UPDATE_MAJOR_REQUEST,
    UPDATE_MAJOR_SUCCESS,
} from "../contants/MajorContant";

export const MajorsReducer = (state = INIT_STATE_MAJOR, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_LIST_MAJOR_REQUEST:
            return {...state, isLoading: true };
        case GET_LIST_MAJOR_SUCCESS:
            return {...state, isLoading: false, majors: payload };
        case GET_LIST_MAJOR_FAIL:
            return {...state, isLoading: false };
        case GET_MAJOR:
            return {
                ...state,
                isLoading: false,
                major: payload,
            };

        case GET_SCIENCE_MAJOR:
            return {
                ...state,
                isLoading: false,
                science: payload,
            };

        case CREATE_MAJOR_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case CREATE_MAJOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                majors: [...state.majors, payload],
            };
        case CREATE_MAJOR_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case UPDATE_MAJOR_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_MAJOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                majors: state.majors.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
        case UPDATE_MAJOR_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case DELETE_MAJOR_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case DELETE_MAJOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                majors: state.majors.filter((item) => item.id !== state.major.id),
            };
        case DELETE_MAJOR_FAIL:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};