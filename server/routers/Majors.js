const express = require("express");
const {
  createMajor,
  getMajors,
  getMajorsId,
  updateMajor,
  deleteMajor,
  getMajorsByScience,
} = require("../controllers/Majors");
const verifyTokenAdmin = require("../middlewares/admin");
const router = express.Router();

router.post("/create", createMajor);
router.get("/", getMajors);
router.get("/:id", getMajorsByScience);
router.get("/getMajor/:MajorsId", getMajorsId);
router.get("/delete/:id", deleteMajor);
router.post("/update", updateMajor);

module.exports = router;
