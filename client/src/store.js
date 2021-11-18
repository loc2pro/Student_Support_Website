import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  classDetailsReducer,
  coursesClassReducer,
  coursesDetailsReducer,
  deleteRegisterCoursesReducer,
  listCoursesReducer,
  registerClassDetailsReducer,
  registerCoursesReducer,
} from "./Reducers/coursesReducers";
import { detbReducer } from "./Reducers/detbReducer";
import { listPlanstudyReducer } from "./Reducers/planstudyReducers";
import { timeTableReducer } from "./Reducers/timeTableReducer";
import {
  forgotPasswordReducer,
  userDetailsReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from "./Reducers/userReducers";
import { payReducer } from "./Reducers/payReducer";
import { resultReducer } from "./Reducers/resultReducer";
import { progressLearnReducer } from "./Reducers/progressLearnReducer";
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
  registerClassDetail: registerClassDetailsReducer,
  coursesRegister: registerCoursesReducer,
  tableTime: timeTableReducer,
  detb: detbReducer,
  pay: payReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  deleteRegister: deleteRegisterCoursesReducer,
  resultList: resultReducer,
  forgotpassword: forgotPasswordReducer,
  progresslearn: progressLearnReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
