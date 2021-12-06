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
  GET_PLANSTUDY, INIT_STATE_PLANSTUDY,
  UPDATE_PLANSTUDY_FAIL,
  UPDATE_PLANSTUDY_REQUEST,
  UPDATE_PLANSTUDY_SUCCESS
} from "../contants/planStudyContant";

export const PlanStudyReducer = (state = INIT_STATE_PLANSTUDY, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_PLANSTUDY_REQUEST:
      return { ...state, isLoading: true };
    case GET_LIST_PLANSTUDY_SUCCESS:
      return { ...state, isLoading: false, planstudys: payload };
    case GET_LIST_PLANSTUDY_FAIL:
      return { ...state, isLoading: false };
    case GET_PLANSTUDY:
      return {
        ...state,
        isLoading: false,
        error: null,
        planstudy: payload,
      };
    case CREATE_PLANSTUDY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CREATE_PLANSTUDY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        planstudys: [...state.planstudys, payload],
        error: null,
      };
    case CREATE_PLANSTUDY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case UPDATE_PLANSTUDY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPDATE_PLANSTUDY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        planstudys: state.planstudys.map((item) =>
          item.id === payload.id ? payload : item
        ),
        error: null,
      };
    case UPDATE_PLANSTUDY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case DELETE_PLANSTUDY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case DELETE_PLANSTUDY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        planstudys: state.planstudys.filter(
          (item) => item.id !== state.planstudy.id
        ),
        planstudy: null,
      };
    case DELETE_PLANSTUDY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
