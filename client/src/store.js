import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  classDetailsReducer,
  coursesClassReducer,
  coursesDetailsReducer,
  listCoursesReducer,
  registerCoursesReducer,
} from "./Reducers/coursesReducers";
import { timeTableReducer } from "./Reducers/timeTableReducer";
import { listPlanstudyReducer } from "./Reducers/planstudyReducers";
import { userSigninReducer } from "./Reducers/userReducers";
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  coursesList: listCoursesReducer,
  coursesDetail: coursesDetailsReducer,
  semesterList: listPlanstudyReducer,
  coursesClass: coursesClassReducer,
  classDetail: classDetailsReducer,
  coursesRegister: registerCoursesReducer,
  tableTime: timeTableReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
