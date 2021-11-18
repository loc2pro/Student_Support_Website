import React, { useEffect, useRef } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { listDetb } from "../actions/detbActions";
import { listPlanstudy } from "../actions/planstudyActions";
import { listResult } from "../actions/resultActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function LearnResultScreen() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const semesterList = useSelector((state) => state.semesterList);
  const { semester, loading, error } = semesterList;
  const resultList = useSelector((state) => state.resultList);
  const { listresult } = resultList;
  const detb = useSelector((state) => state.detb);
  const { loading: loadingDetb, error: errorDetb, detblist } = detb;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    dispatch(listPlanstudy(userInfo.marjor.id));
  }, [dispatch]);

  const handleChange = (e) => {
    // setSemesterId(e.target.value);
    if (semester) {
      dispatch(listResult(userInfo.user.id, e.target.value));
      dispatch(listDetb(userInfo.user.id, e.target.value));
    }
  };

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
              <Form.Select
                onChange={handleChange}
                style={{ marginTop: "3rem" }}
              >
                <option value="0">Chọn Học Kỳ</option>
                {semester?.semessters?.map((val, key) => (
                  <option value={val.id}>{val.tenhocky}</option>
                ))}
              </Form.Select>
            </Col>
            <Col></Col>
          </Row>
          {listresult?.listCourses && (
            <Row ref={componentRef}>
              <h3
                style={{
                  textAlign: "center",
                  color: "#99253a",
                  fontWeight: "bold",
                  margin: "1rem",
                }}
              >
                Kết Quả Học Tập
              </h3>
              <Table bordered responsive="lg" className="table-custom">
                <thead>
                  <tr role="row" style={{ height: " 50px" }}>
                    <th
                      rowspan="3"
                      style={{ height: " 50px" }}
                      lang="kqht-malhp"
                      colspan="1"
                    >
                      Mã lớp học phần
                    </th>
                    <th rowspan="3" style={{ height: " 50px" }} colspan="1">
                      <div>Tên môn học/học phần</div>
                    </th>
                    <th
                      rowspan="3"
                      style={{ height: " 50px" }}
                      lang="kqht-stc"
                      colspan="1"
                    >
                      <div>Số tín chỉ</div>
                    </th>
                    <th colspan="3" lang="Row_1_3" rowspan="1">
                      Thường xuyên
                    </th>
                    <th rowspan="3" colspan="1" style={{ height: " 50px" }}>
                      Giữa kỳ
                    </th>
                    <th rowspan="3" colspan="1" style={{ height: " 50px" }}>
                      Cuối kỳ
                    </th>
                    <th rowspan="3" colspan="1" style={{ height: " 50px" }}>
                      Tổng Kết
                    </th>
                    <th rowspan="3" colspan="1" style={{ height: " 50px" }}>
                      Xếp Loại
                    </th>
                  </tr>
                  <tr role="row" style={{ height: " 50px" }}>
                    <th colspan="3" rowspan="1">
                      LT Hệ số 1
                    </th>
                  </tr>
                  <tr role="row" style={{ height: "50px" }}>
                    <th rowspan="1" colspan="1" style={{ height: " 50px" }}>
                      1
                    </th>
                    <th rowspan="1" colspan="1" style={{ height: " 50px" }}>
                      2
                    </th>
                    <th rowspan="1" colspan="1" style={{ height: " 50px" }}>
                      3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listresult?.listCourses &&
                    listresult.listCourses.map((val, key) => (
                      <tr>
                        <td>{val.mahocphan}</td>
                        <td>{val.tenhocphan}</td>
                        <td>{val.sotinchi}</td>
                        <td>{val.learn.diemquatrinh1}</td>
                        <td>{val.learn.diemquatrinh2}</td>
                        <td>{val.learn.diemquatrinh3}</td>
                        <td>{val.learn.diemgiuaky}</td>
                        <td>{val.learn.diemcuoiky}</td>
                        <td>{val.diemmonhoc}</td>
                        {val.diemmonhoc > 0 ? (
                          <td>
                            <span
                              style={
                                val.trangthai > 4
                                  ? { color: "green" }
                                  : { color: "red" }
                              }
                            >
                              <td>
                                {val.diemmonhoc > 4 ? "Qua Môn" : "Học Lại"}
                              </td>
                            </span>
                          </td>
                        ) : (
                          <td></td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </Table>
              <Row style={{ textAlign: "center", marginBottom: "1rem" }}>
                <Col></Col>
                <Col>
                  <Button variant="danger" onClick={handlePrint}>
                    In Kết Quả Học Tập
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Row>
          )}
        </div>
      )}
    </div>
  );
}
