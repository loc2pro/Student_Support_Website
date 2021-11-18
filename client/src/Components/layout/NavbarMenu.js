import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../actions/userActions";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Navbar from "./SideBar/Navbar";

const NavbarMenu = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{
            boxShadow: "1px 1px 1px 5px #AAA",
            zIndex: "1",
            position: "fixed",
            width: "100%",
            top: "0",
          }}
        >
          <a className="navbar-brand" href="/">
            <img
              src={learnItLogo}
              alt="learnItLogo"
              width="70%"
              height="50"
              className="logo"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline mx-auto">
              <input
                className="form-control mr-sm-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Tìm Kiếm
              </button>
            </form>
            {/* logout  */}
            {userInfo ? (
              <form className="form-inline ml-5 mr-5 my-lg-0">
                <div class="dropdown">
                  <button class="dropbtn">
                    <a className="nav-link disabled">
                      <Link to="/profile" style={{ textDecoration: "none" }}>
                        {userInfo?.user?.name}
                      </Link>
                    </a>
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="/profile">Thông Tin Sinh Viên</a>
                    <a href="https://sv.iuh.edu.vn/sinh-vien/tin/bang-tong-hop-dang-ky-giang-day-truc-tuyen-tu-ngay-06-04-202.html">
                      Tin Tức
                    </a>
                  </div>
                </div>
                <Button
                  variant="danger"
                  className="font-weight-bolder text-white"
                  onClick={signoutHandler}
                >
                  <img
                    src={logoutIcon}
                    alt="logoutIcon"
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  Đăng Xuất
                </Button>
              </form>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                Đăng Nhập
              </Link>
            )}
          </div>
        </nav>
      </Col>
    </Row>
  );
};

export default NavbarMenu;
