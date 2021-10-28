const express = require("express");
const {
    createClassDetail,
    getClassDetails,
    getClassDetailsId,
    updateClassDetail,
    deleteClassDetail,
} = require("../controllers/ClassDetails");
const router = express.Router();

router.post("/create", createClassDetail);
router.get("/", getClassDetails);
router.get("/get/:ClassDetailsId", getClassDetailsId);
router.get("/delete/:id", deleteClassDetail);
router.post("/", updateClassDetail);

module.exports = router;