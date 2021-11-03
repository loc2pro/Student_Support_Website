import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  classCoursess,
  classDetails,
  detailsCourses,
} from "../actions/coursesActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function CoursesDetailScreen(props) {
  const dispatch = useDispatch();
  const coursesId = props.match.params.id;
  const coursesDetail = useSelector((state) => state.coursesDetail);
  const { loading, error, course } = coursesDetail;

  const coursesClass = useSelector((state) => state.coursesClass);
  const { lop } = coursesClass;
  const classDetail = useSelector((state) => state.classDetail);
  const { classdetail } = classDetail;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const semesterList = useSelector((state) => state.semesterList);
  const { semester } = semesterList;

  useEffect(() => {
    dispatch(detailsCourses(coursesId));
  }, [dispatch, coursesId]);

  useEffect(() => {
    dispatch(classCoursess(coursesId));
  }, [dispatch, coursesId]);

  // useEffect(() => {
  //   dispatch(classDetails());
  // }, [dispatch]);

  const getClassDetails = (id) => () => {
    dispatch(classDetails(id));
  };
  const RegisterHandler = () => {
    // alert(classdetail.classcourse.id,userInfo.user.id,coursesId,);
    // alert(semester.id);
  };

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
          </div>
          {/* {lop && ( */}
          <div className=" row center">
            <h1>Danh Sách Lớp Học</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã Lớp Học</th>
                  <th>Tên Lớp Học</th>
                  <th>Số Lượng</th>
                  <th>Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                {lop?.classcourses.map((val) => (
                  <tr onClick={getClassDetails(val.id)}>
                    <td>{val.malop}</td>
                    <td>{val.tenlop}</td>
                    <td>
                      {val.soluongDK}/{val.soluong}
                    </td>
                    <td>{val.trangthai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* )} */}

          {classdetail && (
            <div className="row center">
              <h1>Chi Tiết Lớp Học</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tên Giáo Viên</th>
                    <th>Lịch Học</th>
                    <th>Cơ Sở</th>
                    <th>Dãy Nhà</th>
                    <th>Phòng</th>
                  </tr>
                </thead>
                <tbody>
                  {classdetail.classdetais &&
                    classdetail.classdetais.map((val, key) => (
                      <tr>
                        <td>{classdetail.teacher.tengiaovien}</td>
                        <td>{val.lichhoc}</td>
                        <td>{val.coso}</td>
                        <td>{val.daynha}</td>
                        <td>{val.phong}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          <div className=" row center">
            <div>
              <button className="primary" onClick={RegisterHandler}>
                {" "}
                Đăng Ký{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
