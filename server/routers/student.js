const express = require("express");
const {
    getSciences,
    createStudent,
    updateStudent,
    forgotPassword,
    deleteStudent,
} = require("../controllers/Students");
const router = express.Router();

router.get("/:mssv", getSciences);
router.post("/create", createStudent);
router.post("/update", updateStudent);
router.get("/newpassword/:mssv", forgotPassword);
router.get("/delete/:mssv", deleteStudent);

module.exports = router;