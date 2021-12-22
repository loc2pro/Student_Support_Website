import { Button, Col } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import { Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listTimeTable } from "../actions/timeTableActions copy";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { useReactToPrint } from "react-to-print";
export default function TimeTableScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const tableTime = useSelector((state) => state.tableTime);
  const { loading, error, timeTable } = tableTime;

  const mssv = userInfo.user.mssv;
  useEffect(() => {
    dispatch(listTimeTable(userInfo.user.mssv));
  }, [userInfo, mssv]);

  const lichhoc = [];
  const thu2sang = [];
  const thu3sang = [];
  const thu4sang = [];
  const thu5sang = [];
  const thu6sang = [];
  const thu7sang = [];
  const thu2chieu = [];
  const thu3chieu = [];
  const thu4chieu = [];
  const thu5chieu = [];
  const thu6chieu = [];
  const thu7chieu = [];
  const thucnsang = [];
  const thucnchieu = [];

  timeTable?.listCourses?.forEach((item) => {
    item.ClassCourse.ClassDetails.forEach((detail) => {
      switch (detail.lichhoc) {
        case "2": {
          if (detail.ca === "1-3" || detail.ca === "4-6") {
            thu2sang.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          } else {
            thu2chieu.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          }
          break;
        }
        case "3": {
          if (detail.ca === "1-3" || detail.ca === "4-6") {
            thu3sang.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          } else {
            thu3chieu.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          }
          break;
        }
        case "4": {
          if (detail.ca === "1-3" || detail.ca === "4-6") {
            thu4sang.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          } else {
            thu4chieu.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          }
          break;
        }
        case "5": {
          if (detail.ca === "1-3" || detail.ca === "4-6") {
            thu5sang.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          } else {
            thu5chieu.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          }
          break;
        }
        case "6": {
          if (detail.ca === "1-3" || detail.ca === "4-6") {
            thu6sang.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          } else {
            thu6chieu.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          }
          break;
        }
        case "7": {
          if (detail.ca === "1-3" || detail.ca === "4-6") {
            thu7sang.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          } else {
            thu7chieu.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          }
          break;
        }
        case "Chủ Nhật": {
          if (detail.ca === "1-3" || detail.ca === "4-6") {
            thucnsang.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          } else {
            thucnchieu.push({
              tenhocphan: item.tenhocphan,
              mahocphan: item.mahocphan,
              tenlop: item.ClassCourse.tenlop,
              thu: detail.lichhoc,
              ca: detail.ca,
              phong: detail.phong,
              teacher: item.ClassCourse.Teacher.tengiaovien,
            });
          }
          break;
        }
        default: {
        }
      }
    });
  });
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Row ref={componentRef}>
          <h2
            style={{
              textAlign: "center",
              color: "#99253a",
              fontWeight: "bold",
              margin:"2rem"
            }}
          >
            Lịch học, lịch thi theo tuần
          </h2>
          <Table bordered responsive="lg" className="lichhoc">
            <thead>
              <tr>
                <th>Ca</th>
                <th>Thứ 2</th>
                <th>Thứ 3</th>
                <th>Thứ 4</th>
                <th>Thứ 5</th>
                <th>Thứ 6</th>
                <th>Thứ 7</th>
                <th>Chủ Nhật</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sáng</td>
                <td>
                  {thu2sang.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu3sang.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu4sang.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu5sang.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu6sang.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu7sang.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thucnsang.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td>Chiều</td>
                <td>
                  {thu2chieu.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu3chieu.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu4chieu.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu5chieu.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu6chieu.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thu7chieu.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {thucnchieu.map((item) => {
                    return (
                      <div>
                        <h5 style={{ color: "red" }}>{item.tenhocphan}</h5>
                        {item.tenlop}-{item.mahocphan}
                        <br />
                        Tiết: {item.ca}
                        <br />
                        Phòng: {item.phong}
                        <br />
                        Giáo viên: {item.teacher}
                      </div>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </Table>
          <Row style={{ textAlign: "center" }}>
            <Col></Col>
            <Col>
              <Button variant="danger" onClick={handlePrint}>
                In Lịch Học
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Row>
      )}
    </div>
  );
}
