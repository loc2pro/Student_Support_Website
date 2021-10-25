const express = require("express");
const {
    createCourse,
    RegisteredCourse,
    getCourses,
} = require("../controllers/Courses");
const router = express.Router();

router.post("/create", createCourse);
router.get("/register/", RegisteredCourse);
router.get("/", getCourses);

module.exports = router;