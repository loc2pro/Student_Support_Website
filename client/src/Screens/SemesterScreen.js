import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listPlanstudy } from "../actions/planstudyActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function SemesterScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const semesterList = useSelector((state) => state.semesterList);
  const { loading, error, semester } = semesterList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(listPlanstudy(userInfo.marjor.id));
  }, [dispatch]);

  const showCourses = (id) => () => {
    history.push(`/semester/${id}`);
  };

  const handleChange = (e) => {
    if (e.target.value == 0) {
      history.push("/semester");
    } else {
      history.push(`/semester/${e.target.value}`);
    }
    // alert(e.target.value);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <select onChange={handleChange}>
          <option value="0">Chọn Học Kỳ</option>
          {semester.semessters.map((val, key) => (
            <option value={val.id}>{val.tenhocky}</option>
          ))}
        </select>
      )}
    </div>
  );
}
