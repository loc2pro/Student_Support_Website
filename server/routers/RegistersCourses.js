const express = require("express");
const {
  CourseRegistration,
  deleteRegisterCourse,
  getRegisterCourses,
  updateRegister,
  DongHocPhi,
} = require("../controllers/RegistersCourses");
const router = express.Router();

router.post("/dangkyhocphan", CourseRegistration);
router.post("/delete", deleteRegisterCourse);
router.post("/getRegisterCourses", getRegisterCourses);
router.post("/donghocphi", DongHocPhi);

module.exports = router;