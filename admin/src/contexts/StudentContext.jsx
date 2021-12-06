import { createContext, useReducer, useState } from "react";
import axios from "axios";
import api from "../../api";
import { studentReducer } from "../../reducers/PostReducer";
import {
  CREATE_STUDENT,
  DELETE_STUDENT,
  GET_LIST_STUDENT,
  GET_STUDENT,
  UPDATE_STUDENT,
} from "../contant";

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  //Khỏi tạo reducer
  const [studentState, dispatch] = useReducer(studentReducer, {
    student: null,
    isLoading: true,
    students: [],
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: null,
    message: "",
  });
  const getListStudent = async () => {
    try {
      const res = await axios.get(`${api}/student/`);
      console.log(res);
      if (res.data.success) {
        dispatch({
          type: GET_LIST_STUDENT,
          payload: res.data.students,
        });
      } else {
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const createStudent = async (data) => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    try {
      const res = await axios.post(`${api}/student/create`, data, config);
      if (res.data.success) {
        dispatch({
          type: CREATE_STUDENT,
          payload: res.data.student,
        });
      }
      return res.data;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  const deleteStudent = async (studentId) => {
    try {
      const res = await axios.get(`${api}/student/delete/${studentId}`);
      console.log(res);
      if (res.data.success) {
        dispatch({
          type: DELETE_STUDENT,
          payload: studentId,
        });
      }
      return res.data;
    } catch (error) {
      return error.res.data
        ? error.res.data
        : { success: false, message: error.message };
    }
  };

  const updateStudent = async (newstudent) => {
    try {
      const res = await axios.post(`${api}/student/update`, newstudent);
      if (res.data.success) {
        dispatch({
          type: UPDATE_STUDENT,
          payload: res.data.post,
        });
      }
      return res.data;
    } catch (error) {
      return error.res.data
        ? error.res.data
        : { success: false, message: error.message };
    }
  };

  const findStudent = (studentId) => {
    const student = studentState.students.find(
      (student) => student.id === studentId
    );
    dispatch({ type: GET_STUDENT, payload: student });
  };
  const studentContextData = {
    studentState,
    getListStudent,
    setShowAddModal,
    showAddModal,
    createStudent,
    toast,
    setToast,
    deleteStudent,
    updateStudent,
    showUpdateModal,
    setShowUpdateModal,
    findStudent,
  };
  return (
    <StudentContext.Provider value={studentContextData}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
