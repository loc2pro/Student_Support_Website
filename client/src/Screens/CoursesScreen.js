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

  const coursesRegister = useSelector((state) => state.coursesRegister);
  const {
    success: registerSuccess,
    registerCoursess,
    loading: loadingAlert,
    error: errorAlert,
  } = coursesRegister;
  const [lichtrung, setLichtrung] = useState([]);
  const [chitiet, setChitiet] = useState(null);
  const [idRegister, setIdRegister] = useState();
  const [CourseId, setCourseId] = useState();
  const [ClassCourseId, setClassCourseId] = useState();
  const [modal, setmodal] = useState({
    show: false,
  });
  const [modal1, setModal1] = useState({
    show: false,
  });
  const [modal2, setModal2] = useState({
    show: false,
  });
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
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

  const handleCloseModal2 = (e, id) => {
    e.preventDefault();
    setIdRegister(id);
    if (modal2.show) {
      setModal2({ show: false });
    } else {
      setModal2({ show: true });
    }
  };

  useEffect(() => {
    if (userInfo) {
      dispatch({ type: TIMETABLE_RESET });
      dispatch(listCourses(SemesterId));
      dispatch(listTimeTable(userInfo.user.mssv));
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
    if (lop) {
      dispatch(registerCourses(CourseId, SemesterId, StudentId, ClassCourseId));
    }
    setShowToast({ show: true, type: "success" });
  };

  //alert message
  if (registerCoursess) {
    console.log(showToast.show);
    {
      registerSuccess ? alert(registerCoursess.message) : alert(errorAlert);
      // {
      //   registerSuccess
      //     ? setShowToast({
      //         show: true,
      //         type: "success",
      //         message: `${registerCoursess.message}`,
      //       })
      //     : setShowToast({
      //         show: false,
      //         type: "danger",
      //         message: `${errorAlert}`,
      //       });
      // }

      dispatch(listTimeTable(userInfo.user.mssv));
      dispatch({ type: REGISTER_COURSES_RESET });
      dispatch({ type: COURSES_DETAILS_RESET });
      dispatch({ type: CLASS_COURSES_RESET });
      dispatch({ type: CLASS_DETAILS_RESET });
    }
  }

  //Delete register courses
  const deleteHandler = () => {
    setModal2({ show: false });
    dispatch(deleteRegisterCourses(idRegister, SemesterId, StudentId));
  };

  useEffect(() => {
    if (action) {
      deleteSuccess ? alert(action.message) : alert(action.message);
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
          <div className="toast">
            <Toast
              show={showToast.show}
              style={{ position: "fixed", top: "20%", right: "10px" }}
              className={`bg-${showToast.type} text-white`}
              onClose={setShowToast.bind(this, {
                show: false,
                type: null,
              })}
              delay={3000}
              autohide
            >
              <Toast.Body>
                <strong>{showToast.message}</strong>
              </Toast.Body>
            </Toast>
          </div>
          <Row>
            <h3
              style={{
                textAlign: "center",
                color: "#99253a",
                fontWeight: "bold",
              }}
            >
              Danh S??ch M??n H???c
            </h3>
            <Table bordered responsive="lg">
              <thead>
                <tr>
                  <th>M?? H???c Ph???n</th>
                  <th>T??n H???c Ph???n</th>
                  <th>S??? T??n Ch???</th>
                  <th>S??? Ti???t</th>
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
                    Th??ng Tin M??n H???c
                  </h3>
                  <Table bordered responsive="lg">
                    <thead>
                      <tr>
                        <th>M?? H???c Ph???n</th>
                        <th>T??n H???c Ph???n</th>
                        <th>S??? T??n Ch???</th>
                        <th>S??? Ti???t</th>
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
                      Danh S??ch L???p H???c
                    </h3>
                    <Table bordered responsive="lg">
                      <thead>
                        <tr>
                          <th>M?? L???p H???c</th>
                          <th>T??n L???p H???c</th>
                          <th>S??? L?????ng</th>
                          <th>Tr???ng Th??i</th>
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
                                    val.trangthai === "M???"
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
                Chi Ti???t L???p H???c
              </h3>
              <Table bordered responsive="lg">
                <thead>
                  <tr>
                    <th>T??n Gi??o Vi??n</th>
                    <th>L???ch H???c</th>
                    <th>C?? S???</th>
                    <th>D??y Nh??</th>
                    <th>Ph??ng</th>
                  </tr>
                </thead>
                <tbody>
                  {classdetail.classdetais &&
                    classdetail.classdetais.map((val, key) => (
                      <tr>
                        <td>{classdetail.teacher.tengiaovien}</td>
                        <td>
                          Th??? {val.lichhoc}(Ti???t: {val.ca})
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
                    Ki???m Tra Tr??ng L???ch
                  </Button>
                </div>
              </Row>
            </div>
          )}
          {classdetail && (
            <Row>
              <div className="mb-2" style={{ textAlign: "center" }}>
                <Button variant="warning" size="lg" onClick={RegisterHandler}>
                  ????ng K??
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
              L???p h???c ph???n ???? ????ng k?? trong h???c k??? n??y
            </h3>
            <Table bordered responsive="lg">
              <thead>
                <tr>
                  <th>M?? H???c Ph???n</th>
                  <th>T??n L???p H???c Ph???n</th>
                  <th>M?? L???p</th>
                  <th>T??n L???p</th>
                  <th>S??? T??n Ch???</th>
                  <th>H???c Ph??</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {timeTable?.listCourses &&
                  timeTable.listCourses.map((val, key) => (
                    <tr onClick={getChitiet(val.ClassCourse.id)}>
                      <td>{val.mahocphan}</td>
                      <td>{val.tenhocphan}</td>
                      <td>{val.ClassCourse.malop}</td>
                      <td>{val.ClassCourse.tenlop}</td>
                      <td>{val.sotinchi}</td>
                      <td>
                        {(val.sotinchi * 790000).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </td>

                      <td>
                        <Button
                          variant="outline-info"
                          onClick={handleCloseModal1}
                        >
                          Xem
                        </Button>
                        <Button
                          variant="outline-info"
                          // onClick={deleteHandler(val.id)}
                          onClick={(e) => handleCloseModal2(e, val.id)}
                        >
                          H???y
                        </Button>
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
                <Modal.Title>Ki???m Tra L???ch Tr??ng</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Table>
                    <thead>
                      <tr>
                        <th>T??n H???c Ph???n</th>
                        <th>T??n L???p</th>
                        <th>Th???</th>
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
                <Modal.Title>Chi Ti???t L???p H???c ???? ????ng K??</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Table>
                    <thead>
                      <tr>
                        <th>T??n L???p</th>
                        <th>Th???</th>
                        <th>Ca</th>
                        <th>Gi??o Vi??n</th>
                        <th>C??? S???</th>
                        <th>Ph??ng</th>
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
          <div
            style={modal2.show ? { display: "block" } : { display: "none" }}
            class="modal"
          >
            <Modal
              show={modal2.show}
              dialogClassName="modal-90w"
              size="xs"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton onClick={handleCloseModal2}>
                <Modal.Title>B???n C?? Mu???n X??a Kh??ng ?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row styjle={{ textAlign: "center", margin: "2rem" }}>
                  <Button
                    variant="danger"
                    style={{ marginBottom: "2rem" }}
                    onClick={deleteHandler}
                  >
                    C??
                  </Button>
                  <Button variant="secondary" onClick={handleCloseModal2}>
                    Kh??ng
                  </Button>
                </Row>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}
