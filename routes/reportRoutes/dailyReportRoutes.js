const express = require("express");
const router = express.Router();
const {fundReports,dailyData } = require("../../controllers/report/dailyReportController");

router.get("/fundReports", fundReports);
router.post("/dailyData", dailyData);
 
module.exports = router;
