const express = require("express");
const router = express.Router();
const { getUserBidData } = require("../../controllers/report/userWiseBidController");

router.get("/getUserBidData", getUserBidData);
 
module.exports = router;
