import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import "./styles.css";

import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Sidebar from "../layout/SideBar";
import Footer from "../layout/Footer";
export default function ProtectedRoute({ component: Component, ...rest }) {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return <div className="spinner-container">Loading</div>;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Sidebar />
            <div className="md:ml-64">
              <Component {...rest} {...props} />
              <Footer />
            </div>
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
