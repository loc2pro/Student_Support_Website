import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import AuthContextProvider from "./contexts/AuthContext";
import PostContextProvider from "./contexts/PostContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
