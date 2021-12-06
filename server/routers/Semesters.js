const express = require("express");
const {
  createSemester,
  updateSemester,
  getSemester,
  deleteSemester,
  getListSemester,
} = require("../controllers/Semesters");
const router = express.Router();

router.post("/create", createSemester);
router.post("/update", updateSemester);
router.get("/get/:id", getSemester);
router.get("/delete/:id", deleteSemester);
router.get("/list", getListSemester);

module.exports = router;
