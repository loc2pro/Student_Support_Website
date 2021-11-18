import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  classCoursess,
  classDetails,
  classRegisterDetails,
  deleteRegisterCourses,
  detailsCourses,
  listCourses,
  registerCourses,
} from "../actions/coursesActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Toast from "react-bootstrap/Toast";
import {
  CLASS_COURSES_RESET,
  CLASS_DETAILS_RESET,
  COURSES_DETAILS_RESET,
  DELETE_REGISTER_COURSES_RESET,
  REGISTER_CLASS_DETAILS_RESET,
  REGISTER_COURSES_REQUEST,
  REGISTER_COURSES_RESET,
} from "../Contants/coursesConstants";
import { Col, Modal, Row, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { listTimeTable } from "../actions/timeTableActions copy";
import { TIMETABLE_RESET } from "../Contants/timeTableConstants";
import { listDetb } from "../actions/detbActions";
import { DETB_RESET } from "../Contants/detbConstants";

export default function CoursesScreen(props) {
  // const val = props;
  const SemesterId = props.match.params.id;
  const dispatch = useDispatch();
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
  const tableTime = useSelector((state) => state.tableTime);
  const { timeTable } = tableTime;
  const registerClassDetail = useSelector((state) => state.registerClassDetail);
  const { chitietlop } = registerClassDetail;
  const deleteRegister = useSelector((state) => state.deleteRegister);
  const { success: deleteSuccess, action } = deleteRegister;
  const mssv = userInfo.user.mssv;
  const detb = useSelector((state) => state.detb);
  const { loading: loadingDetb, error: errorDetb, detblist } = detb;

  // useEffect(() => {
  //   dispatch(listTimeTable(userInfo.user.mssv));
  // }, [userInfo, mssv]);

  const coursesRegister = useSelector((state) => state.coursesRegister);
  const {
    success,
    registerCoursess,
    loading: loadingAlert,
    error: errorAlert,
  } = coursesRegister;
  const [lichtrung, setLichtrung] = useState([]);
  const [chitiet, setChitiet] = useState(null);
  const [CourseId, setCourseId] = useState();
  const [ClassCourseId, setClassCourseId] = useState();
  const [modal, setmodal] = useState({
    show: false,
  });
  const [modal1, setModal1] = useState({
    show: false,
  });

  const handleCloseModal = (e) => {
    e.preventDefault();
    if (modal.show) {
      setLichtrung([]);
      setmodal({ show: false });
    } else {
      let lichtrung1 = [];
      timeTable?.listCourses?.forEach((item) => {
        item.ClassCourse.ClassDetails.forEach((detail) => {
          classdetail?.classdetais?.forEach((item1) => {
            if (item1.ca === detail.ca && item1.lichhoc === detail.lichhoc) {
              lichtrung1.push({
                tenhocphan: item.tenhocphan,
                tenlop: item.ClassCourse.tenlop,
                lichhoc: item1.lichhoc,
                ca: item1.ca,
              });
            }
          });
        });
      });
      setLichtrung(lichtrung1);
      setmodal({ show: true });
    }
  };
  const handleCloseModal1 = (e) => {
    e.preventDefault();
    if (modal1.show) {
      setModal1({ show: false });
      dispatch({ type: REGISTER_CLASS_DETAILS_RESET });
    } else {
      setModal1({ show: true });
    }
  };

  useEffect(() => {
    if (userInfo) {
      dispatch({ type: DETB_RESET });
      dispatch({ type: TIMETABLE_RESET });
      dispatch(listCourses(SemesterId));
      dispatch(listTimeTable(userInfo.user.mssv));
      dispatch(listDetb(userInfo.user.id, SemesterId));
    }
  }, [userInfo, SemesterId]);
  const showCourses = (coursesId) => () => {
    setClassCourseId("");
    dispatch(detailsCourses(coursesId));
    dispatch(classCoursess(coursesId));
    setCourseId(coursesId);
    dispatch({ type: CLASS_DETAILS_RESET });
  };
  const getClassDetails = (classDetailsId) => () => {
    dispatch(classDetails(classDetailsId));
    setClassCourseId(classDetailsId);
  };
  const getChitiet = (chitietId) => () => {
    dispatch(classRegisterDetails(chitietId));
    setChitiet(chitietId);
  };
  const RegisterHandler = (e) => {
    e.preventDefault();
    if (lop)
      dispatch(registerCourses(CourseId, SemesterId, StudentId, ClassCourseId));
  };
  const messageHandler = () => {
    alert("Không Thể Hủy Môn Đã Thanh Toán");
  };
  //alert message
  if (registerCoursess) {
    {
      success ? alert(registerCoursess.message) : alert(errorAlert);
      dispatch({ type: REGISTER_COURSES_RESET });
      dispatch({ type: COURSES_DETAILS_RESET });
      dispatch({ type: CLASS_COURSES_RESET });
      dispatch({ type: CLASS_DETAILS_RESET });
      dispatch(listDetb(userInfo.user.id, SemesterId));
      dispatch(listTimeTable(userInfo.user.mssv));
    }
  }

  //Delete register courses
  const deleteHandler = (chitietId) => () => {
    dispatch(deleteRegisterCourses(chitietId, SemesterId, StudentId));
  };
  useEffect(() => {
    if (action) {
      deleteSuccess ? alert(action.message) : alert(action.message);
      dispatch(listDetb(userInfo.user.id, SemesterId));
      dispatch(listTimeTable(userInfo.user.mssv));
      dispatch({ type: REGISTER_COURSES_RESET });
      dispatch({ type: COURSES_DETAILS_RESET });
      dispatch({ type: CLASS_COURSES_RESET });
      dispatch({ type: CLASS_DETAILS_RESET });
      dispatch({ type: DELETE_REGISTER_COURSES_RESET });
    }
  }, [action]);

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
          <Row>
            <h3
              style={{
                textAlign: "center",
                color: "#99253a",
                fontWeight: "bold",
              }}
            >
              Danh Sách Môn Học
            </h3>
            <Table bordered responsive="lg">
              <thead>
                <tr>
                  <th>Mã Học Phần</th>
                  <th>Tên Học Phần</th>
                  <th>Số Tín Chỉ</th>
                  <th>Số Tiết</th>
                </tr>
              </thead>
              <tbody>
                {courses.courses.map((val, key) => (
                  <tr onClick={showCourses(val.id)}>
                    <td>{val.mahocphan}</td>
                    <td>{val.tenhocphan}</td>
                    <td>{val.sotinchi}</td>
                    <td>{val.sotiet}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          {course && (
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Row>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#99253a",
                      fontWeight: "bold",
                    }}
                  >
                    Thông Tin Môn Học
                  </h3>
                  <Table bordered responsive="lg">
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
                  </Table>
                </Row>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                {lop && (
                  <div className="row center">
                    <h3
                      style={{
                        textAlign: "center",
                        color: "#99253a",
                        fontWeight: "bold",
                      }}
                    >
                      Danh Sách Lớp Học
                    </h3>
                    <Table bordered responsive="lg">
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
                              <td>
                                <span
                                  style={
                                    val.trangthai === "Mở"
                                      ? { color: "green" }
                                      : { color: "red" }
                                  }
                                >
                                  {val.trangthai}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </Col>
            </Row>
          )}

          {classdetail && (
            <div className="row center">
              <h3
                style={{
                  textAlign: "center",
                  color: "#99253a",
                  fontWeight: "bold",
                }}
              >
                Chi Tiết Lớp Học
              </h3>
              <Table bordered responsive="lg">
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
              </Table>
              <Row>
                <div className="mb-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleCloseModal}
                  >
                    Kiểm Tra Trùng Lịch
                  </Button>
                </div>
              </Row>
            </div>
          )}
          {classdetail && (
            <Row>
              <div className="mb-2" style={{ textAlign: "center" }}>
                <Button variant="warning" size="lg" onClick={RegisterHandler}>
                  Đăng Ký
                </Button>
              </div>
            </Row>
          )}
          <Row>
            <h3
              style={{
                textAlign: "center",
                color: "#99253a",
                fontWeight: "bold",
                marginTop: "2rem",
              }}
            >
              Lớp học phần đã đăng ký trong học kỳ này
            </h3>
            <Table bordered responsive="lg">
              <thead>
                <tr>
                  <th>Mã Học Phần</th>
                  <th>Tên Lớp Học Phần</th>
                  <th>Số Tín Chỉ</th>
                  <th>Học Phí</th>
                  <th>Trạng Thái</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {detblist?.listCourses &&
                  detblist.listCourses.map((val, key) => (
                    <tr onClick={getChitiet(val.id)}>
                      <td>{val.mahocphan}</td>
                      <td>{val.tenhocphan}</td>
                      <td>{val.sotinchi}</td>
                      <td>
                        {(val.sotinchi * 790000).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </td>
                      <td>
                        <span
                          style={
                            val.trangthai
                              ? { color: "green" }
                              : { color: "red" }
                          }
                        >
                          {val.trangthai ? "Đã Nộp" : "Chưa Nộp"}
                        </span>
                      </td>
                      <td>
                        <Button
                          variant="outline-info"
                          onClick={handleCloseModal1}
                        >
                          Xem
                        </Button>

                        {val.trangthai ? (
                          <Button
                            variant="outline-info"
                            onClick={messageHandler}
                          >
                            Hủy
                          </Button>
                        ) : (
                          <Button
                            variant="outline-info"
                            onClick={deleteHandler(val.id)}
                          >
                            Hủy
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
          <div
            style={modal.show ? { display: "block" } : { display: "none" }}
            class="modal"
          >
            <Modal
              show={modal.show}
              dialogClassName="modal-90w"
              size="lg"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton onClick={handleCloseModal}>
                <Modal.Title>Kiểm Tra Lịch Trùng</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Table>
                    <thead>
                      <tr>
                        <th>Tên Học Phần</th>
                        <th>Tên Lớp</th>
                        <th>Thứ</th>
                        <th>Ca</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lichtrung.map((item) => {
                        return (
                          <tr>
                            <td>{item.tenhocphan}</td>
                            <td>{item.tenlop}</td>
                            <td>{item.lichhoc}</td>
                            <td>{item.ca}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div
            style={modal1.show ? { display: "block" } : { display: "none" }}
            class="modal"
          >
            <Modal
              show={modal1.show}
              dialogClassName="modal-90w"
              size="lg"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton onClick={handleCloseModal1}>
                <Modal.Title>Chi Tiết Lớp Học Đã Đăng Ký</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Table>
                    <thead>
                      <tr>
                        <th>Tên Lớp</th>
                        <th>Thứ</th>
                        <th>Ca</th>
                        <th>Giáo Viên</th>
                        <th>Cở Sở</th>
                        <th>Phòng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chitietlop?.classdetais?.map((item) => {
                        return (
                          <tr>
                            <td>{chitietlop.classcourse.tenlop}</td>
                            <td>{item.lichhoc}</td>
                            <td>{item.ca}</td>
                            <td>{chitietlop.teacher.tengiaovien}</td>
                            <td>{item.coso}</td>
                            <td>{item.phong}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal1}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}
