const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth");

const { Login, Register, CheckUser } = require("../controllers/auth");

router.post("/login", Login);

router.post("/register", Register);

router.get("/", verifyToken, CheckUser);

module.exports = router;