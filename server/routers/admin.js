const express = require("express");
const {
    registerAdmin,
    loginAdmin,
    checkUserAdmin,
} = require("../controllers/admin");
const verifyTokenAdmin = require("../middlewares/admin");
const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/", verifyTokenAdmin, checkUserAdmin);

module.exports = router;