const express = require("express");
const { getSciences } = require("../controllers/Students");
const router = express.Router();

router.get("/:studentId", getSciences);

module.exports = router;