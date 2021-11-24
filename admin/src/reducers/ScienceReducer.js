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
    GET_SCIENCE,
    INIT_STATE_SCIENCES,
    UPDATE_SCIENCE_FAIL,
    UPDATE_SCIENCE_REQUEST,
    UPDATE_SCIENCE_SUCCESS,
} from "../contants/scienceContant";

export const SciencesReducer = (state = INIT_STATE_SCIENCES, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_LIST_SCIENCES_REQUEST:
            return {...state, isLoading: true, error: null };
        case GET_LIST_SCIENCES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sciences: payload,
                error: null,
            };
        case GET_LIST_SCIENCES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case GET_SCIENCE:
            return {
                ...state,
                isLoading: false,
                error: null,
                science: payload,
            };
        case CREATE_SCIENCE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case CREATE_SCIENCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sciences: [...state.sciences, payload],
                error: null,
            };
        case CREATE_SCIENCE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case UPDATE_SCIENCE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case UPDATE_SCIENCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sciences: state.sciences.map((item) =>
                    item.id === payload.id ? payload : item
                ),
                error: null,
            };
        case UPDATE_SCIENCE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };

        case DELETE_SCIENCE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case DELETE_SCIENCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                sciences: state.sciences.filter((item) => item.id !== state.science.id),
                science: null,
            };
        case DELETE_SCIENCE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        default:
            return state;
    }
};