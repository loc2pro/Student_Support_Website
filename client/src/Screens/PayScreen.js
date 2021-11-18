import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  Row,
  Table,
  Toast,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listDetb } from "../actions/detbActions";
import { listPlanstudy } from "../actions/planstudyActions";
import { listTimeTable } from "../actions/timeTableActions copy";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { PAY_RESET } from "../Contants/payConstants";
import { PayPalButton } from "react-paypal-button-v2";
import { payActions } from "../actions/payActions";
import { Redirect, useHistory } from "react-router";

export default function PayScreen() {
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  const [sdkReady, setSdkReady] = useState(false);
  const pay = useSelector((state) => state.pay);
  const { loading: loadingPay, error: errorPay, success, message } = pay;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const detb = useSelector((state) => state.detb);
  const { loading: loadingDetb, error: errorDetb, detblist } = detb;
  const semesterList = useSelector((state) => state.semesterList);
  const { semester, loading, error } = semesterList;
  const dispatch = useDispatch();
  const history = useHistory();

  const mssv = userInfo.user.mssv;
  useEffect(() => {
    dispatch(listTimeTable(userInfo.user.mssv));
  }, [userInfo, mssv]);

  useEffect(() => {
    const addPayPalScript = async () => {
      // const { data } = await Axios.get(`http://localhost:5000/paypal`);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=AXV369iXt4EhruhomVgan0pYTfWoIX8bO6V0HYieC1OvUHYDJsvXYNEeE3WN2dBzej_Jqfr34xAPvt3T`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (success) {
      dispatch({ type: PAY_RESET });
    } else {
      if (!detblist?.listCourses?.trangthai) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, sdkReady]);

  const [SemesterId, setSemesterId] = useState();
  const StudentId = userInfo.user.id;

  let tong = 0;
  detblist?.listCourses?.forEach((item) => {
    if (!item.trangthai) {
      tong = item.sotinchi * 790000 + tong;
    }
  });
  const handleChange = (e) => {
    if (semester) {
      setSemesterId(e.target.value);
      dispatch(listDetb(StudentId, e.target.value));
    }
  };

  const successPaymentHandler = () => {
    dispatch(payActions(SemesterId, StudentId));
  };

  useEffect(() => {
    if (success) {
      success ? alert(pay?.message?.message) : alert(pay?.message?.message);
      dispatch(listDetb(StudentId, SemesterId));
    }
  }, [success]);

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
              <Form.Select
                onChange={handleChange}
                style={{ marginTop: "3rem" }}
              >
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
              <Row style={{ textAlign: "center" }}>
                <Col>
                  {/* {!detblist?.listCourses?.trangthai && ( */}
                  {tong > 0 && (
                    <li>
                      {!sdkReady ? (
                        <LoadingBox></LoadingBox>
                      ) : (
                        <>
                          {errorPay && (
                            <MessageBox variant="danger">{errorPay}</MessageBox>
                          )}
                          {loadingPay && <LoadingBox></LoadingBox>}
                          <PayPalButton
                            style={{ textAlign: "center" }}
                            amount={tong}
                            onSuccess={successPaymentHandler}
                          ></PayPalButton>
                        </>
                      )}
                    </li>
                  )}
                </Col>
              </Row>
              {/* <Toast
                show={success}
                style={{ position: "fixed", top: "20%", right: "10px" }}
                className={`bg-${type} text-white`}
                onClose={setShowToast.bind(this, {
                  show: false,
                  message: "",
                  type: null,
                })}
                delay={3000}
                autohide
              >
                <Toast.Body>
                  <strong>${message}</strong>
                </Toast.Body>
              </Toast> */}
            </Row>
          )}
        </div>
      )}
    </div>
  );
}
