const express = require("express");
const {
    createPlanStudy,
    getPlanStudy,
    deletePlanStudy,
    updatePlanStudy,
} = require("../controllers/PlanStudys");
const router = express.Router();

router.post("/create", createPlanStudy);
router.get("/:id", getPlanStudy);
router.get("/delete/:id", deletePlanStudy);
router.post("/update", updatePlanStudy);

module.exports = router;