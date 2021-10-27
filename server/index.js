const express = require("express");
const db = require("./models");
const cors = require("cors");

const authRouter = require("./routers/auth");
const studentRouter = require("./routers/student");
const coursesRouter = require("./routers/courses");
const planStudyRouter = require("./routers/PlanStudys");
const semesterRouter = require("./routers/Semesters");
const classCourseRouter = require("./routers/ClassCourses");

const App = express();

App.use(express.json());
App.use(cors());

App.use("/auth", authRouter);
App.use("/student", studentRouter);
App.use("/course", coursesRouter);
App.use("/planstudy", planStudyRouter);
App.use("/semester", semesterRouter);
App.use("/classcourse", classCourseRouter);

const port = process.env.port || 5000;

db.sequelize.sync().then(() => {
    App.listen(port, () => {
        console.log(`Server runing on port ${port}`);
    });
});