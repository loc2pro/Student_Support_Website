const express = require("express");
const {
    createSemester,
    updateSemester,
    getSemester,
    deleteSemester,
} = require("../controllers/Semesters");
const router = express.Router();

router.post("/create", createSemester);
router.post("/update", updateSemester);
router.get("/:id", getSemester);
router.get("/delete/:id", deleteSemester);

module.exports = router;