const express = require("express");
const {
    createMajor,
    getMajors,
    getMajorsId,
    updateMajor,
    deleteMajor,
} = require("../controllers/Majors");
const router = express.Router();

router.post("/create", createMajor);
router.get("/", getMajors);
router.get("/get/:MajorsId", getMajorsId);
router.get("/delete/:id", deleteMajor);
router.post("/", updateMajor);

module.exports = router;