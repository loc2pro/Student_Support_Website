const express = require("express");
const {
  createCourse,
  RegisteredCourse,
  getCourses,
  getCoursesId,
} = require("../controllers/Courses");
const router = express.Router();

router.post("/create", createCourse);
router.get("/register/", RegisteredCourse);
router.get("/", getCourses);
router.get("/:coursesId", getCoursesId);

module.exports = router;
