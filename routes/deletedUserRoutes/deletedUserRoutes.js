const express = require("express");
const router = express.Router();
const { deleteduser, getTimeHistory, timeHistory } = require("../../controllers/deletedUser/deletedUserController");

router.get("/", deleteduser);
router.get("/getTimeHistory", getTimeHistory);
router.put("/timeHistory", timeHistory);

module.exports = router;
