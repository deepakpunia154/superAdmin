const express = require("express");
const router = express.Router();
const {biddingDay } = require("../../controllers/report/biddingReportController");

router.get("/biddingDay", biddingDay);
 
module.exports = router;
