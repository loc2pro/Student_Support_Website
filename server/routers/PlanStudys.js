const express = require("express");
const { createPlanStudy, getPlanStudy } = require("../controllers/PlanStudys");
const router = express.Router();

router.post("/create", createPlanStudy);
router.get("/:id", getPlanStudy);

module.exports = router;