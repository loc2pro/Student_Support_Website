//Quản lý toàn bộ trạng thái của app cung cấp các hàm login logout
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { authReducer } from "../reducers/AuthReducer";
import api from "../api";
import { LOCAL_STORAGE_TOKEN_NAME } from "../contant";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  //Authenticate user trước khi chạy login
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      //Nếu đã có token thì set vào headers
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
      //Ktra user có tồn tại hay không
      const res = await axios.get(`${api}/admin`);
      if (res.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            authLoading: false,
            isAuthenticated: true,
            user: res.data.user,
          },
        });
      }
    } catch (error) {
      //nếu res trả về status 400 thì token k hơp lệ cần xóa đi
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: {
          authLoading: false,
          isAuthenticated: false,
        },
      });
    }
  };

  //sau khi chạy xong cái này thi ta đã có authState và ta sẽ lấy nó ra đưa vào
  //Provider để sử dụng
  useEffect(() => loadUser(), []);

  //Login
  const loginUser = async (userForm) => {
    try {
      const res = await axios.post(`${api}/admin/login`, userForm);
      if (res.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.data.accessToken);
      }
      await loadUser();
      return res.data;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  //Logout
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: {
        authLoading: false,
        isAuthenticated: false,
      },
    });
  };

  const authContextData = {
    loginUser,
    logoutUser,
    authState,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
