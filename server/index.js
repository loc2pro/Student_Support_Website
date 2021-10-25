const express = require("express");
const db = require("./models");
const cors = require("cors");

const authRouter = require("./routers/auth");
const studentRouter = require("./routers/student");
//const registeredCoursesRouter = require("./routers/RegisterCourses");
const coursesRouter = require("./routers/courses");

const App = express();

App.use(express.json());
App.use(cors());

App.use("/auth", authRouter);
App.use("/student", studentRouter);
//App.use("/courses", registeredCoursesRouter);
App.use("/course", coursesRouter);

const port = process.env.port || 5000;

db.sequelize.sync().then(() => {
    App.listen(port, () => {
        console.log(`Server runing on port ${port}`);
    });
});