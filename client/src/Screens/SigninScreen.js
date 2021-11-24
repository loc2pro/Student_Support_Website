import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Button from "react-bootstrap/Button";
import login from "../assets/login.svg";

export default function SigninScreen(props) {
  const [mssv, setMssv] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(mssv, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <Row>
        <Col xs={7}>
          <img src={login} width="90%" />
        </Col>
        <Col xs={5} className="login" style={{marginTop:"2rem"}}>
          <h1
            style={{ textAlign: "center", textShadow: "1px 1px 2px black" }}
            className="mt-4"
          >
            Cổng Thông Tin Sinh Viên
          </h1>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <Form className="my-4" onSubmit={submitHandler}>
            <Form.Group className="my-4">
              <Form.Label>Mã Số Sinh Viên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mã Số Sinh Viên"
                name="mssv"
                required
                onChange={(e) => setMssv(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="my-1">
              <Form.Label>Mật Khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="******"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                type="submit"
                className="my-3 mx-auto"
              >
                Login
              </Button>
            </div>
          </Form>
          <Row style={{ textAlign: "center" }}>
            <Link to="/forgotpassword">
              <Button
                variant="danger"
                size="sm"
                className="ml-1"
              >
                Forgot Password
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
