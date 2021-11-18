const express = require("express");
const { getProgressLearn } = require("../controllers/ProgressLearn");
const router = express.Router();

router.get("/:id", getProgressLearn);
module.exports = router;
