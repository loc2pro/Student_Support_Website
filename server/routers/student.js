const express = require("express");
const {
  getSciences,
  createStudent,
  updateStudent,
  forgotPassword,
  deleteStudent,
  getClasses,
} = require("../controllers/Students");
const router = express.Router();

router.get("/:mssv", getSciences);
router.post("/create", createStudent);
router.post("/update", updateStudent);
router.get("/newpassword/:mssv", forgotPassword);
router.get("/delete/:mssv", deleteStudent);
router.get("/getclasses/:mssv", getClasses);

module.exports = router;
