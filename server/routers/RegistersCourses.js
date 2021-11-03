const express = require("express");
const {
    CourseRegistration,
    deleteRegisterCourse,
} = require("../controllers/RegistersCourses");
const router = express.Router();

router.post("/dangkyhocphan", CourseRegistration);
router.get("/delete/:id", deleteRegisterCourse);

module.exports = router;