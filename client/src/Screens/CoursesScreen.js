import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { listCourses } from "../actions/coursesActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function CoursesScreen(props) {
  const val = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const coursesList = useSelector((state) => state.coursesList);
  const { loading, error, courses } = coursesList;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listCourses());
    } else {
      return;
    }
  }, [dispatch, userInfo]);
  const showCourses = (id) => () => {
    history.push(`/courses/${id}`);
    // <Link to={`/course/${courses.id}`}></Link>;
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          <h1>Danh Sách Môn Học</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Mã Học Phần</th>
                <th>Tên Học Phần</th>
                <th>Số Tín Chỉ</th>
                <th>Số Tiết</th>
              </tr>
            </thead>
            {courses.map((val, key) => (
              <tbody>
                <tr onClick={showCourses(val.id)}>
                  <td>{val.mahocphan} </td>
                  <td>{val.tenhocphan}</td>
                  <td>{val.sotinchi}</td>
                  <td>{val.sotiet}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
