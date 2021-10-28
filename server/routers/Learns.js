const express = require("express");
const {
    createLearn,
    getLearns,
    getLearnsId,
    updateLearn,
    deleteLearn,
} = require("../controllers/Learns");
const router = express.Router();

router.post("/create", createLearn);
router.get("/", getLearns);
router.get("/get/:LearnsId", getLearnsId);
router.get("/delete/:id", deleteLearn);
router.post("/", updateLearn);

module.exports = router;