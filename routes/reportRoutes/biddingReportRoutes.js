const express = require("express");
const router = express.Router();
const {biddingDay } = require("../../controllers/report/biddingReportController");

router.post("/biddingDay", biddingDay);
 
module.exports = router;
