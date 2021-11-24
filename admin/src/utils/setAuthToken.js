import axios from "axios";

//Hàm này đưa token vào headers Authorization để thực hiện các request.
const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;