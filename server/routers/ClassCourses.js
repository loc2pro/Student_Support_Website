const express = require("express");
const {
    getClassDetails,
    createClassCourse,
    updateClassCourse,
    deleteClassCourse,
} = require("../controllers/ClassCourses");
const router = express.Router();

router.get("/:classcourseId", getClassDetails);
router.post("/create", createClassCourse);
router.post("/update", updateClassCourse);
router.get("/delete/:id", deleteClassCourse);

module.exports = router;