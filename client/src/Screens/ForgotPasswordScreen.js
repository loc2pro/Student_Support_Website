import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPassword, signin } from "../actions/userActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Button from "react-bootstrap/Button";
import login from "../assets/login.svg";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const forgotpassword = useSelector((state) => state.forgotpassword);
  const { forgot, success, error,loading } = forgotpassword;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };
  return (
    <div>
      <Row>
        <Col xs={7}>
          <img src={login} width="90%" />
        </Col>
        <Col xs={5} className="login">
          <h1
            style={{ textAlign: "center", textShadow: "1px 1px 2px black" }}
            className="mt-4"
          >
            Cổng Thông Tin Sinh Viên
          </h1>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          {success && <MessageBox variant="success">{forgot?.message}</MessageBox>}
          <Form className="my-4" onSubmit={submitHandler}>
            <Form.Group className="my-4">
              <Form.Label>Email Của Bạn</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập Email Của Bạn"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                type="submit"
                className="my-3 mx-auto"
              >
                Send Email
              </Button>
            </div>
          </Form>
          <Row style={{ textAlign: "center" }}>
            <Link to="/login">
              <Button variant="danger" size="sm" className="ml-1">
                Login
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
