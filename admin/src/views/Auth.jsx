import React from "react";
import Login from "../components/auth/Login";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "react-bootstrap/Spinner";

export default function Auth({ authRoute }) {
  //Lấy data từ Authcontext
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  let body;
  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (isAuthenticated) {
    console.log(isAuthenticated);
    return <Redirect to="/dashboard" />;
  } else {
    body = <>{authRoute === "login" && <Login />}</>;
  }
  return (
    <div className="landing overflow-hidden">
      <div className="dark-overlay flex justify-center items-center h-full w-full">
        <div className=" flex items-center h-full">{body}</div>
      </div>
    </div>
  );
}
