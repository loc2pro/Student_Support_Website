
const express = require("express");
const { RegisteredCourses } = require("../controllers/RegisteredCourses");

const router = express.Router();

router.get("/register/:courses", RegisteredCourses);

module.exports = router;