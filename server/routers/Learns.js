const express = require("express");
const {
  createLearn,
  getLearns,
  getLearnsId,
  updateLearn,
  deleteLearn,
  getLearnsbySemesters,
} = require("../controllers/Learns");
const router = express.Router();

router.post("/create", createLearn);
router.get("/", getLearns);
router.get("/get/:LearnsId", getLearnsId);
router.get("/delete/:id", deleteLearn);
router.post("/", updateLearn);
router.post("/getLearnsbySemesters", getLearnsbySemesters);
router.post("/update", updateLearn);

module.exports = router;
