const express = require("express");
const router = express.Router();
const { getUserBidData } = require("../../controllers/report/userWiseBidController");

router.post("/getUserBidData", getUserBidData);
 
module.exports = router;
