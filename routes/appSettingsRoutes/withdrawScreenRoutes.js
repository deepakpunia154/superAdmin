const express = require("express");
const router = express.Router();
const { withdraw, updateWithdraw } = require("../../controllers/appSettings/withdrawScreenController");

router.get("/", withdraw);
router.put("/updateWithdraw", updateWithdraw);

module.exports = router;
