const express = require("express");
const {
  createPlanStudy,
  getPlanStudy,
  deletePlanStudy,
  getPlanStudyByMajor,
  updatePlanStudy,
  getListPlanStudys,
} = require("../controllers/PlanStudys");
const router = express.Router();

router.post("/create", createPlanStudy);
router.get("/get/:id", getPlanStudy);
router.get("/delete/:id", deletePlanStudy);
router.post("/update", updatePlanStudy);
router.get("/getlist", getListPlanStudys);
router.get("/getlistplanstudybymajor/:id", getPlanStudyByMajor);

module.exports = router;
