const express = require("express");
const {
  getSciences,
  createStudent,
  updateStudent,
  forgotPassword,
  deleteStudent,
  getClasses,
  getStudent,
  sendEmail,
  getStudents,
  getListStudentsByMajor,
  createStudentByExcel,
  updateStudentAdmin,
} = require("../controllers/Students");
const router = express.Router();

router.get("/getsciences/:mssv", getSciences);
// router.post("/create", createStudent);
router.post("/update", updateStudent);
router.get("/newpassword/:mssv", forgotPassword);
// router.get("/delete/:mssv", deleteStudent);
router.get("/getclasses/:mssv", getClasses);
router.get("/profile/:mssv", getStudent);
router.post("/sendmail", sendEmail);
//admin
// router.get("/getsciences/:mssv", getSciences);
router.get("/", getStudents);
router.get("/:id", getListStudentsByMajor);
router.post("/create", createStudent);
router.post("/create/excel", createStudentByExcel);
router.post("/admin/update", updateStudentAdmin);
router.get("/delete/:id", deleteStudent);

module.exports = router;
