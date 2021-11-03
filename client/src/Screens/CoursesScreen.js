import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  classCoursess,
  classDetails,
  detailsCourses,
  listCourses,
  registerCourses,
} from "../actions/coursesActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import {
  CLASS_COURSES_RESET,
  CLASS_DETAILS_RESET,
  COURSES_DETAILS_RESET,
  REGISTER_COURSES_REQUEST,
  REGISTER_COURSES_RESET,
} from "../Contants/coursesConstants";

export default function CoursesScreen(props) {
  // const val = props;
  const SemesterId = props.match.params.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const coursesList = useSelector((state) => state.coursesList);
  const { loading, error, courses } = coursesList;
  const coursesDetail = useSelector((state) => state.coursesDetail);
  const { course } = coursesDetail;
  const coursesClass = useSelector((state) => state.coursesClass);
  const { lop } = coursesClass;
  const classDetail = useSelector((state) => state.classDetail);
  const { classdetail } = classDetail;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const semesterList = useSelector((state) => state.semesterList);
  const { semester } = semesterList;

  const coursesRegister = useSelector((state) => state.coursesRegister);
  const { success, registerCoursess, loading: loadingAlert } = coursesRegister;

  const [CourseId, setCourseId] = useState();
  const [ClassCourseId, setClassCourseId] = useState();

  useEffect(() => {
    if (userInfo) {
      dispatch(listCourses(SemesterId));
    }
  }, [dispatch, userInfo, SemesterId]);

  useEffect(() => {});
  const showCourses = (coursesId) => () => {
    dispatch(detailsCourses(coursesId));
    dispatch(classCoursess(coursesId));
    setCourseId(coursesId);
  };
  // const getIDCourses = (id) => () => {};
  const getClassDetails = (classDetailsId) => () => {
    dispatch(classDetails(classDetailsId));
    setClassCourseId(classDetailsId);
  };
  const RegisterHandler = (e) => {
    e.preventDefault();
    dispatch(registerCourses(CourseId, SemesterId, StudentId, ClassCourseId));

    // {
    //   success ? alert("Đăng Ký Thành Công") : alert("Đăng Ký Thất Bại");
    // }
    // {
    //   loadingAlert ? alert("Đăng Ký Thành Công") : alert("Đăng Ký Thất Bại");
    //   dispatch({ type: REGISTER_COURSES_RESET });
    // }
  };
  if (registerCoursess) {
    {
      success ? alert("Đăng Ký Thành Công") : alert("Đăng Ký Thất Bại");
      dispatch({ type: REGISTER_COURSES_RESET });
      dispatch({ type: COURSES_DETAILS_RESET });
      dispatch({ type: CLASS_COURSES_RESET });
      dispatch({ type: CLASS_DETAILS_RESET });
    }
  }

  const StudentId = userInfo.user.id;
  // alert(idCourses);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <h2>id courses{CourseId}</h2>
          <h2> id class{ClassCourseId}</h2>
          <div className="row center">
            <h1>Danh Sách Môn Học</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã Học Phần</th>
                  <th>Tên Học Phần</th>
                  <th>Số Tín Chỉ</th>
                  <th>Số Tiết</th>
                </tr>
              </thead>
              {courses.courses.map((val, key) => (
                <tbody>
                  <tr onClick={showCourses(val.id)}>
                    <td>{val.mahocphan} </td>
                    <td>{val.tenhocphan}</td>
                    <td>{val.sotinchi}</td>
                    <td>{val.sotiet}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="row">
            <div className="col-1">
              <div className="row center ">
                <h1>Thông Tin Môn Học</h1>
                <table className="table thongtin ">
                  <thead>
                    <tr>
                      <th>Mã Học Phần</th>
                      <th>Tên Học Phần</th>
                      <th>Số Tín Chỉ</th>
                      <th>Số Tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {course && (
                      <tr>
                        <td>{course.mahocphan}</td>
                        <td>{course.tenhocphan}</td>
                        <td>{course.sotinchi}</td>
                        <td>{course.sotiet}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-1">
              {lop && (
                <div className="row center">
                  <h1>Danh Sách Lớp Học</h1>
                  <table className="table danhsach">
                    <thead>
                      <tr>
                        <th>Mã Lớp Học</th>
                        <th>Tên Lớp Học</th>
                        <th>Số Lượng</th>
                        <th>Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lop.classcourses &&
                        lop.classcourses.map((val) => (
                          <tr onClick={getClassDetails(val.id)}>
                            <td>{val.malop}</td>
                            <td>{val.tenlop}</td>
                            <td>
                              {val.soluongDK}/{val.soluong}
                            </td>
                            <td>{val.trangthai}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {classdetail && (
            <div className="row center">
              <h1>Chi Tiết Lớp Học</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tên Giáo Viên</th>
                    <th>Lịch Học</th>
                    <th>Cơ Sở</th>
                    <th>Dãy Nhà</th>
                    <th>Phòng</th>
                  </tr>
                </thead>
                <tbody>
                  {classdetail.classdetais &&
                    classdetail.classdetais.map((val, key) => (
                      <tr>
                        <td>{classdetail.teacher.tengiaovien}</td>
                        <td>
                          Thứ {val.lichhoc}(Tiết: {val.ca})
                        </td>
                        <td>{val.coso}</td>
                        <td>{val.daynha}</td>
                        <td>{val.phong}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          <div className=" row center">
            <div>
              <button className="primary" onClick={RegisterHandler}>
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
