import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { MajorsReducer } from "./reducers/MajorReducer";
import { SciencesReducer } from "./reducers/ScienceReducer";
import { StudentsReducer } from "./reducers/StudentReducer";
const reducer = combineReducers({
    listStudents: StudentsReducer,
    listSciences: SciencesReducer,
    listMajors: MajorsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;