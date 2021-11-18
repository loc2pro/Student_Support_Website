import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import Menu from "../Components/layout/Menu";
import TienDo from "../Components/layout/TienDo";
import { Bar, Doughnut } from "react-chartjs-2";
import { listDetb } from "../actions/detbActions";
import { listPlanstudy } from "../actions/planstudyActions";

export default function HomeScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const detb = useSelector((state) => state.detb);
  const { loading: loadingDetb, error: errorDetb, detblist } = detb;
  const semesterList = useSelector((state) => state.semesterList);
  const {
    semester,
    loading: semesterLoading,
    error: semesterError,
  } = semesterList;

  const [SemesterId, setSemesterId] = useState();
  const StudentId = userInfo?.user?.id;
  const dispatch = useDispatch();
  //get list semester
  useEffect(() => {
    dispatch(listPlanstudy(userInfo?.marjor?.id));
  }, [dispatch]);
  //get point
  const handleChange = (e) => {
    // setSemesterId(e.target.value);
    if (semester) {
      dispatch(listDetb(StudentId, e.target.value));
    }
  };
  const listNameCourses = [];
  const listPoint = [];
  detblist?.listCourses?.forEach((item) => {
    listNameCourses.push(item.tenhocphan);
    listPoint.push(item.diemmonhoc);
  });
  console.log(listNameCourses);
  console.log(listPoint);

  return (
    <div className="home">
      <Row style={{ width: "100%" }}>
        <div style={{ fontSize: "20px", fontWeight: "Bold", padding: "1rem" }}>
          <a>Thông Tin Sinh Viên</a>
        </div>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={7} lg={7} className="thongtin">
          <Row style={{ width: "100%" }}>
            <Col xs={12} sm={12} md={4} lg={4}>
              {userInfo && (
                <a href="/thongtin">
                  <img class="medium" src={userInfo.user.image} alt="avatar" />
                </a>
              )}
            </Col>
            {userInfo ? (
              <>
                <Col xs={12} sm={12} md={8} lg={8} className="info">
                  <Form>
                    <Row>
                      <Col xs={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          MSSV:
                          <span style={{ margin: "0.2rem" }}>
                            {userInfo.user.mssv}
                          </span>
                        </Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Khoa:
                          <span style={{ margin: "0.2rem" }}>
                            {userInfo?.sciences?.tenkhoa}
                          </span>
                        </Form.Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Họ Tên:
                          <span style={{ margin: "0.2rem" }}>
                            {userInfo.user.name}
                          </span>
                        </Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Ngành:
                          <span style={{ margin: "0.2rem" }}>
                            {userInfo?.marjor?.tennganh}
                          </span>
                        </Form.Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Ngày Sinh:
                          <span style={{ margin: "0.2rem" }}>
                            {userInfo.user.dateOfBirth}
                          </span>
                        </Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Địa Chỉ:
                          <span style={{ margin: "0.2rem" }}>
                            {userInfo.user.address}
                          </span>
                        </Form.Label>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </>
            ) : (
              <h3>Bạn chưa Login !!!</h3>
            )}
          </Row>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          <div class="lichhoc">
            <Row>
              <Col>
                <Form.Select onChange={handleChange}>
                  <option value="0">Chọn Học Kỳ</option>
                  {semester?.semessters?.map((val, key) => (
                    <option value={val.id}>{val.tenhocky}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            <Bar
              data={{
                labels: listNameCourses,
                datasets: [
                  {
                    label: "Điểm (10.00)",
                    backgroundColor: [
                      "#3e95cd",
                      "#8e5ea2",
                      "#3cba9f",
                      "#e8c3b9",
                      "#c45850",
                    ],
                    data: listPoint,
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: {
                  display: true,
                  text: "",
                },
              }}
            />
          </div>
        </Col>
      </Row>
      <Menu></Menu>
      {/* <Row>
        <Col></Col>
        <Col className="chart">
          <h4>Tiến Độ Học Tập</h4>
          <Doughnut
            style={{ height: "100px", width: "100px" }}
            data={{
              labels: ["Tín Chỉ", "Tổng Tín Chỉ"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#e8c3b9", "#c45850"],
                  data: [128, 150],
                },
              ],
            }}
            height={100}
            width={100}
            option={{
              maintainAspectRatio: false,
            }}
          />
        </Col>
        <Col>
        
        </Col>
      </Row> */}
      <Row>
        <div id="map" style={{ height: "200px", width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.856369942459!2d106.68526211411674!3d10.82230176130618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1636604125184!5m2!1svi!2s"
            style={{
              width: "100%",
              frameborder: "0",
            }}
          ></iframe>
        </div>
      </Row>
    </div>
  );
}
