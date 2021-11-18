import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { USER_UPDATE_RESET } from "../Contants/userConstants";

export default function ProfileScreen() {
  const [mssv, setMssv] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_RESET });
      dispatch(detailsUser(userInfo.user.mssv));
    } else {
      setName(user.student.name);
      setMssv(user.student.mssv);
      setEmail(user.student.email);
      // setPassword(user.student.password);
      setDateOfBirth(user.student.dateOfBirth);
      setAddress(user.student.address);
    }
  }, [dispatch, userInfo.user.mssv, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Nhập Sai Mật Khẩu");
    } else {
      dispatch(
        updateUserProfile(mssv, name, password, email, dateOfBirth, address)
      );
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
          {successUpdate && (
            <MessageBox variant="success">
              Thông Tin Cập Nhật Thành Công
            </MessageBox>
          )}
          <Row style={{ backgroundColor: "#f8f8f8" }}>
            <Col xs={4} sm={4} md={4} lg={4}></Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Form className="my-4" onSubmit={submitHandler}>
                <Form.Group className="my-4">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Mã Số Sinh Viên
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mã Số Sinh Viên"
                    name="mssv"
                    readOnly
                    value={mssv}
                    onChange={(e) => setMssv(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Họ Và Tên
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Họ và Tên Sinh Viên"
                    name="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-1">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Mật Khẩu
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="******"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Nhập Lại Mật Khẩu
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="*******"
                    name="confirmpassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Địa chỉ Email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Ngày Sinh
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="dd/mm/yyyy"
                    name="dateofbirth"
                    value={dateOfBirth}
                    required
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Địa Chỉ
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Địa Chỉ"
                    name="address"
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button
                    variant="success"
                    size="lg"
                    type="submit"
                    className="my-3 mx-auto"
                  >
                    Cập Nhập Thông Tin
                  </Button>
                </div>
              </Form>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}></Col>
          </Row>
        </>
      )}
    </div>
  );
}
