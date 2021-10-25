import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listCourses } from "../actions/coursesActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function CoursesScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const coursesList = useSelector((state) => state.coursesList);
  const { loading, error, courses } = coursesList;

  useEffect(() => {
    dispatch(listCourses());
  }, [dispatch]);
  const showCourses = () => {
    history.push("/showCourses");
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
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
                <tr>
                  <td onClick={showCourses}>{val.mahocphan}</td>
                  <td onClick={showCourses}>{val.tenhocphan}</td>
                  <td onClick={showCourses}>{val.sotinchi}</td>
                  <td onClick={showCourses}>{val.sotiet}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
