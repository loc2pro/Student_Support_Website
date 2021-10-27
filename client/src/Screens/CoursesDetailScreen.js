import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsCourses } from "../actions/coursesActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function CoursesDetailScreen(props) {
  const dispatch = useDispatch();
  const coursesId = props.match.params.id;
  const coursesDetail = useSelector((state) => state.coursesDetail);
  const { loading, error, course } = coursesDetail;

  useEffect(() => {
    dispatch(detailsCourses(coursesId));
  }, [dispatch, coursesId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox varial="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row center">
              <h1>Thông Tin Môn Học</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã Học Phần</th>
                  <th>Tên Học Phần</th>
                  <th>Số Tín Chỉ</th>
                  <th>Số Tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{course.mahocphan}</td>
                  <td>{course.tenhocphan}</td>
                  <td>{course.sotinchi}</td>
                  <td>{course.sotiet}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className="primary"> Đăng Ký </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
