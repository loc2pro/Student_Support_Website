const express = require("express");
const {
    createCourse,
    RegisteredCourse,
    getCourses,
    getCoursesId,
    getClassCourses,
    updateCourse,
    deleteCourse,
} = require("../controllers/Courses");
const router = express.Router();

router.post("/create", createCourse);
router.get("/register/", RegisteredCourse);
router.get("/", getCourses);
router.get("/get/:coursesId", getCoursesId);
router.get("/:courseId", getClassCourses);
router.get("/delete/:id", deleteCourse);
router.post("/update", updateCourse);

module.exports = router;