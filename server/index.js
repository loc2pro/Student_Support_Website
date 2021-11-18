require("dotenv").config();
const express = require("express");
const db = require("./models");
const cors = require("cors");

const authRouter = require("./routers/auth");
const studentRouter = require("./routers/student");
const coursesRouter = require("./routers/courses");
const planStudyRouter = require("./routers/PlanStudys");
const semesterRouter = require("./routers/Semesters");
const classCourseRouter = require("./routers/ClassCourses");
const MajorRouter = require("./routers/Majors");
const TeacherRouter = require("./routers/Teachers");
const ClassDetailRouter = require("./routers/ClassDetails");
const LearnRouter = require("./routers/Learns");
const RegisterCourseRouter = require("./routers/RegistersCourses");
const ProgressLearn = require("./routers/ProgressLearn");

const App = express();

App.use(express.json());
App.use(cors());

App.use("/auth", authRouter);
App.use("/student", studentRouter);
App.use("/course", coursesRouter);
App.use("/planstudy", planStudyRouter);
App.use("/semester", semesterRouter);
App.use("/classcourse", classCourseRouter);
App.use("/major", MajorRouter);
App.use("/teacher", TeacherRouter);
App.use("/classdetail", ClassDetailRouter);
App.use("/learn", LearnRouter);
App.use("/registercourse", RegisterCourseRouter);
App.use("/progresslearn", ProgressLearn);

App.get("/paypal", (req, res) => {
  res.send(
    process.env.PAYPAL_CLIENT_ID ||
      "AXV369iXt4EhruhomVgan0pYTfWoIX8bO6V0HYieC1OvUHYDJsvXYNEeE3WN2dBzej_Jqfr34xAPvt3T"
  );
});
const port = process.env.port || 5000;

db.sequelize.sync().then(() => {
  App.listen(port, () => {
    console.log(`Server runing on port ${port}`);
  });
});
