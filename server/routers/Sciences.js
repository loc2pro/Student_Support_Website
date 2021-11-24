const express = require("express");
const {
  createScience,
  getScience,
  getListSciences,
  updateScience,
  deleteScience,
} = require("../controllers/Sciences");
const router = express.Router();
const verifyTokenAdmin = require("../middlewares/admin");

router.post("/create", createScience);
router.get("/:id", getScience);
router.get("/", getListSciences);
router.post("/update", updateScience);
router.delete("/delete/:id", deleteScience);

module.exports = router;
