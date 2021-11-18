import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { listProgress } from "../actions/progressActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function ProgressLearnScreen() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const progresslearn = useSelector((state) => state.progresslearn);
  const { listprogress, loading, error, success } = progresslearn;
  useEffect(() => {
    dispatch(listProgress(userInfo.user.id));
  }, [userInfo.user.id]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Row style={{ textAlign: "center" }}>
          <h4 style={{ color: "Red", marginTop: "1rem" }}>Tiến Độ Học Tập</h4>
          <Col></Col>
          <Col className="chart" style={{ margin: "2rem" }}>
            <Doughnut
              style={{ height: "100px", width: "100px" }}
              data={{
                labels: ["Tín Chỉ Sinh Viên", "Tổng Tín Chỉ"],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#32CD32", "#20B2AA"],
                    data: [
                      listprogress.progress.tinchi,
                      listprogress.progress.tinchiyeucau,
                    ],
                  },
                ],
              }}
              height={100}
              width={100}
              option={{
                maintainAspectRatio: false,
              }}
            />
          </Col>
          <Col></Col>
        </Row>
      )}
    </div>
  );
}
