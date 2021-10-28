const express = require("express");
const {
    createTeacher,
    getTeachers,
    getTeachersId,
    updateTeacher,
    deleteTeacher,
} = require("../controllers/Teachers");
const router = express.Router();

router.post("/create", createTeacher);
router.get("/", getTeachers);
router.get("/get/:TeachersId", getTeachersId);
router.get("/delete/:id", deleteTeacher);
router.post("/", updateTeacher);

module.exports = router;