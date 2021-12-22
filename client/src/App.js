import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, useHistory } from "react-router";
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
import { signout } from "./actions/userActions";
import CoursesDetailScreen from "./Screens/CoursesDetailScreen";
import CoursesScreen from "./Screens/CoursesScreen";
import HomeScreen from "./Screens/HomeScreen";
import SigninScreen from "./Screens/SigninScreen";
import SemesterScreen from "./Screens/SemesterScreen";
import TimeTableScreen from "./Screens/TimeTableScreen";
import DetbScreen from "./Screens/DetbScreen";
import NavbarMenu from "./Components/layout/NavbarMenu";
import Footer from "./Components/layout/Footer";
import { Col, Container, Row } from "react-bootstrap";
import PayScreen from "./Screens/PayScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import LearnResultScreen from "./Screens/LearnResultScreen";
import Navbar from "./Components/layout/SideBar/Navbar";
import ForgotPasswordScreen from "./Screens/ForgotPasswordScreen";
import Calendarr from "./Screens/Calendar";
import ProgressLearnScreen from "./Screens/ProgressLearnScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const history = useHistory();
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMenu></NavbarMenu>
        <Navbar />
        <Container>
          <Route
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          ></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          {userInfo ? (
            <>
              <Route
                path="/progresslearn"
                component={ProgressLearnScreen}
              ></Route>
              <Route path="/learnresult" component={LearnResultScreen}></Route>
              <Route path="/profile" component={ProfileScreen}></Route>
              <Route path="/pay" component={PayScreen}></Route>
              <Route path="/detb" component={DetbScreen}></Route>
              <Route path="/timetable" component={TimeTableScreen}></Route>
              <Route path="/semester" component={SemesterScreen}></Route>
              <Route path="/semester/:id" component={CoursesScreen}></Route>
              <Route
                path="/courses/:id"
                component={CoursesDetailScreen}
              ></Route>
            </>
          ) : (
            <Redirect to="/login" />
          )}

          <Route path="/login" component={SigninScreen}></Route>
        </Container>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
