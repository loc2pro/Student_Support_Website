import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CoursesReducer } from "./reducers/CoursesReducer";
import { MajorsReducer } from "./reducers/MajorReducer";
import { PlanStudyReducer } from "./reducers/PlanStudyReducer";
import { SciencesReducer } from "./reducers/ScienceReducer";
import { SemesterReducer } from "./reducers/SemesterReducer";
import { StudentsReducer } from "./reducers/StudentReducer";
const reducer = combineReducers({
  listStudents: StudentsReducer,
  listSciences: SciencesReducer,
  listMajors: MajorsReducer,
  listPlanStudys: PlanStudyReducer,
  listCourses: CoursesReducer,
  listSemester: SemesterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
