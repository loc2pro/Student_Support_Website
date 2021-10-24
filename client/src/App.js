import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import { signout } from './actions/userActions';
import SigninScreen from "./Screens/SigninScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link to="/" className="brand">
                IUH Sinh Viên
              </Link>
            </div>
            <div>
            {userInfo ? (
              <div className="dropdown">  
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <Link to="/signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Signin</Link>
            )}
            </div>
          </header>
          <main>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer className="row center">All right Coppy by LocDev</footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
