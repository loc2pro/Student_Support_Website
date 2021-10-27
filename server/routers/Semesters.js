const express = require("express");
const {
    createSemester,
    updateSemester,
    getSemester,
} = require("../controllers/Semesters");
const router = express.Router();

router.post("/create", createSemester);
router.post("/update", updateSemester);
router.get("/:id", getSemester);

module.exports = router;