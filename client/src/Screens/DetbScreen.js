import React, { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listDetb } from "../actions/detbActions";
import { listPlanstudy } from "../actions/planstudyActions";
import { listTimeTable } from "../actions/timeTableActions copy";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function DetbScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const detb = useSelector((state) => state.detb);
  const { loading: loadingDetb, error: errorDetb, detblist } = detb;
  const semesterList = useSelector((state) => state.semesterList);
  const { semester, loading, error } = semesterList;

  const [SemesterId, setSemesterId] = useState();
  const StudentId = userInfo.user.id;

  let tong = 0;
  detblist?.listCourses?.forEach((item) => {
    if (!item.trangthai) {
      tong = item.sotinchi * 790000 + tong;
    }
  });
  const handleChange = (e) => {
    // setSemesterId(e.target.value);
    if (semester) {
      dispatch(listDetb(StudentId, e.target.value));
    }
  };

  useEffect(() => {
    dispatch(listPlanstudy(userInfo.marjor.id));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Row
            style={{
              height: "200px",
              backgroundColor: "#f8f8f8",
              marginTop: "1rem",
            }}
          >
            <Col></Col>
            <Col>
              <Form.Select onChange={handleChange} style={{marginTop:"3rem"}}>
                <option value="0">Chọn Học Kỳ</option>
                {semester.semessters.map((val, key) => (
                  <option value={val.id}>{val.tenhocky}</option>
                ))}
              </Form.Select>
            </Col>
            <Col></Col>
          </Row>
          {semester && (
            <Row>
              <h2
                style={{
                  textAlign: "center",
                  color: "#99253a",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                Công Nợ
              </h2>
              <Table bordered responsive="lg">
                <thead>
                  <tr>
                    <th>Mã Học Phần</th>
                    <th>Nội dung thu</th>
                    <th>Số Tín Chỉ</th>
                    <th>Số Tiền</th>
                    <th>Trạng Thái</th>
                  </tr>
                </thead>
                <tbody>
                  {detblist?.listCourses &&
                    detblist.listCourses.map((val, key) => (
                      <tr>
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
                      </tr>
                    ))}
                </tbody>
              </Table>
              <Row>
                <h3 style={{ textAlign: "center", color: "#99253a" }}>
                  Tổng Học Phí:{" "}
                  {tong.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h3>
              </Row>
            </Row>
          )}
        </div>
      )}
    </div>
  );
}
