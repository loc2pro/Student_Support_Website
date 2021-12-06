require("dotenv").config();
const express = require("express");
const db = require("./models");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
var bodyParser = require('body-parser')

const authRouter = require("./routers/auth");
const adminRouter = require("./routers/admin");
const scienceRouter = require("./routers/Sciences");
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
App.use(express.urlencoded({extended: true}))

App.use("/auth", authRouter);
App.use("/admin", adminRouter);
App.use("/science", scienceRouter);
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
const port = process.env.PORT || 5000;

const httpServer = http.Server(App);
const io = new Server(httpServer, { cors: { origin: "*" } });
const users = [];

io.on("connection", (socket) => {
  console.log("connection", socket.id);
  socket.on("disconnect", () => {
    const user = users.find((x) => x.socketId === socket.id);
    if (user) {
      user.online = false;
      console.log("Offline", user.name);
      const admin = users.find((x) => x.isAdmin && x.online);
      if (admin) {
        io.to(admin.socketId).emit("updateUser", user);
      }
    }
  });
  socket.on("onLogin", (user) => {
    const updatedUser = {
      ...user,
      online: true,
      socketId: socket.id,
      messages: [],
    };
    const existUser = users.find((x) => x._id === updatedUser._id);
    if (existUser) {
      existUser.socketId = socket.id;
      existUser.online = true;
    } else {
      users.push(updatedUser);
    }
    console.log("Online", user.name);
    const admin = users.find((x) => x.isAdmin && x.online);
    if (admin) {
      io.to(admin.socketId).emit("updateUser", updatedUser);
    }
    if (updatedUser.isAdmin) {
      io.to(updatedUser.socketId).emit("listUsers", users);
    }
  });

  socket.on("onUserSelected", (user) => {
    const admin = users.find((x) => x.isAdmin && x.online);
    if (admin) {
      const existUser = users.find((x) => x._id === user._id);
      io.to(admin.socketId).emit("selectUser", existUser);
    }
  });

  socket.on("onMessage", (message) => {
    if (message.isAdmin) {
      const user = users.find((x) => x._id === message._id && x.online);
      if (user) {
        io.to(user.socketId).emit("message", message);
        user.messages.push(message);
      }
    } else {
      const admin = users.find((x) => x.isAdmin && x.online);
      if (admin) {
        io.to(admin.socketId).emit("message", message);
        const user = users.find((x) => x._id === message._id && x.online);
        user.messages.push(message);
      } else {
        io.to(socket.id).emit("message", {
          name: "Admin",
          body: "Sorry. I am not online right now",
        });
      }
    }
  });
});

db.sequelize.sync().then(() => {
  App.listen(port, () => {
    console.log(`Server runing on port ${port}`);
  });
});
